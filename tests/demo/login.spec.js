import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'

test('test', async ({ page }) => {

const Login = new LoginPage(page)

await Login.goToLoginPage()    
await Login.enterUsername('tomsmith')
await Login.enterPassword('SuperSecretPassword')
await Login.clickOnLogin()




    // await page.goto('https://the-internet.herokuapp.com/login');
    // await page.getByLabel('Username').click();
    // await page.getByLabel('Username').fill('tomsmith');
    // await page.getByLabel('Username').press('Tab');
    // await page.getByLabel('Password').fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: ' Login' }).click();




});