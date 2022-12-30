import { createAxios } from '../../axios';

export const api = createAxios({ baseURL: '/api/todos' });
