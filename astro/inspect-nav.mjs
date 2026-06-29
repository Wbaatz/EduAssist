import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'jg4gi6mn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-20',
});

async function checkNav() {
  const nav = await client.fetch(`*[_type == "navigation"][0]`);
  console.log(JSON.stringify(nav, null, 2));
}

checkNav();
