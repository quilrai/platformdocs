import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '677'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e13'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'ef9'),
            routes: [
              {
                path: '/category/platform-areas',
                component: ComponentCreator('/category/platform-areas', '79e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/ai-gateway',
                component: ComponentCreator('/platform-areas/ai-gateway', '504'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/ai-inventory',
                component: ComponentCreator('/platform-areas/ai-inventory', 'b94'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/audit-log-and-exports',
                component: ComponentCreator('/platform-areas/audit-log-and-exports', '9aa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/browser-extension',
                component: ComponentCreator('/platform-areas/browser-extension', '17b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/controls',
                component: ComponentCreator('/platform-areas/controls', '278'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/detection-models',
                component: ComponentCreator('/platform-areas/detection-models', '7a6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/endpoint-agent',
                component: ComponentCreator('/platform-areas/endpoint-agent', 'f3b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/findings',
                component: ComponentCreator('/platform-areas/findings', '499'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/insights',
                component: ComponentCreator('/platform-areas/insights', '667'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/integrations',
                component: ComponentCreator('/platform-areas/integrations', 'e04'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/llm-gateway',
                component: ComponentCreator('/platform-areas/llm-gateway', '47a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/mcp-gateway',
                component: ComponentCreator('/platform-areas/mcp-gateway', 'b07'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/settings-admin',
                component: ComponentCreator('/platform-areas/settings-admin', '24c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-areas/users-accounts-applications',
                component: ComponentCreator('/platform-areas/users-accounts-applications', 'fae'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/release-notes',
                component: ComponentCreator('/release-notes', '4bd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'a7e'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
