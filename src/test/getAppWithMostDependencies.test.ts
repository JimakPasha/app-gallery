import { describe, it, expect } from 'vitest';
import { getAppWithMostDependencies } from '../utils';
import { IApp } from '../types';

describe('getAppWithMostDependencies', () => {
  it('should return the app with the most dependencies', () => {
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
            name: 'libC',
            version: '1.0.0',
            libs: [],
          },
        ],
      },
    ];

    const expected = 'App2';

    expect(getAppWithMostDependencies(apps)).toEqual(expected);
  });

  it('should handle multiple apps with the same number of dependencies', () => {
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
            libs: [
              {
                name: 'libB',
                version: '1.0.0',
                libs: [],
              },
            ],
          },
        ],
      },
    ];

    const expected = 'App1';

    expect(['App1', 'App2']).toContain(getAppWithMostDependencies(apps));
  });

  it('should handle an app with no dependencies', () => {
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
        libs: [
          {
            name: 'libA',
            version: '1.0.0',
            libs: [],
          },
        ],
      },
    ];

    const expected = 'App2';

    expect(getAppWithMostDependencies(apps)).toEqual(expected);
  });
});