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
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "your_db_name";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    $session_id = isset($input['session_id']) ? $input['session_id'] : session_id();
    $input_text = isset($input['input']) ? $input['input'] : '';
    $response_type = isset($input['response_type']) ? $input['response_type'] : 'unknown';
    $language = isset($input['language']) ? $input['language'] : 'es';
    
    // Insert demo interaction
    $stmt = $pdo->prepare("INSERT INTO nx8020_demo_interactions (session_id, input_text, response_type, language, created_at) VALUES (?, ?, ?, ?, NOW())");
    $stmt->execute([$session_id, $input_text, $response_type, $language]);
    
    echo json_encode(['success' => true]);
    
} catch(PDOException $e) {
    error_log("Demo interaction error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Failed to log interaction']);
}
?>