import React from 'react';

export default function Root({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: "Wyatt's Notes",
            url: 'https://wyattsnotes.wyattau.com',
            description:
              'Free, rigorous study notes for IB, A-Level, GCSE, AP, Scottish Highers, Irish LC, and computer science.',
            author: {
              '@type': 'Person',
              name: 'Wyatt Au',
            },
          }),
        }}
      />
    </>
  );
}
