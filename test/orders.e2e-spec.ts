import { expect, test } from "@playwright/test";

test("list orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("cell", { name: "Costumer 1", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Costumer 10" })).toBeVisible();
});

test("paginate orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Próxima página" }).click();

  await expect(
    page.getByRole("cell", { name: "Costumer 11", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Costumer 20" })).toBeVisible();

  await page.getByRole("button", { name: "Última página" }).click();

  await expect(
    page.getByRole("cell", { name: "Costumer 51", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Costumer 60" })).toBeVisible();

  await page.getByRole("button", { name: "Primeira página" }).click();

  await expect(
    page.getByRole("cell", { name: "Costumer 1", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("cell", { name: "Costumer 10" })).toBeVisible();
});

test("filter by order id", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByPlaceholder("Id do cliente").fill("order-10");

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "Costumer 10" })).toBeVisible();

  await expect(page.getByText("Total de 1 item(s)")).toBeVisible();
});

test("filter by costumer name", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByPlaceholder("Nome do cliente").fill("Costumer 11");

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "Costumer 11" })).toBeVisible();

  await expect(page.getByText("Total de 1 item(s)")).toBeVisible();
});

test("filter by status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();

  await page.getByLabel("Pendente").getByText("Pendente").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "Pendente" })).toHaveCount(10);
});
