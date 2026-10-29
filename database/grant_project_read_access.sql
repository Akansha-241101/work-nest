-- Run as the database owner in Neon SQL Editor.
-- Replace the placeholder with a strong password, then use this role's
-- connection string as VITE_NEON_DATABASE_URL. This role is read-only.
CREATE ROLE worknest_reader LOGIN PASSWORD 'REPLACE_WITH_A_STRONG_PASSWORD';
GRANT USAGE ON SCHEMA public TO worknest_reader;
GRANT SELECT ON TABLE public.projects TO worknest_reader;
