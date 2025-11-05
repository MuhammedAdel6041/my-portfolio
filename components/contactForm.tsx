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
import { FiUser, FiMail, FiPhone, FiFileText, FiMessageSquare, FiSend } from "react-icons/fi";
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
    <section id="contact" ref={ref} className="py-20 w-full scroll-mt-28 my-10 text-[var(--color-SectionText)] dark:text-[var(--color-dark-SectionText)]">
      <SectionHeading>Contact Me</SectionHeading>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          w-full max-w-7xl mx-auto p-16 rounded-3xl
          border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)]
          shadow-2xl border-[var(--color-Accent)]/30 dark:border-[var(--color-dark-Accent)]/30
          hover:border-[var(--color-Accent)]/70 dark:hover:border-[var(--color-dark-Accent)]/70
          transition-all duration-500 backdrop-blur-md
          bg-[var(--color-CardBg)] dark:bg-[var(--color-dark-CardBg)]
        "
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
              <motion.div variants={fadeUp} custom={1} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Name */}
                <div className="relative">
                  <label htmlFor="name" className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]">
                    <FiUser className="w-5 h-5 mr-2 text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)]" />
                    Name
                  </label>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full h-16 text-lg rounded-xl bg-[var(--color-CardBg)] dark:bg-[var(--color-dark-CardBg)] border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)] text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)] focus:ring-2 focus:ring-[var(--color-Accent)] dark:focus:ring-[var(--color-dark-Accent)] focus:border-[var(--color-Accent)] dark:focus:border-[var(--color-dark-Accent)] pl-4 shadow-sm transition-all duration-300"
                  />
                  <ErrorMessage name="name" component="p" className="text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)] text-sm mt-2" />
                </div>

                {/* Email */}
                <div className="relative">
                  <label htmlFor="email" className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]">
                    <FiMail className="w-5 h-5 mr-2 text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)]" />
                    Email
                  </label>
                  <Field
                    as={Input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full h-16 text-lg rounded-xl bg-[var(--color-CardBg)] dark:bg-[var(--color-dark-CardBg)] border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)] text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)] focus:ring-2 focus:ring-[var(--color-Accent)] dark:focus:ring-[var(--color-dark-Accent)] focus:border-[var(--color-Accent)] dark:focus:border-[var(--color-dark-Accent)] pl-4 shadow-sm transition-all duration-300"
                  />
                  <ErrorMessage name="email" component="p" className="text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)] text-sm mt-2" />
                </div>
              </motion.div>

              {/* Phone + Subject */}
              <motion.div variants={fadeUp} custom={2} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Phone */}
                <div className="relative">
                  <label htmlFor="phone" className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]">
                    <FiPhone className="w-5 h-5 mr-2 text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)]" />
                    Phone
                  </label>
                  <Field
                    as={Input}
                    id="phone"
                    name="phone"
                    placeholder="+20 123 456 7890"
                    className="w-full h-16 text-lg rounded-xl bg-[var(--color-CardBg)] dark:bg-[var(--color-dark-CardBg)] border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)] text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)] focus:ring-2 focus:ring-[var(--color-Accent)] dark:focus:ring-[var(--color-dark-Accent)] focus:border-[var(--color-Accent)] dark:focus:border-[var(--color-dark-Accent)] pl-4 shadow-sm transition-all duration-300"
                  />
                  <ErrorMessage name="phone" component="p" className="text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)] text-sm mt-2" />
                </div>

                {/* Subject */}
                <div className="relative">
                  <label htmlFor="subject" className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]">
                    <FiFileText className="w-5 h-5 mr-2 text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)]" />
                    Subject
                  </label>
                  <Field
                    as={Input}
                    id="subject"
                    name="subject"
                    placeholder="Project Title or Subject"
                    className="w-full h-16 text-lg rounded-xl bg-[var(--color-CardBg)] dark:bg-[var(--color-dark-CardBg)] border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)] text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)] focus:ring-2 focus:ring-[var(--color-Accent)] dark:focus:ring-[var(--color-dark-Accent)] focus:border-[var(--color-Accent)] dark:focus:border-[var(--color-dark-Accent)] pl-4 shadow-sm transition-all duration-300"
                  />
                  <ErrorMessage name="subject" component="p" className="text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)] text-sm mt-2" />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} custom={3} className="relative">
                <label htmlFor="message" className="flex items-center mb-3 text-lg font-semibold text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]">
                  <FiMessageSquare className="w-5 h-5 mr-2 text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)]" />
                  Message
                </label>
                <Field
                  as={Textarea}
                  id="message"
                  name="message"
                  rows={10}
                  placeholder="Write your message here..."
                  className="w-full text-lg rounded-xl bg-[var(--color-CardBg)] dark:bg-[var(--color-dark-CardBg)] border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)] text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)] resize-none focus:ring-2 focus:ring-[var(--color-Accent)] dark:focus:ring-[var(--color-dark-Accent)] focus:border-[var(--color-Accent)] dark:focus:border-[var(--color-dark-Accent)] p-4 shadow-sm transition-all duration-300"
                />
                <ErrorMessage name="message" component="p" className="text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)] text-sm mt-2" />
              </motion.div>

              {/* Button */}
              <motion.div variants={fadeUp} custom={4} className="flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full max-w-md py-6 cursor-pointer text-xl font-semibold rounded-xl bg-[var(--color-BtnBg)] dark:bg-[var(--color-dark-BtnBg)] text-[var(--color-BtnText)] dark:text-[var(--color-dark-BtnText)] hover:bg-[var(--color-BtnHoverBg)] dark:hover:bg-[var(--color-dark-BtnHoverBg)] border-[var(--color-Border)] dark:border-[var(--color-dark-Border)] shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
