import { test } from "@playwright/test";

test("drag and drop action", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/drag-drop?sublist=0");

  // Drag the element and drop onto target
  await page.locator('#draggable').dragTo(page.locator('#droppable'));
});