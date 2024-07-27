import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.post("/api/v1/user/signup", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  console.log("CHECK BABY", body);
  // TODO: Zod validation & password should be hashed

  try {
    await prisma.user.create({
      data: {
        name: body.name,
        password: body.password,
        email: body.email,
      },
    });
    return c.text("User created successfully");
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.text(`Invalid, Error sign up ${error}`);
  }
});
app.post("/api/v1/user/signin", (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Hello Hono!");
});

// POST /api/v1/user/signup
// POST /api/v1/user/signin
// POST /api/v1/blog
// PUT /api/v1/blog
// GET /api/v1/blog/:id
// GET /api/v1/blog/bulk

export default app;
