import { describe, it, expect } from 'vitest';
import { getMostUsedDependency } from '../utils';

describe('getMostUsedDependency', () => {
  it('should return the most used dependency', () => {
    const dependencyUsage = {
      'libA@1.0.0': 2,
      'libB@1.0.0': 3,
      'libC@1.0.0': 1,
    };

    const expected = 'libB@1.0.0';

    expect(getMostUsedDependency(dependencyUsage)).toEqual(expected);
  });

  it('should handle single dependency', () => {
    const dependencyUsage = {
      'libA@1.0.0': 1,
    };

    const expected = 'libA@1.0.0';

    expect(getMostUsedDependency(dependencyUsage)).toEqual(expected);
  });

  it('should return any dependency if all have the same usage', () => {
    const dependencyUsage = {
      'libA@1.0.0': 2,
      'libB@1.0.0': 2,
      'libC@1.0.0': 2,
    };

    const result = getMostUsedDependency(dependencyUsage);

    expect(['libA@1.0.0', 'libB@1.0.0', 'libC@1.0.0']).toContain(result);
  });
});
