'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Componente para configurar encabezados de seguridad en el cliente
 * Complementa las políticas de seguridad configuradas en el servidor
 */
const SecurityHeaders = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Configurar Content-Security-Policy (CSP) en el cliente
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://www.google-analytics.com;
      frame-src 'self' https://www.google.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'self';
      block-all-mixed-content;
      upgrade-insecure-requests;
    `;
    document.head.appendChild(meta);

    // Configurar Referrer-Policy
    const referrerPolicy = document.createElement('meta');
    referrerPolicy.name = 'referrer';
    referrerPolicy.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerPolicy);

    // Configurar X-Content-Type-Options
    const contentTypeOptions = document.createElement('meta');
    contentTypeOptions.httpEquiv = 'X-Content-Type-Options';
    contentTypeOptions.content = 'nosniff';
    document.head.appendChild(contentTypeOptions);

    // Configurar X-Frame-Options
    const frameOptions = document.createElement('meta');
    frameOptions.httpEquiv = 'X-Frame-Options';
    frameOptions.content = 'SAMEORIGIN';
    document.head.appendChild(frameOptions);

    // Configurar Permissions-Policy
    const permissionsPolicy = document.createElement('meta');
    permissionsPolicy.httpEquiv = 'Permissions-Policy';
    permissionsPolicy.content = 'camera=(), microphone=(), geolocation=(self), interest-cohort=()';
    document.head.appendChild(permissionsPolicy);

    // Limpiar al desmontar
    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(referrerPolicy);
      document.head.removeChild(contentTypeOptions);
      document.head.removeChild(frameOptions);
      document.head.removeChild(permissionsPolicy);
    };
  }, [pathname]);

  return null;
};

export default SecurityHeaders; 