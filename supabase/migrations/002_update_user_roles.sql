-- ============================================================================
-- Migration 002: Update User Roles
-- ============================================================================
-- This migration updates the user roles from the old values to the new ones:
-- 'manager' -> 'financial'
-- ============================================================================

-- Step 1: Drop the old constraint
ALTER TABLE users DROP CONSTRAINT IF EXISTS users_role_check;

-- Step 2: Update existing 'manager' roles to 'financial'
UPDATE users SET role = 'financial' WHERE role = 'manager';

-- Step 3: Add the new constraint with updated roles
ALTER TABLE users ADD CONSTRAINT users_role_check
  CHECK (role IN ('admin', 'financial', 'technician', 'viewer'));

-- Step 4: Update RLS policies to reflect new roles
DROP POLICY IF EXISTS "Admins can insert company users" ON users;
CREATE POLICY "Admins can insert company users"
  ON users FOR INSERT
  WITH CHECK (
    company_id = (SELECT company_id FROM users WHERE id = auth.uid())
    AND EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Admins can update company users" ON users;
CREATE POLICY "Admins can update company users"
  ON users FOR UPDATE
  USING (
    company_id = (SELECT company_id FROM users WHERE id = auth.uid())
    AND EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Note: Only 'admin' users can insert, update, and delete users now
