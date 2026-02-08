import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogPreview from '@/components/BlogPreview';

const KennisbankPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>n8n Kennisbank | Tutorials, Best Practices & Updates | n8n-expert.be</title>
        <meta name="description" content="n8n kennisbank met tutorials, best practices, vergelijkingen en de laatste n8n updates. Leer van een expert." />
      </Helmet>
      <div className="pt-24">
        <BlogPreview />
      </div>
    </>
  );
};

export default KennisbankPage;
