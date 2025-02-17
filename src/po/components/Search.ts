import BaseComponent from "../base/BaseComponent";
import {Page} from "@playwright/test";

export default class Search extends BaseComponent {
    private readonly searchPanel = this.page.locator('//div[@class="header-search__panel"]')
    private readonly searchField = this.searchPanel.locator('//input[@class="header-search__input"]');
    private readonly searchButton = this.searchPanel.locator('//span[contains(text(), "Find")]/ancestor::button[contains(@class, "custom-search-button")]');

    constructor(page: Page) {
        super(page);
    }
}