import { describe, it, expect } from 'vitest';
import { getDependencyUsage } from '../utils';
import { IApp, ILib } from '../types';

describe('getDependencyUsage', () => {
  it('should count dependency usage correctly', () => {
    const apps: IApp[] = [
      {
        appName: 'App1',
        version: '1.0.0',
        image: 'http://example.com/app1.png',
        libs: [
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
        ],
      },
      {
        appName: 'App2',
        version: '1.0.0',
        image: 'http://example.com/app2.png',
        libs: [
          {
            name: 'libA',
            version: '1.0.0',
            libs: [],
          },
          {
            name: 'libB',
            version: '1.0.0',
            libs: [],
          },
          {
            name: 'libE',
            version: '1.0.0',
            libs: [],
          },
        ],
      },
    ];

    const expected = {
      'libA@1.0.0': 2,
      'libB@1.0.0': 2,
      'libC@1.0.0': 1,
      'libD@1.0.0': 1,
      'libE@1.0.0': 1,
    };

    expect(getDependencyUsage(apps)).toEqual(expected);
  });

  it('should handle no dependencies', () => {
    const apps: IApp[] = [
      {
        appName: 'App1',
        version: '1.0.0',
        image: 'http://example.com/app1.png',
        libs: [],
      },
      {
        appName: 'App2',
        version: '1.0.0',
        image: 'http://example.com/app2.png',
        libs: [],
      },
    ];

    const expected = {};

    expect(getDependencyUsage(apps)).toEqual(expected);
  });

  it('should handle different versions of the same dependency', () => {
    const apps: IApp[] = [
      {
        appName: 'App1',
        version: '1.0.0',
        image: 'http://example.com/app1.png',
        libs: [
          {
            name: 'libA',
            version: '1.0.0',
            libs: [],
          },
        ],
      },
      {
        appName: 'App2',
        version: '1.0.0',
        image: 'http://example.com/app2.png',
        libs: [
          {
            name: 'libA',
            version: '2.0.0',
            libs: [],
          },
        ],
      },
    ];

    const expected = {
      'libA@1.0.0': 1,
      'libA@2.0.0': 1,
    };

    expect(getDependencyUsage(apps)).toEqual(expected);
  });
});
