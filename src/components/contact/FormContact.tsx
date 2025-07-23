"use client";

import React from 'react';
import emailjs from 'emailjs-com';

const FormContact: React.FC = () => {
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [title, setTitle] = React.useState<string>("");

    const [nameError, setNameError] = React.useState<string>("");
    const [emailError, setEmailError] = React.useState<string>("");
    const [titleError, setTitleError] = React.useState<string>("");

    const [status, setStatus] = React.useState<string>("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("");
        setNameError("");
        setEmailError("");
        setTitleError("");

        // validate fields
        let valid = true;

        if (!name) {
            setNameError("Name is required");
            valid = false;
        }

        if (!email) {
            setEmailError("Email is required");
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Invalid email format");
            valid = false;
        }

        if (!title) {
            setTitleError("Title is required");
            valid = false;
        }

        if (!valid) return;

        // send email
        const templateParams = {
            name,
            email,
            title,
        };

        emailjs
            .send(
                'service_38yfuwf',
                'template_nurohci',
                templateParams,
                's4HwWa9C6X-uRpw88'
            )
            .then(() => {
                setStatus("✅ Message sent successfully!");
                setName("");
                setEmail("");
                setTitle("");
            })
            .catch((error) => {
                console.error(error);
                setStatus("❌ Failed to send message.");
            });
    };

    return (
        <div className="w-full flex flex-col gap-5">
            <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                    <div className="flex flex-col gap-2 px-2">
                        <span className="text-[#919195]">Name*</span>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full py-3 border-[0.5px] border-white/15 px-5 text-white outline-none focus:border-white/30 duration-500"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameError("");
                            }}
                        />
                        {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                    </div>
                    <div className="flex flex-col gap-2 px-2">
                        <span className="text-[#919195]">Email*</span>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full py-3 border-[0.5px] border-white/15 px-5 text-white outline-none focus:border-white/30 duration-500"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError("");
                            }}
                        />
                        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                    </div>
                </div>

                <div className="flex flex-col gap-2 px-2 mt-4">
                    <span className="text-[#919195]">Title*</span>
                    <textarea
                        placeholder="Title"
                        rows={4}
                        className="w-full py-3 border-[0.5px] border-white/15 px-5 text-white outline-none focus:border-white/30 duration-500"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setTitleError("");
                        }}
                    />
                    {titleError && <p className="text-red-500 text-sm">{titleError}</p>}
                </div>

                <div className="px-2 pt-6">
                    <button
                        type="submit"
                        className="py-4 px-11 bg-gray-600 cursor-pointer hover:bg-amber-600 duration-500 text-lg font-medium"
                    >
                        Submit now
                    </button>
                    {status && <p className="mt-3 text-sm text-green-400">{status}</p>}
                </div>
            </form>

            {/* contact info area giữ nguyên như bạn đã viết, không lặp lại ở đây */}
        </div>
    );
};

export default FormContact;
