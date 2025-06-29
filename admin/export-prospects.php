<?php
$admin_password = "your_secure_password_here"; // SAME AS view-prospects.php

if (!isset($_GET['password']) || $_GET['password'] !== $admin_password) {
    die("Access denied");
}

// Database configuration
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "your_db_name";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->query("SELECT name, email, language, created_at FROM nx8020_waitlist ORDER BY created_at DESC");
    $prospects = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Set headers for CSV download
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="nx8020-prospects-' . date('Y-m-d') . '.csv"');
    
    $output = fopen('php://output', 'w');
    
    // CSV headers
    fputcsv($output, ['Name', 'Email', 'Language', 'Date']);
    
    // CSV data
    foreach ($prospects as $prospect) {
        fputcsv($output, [
            $prospect['name'],
            $prospect['email'],
            $prospect['language'],
            $prospect['created_at']
        ]);
    }
    
    fclose($output);
    
} catch(PDOException $e) {
    die("Database error: " . $e->getMessage());
}
?>