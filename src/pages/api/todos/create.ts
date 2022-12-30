import { getCookie, setCookie } from 'cookies-next';
import { nanoid } from 'nanoid';

import { ITodo } from '@/mocks';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<{ todos?: ITodo[] }>) {
  const newTodo: ITodo = {
    id: nanoid(),
    completed: false,
    date: new Date().toISOString(),
    title: req.body?.title
  };

  const todosFromCookie = JSON.parse((getCookie('todos', { req, res }) as string) || '[]');

  if (todosFromCookie) {
    const newTodos = [...todosFromCookie, newTodo];
    setCookie('todos', JSON.stringify(newTodos), { req, res });
    return res.status(200).json({ todos: newTodos });
  }

  res.status(200).json({ todos: [] });
}
