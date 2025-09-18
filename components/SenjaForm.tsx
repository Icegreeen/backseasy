'use client'
import { useEffect } from 'react';

const SenjaForm = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/js/collector.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).SenjaCollector) {
      (window as any).SenjaCollectorConfig = {
        project: 'backseasy',
        form: 'OdQq6O',
        trigger: { type: 'none' }
      };
    }
  }, []);

  return null;
};

export default SenjaForm;
