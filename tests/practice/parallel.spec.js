import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.describe('Selected Tests', () => {
  test('test 2', async ({ page }) => {
    console.log('Running test 2');
  });

  test('test 3', async ({ page }) => {
    console.log('Running test 3');
  });
});

test.describe('Other Tests', () => {
  test('test 1', async ({ page }) => {
    console.log('Running test 5');
  });

  test('test 4', async ({ page }) => {
    console.log('Running test 6');
  });
   test('test 2', async ({ page }) => {
    console.log('Running test 7');
  });

  test('test 3', async ({ page }) => {
    console.log('Running test 8');
  });
});

test.describe('Other Tests', () => {
  test('test 9', async ({ page }) => {
    console.log('Running test 1');
  });

  test('test 10', async ({ page }) => {
    console.log('Running test 4');
  });
});