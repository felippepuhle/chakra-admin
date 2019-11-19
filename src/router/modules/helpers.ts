import { Path } from './constants';

export const routeTo = (
  path: Path,
  params: Record<string, string> = {},
): string =>
  Object.entries(params).reduce(
    // @ts-ignore
    (accumulator, [key, value]) => accumulator.replace(`:${key}`, value),
    path,
  );
