'use client';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ClientOnlyQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [client] = useState(() => new QueryClient());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ClientOnlyQueryClientProvider;
