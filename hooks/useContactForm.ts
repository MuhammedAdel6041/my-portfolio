"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export function useContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    // ✅ خليها تاخد values بدلاً من event
    const sendEmail = (values: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
    }) => {
        if (!form.current) return;
        setLoading(true);

        // هنا نقدر نستخدم EmailJS عادي
        emailjs
            .send(
                "service_3026izj",
                "template_47r4p7r",
                values,
                "j31uCN-N2k8a3uHm_"
            )
            .then(
                () => {
                    setSent(true);
                    setLoading(false);
                    form.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    setLoading(false);
                }
            );
    };

    return { form, loading, sent, sendEmail };
}
