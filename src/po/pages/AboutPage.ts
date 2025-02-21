import { Download, Page } from "@playwright/test";
import BasePage from "../base/BasePage";
import { Path } from "../../data/types";
import Header from "../components/Header";

export default class AboutPage extends BasePage {
  public header: Header = new Header(this.page);
  private readonly downloadButton = this.page.locator(
    "//span[contains(text(), 'DOWNLOAD')]",
  );

  constructor(page: Page) {
    super(page, "About Page", Path.ABOUT);
  }

  public async downloadReport(): Promise<Download> {
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.downloadButton.first().click(),
    ]);
    return download;
  }
}
