import { Page } from '@playwright/test';

export class LoginPage {
  page: Page;
  usernameInput: any;
  passwordInput: any;
  loginButton: any;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async fillUsername(value: string) {
    await this.page.locator('#username').fill(value);
  }

  async fillPassword(value: string) {
    await this.page.locator('#password').fill(value);
  }
}
