-- Run this SQL in your GoDaddy cPanel phpMyAdmin

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS nx8020_waitlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    language VARCHAR(10) DEFAULT 'es',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending',
    notes TEXT,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
);

-- Create the demo interactions table
CREATE TABLE IF NOT EXISTS nx8020_demo_interactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255),
    input_text TEXT,
    response_type VARCHAR(100),
    language VARCHAR(10) DEFAULT 'es',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_session (session_id),
    INDEX idx_created_at (created_at)
);

-- Insert a test record (optional)
INSERT INTO nx8020_waitlist (name, email, language) 
VALUES ('Test User', 'test@example.com', 'es');