export const getMostUsedDependency = (dependencyUsage: { [key: string]: number }): string => {
    return Object.keys(dependencyUsage).reduce((a, b) => (dependencyUsage[a] > dependencyUsage[b] ? a : b));
  };
  