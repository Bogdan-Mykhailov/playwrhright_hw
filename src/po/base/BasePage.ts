import { Locator, Page } from "@playwright/test";
import { Path } from "../../data/types";

export default abstract class BasePage {
  protected readonly BASE_PAGE = "https://www.epam.com/";
  protected readonly PAGE_NAME: string;
  protected readonly PAGE_URL: Path;
  protected readonly page: Page;
  private readonly acceptAllCookies: Locator;

  constructor(page: Page, pageName: string, pageUrl = Path.HOME) {
    this.page = page;
    this.PAGE_NAME = pageName;
    this.PAGE_URL = pageUrl;
    this.acceptAllCookies = this.page.locator(
      '//button[@id="onetrust-accept-btn-handler"]',
    );
  }

  public async open(): Promise<void> {
    await this.page.goto(`${this.BASE_PAGE}${this.PAGE_URL}`);
  }

  public getPageUrl(): string {
    return `${this.BASE_PAGE}${this.PAGE_URL}`;
  }

  public async pressAcceptAllCookiesButton(): Promise<void> {
    if (await this.acceptAllCookies.isVisible()) {
      await this.acceptAllCookies.click();
    }
  }
}
