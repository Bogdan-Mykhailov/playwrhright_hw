# Playwright Commands

---

## Running Playwright Tests with a Specific Tag

To run Playwright tests tagged with `@epam`, use the following command:

```bash
npx playwright test --grep "(?=.*@epam)"
```

#### Explanation:

- `npx playwright test`: Runs Playwright tests.
- `--grep "(?=.*@epam)"`: Filters the tests to only include those containing the `@epam` tag.

---

## Running Single Playwright Test with a Specific Tag

To run a specific test tagged with `@epam-1`, replace `1` with the desired tag number (e.g., `@epam-2`, `@epam-3`, etc.):

```bash
npx playwright test --grep "(?=.*@epam-1)"
```

#### Explanation:

- `--grep "(?=.*@epam-1)"`: Filters the tests to only include those tagged with `@epam-1`. You can replace `1` with any number (e.g., `@epam-2`, `@epam-3`, etc.) depending on which set of tests you want to run.

---

## Running Playwright Tests with UI Mode

To run Playwright tests with the **UI Test Runner** and filter by the `@epam` tag, use:

```bash
npx playwright test --grep "(?=.*@epam)" --ui
```

#### Explanation:

- `--ui`: Opens the Playwright **UI mode** for visual test execution and debugging.
- `--grep "(?=.*@epam)"`: Filters tests with the `@epam` tag.

---

## Running Playwright Tests in Debug Mode

To run Playwright tests with the `@epam` tag in **debug mode**, use:

```bash
npx playwright test --grep "(?=.*@epam)" --debug
```

#### Explanation:

- `--debug`: Launches Playwright tests with debugging enabled (Node.js inspector).
- `--grep "(?=.*@epam)"`: Filters tests with the `@epam` tag.

---

## Combining UI Mode and Debug Mode

To run Playwright tests with the `@epam` tag using **both UI mode and debug mode**:

```bash
npx playwright test --grep "(?=.*@epam)" --ui --debug
```

#### Explanation:

- `--ui`: Opens Playwright UI mode.
- `--debug`: Enables debug mode (Node.js inspector).
- `--grep "(?=.*@epam)"`: Filters tests by the `@epam` tag.

---

## Running Playwright Tests in **Headed Mode**

To run Playwright tests **in a visible browser window** (headed mode) with the `@epam` tag:

```bash
npx playwright test --grep "(?=.*@epam)" --headed
```

#### Explanation:

- `--headed`: Launches the browser **with UI** (non-headless mode).
- `--grep "(?=.*@epam)"`: Filters tests with the `@epam` tag.

---
