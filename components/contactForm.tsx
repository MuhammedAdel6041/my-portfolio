"use client";

import { motion, Variants } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "@/lib/validation";
import { useContactForm } from "@/hooks/useContactForm";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import SectionHeading from "./section-Heading";
import { FiUser, FiMail, FiPhone, FiFileText, FiMessageSquare, FiSend } from "react-icons/fi"; // Added FiSend for the button icon
import { useSectionInView } from "@/hooks/hooks";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ContactForm() {
  const { form, loading, sendEmail } = useContactForm();
  const { ref } = useSectionInView("Contact");
  return (
    <section id="contact" ref={ref}  className="py-20 text-[var(--color-SectionText)] w-full scroll-mt-28  my-10 ">
      <SectionHeading>Contact Me</SectionHeading>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto p-16 rounded-3xl border border-[var(--color-Border)] shadow-2xl border-[var(--color-Accent)]/30 hover:border-[var(--color-Accent)]/70 transition-all duration-500 backdrop-blur-md"
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          }}
          validationSchema={contactSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await sendEmail(values);
              toast.success("Message Sent!", {
                description: "I'll get back to you soon.",
                style: {
                  background: "var(--color-CardBg)",
                  color: "var(--color-Accent)",
                  border: "1px solid var(--color-Border)",
                },
              });
              resetForm();
            } catch (err) {
              toast.error("Failed to send message", {
                description: "Please try again later.",
                style: {
                  background: "var(--color-CardBg)",
                  color: "var(--color-Accent)",
                  border: "1px solid var(--color-Border)",
                },
              });
            }
          }}
        >
          {() => (
            <Form ref={form} className="space-y-12">
              {/* Name + Email */}
              <motion.div
                variants={fadeUp}
                custom={1}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              >
                {/* Name */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)]"
                  >
                    <FiUser className="w-5 h-5 mr-2 text-[var(--color-Accent)]" />
                    Name
                  </label>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full h-16 text-lg rounded-xl bg-[var(--color-CardBg)] border border-[var(--color-Border)] text-[var(--color-PrimaryText)] focus:ring-2 focus:ring-[var(--color-Accent)] focus:border-[var(--color-Accent)] pl-4 shadow-sm transition-all duration-300"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-[var(--color-Accent)] text-sm mt-2"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)]"
                  >
                    <FiMail className="w-5 h-5 mr-2 text-[var(--color-Accent)]" />
                    Email
                  </label>
                  <Field
                    as={Input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full h-16 text-lg rounded-xl bg-[var(--color-CardBg)] border border-[var(--color-Border)] text-[var(--color-PrimaryText)] focus:ring-2 focus:ring-[var(--color-Accent)] focus:border-[var(--color-Accent)] pl-4 shadow-sm transition-all duration-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-[var(--color-Accent)] text-sm mt-2"
                  />
                </div>
              </motion.div>

              {/* Phone + Subject */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              >
                {/* Phone */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)]"
                  >
                    <FiPhone className="w-5 h-5 mr-2 text-[var(--color-Accent)]" />
                    Phone
                  </label>
                  <Field
                    as={Input}
                    id="phone"
                    name="phone"
                    placeholder="+20 123 456 7890"
                    className="w-full h-16 text-lg rounded-xl bg-[var(--color-CardBg)] border border-[var(--color-Border)] text-[var(--color-PrimaryText)] focus:ring-2 focus:ring-[var(--color-Accent)] focus:border-[var(--color-Accent)] pl-4 shadow-sm transition-all duration-300"
                  />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-[var(--color-Accent)] text-sm mt-2"
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)]"
                  >
                    <FiFileText className="w-5 h-5 mr-2 text-[var(--color-Accent)]" />
                    Subject
                  </label>
                  <Field
                    as={Input}
                    id="subject"
                    name="subject"
                    placeholder="Project Title or Subject"
                    className="w-full h-16 text-lg rounded-xl bg-[var(--color-CardBg)] border border-[var(--color-Border)] text-[var(--color-PrimaryText)] focus:ring-2 focus:ring-[var(--color-Accent)] focus:border-[var(--color-Accent)] pl-4 shadow-sm transition-all duration-300"
                  />
                  <ErrorMessage
                    name="subject"
                    component="p"
                    className="text-[var(--color-Accent)] text-sm mt-2"
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} custom={3} className="relative">
                <label
                  htmlFor="message"
                  className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)]"
                >
                  <FiMessageSquare className="w-5 h-5 mr-2 text-[var(--color-Accent)]" />
                  Message
                </label>
                <Field
                  as={Textarea}
                  id="message"
                  name="message"
                  rows={10}
                  placeholder="Write your message here..."
                  className="w-full text-lg rounded-xl bg-[var(--color-CardBg)] border border-[var(--color-Border)] text-[var(--color-PrimaryText)] resize-none focus:ring-2 focus:ring-[var(--color-Accent)] focus:border-[var(--color-Accent)] p-4 shadow-sm transition-all duration-300"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-[var(--color-Accent)] text-sm mt-2"
                />
              </motion.div>

              {/* Button */}
              <motion.div variants={fadeUp} custom={4} className="flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full max-w-md py-6 cursor-pointer text-xl font-semibold rounded-xl bg-[var(--color-BtnBg)] text-[var(--color-BtnText)] hover:bg-[var(--color-BtnHoverBg)]  border-[var(--color-Border)] shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-(--color-BtnText) border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FiSend className="w-6 h-6 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </section>
  );
}
