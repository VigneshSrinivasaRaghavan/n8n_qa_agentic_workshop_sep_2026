import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login works', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://staging.example.com/login');
  await page.waitForTimeout(5000);
  await loginPage.usernameInput.fill('testuser@example.com');
  await loginPage.passwordInput.fill('Password123');
  await loginPage.loginButton.click();
  await page.waitForTimeout(3000);
  const isVisible = await page.locator('.dashboard-header').isVisible();
  expect(isVisible).toBeTruthy();
});

test('login fails with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://staging.example.com/login');
  await page.waitForTimeout(5000);
  await loginPage.usernameInput.fill('testuser@example.com');
  await loginPage.passwordInput.fill('WrongPass999');
  await loginPage.loginButton.click();
  await page.waitForTimeout(3000);
  const errorText = await page.locator('.error-banner').textContent();
  expect(errorText.length > 0).toBeTruthy();
});

test('login fails with empty password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://staging.example.com/login');
  await page.waitForTimeout(5000);
  await loginPage.usernameInput.fill('testuser@example.com');
  await loginPage.passwordInput.fill('');
  await loginPage.loginButton.click();
  await page.waitForTimeout(3000);
  const errorText = await page.locator('.error-banner').textContent();
  expect(errorText.length > 0).toBeTruthy();
});
