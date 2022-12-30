import { getCookie, setCookie } from 'cookies-next';

import { ITodo } from '@/mocks';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ updatedTodo?: ITodo; todos: ITodo[] }>
) {
  const todoId = req.query.id;
  const updatesForTodo = req.body as ITodo;

  const todosFromCookie = JSON.parse(getCookie('todos', { req, res }) as string) as ITodo[];

  if (todosFromCookie) {
    let updatedTodo = todosFromCookie.find(todo => todo.id === todoId);
    updatedTodo = {
      ...updatedTodo,
      ...updatesForTodo
    };

    const newTodos = todosFromCookie.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          ...updatesForTodo
        };
      }
      return todo;
    });
    setCookie('todos', JSON.stringify(newTodos), { req, res });
    return res.status(200).json({ updatedTodo, todos: newTodos });
  }

  res.status(200).json({ updatedTodo: undefined, todos: [] });
}
