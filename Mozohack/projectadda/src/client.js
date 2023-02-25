import client from '@sanity/client';

export default client({
  projectId: 'r2co0rmu',
  dataset: 'production',
  apiVersion: '2023-02-24',
  useCdn: true,
});