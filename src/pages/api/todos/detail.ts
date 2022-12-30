import { getCookie } from 'cookies-next';

import { ITodo } from '@/mocks';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<{ todo?: ITodo }>) {
  const { id } = req.query;

  const todosFromCookie = JSON.parse(getCookie('todos', { req, res }) as string);

  if (todosFromCookie) {
    const todo = todosFromCookie.find((todo: ITodo) => todo.id === id);
    return res.status(200).json({ todo });
  }

  res.status(200).json({ todo: undefined });
}
