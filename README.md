# Playwright Commands

---

## Tags that were used for filtering

```bash
    @ui
```

```bash
    @api
```

---

---

## Running Playwright Tests with a Specific Tag

To run Playwright tests tagged with `@ui`, use the following command:

```bash
    npx playwright test --grep "(?=.*@ui)"
```

#### Explanation:

- `npx playwright test`: Runs Playwright tests.
- `--grep "(?=.*@ui)"`: Filters the tests to only include those containing the `@ui` tag.

---

## Running Single Playwright Test with a Specific Tag

To run a specific test tagged with `@api-1`, replace `1` with the desired tag number (e.g., `@api-2`, `@api-3`, etc.):

```bash
    npx playwright test --grep "(?=.*@api-1)"
```

#### Explanation:

- `--grep "(?=.*@api-1)"`: Filters the tests to only include those tagged with `@api-1`. You can replace `1` with any number (e.g., `@api-2`, `@api-3`, etc.) depending on which set of tests you want to run.

---

## Running Playwright Tests with UI Mode

To run Playwright tests with the **UI Test Runner**, use:

```bash
    npx playwright test --ui
```

#### Explanation:

- `--ui`: Opens the Playwright **UI mode** for visual test execution and debugging.

---

## Running Playwright Tests in Debug Mode

To run Playwright tests in **debug mode**, use:

```bash
    npx playwright test --debug
```

#### Explanation:

- `--debug`: Launches Playwright tests with debugging enabled (Node.js inspector).

---

## Combining UI Mode and Debug Mode

To run Playwright tests with the `@ui` tag using **both UI mode and debug mode**:

```bash
    npx playwright test --grep "(?=.*@ui)" --ui --debug
```

#### Explanation:

- `--ui`: Opens Playwright UI mode.
- `--debug`: Enables debug mode (Node.js inspector).
- `--grep "(?=.*@ui)"`: Filters tests by the `@ui` tag.

---

## Running Playwright Tests in **Headed Mode**

To run Playwright tests **in a visible browser window** (headed mode) with the `@ui` tag:

```bash
    npx playwright test --grep "(?=.*@ui)" --headed
```

#### Explanation:

- `--headed`: Launches the browser **with UI** (non-headless mode).
- `--grep "(?=.*@ui)"`: Filters tests with the `@ui` tag.

---
