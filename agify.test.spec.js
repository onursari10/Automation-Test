const {test,expect} = require('@playwright/test')

test('Login', async ({page}) =>     {


    await page.goto('https://agify.io/login')
    await page.getByPlaceholder('Email').fill('frycry1111@hotmail.com')
    await page.locator('[type=password]').fill('Creative10*agify')
    await page.click('text=Sign in')

    await expect(page).toHaveTitle('Log in to manage your Agify.io account')


    await page.click('text=Pricing')
    await expect(page).toHaveTitle('Pricing and plans for Agify.io')

    await page.click('text=SEE MORE QUESTIONS')

    await page.click('text=agify.io')

    await page.getByPlaceholder('First or full name').fill('Rem Waste')
   



    











})