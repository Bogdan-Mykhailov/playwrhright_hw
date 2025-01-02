import BaseComponent from "../base/BaseComponent";
import {Page} from "@playwright/test";

export default class Locations extends BaseComponent {
    private readonly locationSection = this.page.locator('//span[@class="museo-sans-light" and contains(text(), "Our")]/ancestor::div[contains(@class, "section__wrapper")]');
    private readonly americaRegionLink = this.locationSection.locator('//a[contains(text(), "AMERICAS")]');
    private readonly emeaRegionLink = this.locationSection.locator('//a[contains(text(), "EMEA")]');
    private readonly apacRegionLink = this.locationSection.locator('//a[contains(text(), "APAC")]');

    constructor(page: Page) {
        super(page);
    }


}