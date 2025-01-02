import BasePage from "../base/BasePage";
import {Page} from "@playwright/test";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class EpamPage extends BasePage {
    public header: Header = new Header(this.page);
    public footer: Footer = new Footer(this.page);

    constructor(page: Page) {
        super(page, 'Epam Page');
    }

    public async getTitle() {
        return await this.page.title();
    }
}