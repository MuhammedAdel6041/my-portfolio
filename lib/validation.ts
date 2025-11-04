import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
