# Security Requirements

## Current state

The project is documented as a frontend-first V1. No authentication provider, backend, database, or deployment environment has been selected. Until those decisions are implemented, use only non-sensitive sample data and clearly label mock behavior.

## Requirements

- Authentication must use a vetted provider and secure, provider-managed sessions; do not invent browser-stored session schemes.
- Enforce team and project authorization on the server for every read and write. Never rely on hidden UI controls as access control.
- Define team tenancy and role permissions before connecting real user data. Keep membership checks scoped to the requested team/project.
- Validate and normalize untrusted inputs at service boundaries; safely render user-provided text and validate uploaded assets if uploads are added.
- Keep secrets out of source control and browser bundles. Vite `VITE_` variables are public and must contain no secrets.
- Use HTTPS in production. Restrict CORS, cookies, and content security policy to the chosen deployment and identity provider.
- Collect only necessary profile, project, task, and meeting data. Document retention, export, and deletion behavior when persistence is selected.
- Protect meeting drawings as team/project data and apply the same authorization as the associated meeting.
- Avoid logging credentials, session tokens, private meeting content, or unnecessary personal data.

## Before production

- Select and document authentication and database providers, access-control model, backup/retention policy, and secret storage.
- Review tldraw licensing, document storage, and collaboration/security model for the intended deployment.
- Add dependency update and vulnerability review practices and define incident/reporting contacts.
