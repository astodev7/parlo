BEGIN;
CREATE TABLE IF NOT EXISTS parlo_users (
 id uuid PRIMARY KEY,
 email text NOT NULL UNIQUE CHECK (email = lower(email)),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 80),
 password_hash text NOT NULL,
 preferred_language text NOT NULL DEFAULT 'it' CHECK (preferred_language IN ('it','en')),
 created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE parlo_users ADD COLUMN IF NOT EXISTS preferred_language text NOT NULL DEFAULT 'it' CHECK (preferred_language IN ('it','en'));
CREATE TABLE IF NOT EXISTS parlo_rate_limits (key_hash char(64) PRIMARY KEY, attempts integer NOT NULL, expires_at timestamptz NOT NULL);
CREATE TABLE IF NOT EXISTS parlo_sessions (
 token_hash char(64) PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES parlo_users(id) ON DELETE CASCADE,
 expires_at timestamptz NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS parlo_sessions_user_idx ON parlo_sessions(user_id);
CREATE INDEX IF NOT EXISTS parlo_sessions_expiry_idx ON parlo_sessions(expires_at);
CREATE TABLE IF NOT EXISTS parlo_progress (
 user_id uuid NOT NULL REFERENCES parlo_users(id) ON DELETE CASCADE,
 language text NOT NULL CHECK (language IN ('it','en')),
 state jsonb NOT NULL CHECK (jsonb_typeof(state)='object'),
 revision integer NOT NULL DEFAULT 1 CHECK (revision > 0),
 updated_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(user_id,language)
);
-- Defense for hosted Postgres/Supabase: browser roles receive no table access.
-- The server connects through DATABASE_URL as the table owner/server role.
ALTER TABLE parlo_rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE parlo_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE parlo_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE parlo_progress ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON parlo_rate_limits, parlo_users, parlo_sessions, parlo_progress FROM PUBLIC;
COMMIT;
