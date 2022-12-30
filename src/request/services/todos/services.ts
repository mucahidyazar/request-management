import { ITodo } from '@/type';

import { api } from './api';
import { endpoints } from './endpoints';

export const createTodo = async ({ todo }: { todo: string }) => {
  try {
    const { data } = await api.post<ITodo>(endpoints.create(), { title: todo });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async ({ id }: { id: string }) => {
  try {
    const { data } = await api.get(endpoints.delete({ id }));
    return data;
  } catch (error) {
    throw error;
  }
};

export const detailTodo = async ({ id }: { id: string }) => {
  try {
    const { data } = await api.get(endpoints.detail({ id }));
    return data;
  } catch (error) {
    throw error;
  }
};

export const listTodo = async () => {
  try {
    const { data } = await api.get(endpoints.list());
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async ({
  id,
  todo
}: {
  id: string;
  todo: Partial<ITodo>;
}) => {
  try {
    const { data } = await api.post<ITodo>(endpoints.update({ id }), todo);
    return data;
  } catch (error) {
    throw error;
  }
};
