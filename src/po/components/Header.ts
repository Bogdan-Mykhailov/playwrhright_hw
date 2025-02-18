import BaseComponent from "../base/BaseComponent";
import { Page } from "@playwright/test";

export default class Header extends BaseComponent {
  private readonly themeSwitcher = this.page.locator(
    '//div[@class="header__vaulting-container"] //div[@class="theme-switcher"]',
  );
  private readonly locationSelector = this.page.locator(
    '//button[@class="location-selector__button"]',
  );
  private readonly locationOption = (locationName: string) =>
    this.page.locator(
      `//ul[@class="location-selector__list"]//a[contains(text(), "${locationName}")]`,
    );

  constructor(page: Page) {
    super(page);
  }

  public async clickOnThemeSwitcher(): Promise<void> {
    await this.themeSwitcher.click();
  }

  public async getCurrentTheme(): Promise<string> {
    return await this.page.evaluate(() => {
      return localStorage.getItem("theme-mode");
    });
  }

  public async setLanguageTo(locationName: string): Promise<void> {
    await this.locationSelector.click();
    const selectedOption = this.locationOption(locationName);
    await selectedOption.click();
  }

  public async getCurrentLanguage(): Promise<string> {
    return await this.page.getAttribute("html", "lang");
  }

  public async getUpdatedLocationSelectorName(): Promise<string> {
    return await this.locationSelector.textContent();
  }
}
