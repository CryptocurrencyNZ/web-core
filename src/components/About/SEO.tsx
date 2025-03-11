import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const AboutPageSeo: React.FC<SeoProps> = ({
  title = 'About us - Cryptocurrency NZ',
  description = 'Learn about our conquest to drive cryptocurrency adoption, awareness and community across New Zealand.',
  canonicalUrl = 'https://cryptocurrency.org.nz/about/',
  ogImage = 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/Cryptocurrency-NZ-Aotearoa.png'
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': 'https://cryptocurrency.org.nz/#person',
        name: 'Harry Satoshi',
        sameAs: ['https://www.facebook.com/CryptocurrencyNZ'],
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://cryptocurrency.org.nz/#logo',
          url: 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/CNZ-Favicon-Boyyyyyyy.png',
          contentUrl: 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/CNZ-Favicon-Boyyyyyyy.png',
          caption: 'Cryptocurrency NZ',
          inLanguage: 'en-US',
          width: '112',
          height: '112'
        },
        image: {
          '@type': 'ImageObject',
          '@id': 'https://cryptocurrency.org.nz/#logo',
          url: 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/CNZ-Favicon-Boyyyyyyy.png',
          contentUrl: 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/CNZ-Favicon-Boyyyyyyy.png',
          caption: 'Cryptocurrency NZ',
          inLanguage: 'en-US',
          width: '112',
          height: '112'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://cryptocurrency.org.nz/#website',
        url: 'https://cryptocurrency.org.nz',
        name: 'Cryptocurrency NZ',
        publisher: {
          '@id': 'https://cryptocurrency.org.nz/#person'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/Cryptocurrency-NZ-Aotearoa.png',
        url: 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/Cryptocurrency-NZ-Aotearoa.png',
        width: '1200',
        height: '630',
        caption: 'Bitcoin Ethereum Cryptocurrency NZ',
        inLanguage: 'en-US'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://cryptocurrency.org.nz/about/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': 'https://cryptocurrency.org.nz/about/',
              name: 'About us'
            }
          }
        ]
      },
      {
        '@type': 'AboutPage',
        '@id': 'https://cryptocurrency.org.nz/about/#webpage',
        url: 'https://cryptocurrency.org.nz/about/',
        name: 'About us - Cryptocurrency NZ',
        datePublished: '2020-07-29T20:06:31+12:00',
        dateModified: '2025-01-20T06:44:02+13:00',
        isPartOf: {
          '@id': 'https://cryptocurrency.org.nz/#website'
        },
        primaryImageOfPage: {
          '@id': 'https://cryptocurrency.org.nz/wp-content/uploads/2023/06/Cryptocurrency-NZ-Aotearoa.png'
        },
        inLanguage: 'en-US',
        breadcrumb: {
          '@id': 'https://cryptocurrency.org.nz/about/#breadcrumb'
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Cryptocurrency NZ" />
      <meta property="og:updated_time" content="2025-01-20T06:44:02+13:00" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bitcoin Ethereum Cryptocurrency NZ" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@Aoraki_RangerNZ" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="3 minutes" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default AboutPageSeo;