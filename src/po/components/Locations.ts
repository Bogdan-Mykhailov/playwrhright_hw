import BaseComponent from "../base/BaseComponent";
import { Locator, Page } from "@playwright/test";
import { Region } from "../../data/types";

export default class Locations extends BaseComponent {
  public readonly locationSection = this.page.locator(
    '//span[@class="museo-sans-light" and contains(text(), "Our")]/ancestor::div[contains(@class, "section__wrapper")]',
  );
  private readonly regionLink = (region: Region) =>
    this.locationSection.locator(`//a[contains(text(), "${region}")]`);

  constructor(page: Page) {
    super(page);
  }

  async getRegionLink(region: Region): Promise<Locator> {
    return this.regionLink(region);
  }
}
