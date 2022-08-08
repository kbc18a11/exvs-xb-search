import { env } from 'process';

export const getConfiguration = () => new Configuration({ basePath: env.API_URL });
