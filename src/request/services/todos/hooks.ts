import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions
} from '@tanstack/react-query';

import { ITodo } from '@/type';

import {
  createTodo,
  deleteTodo,
  detailTodo,
  listTodo,
  updateTodo
} from './services';

export const useMutationCreateTodo = (
  options: UseMutationOptions<ITodo, Error, { todo: string }> = {}
) =>
  useMutation(({ todo }: { todo: string }) => createTodo({ todo }), {
    ...options
  });

export const useMutationDeleteTodo = (
  options: UseMutationOptions<void, Error, { id: string }> = {}
) =>
  useMutation(({ id }: { id: string }) => deleteTodo({ id }), { ...options });

export const useMutationUpdateTodo = (
  options: UseMutationOptions<
    ITodo,
    Error,
    { id: string; todo: Partial<ITodo> }
  > = {}
) =>
  useMutation(
    ({ id, todo }: { id: string; todo: Partial<ITodo> }) =>
      updateTodo({ id, todo }),
    {
      ...options
    }
  );

export const useQueryDetailTodo = (
  { id }: { id: string },
  options: UseQueryOptions = {}
) =>
  useQuery({
    queryKey: ['detailTodo', id],
    queryFn: () => detailTodo({ id }),
    ...options
  });

export const useQueryListTodo = (options: UseQueryOptions = {}) => {
  return useQuery({
    queryKey: ['listTodo'],
    queryFn: () => listTodo(),
    ...options
  });
};
