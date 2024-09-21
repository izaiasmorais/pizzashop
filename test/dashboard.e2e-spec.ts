import { expect, test } from "@playwright/test";

test("display month receipt metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("R$ 200,00")).toBeVisible();
  await expect(page.getByText("+10% em relação ao mês passado")).toBeVisible();
});

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("20", { exact: true })).toBeVisible();
  await expect(page.getByText("-5 em relação ao mês passado")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("246").first()).toBeVisible();
  await expect(page.getByText("-5% em relação ao mês passado")).toBeVisible();
});

test("display month cancelled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("246").nth(1)).toBeVisible();
  await expect(page.getByText("+7% em relação ao mês passado")).toBeVisible();
});
