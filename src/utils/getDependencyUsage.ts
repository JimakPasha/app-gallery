import { IApp } from '../types';
import { flattenDependencies } from './';

export const getDependencyUsage = (apps: IApp[]): { [key: string]: number } => {
  const dependencyCount: { [key: string]: number } = {};

  apps.forEach(app => {
    const dependencies = flattenDependencies(app.libs);
    dependencies.forEach(dep => {
      if (dependencyCount[dep]) {
        dependencyCount[dep]++;
      } else {
        dependencyCount[dep] = 1;
      }
    });
  });

  return dependencyCount;
};