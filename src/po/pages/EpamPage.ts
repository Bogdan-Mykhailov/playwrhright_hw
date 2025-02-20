import BasePage from "../base/BasePage";
import { Page } from "@playwright/test";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Locations from "../components/Locations";
import { Path } from "../../data/types";

export default class EpamPage extends BasePage {
  public header: Header = new Header(this.page);
  public footer: Footer = new Footer(this.page);
  public locations: Locations = new Locations(this.page);

  private acceptAllCookies = this.page.locator(
    '//button[@id="onetrust-accept-btn-handler"]',
  );

  constructor(page: Page) {
    super(page, "Epam Page", Path.HOME);
  }

  public async getTitle() {
    return await this.page.title();
  }

  public async pressAcceptAllCookiesButton(): Promise<void> {
    if (await this.acceptAllCookies.isVisible()) {
      await this.acceptAllCookies.click();
    }
  }
}
