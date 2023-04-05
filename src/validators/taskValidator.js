import { object, string } from "yup";

const taskSchema = object({
  title: string().required(),
  description: string().required(),
});

export default taskSchema;
