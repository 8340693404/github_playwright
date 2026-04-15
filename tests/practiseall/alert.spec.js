import { test } from "@playwright/test";

test("dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //simple alert

//   page.once("dialog", async (dialog) => {
//     console.log(dialog.message()); // get alert message
//     await dialog.accept();         // click OK
//   });

  //await page.getByRole("button", { name: "Simple Alert" }).click();

//});

//cofirmation alert
// page.once("dialog", async (dialog) => {
//     console.log(dialog.message()); // get alert message
//     await dialog.accept();         // click OK
//   });
//   await page.getByRole("button", { name: "Confirmation Alert" }).click();
// });


//prompt alert

page.once("dialog", async (dialog) => {
    console.log(dialog.message()); // get alert message
    //await dialog.accept("hiii");         // click OK

    await dialog.dismiss()    //click cancel
  });
  await page.getByRole("button", { name: "Prompt Alert" }).click();
});
