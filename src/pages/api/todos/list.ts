import { getCookie } from 'cookies-next';

import { ITodo } from '@/mocks';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ todos: ITodo[] }>
) {
  const todosFromCookie = JSON.parse(
    (getCookie('todos', { req, res }) as string) || '[]'
  );

  if (todosFromCookie.length) {
    return res.status(200).json({ todos: todosFromCookie });
  }

  res.status(200).json({ todos: [] });
}
