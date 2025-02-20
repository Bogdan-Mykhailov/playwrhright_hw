import { Page } from "@playwright/test";
import BasePage from "../base/BasePage";
import { Path } from "../../data/types";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class AboutPage extends BasePage {
  public header: Header = new Header(this.page);
  public footer: Footer = new Footer(this.page);

  constructor(page: Page) {
    super(page, "About Page", Path.ABOUT);
  }
}
