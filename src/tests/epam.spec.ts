import { test, expect } from '../config/FixtureConfig';

test.describe('Epam', () => {
  test('Check the title is correct', async ({page, epamPage}) => {
    await epamPage.open();
    expect(page.url()).toContain(await epamPage.getPageUrl());
    expect(await epamPage.getTitle()).toBe('EPAM | Software Engineering & Product Development Services');
  })

  test('Check the ability to switch Light / Dark mode', async ({page, epamPage}) => {
    await epamPage.open();
    expect(page.url()).toContain(await epamPage.getPageUrl());
    const initTheme = await epamPage.header.getCurrentTheme();
    await epamPage.header.clickOnThemeSwitcher();
    const newTheme = await epamPage.header.getCurrentTheme();
    expect(initTheme).not.toBe(newTheme);
  })

  test('Check that allow to change language to UA', async ({page, epamPage}) => {
    await epamPage.open();
    expect(page.url()).toContain(await epamPage.getPageUrl());
    await epamPage.header.changeLanguage();
    const lang = await epamPage.header.verifyCorrectLanguage();
    expect(lang).toBe('uk-UA');
  })

  test('Check the policies list', async ({page, epamPage}) => {
    await epamPage.open();
    expect(page.url()).toContain(await epamPage.getPageUrl());
    await epamPage.footer.scrollToBottom();
    await epamPage.footer.checkPoliciesList();
  })
})