export const endpoints = {
  list: () => `/list`,
  create: () => `/create`,
  update: ({ id }: { id: string }) => `/update?id=${id}`,
  delete: ({ id }: { id: string }) => `/delete?id=${id}`,
  detail: ({ id }: { id: string }) => `/detail/${id}`
};
