import zod from "zod";

const todoSchema = zod.object({
  id: zod.string().describe("ID of the todo"),
  title: zod.string().describe("Name of the todo"),
  description: zod.string().optional().describe("Description of the todo"),
  isCompleted: zod
    .boolean()
    .default(false)
    .describe("is the todo completed or not"),
});

export type Todo = zod.infer<typeof todoSchema>;
