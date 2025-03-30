import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      reporter: ['json', 'html'],
      provider: 'v8',
      reportsDirectory: './.coverage',
    },
    setupFiles: ['./src/__test__/setup.ts'],
    include: ['**/*.spec.{ts,tsx}'],
  },
});
