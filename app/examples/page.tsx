import { ExamplesClient } from '@/components/examples/examples-client';
import { ServerFetchDemo } from '@/components/examples/data-fetching/server-fetch-demo';
import { SuspenseDemo } from '@/components/examples/data-fetching/suspense-demo';

export const metadata = {
  title: 'Examples | Next.js Starter',
  description: 'Explore various Next.js and React patterns and components.',
};

export default function ExamplesPage() {
  return (
    <ExamplesClient
      serverFetchDemo={<ServerFetchDemo />}
      suspenseDemo={<SuspenseDemo />}
    />
  );
}
