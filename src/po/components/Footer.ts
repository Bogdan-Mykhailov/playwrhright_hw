import BaseComponent from "../base/BaseComponent";
import {Page, expect} from "@playwright/test";

export default class Footer extends BaseComponent {
    private readonly policiesWrapper = this.page.locator('//div[@class="policies-links-wrapper"]');
    private readonly leftPoliciesList = this.policiesWrapper.locator('//ul[contains(@class, "policies-left")]');
    private readonly rightPoliciesList = this.policiesWrapper.locator('//ul[contains(@class, "policies-right")]');
    private readonly investorsPolicy = this.leftPoliciesList.locator('//a[contains(text(), "INVESTORS")]');
    private readonly cookiePolicy = this.leftPoliciesList.locator('//a[contains(text(), "COOKIE POLICY")]');
    private readonly openSourcePolicy = this.leftPoliciesList.locator('//a[contains(text(), "OPEN SOURCE")]');
    private readonly applicantPrivacyNotice = this.rightPoliciesList.locator('//a[contains(text(), "APPLICANT PRIVACY NOTICE")]');
    private readonly privacyPolicy = this.leftPoliciesList.locator('//a[contains(text(), "PRIVACY POLICY")]');
    private readonly webAccessibility = this.rightPoliciesList.locator('//a[contains(text(), "WEB ACCESSIBILITY")]');

    constructor(page: Page) {
        super(page);
    }

    public async scrollToBottom(): Promise<void> {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight)
        });
    }

    public async checkPoliciesList(): Promise<void> {
        await expect(this.investorsPolicy).toBeVisible();
        await expect(this.cookiePolicy).toBeVisible();
        await expect(this.openSourcePolicy).toBeVisible();
        await expect(this.applicantPrivacyNotice).toBeVisible();
        await expect(this.privacyPolicy).toBeVisible();
        await expect(this.webAccessibility).toBeVisible();
    }
}