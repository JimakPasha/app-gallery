import { describe, it, expect } from 'vitest';
import { flattenDependencies } from '../utils';
import { ILib } from '../types';

describe('flattenDependencies', () => {
  it('should flatten dependencies correctly', () => {
    const libs: ILib[] = [
      {
        name: 'libA',
        version: '1.0.0',
        libs: [
          {
            name: 'libB',
            version: '1.0.0',
            libs: [],
          },
          {
            name: 'libC',
            version: '1.0.0',
            libs: [
              {
                name: 'libD',
                version: '1.0.0',
                libs: [],
              },
            ],
          },
        ],
      },
    ];

    const expected = [
      'libA@1.0.0',
      'libB@1.0.0',
      'libC@1.0.0',
      'libD@1.0.0',
    ];

    expect(flattenDependencies(libs)).toEqual(expected);
  });

  it('should handle empty dependencies list', () => {
    const libs: ILib[] = [];

    const expected: string[] = [];

    expect(flattenDependencies(libs)).toEqual(expected);
  });

  it('should handle nested dependencies', () => {
    const libs: ILib[] = [
      {
        name: 'libA',
        version: '1.0.0',
        libs: [
          {
            name: 'libB',
            version: '1.0.0',
            libs: [],
          },
          {
            name: 'libC',
            version: '1.0.0',
            libs: [],
          },
        ],
      },
    ];

    const expected = [
      'libA@1.0.0',
      'libB@1.0.0',
      'libC@1.0.0',
    ];

    expect(flattenDependencies(libs)).toEqual(expected);
  });

  it('should handle duplicate dependencies', () => {
    const libs: ILib[] = [
      {
        name: 'libA',
        version: '1.0.0',
        libs: [
          {
            name: 'libB',
            version: '1.0.0',
            libs: [
              {
                name: 'libB',
                version: '1.0.0',
                libs: [],
              },
            ],
          },
          {
            name: 'libB',
            version: '1.0.0',
            libs: [],
          },
        ],
      },
    ];

    const expected = [
      'libA@1.0.0',
      'libB@1.0.0',
    ];

    expect(flattenDependencies(libs)).toEqual(expected);
  });

  it('should handle dependencies with the same name but different versions', () => {
    const libs: ILib[] = [
      {
        name: 'libA',
        version: '1.0.0',
        libs: [
          {
            name: 'libB',
            version: '1.0.0',
            libs: [],
          },
          {
            name: 'libB',
            version: '2.0.0',
            libs: [],
          },
        ],
      },
    ];

    const expected = [
      'libA@1.0.0',
      'libB@1.0.0',
      'libB@2.0.0',
    ];

    expect(flattenDependencies(libs)).toEqual(expected);
  });
});
