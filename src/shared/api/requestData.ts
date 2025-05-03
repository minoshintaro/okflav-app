import type { ZodSchema } from 'zod';

type RequestDataParams<T, U> = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: T;
  schema: ZodSchema<U>;
};

export async function requestData<T, U = unknown>({
  url,
  method,
  data,
  schema,
}: RequestDataParams<T, U>): Promise<U> {
  const response = await fetch(url, {
    method,
    headers: data ? { 'Content-Type': 'application/json' } : undefined,
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`${method} ${url} failed: ${response.statusText}`);
  }

  if (method === 'DELETE') {
    return {} as U; // DELETEでは基本的にレスポンスボディ期待しない
  }

  const json = await response.json();
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    throw new Error(`Failed to parse ${url}`);
  }

  return parsed.data;
}
