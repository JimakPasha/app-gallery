import { IApp } from '../types';
import { flattenDependencies } from './';

export const getAppWithMostDependencies = (apps: IApp[]): string => {
  return apps.reduce((maxApp, currentApp) => {
    const maxDeps = flattenDependencies(maxApp.libs).length;
    const currentDeps = flattenDependencies(currentApp.libs).length;
    return currentDeps > maxDeps ? currentApp : maxApp;
  }).appName;
};
