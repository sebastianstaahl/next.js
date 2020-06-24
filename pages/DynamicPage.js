import React from 'react';
import { useRouter } from 'next/router';

const DynamicPage = () => {
    const router = useRouter();

    const { title } = router.query;
    
    return (
      <div className="DynamicPage_container">
        <h1>{title}</h1>
        <p>This is dynamic page using query strings.</p>
        
      </div>
    );
  };

export default DynamicPage;