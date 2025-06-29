-- NX8020™ Database Setup for MySQL
-- Run this in phpMyAdmin or MySQL command line

-- Create waitlist table
CREATE TABLE IF NOT EXISTS nx8020_waitlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    language VARCHAR(10) DEFAULT 'es',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create demo interactions table
CREATE TABLE IF NOT EXISTS nx8020_demo_interactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(100),
    input_text TEXT,
    response_type VARCHAR(50),
    language VARCHAR(10) DEFAULT 'es',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_session (session_id),
    INDEX idx_response_type (response_type),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data for testing (optional)
-- INSERT INTO nx8020_waitlist (name, email, language) VALUES 
-- ('Test User', 'test@example.com', 'es');