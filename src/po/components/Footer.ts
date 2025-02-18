import BaseComponent from "../base/BaseComponent";
import { Page, Locator } from "@playwright/test";
import { Policies } from "../../data/types";

export default class Footer extends BaseComponent {
  private readonly policyItem = (policy: Policies) =>
    this.page.locator(`//a[contains(text(), "${policy}")]`);

  constructor(page: Page) {
    super(page);
  }

  public async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  public async checkPolicy(policy: Policies): Promise<Locator> {
    return this.policyItem(policy);
  }
}
