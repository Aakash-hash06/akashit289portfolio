# Project rules
- Keep verified portfolio content and asset pointers in the shared portfolio data module so updates have a single source of truth.
- Use a client-side mailto draft for contact until an email service is configured; never display an unverified delivery confirmation.
- Use uploaded certificate page previews in accessible dialogs and open original PDFs separately to preserve mobile compatibility.
- Keep GitHub Pages asset URLs relative to Vite's configured base and deploy the built `dist` directory through GitHub Actions so repository subpaths work.
