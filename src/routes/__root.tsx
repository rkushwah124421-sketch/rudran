import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Rudrani Wedding Planner | रुद्राणी वेडिंग प्लानर',
      },
      {
        name: 'description',
        content:
          'शाही वेडिंग डेकोर, कैटरिंग, फोटोग्राफी और सम्पूर्ण इवेंट मैनेजमेंट के लिए रुद्राणी वेडिंग प्लानर से संपर्क करें।',
      },
      {
        name: 'theme-color',
        content: '#6d071f',
      },
    ],
    links: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
