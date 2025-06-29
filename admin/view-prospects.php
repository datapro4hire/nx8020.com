<?php
// Simple admin panel to view prospects
// Password protect this file!

$admin_password = "your_secure_password_here"; // CHANGE THIS!

if (!isset($_POST['password']) || $_POST['password'] !== $admin_password) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $error = "Invalid password";
    }
?>
<!DOCTYPE html>
<html>
<head>
    <title>NX8020™ Admin - Prospects</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 400px; margin: 100px auto; }
        input, button { padding: 10px; margin: 5px 0; width: 100%; }
        .error { color: red; }
    </style>
</head>
<body>
    <h2>NX8020™ Admin Access</h2>
    <?php if (isset($error)) echo "<p class='error'>$error</p>"; ?>
    <form method="POST">
        <input type="password" name="password" placeholder="Admin Password" required>
        <button type="submit">Access Dashboard</button>
    </form>
</body>
</html>
<?php
    exit();
}

// Database configuration
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "your_db_name";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get prospects
    $stmt = $pdo->query("SELECT * FROM nx8020_waitlist ORDER BY created_at DESC");
    $prospects = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get demo interactions count
    $stmt = $pdo->query("SELECT COUNT(*) as total FROM nx8020_demo_interactions");
    $demo_count = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
    
?>
<!DOCTYPE html>
<html>
<head>
    <title>NX8020™ Admin Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .stats { background: #e8f8f5; padding: 15px; margin-bottom: 20px; border-radius: 5px; }
        .export-btn { background: #00C49A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>NX8020™ Prospects Dashboard</h1>
    
    <div class="stats">
        <h3>Statistics</h3>
        <p><strong>Total Prospects:</strong> <?php echo count($prospects); ?></p>
        <p><strong>Demo Interactions:</strong> <?php echo $demo_count; ?></p>
        <p><strong>Conversion Rate:</strong> <?php echo $demo_count > 0 ? round((count($prospects) / $demo_count) * 100, 1) : 0; ?>%</p>
    </div>
    
    <a href="export-prospects.php?password=<?php echo urlencode($admin_password); ?>" class="export-btn">Export to CSV</a>
    
    <h3>Recent Prospects</h3>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Language</th>
            <th>Date</th>
        </tr>
        <?php foreach ($prospects as $prospect): ?>
        <tr>
            <td><?php echo htmlspecialchars($prospect['name']); ?></td>
            <td><?php echo htmlspecialchars($prospect['email']); ?></td>
            <td><?php echo htmlspecialchars($prospect['language']); ?></td>
            <td><?php echo date('M j, Y g:i A', strtotime($prospect['created_at'])); ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
<?php
} catch(PDOException $e) {
    echo "Database error: " . $e->getMessage();
}
?>