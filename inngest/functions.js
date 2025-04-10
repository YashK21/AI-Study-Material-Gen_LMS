import { inngest } from "./client";
import { db } from "@/dbConfigs/db";
import { USER_TABLE } from "@/dbConfigs/schema";
import { eq } from "drizzle-orm";
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const createUser = inngest.createFunction(
  {
    id: "createUser",
  },
  {
    event: "create-new-user",
  },
  async ({ event, step }) => {
    const { user } = event.data;
    const response = await step.run(
      "Check User Exist or Not - If Not then Create New User",
      async () => {
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
        // console.log(result);
        // console.log(user?.primaryEmailAddress?.emailAddress)
        if (result?.length == 0) {
          const userResponse = await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
          console.log(userResponse);
          return userResponse;
        }
        // console.log(result[0].name , "Line 43")
        return result;
      }
    );
    return `${response[0].name} - "Success Created User"`;
  }
);
