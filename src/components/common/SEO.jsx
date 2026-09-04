import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'ESATUK - Environmental Students\' Association of TUK',
  description = 'Environmental Students\' Association of the Technical University of Kenya. Championing sustainability, climate action, innovation, and environmental stewardship.',
  keywords = 'ESATUK, environmental club, TUK, sustainability, climate action, Kenya',
  image = 'https://esatuk.org/og-image.jpg',
  url = 'https://esatuk.org',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ESATUK" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2E7D32" />
      <meta name="msapplication-TileColor" content="#2E7D32" />
    </Helmet>
  );
};

export default SEO;