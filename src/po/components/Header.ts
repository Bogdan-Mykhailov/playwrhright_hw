import BaseComponent from "../base/BaseComponent";
import {Page} from "@playwright/test";

export default class Header extends BaseComponent{
    private readonly themeSwitcher = this.page.locator('//div[@class="header__vaulting-container"] //div[@class="theme-switcher"]');
    private readonly locationSelector = this.page.locator('//button[@class="location-selector__button"]');
    private readonly currentLocation = this.page.locator('//ul[@class="location-selector__list"] //a[contains(text(), "Україна")]');

    constructor(page: Page) {
        super(page);
    }

    public async clickOnThemeSwitcher(): Promise<void> {
        await this.themeSwitcher.click();
    }

    public async getCurrentTheme(): Promise<string> {
        return await this.page.evaluate(() => {
            return localStorage.getItem('theme-mode');
        });
    }

    public async changeLanguage(): Promise<void> {
        await this.locationSelector.click();
        await this.currentLocation.waitFor({ state: 'visible' });
        await this.currentLocation.click();
    }

    public async verifyCorrectLanguage(): Promise<string> {
        return await this.page.getAttribute('html', 'lang');    }
}



