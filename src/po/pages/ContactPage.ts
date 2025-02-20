import { Page } from "@playwright/test";
import BasePage from "../base/BasePage";
import { Path } from "../../data/types";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class ContactPage extends BasePage {
  public header: Header = new Header(this.page);
  public footer: Footer = new Footer(this.page);

  private readonly submitButton = this.page.locator(
    '//button[@class="button-ui"]',
  );

  private readonly firstNameFieldError = this.page.locator(
    '//span[contains(@id, "user_first_name-error")]',
  );

  private readonly lastNameFieldError = this.page.locator(
    '//span[contains(@id, "user_last_name-error")]',
  );

  private readonly emailFieldError = this.page.locator(
    '//span[contains(@id, "user_email-error")]',
  );

  private readonly phoneFieldError = this.page.locator(
    '//span[contains(@id, "user_phone-error")]',
  );

  private readonly aboutEpamError = this.page
    .locator('//span[contains(@id, "about-error")]')
    .last();

  constructor(page: Page) {
    super(page, "Contact Page", Path.CONTACT);
  }

  public async clickSubmitButton(): Promise<void> {
    await this.submitButton.click();
  }

  public async checkValidationErrors(): Promise<void> {
    await Promise.all([
      this.firstNameFieldError.waitFor({ state: "visible" }),
      this.lastNameFieldError.waitFor({ state: "visible" }),
      this.emailFieldError.waitFor({ state: "visible" }),
      this.phoneFieldError.waitFor({ state: "visible" }),
      this.aboutEpamError.waitFor({ state: "visible" }),
    ]);
  }
}
