import { test, expect, type Page } from '@playwright/test';

test('Register, log out and log in', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/');
  await page.click('a[href="register.htm"]');
  await page.fill('input#customer\\.firstName', 'Test1');
  await page.fill('input#customer\\.lastName', 'User1');
  await page.fill('input#customer\\.address\\.street', 'Test street 123');
  await page.fill('input#customer\\.address\\.city', 'Barcelona');
  await page.fill('input#customer\\.address\\.state', 'Catalunya');
  await page.fill('input#customer\\.address\\.zipCode', '08080');
  await page.fill('input#customer\\.phoneNumber', '123456789');
  await page.fill('input#customer\\.ssn', '123456789');
  await page.fill('input#customer\\.username', 'TestUserZA');
  await page.fill('input#customer\\.password', 'Ns123456');
  await page.fill('input#repeatedPassword', 'Ns123456');
  await page.click('input[type="submit"].button[value="Register"]');
  await page.click('a[href="logout.htm"]');
  await page.fill('input[name="username"]', 'TestUserZA');
  await page.fill('input[name="password"]', 'Ns123456');

});






