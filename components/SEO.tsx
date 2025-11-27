import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '',
  keywords = 'makeup artist Malaysia, bridal makeup Kuala Lumpur, ROM hairdo, makeup services Klang Valley, professional makeup artist, wedding makeup Malaysia, makeup studio KL',
  image = 'https://picsum.photos/id/338/1200/630'
}) => {
  const siteName = "Makeover Studio";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = 'https://www.makeover-studio.com';
  const currentUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Additional SEO */}
      <meta name="author" content="Makeover Studio" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Geographic targeting */}
      <meta name="geo.region" content="MY" />
      <meta name="geo.placename" content="Kuala Lumpur" />
      <meta name="geo.position" content="3.139003;101.686855" />
      <meta name="ICBM" content="3.139003, 101.686855" />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_MY" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@makeoverstudio" />

      {/* Mobile App Meta */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="theme-color" content="#D4AF37" />
    </Helmet>
  );
};

export default SEO;