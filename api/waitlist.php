<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Database configuration - UPDATE THESE WITH YOUR GODADDY DETAILS
$servername = "localhost"; // Usually localhost on GoDaddy
$username = "your_db_username"; // From GoDaddy cPanel
$password = "your_db_password"; // From GoDaddy cPanel  
$dbname = "your_db_name"; // From GoDaddy cPanel

try {
    // Create connection
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate input
    if (!isset($input['name']) || !isset($input['email'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Name and email are required']);
        exit();
    }
    
    $name = trim($input['name']);
    $email = trim($input['email']);
    $language = isset($input['language']) ? $input['language'] : 'es';
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email address']);
        exit();
    }
    
    // Check if email already exists
    $stmt = $pdo->prepare("SELECT id FROM nx8020_waitlist WHERE email = ?");
    $stmt->execute([$email]);
    
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode(['error' => 'Email already exists']);
        exit();
    }
    
    // Insert new prospect
    $stmt = $pdo->prepare("INSERT INTO nx8020_waitlist (name, email, language, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->execute([$name, $email, $language]);
    
    // Log successful signup
    error_log("NX8020 Waitlist Signup: $name ($email) - Language: $language");
    
    echo json_encode(['success' => true, 'message' => 'Successfully added to waitlist']);
    
} catch(PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Database error occurred']);
}
?>