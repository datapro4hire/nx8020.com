/*
  # NX8020™ Database Setup

  1. New Tables
    - `nx8020_waitlist`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, unique, not null)
      - `language` (text, default 'es')
      - `created_at` (timestamptz, default now())
    - `nx8020_demo_interactions`
      - `id` (uuid, primary key)
      - `session_id` (text)
      - `input_text` (text)
      - `response_type` (text)
      - `language` (text, default 'es')
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage their own data
    - Add policies for service role to access all data

  3. Indexes
    - Email index for waitlist lookups
    - Session and response type indexes for analytics
    - Created_at indexes for time-based queries
*/

-- Create waitlist table
CREATE TABLE IF NOT EXISTS nx8020_waitlist (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    language text DEFAULT 'es',
    created_at timestamptz DEFAULT now()
);

-- Create demo interactions table
CREATE TABLE IF NOT EXISTS nx8020_demo_interactions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id text,
    input_text text,
    response_type text,
    language text DEFAULT 'es',
    created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_nx8020_waitlist_email ON nx8020_waitlist(email);
CREATE INDEX IF NOT EXISTS idx_nx8020_waitlist_created_at ON nx8020_waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_nx8020_demo_session ON nx8020_demo_interactions(session_id);
CREATE INDEX IF NOT EXISTS idx_nx8020_demo_response_type ON nx8020_demo_interactions(response_type);
CREATE INDEX IF NOT EXISTS idx_nx8020_demo_created_at ON nx8020_demo_interactions(created_at);

-- Enable Row Level Security
ALTER TABLE nx8020_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE nx8020_demo_interactions ENABLE ROW LEVEL SECURITY;

-- Create policies for waitlist table
CREATE POLICY "Anyone can insert into waitlist"
  ON nx8020_waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all waitlist entries"
  ON nx8020_waitlist
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Authenticated users can read waitlist"
  ON nx8020_waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for demo interactions table
CREATE POLICY "Anyone can insert demo interactions"
  ON nx8020_demo_interactions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all demo interactions"
  ON nx8020_demo_interactions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Authenticated users can read demo interactions"
  ON nx8020_demo_interactions
  FOR SELECT
  TO authenticated
  USING (true);