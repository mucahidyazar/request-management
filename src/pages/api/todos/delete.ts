import { getCookie, setCookie } from 'cookies-next';

import { ITodo } from '@/mocks';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<{ todos?: ITodo[] }>) {
  const { id } = req.query;

  const todosFromCookie = JSON.parse(getCookie('todos', { req, res }) as string);

  if (todosFromCookie) {
    const newTodos = todosFromCookie.filter((todo: ITodo) => todo.id !== id);
    setCookie('todos', JSON.stringify(newTodos), { req, res });
    return res.status(200).json({ todos: newTodos });
  }

  res.status(200).json({ todos: [] });
}
