-- WorkNest project seed. Safe to run more than once: existing IDs are updated.
BEGIN;

CREATE TABLE IF NOT EXISTS public.projects (
  id text PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  status text NOT NULL CHECK (status IN ('todo', 'in-progress', 'in-review', 'done')),
  priority text NOT NULL CHECK (priority IN ('high', 'medium', 'low')),
  "order" integer NOT NULL DEFAULT 0,
  category text NOT NULL CHECK (category IN ('Design', 'Development', 'Marketing', 'Product')),
  progress integer NOT NULL CHECK (progress BETWEEN 0 AND 100),
  members jsonb NOT NULL DEFAULT '[]'::jsonb,
  member_count integer NOT NULL DEFAULT 0 CHECK (member_count >= 0),
  due_label text NOT NULL
);

INSERT INTO public.projects (
  id, title, description, status, priority, "order", category,
  progress, members, member_count, due_label
) VALUES
  ('1', 'Website redesign', 'Refresh marketing site layout and conversion paths.', 'in-progress', 'high', 0, 'Design', 75,
   '[{"id":"m1","initials":"EM"},{"id":"m2","initials":"SC"}]'::jsonb, 4, 'Due 12 Nov'),
  ('2', 'Mobile app MVP', 'Ship onboarding, projects list, and task updates.', 'todo', 'high', 0, 'Development', 20,
   '[{"id":"m3","initials":"AR"},{"id":"m4","initials":"JL"}]'::jsonb, 5, 'Due 28 Nov'),
  ('3', 'Brand campaign', 'Plan creative assets for the winter launch.', 'in-review', 'medium', 0, 'Marketing', 60,
   '[{"id":"m5","initials":"MP"}]'::jsonb, 3, 'Due 5 Nov'),
  ('4', 'API documentation', 'Document public endpoints and auth examples.', 'done', 'low', 0, 'Product', 100,
   '[{"id":"m3","initials":"AR"},{"id":"m1","initials":"EM"}]'::jsonb, 2, 'Done 20 Oct'),
  ('5', 'Design system kit', 'Expand tokens and component guidelines.', 'in-progress', 'medium', 1, 'Design', 45,
   '[{"id":"m2","initials":"SC"},{"id":"m5","initials":"MP"}]'::jsonb, 3, 'Due 18 Nov'),
  ('6', 'Search improvements', 'Tune ranking for projects and recent work.', 'todo', 'low', 1, 'Development', 5,
   '[{"id":"m4","initials":"JL"}]'::jsonb, 2, 'Due 30 Nov')
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  status = EXCLUDED.status,
  priority = EXCLUDED.priority,
  "order" = EXCLUDED."order",
  category = EXCLUDED.category,
  progress = EXCLUDED.progress,
  members = EXCLUDED.members,
  member_count = EXCLUDED.member_count,
  due_label = EXCLUDED.due_label;

COMMIT;
