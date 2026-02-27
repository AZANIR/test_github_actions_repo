import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  retries: 0,
    reporter: [['html', { open: 'never' }],
        ['junit', { outputFile: 'junit-report/jest-junit.xml' }],
        ['list'],
        ['json', { outputFile: 'test-results.json' }],
    ],
  use: {
    baseURL: 'https://playwright.dev',
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});