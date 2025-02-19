import { test, expect } from "@playwright/test";
import axios from "axios";

test.describe("API", { tag: "@api" }, () => {
  test("[ @api-1 ] GET Request - Check Epam homepage", async () => {
    const response = await axios.get("https://www.epam.com");
    expect(response.status).toBe(200);
  });

  test("[ @api-2 ] GET Request - Search EPAM for 'AI'", async () => {
    const query = "AI";
    const url = `https://www.epam.com/search?q=${query}`;
    const response = await axios.get(url);

    expect(response.status).toBe(200);
    expect(response.data).toContain("AI");
  });
});
