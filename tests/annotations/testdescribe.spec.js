import { test } from "@playwright/test"

test.describe("login", async()=>{  

  test("valid cred", async ({ browserName }) => {
    console.log("test 2");
  })

  test("invalid cred", async () => {
    console.log("test 3");
  })

})