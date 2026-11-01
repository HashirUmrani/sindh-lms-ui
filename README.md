# University of Sindh — Student LMS UI

A frontend-only student portal redesign built with React, Vite, Tailwind CSS v4 and shadcn/ui-style reusable components.

## Design direction

- Warm ivory application background: `#F7F5F0`
- White cards and sidebar
- Beige active states and highlights: `#EDE4D5`
- Muted warm accent: `#A8875B`
- Charcoal typography and subtle borders
- Low-contrast shadows instead of strong colored panels
- No blue theme

## Included screens

- Student login (Roll No/CNIC and Passport modes)
- Responsive student dashboard
- Student profile
- Examination results with working semester/year/type filters
- Attendance overview
- Virtual classroom preview
- Course selection, programme, eportal and student-service module screens
- Responsive sidebar, notification menu and profile menu

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Demo login

This is intentionally a UI-only preview. Enter any non-empty student ID and password to open the dashboard. No credentials are sent anywhere and no backend is connected.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```text
university-lms-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   └── ui/
│   ├── lib/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── components.json
├── index.html
├── jsconfig.json
├── package.json
└── vite.config.js
```

## Notes before integrating the real LMS

1. Replace the text-based `UniversityMark` with the university's official logo asset. Keep the existing logo dimensions and provide meaningful alt text.
2. Replace all demo student details, grades, attendance values, notifications and timetable entries with API data.
3. Connect the login form to the real authentication endpoint. The current demo accepts any non-empty ID and password.
4. Add authorization checks and server-side validation before exposing private academic records.
5. Keep the public login page and authenticated LMS shell on the same design tokens so the experience remains consistent.

## shadcn/ui

The project includes a `components.json` configuration and reusable components following the shadcn/ui composition and styling approach. Components live in `src/components/ui` and can be further generated or managed with the shadcn CLI.
