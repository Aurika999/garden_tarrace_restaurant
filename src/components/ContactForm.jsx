import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState(""); // '', 'loading', 'success', 'error'

    // Ascunde mesajul de succes după 3 secunde
    useEffect(() => {
        if (status === "success") {
            const timer = setTimeout(() => setStatus(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const sendEmail = (e) => {
        e.preventDefault();

        const { user_name, user_email, message } = form.current;

        if (!user_name.value || !user_email.value || !message.value) {
            setStatus("error");
            return;
        }

        setStatus("loading");

        // Înlocuiește cu valorile tale reale EmailJS
        emailjs
            .sendForm(
                "service_xxx",   // → Service ID
                "template_yyy",  // → Template ID
                form.current,
                "user_zzz"       // → Public Key (user_id)
            )
            .then(
                (result) => {
                    console.log("SUCCESS:", result.text);
                    setStatus("success");
                    form.current.reset();
                },
                (error) => {
                    console.error("ERROR:", error.text);
                    setStatus("error");
                }
            );
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Contactează-ne</h2>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="user_name"
                    placeholder="Nume"
                    required
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    name="message"
                    placeholder="Mesaj"
                    required
                    className="border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition ${
                        status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                >
                    {status === "loading" ? "Se trimite..." : "Trimite"}
                </button>

                {status === "success" && (
                    <p className="text-green-600 font-medium animate-fadeIn">Email trimis cu succes!</p>
                )}
                {status === "error" && (
                    <p className="text-red-600 font-medium animate-fadeIn">
                        A apărut o eroare. Verifică câmpurile sau încearcă din nou. iar 
                    </p>
                )}
            </form>
        </div>
    );
}