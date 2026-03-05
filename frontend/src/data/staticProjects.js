/**
 * Static projects shown on the portfolio alongside Firebase projects.
 * Use for projects you want to version-control (e.g. Alerc8) without adding to Firestore.
 */

const getPublicUrl = (path) => {
  const base = process.env.PUBLIC_URL || '';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

export const staticProjects = [
  {
    id: 'alerc8',
    name: 'Multi-Tenant Operations Platform (Alerc8)',
    description:
      'A platform used to build operational SaaS applications such as booking systems, CRM tools, and transport management. The system supports multiple organizations on shared infrastructure with strict data isolation, role-based access control, and secure API access. I worked across backend APIs, database architecture, and frontend integrations-designing tenant-aware data access, a dynamic API layer that maps to server-side business logic, OAuth 2.0 and JWT-based auth with RBAC, and row-level security for tenant isolation. The backend integrates with React (TypeScript) and Flutter applications for bookings, customer management, and operational workflows.',
    images: [
      getPublicUrl('/projects/alerc8/screenshot-1.png'),
      getPublicUrl('/projects/alerc8/screenshot-2.png'),
    ],
    type: 'Portal',
    role: 'Full-stack developer - backend APIs, database architecture, frontend integrations',
    stack: [
      'ASP.NET',
      'SQL Server',
      'React',
      'TypeScript',
      'Flutter',
      'JWT',
      'OAuth 2.0',
      'RBAC',
      'Row-Level Security',
    ],
    featured: true,
    demoLink: '',
    githubRepo: '',
  },
  {
    id: 'arborsist',
    name: 'Arborsist - Tree Management & Issue Reporting Platform',
    description:
      'Arborsist is a mobile application that enables users and field workers to monitor trees, scan NFC tags to access tree information, and report maintenance issues in real time. The app connects to a backend platform that manages tree data, issue reports, and operational workflows for environmental management teams. I contributed to the Flutter client and API-driven workflows used for tree scanning, issue reporting, and worker operations-including NFC-based identification, real-time issue reporting with photo uploads, worker tools for maintenance tracking, and JWT-based authentication with a REST API and SQL Server backend.',
    images: [
      getPublicUrl('/projects/arborsist/screenshot-1.png'),
      getPublicUrl('/projects/arborsist/screenshot-2.png'),
      getPublicUrl('/projects/arborsist/screenshot-3.png'),
      getPublicUrl('/projects/arborsist/screenshot-4.png'),
    ],
    type: 'Mobile',
    role: 'Mobile and backend integration developer - Flutter client and API-driven workflows',
    stack: [
      'Flutter',
      'Dart',
      'Riverpod',
      'REST APIs',
      'JWT',
      'NFC',
      'SQL Server',
    ],
    featured: true,
    demoLink: 'https://play.google.com/store/apps/details?id=com.arborsist.app',
    appStoreLink: 'https://apps.apple.com/au/app/arborsist/id6758613317',
    githubRepo: '',
  },
  {
    id: 'kooeee',
    name: 'Kooeee - Parking Spot Marketplace',
    description:
      'Kooeee is a mobile marketplace that connects drivers looking for parking with people who have available spaces. Users discover spots on a map, book and pay for them in-app (Stripe), and navigate to the location; sellers see approaching drivers in real time via SignalR-based live tracking. I worked on the Flutter client, real-time tracking workflows, and integrations with backend APIs and payment services-including Google Maps for discovery and navigation, Firebase Cloud Messaging for notifications, and a wallet system for transactions and bookings.',
    images: [
      getPublicUrl('/projects/kooeee/screenshot-1.png'),
      getPublicUrl('/projects/kooeee/screenshot-2.png'),
      getPublicUrl('/projects/kooeee/screenshot-3.png'),
    ],
    type: 'Mobile',
    role: 'Mobile developer - Flutter client, real-time tracking, and backend/payment integrations',
    stack: [
      'Flutter',
      'Dart',
      'Google Maps API',
      'Stripe',
      'SignalR',
      'Firebase Cloud Messaging',
      'REST APIs',
    ],
    featured: true,
    demoLink: 'https://play.google.com/store/apps/details?id=com.kooeee',
    githubRepo: '',
  },
  {
    id: 'mercurysend',
    name: 'MercurySend - Multi-Tenant Business SMS Platform',
    description:
      'MercurySend is a multi-tenant SMS messaging platform that enables businesses to send and manage text messages to US and Canadian mobile numbers. The platform supports web-to-text, email-to-text, API-based messaging, bulk broadcasts, scheduled messaging, contact and group management, reusable templates, and location-based flows. Built around a React portal and REST API designed for multi-company usage, with OAuth 2.0 (PKCE) and JWT-based authentication, strict tenant data isolation by account, and role-based access including super-admin capabilities. I contributed to the frontend portal, API client with centralized auth and token handling, and patterns for secure multi-tenant data access.',
    images: [
      getPublicUrl('/projects/mercurysend/screenshot-1.png'),
      getPublicUrl('/projects/mercurysend/screenshot-2.png'),
    ],
    type: 'Portal',
    role: 'Frontend developer - React portal, API client, and auth integration',
    stack: [
      'React',
      'Vite',
      'OAuth 2.0',
      'JWT',
      'REST APIs',
      'Multi-tenant SaaS',
    ],
    featured: true,
    demoLink: '',
    githubRepo: '',
  },
];
