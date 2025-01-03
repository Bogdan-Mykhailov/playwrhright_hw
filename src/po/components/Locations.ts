import BaseComponent from "../base/BaseComponent";
import {expect, Page} from "@playwright/test";

export default class Locations extends BaseComponent {
    private readonly locationSection = this.page.locator('//span[@class="museo-sans-light" and contains(text(), "Our")]/ancestor::div[contains(@class, "section__wrapper")]');
    private readonly americaRegionLink = this.locationSection.locator('//a[contains(text(), "AMERICAS")]');
    private readonly emeaRegionLink = this.locationSection.locator('//a[contains(text(), "EMEA")]');
    private readonly apacRegionLink = this.locationSection.locator('//a[contains(text(), "APAC")]');
    private readonly countryList = (dataItem: string) =>
        this.page.locator(`//div[@data-item="${dataItem}" and contains(@class, "active")]`);


    constructor(page: Page) {
        super(page);
    }

    async verifyLocationSection(): Promise<void> {
        await expect(this.locationSection).toBeVisible();
    }

    async verifyRegionLinks(): Promise<void> {
        await expect(this.americaRegionLink).toBeVisible();
        await expect(this.emeaRegionLink).toBeVisible();
        await expect(this.apacRegionLink).toBeVisible();
    }

    async switchToEmeaRegion(): Promise<void> {
        await this.emeaRegionLink.click();
        await expect(this.countryList('1')).toBeVisible();
    }

    async switchToApacRegion(): Promise<void> {
        await this.apacRegionLink.click();
        await expect(this.countryList('2')).toBeVisible();
    }

    async switchToAmericaRegion(): Promise<void> {
        await this.americaRegionLink.click();
        await expect(this.countryList('0')).toBeVisible();
    }
}