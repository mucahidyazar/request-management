interface ICreateAxios {
  baseURL: string;
}
export function createAxios({ baseURL = '/' }: ICreateAxios) {}
