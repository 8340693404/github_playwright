import { test } from "@playwright/test"

test.describe("login", async()=>{  

  test("valid cred", async ({ browserName }) => {
    test.setTimeout(5000)
  })

  test("invalid cred", async () => {
    console.log("test 3");
  })

})