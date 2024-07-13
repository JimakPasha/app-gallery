import { ILib } from '../types';

export const flattenDependencies = (libs: ILib[]): string[] => {
  const result: string[] = [];
  const stack = [...libs];

  while (stack.length) {
    const lib = stack.pop();
    if (lib) {
      const libString = `${lib.name}@${lib.version}`;
      if (!result.includes(libString)) {
        result.push(libString);
        if (lib.libs) {
          stack.push(...lib.libs);
        }
      }
    }
  }

  return result.sort();
};
