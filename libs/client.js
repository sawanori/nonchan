import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'nonchan',
    apiKey: process.env.API_KEY,
});