'use client'
import { useEffect } from 'react';

const SenjaForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/js/collector.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.SenjaCollector) {
      window.SenjaCollectorConfig = {
        project: 'backseasy',
        form: 'OdQq6O',
        trigger: { type: 'none' }
      };
    }
  }, []);

  return null;
};

export default SenjaForm;
