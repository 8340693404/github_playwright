import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log('beforeEach → runs before every test');
});

test.afterEach(async ({ page }) => {
  console.log('afterEach → runs after every test');
});

test('Test 1', async ({ page }) => {
  console.log('Running Test 1');
});

test('Test 2', async ({ page }) => {
  console.log('Running Test 2');
});