// components/ContactForm.tsx
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        role: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Form submitted successfully!");
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                role: "",
                message: "",
            });
        } else {
            alert("Error submitting the form.");
        }
    };

    return (
        // <form onSubmit={handleSubmit}>
        <div className="flex-1 contain-center min-h-480">
            <div className="h-full">
                <form className="flex-1 p-8 border rounded-lg shadow-lg h-full bg-[#ECECEC80]">
                    <h2 className="font-medium text-[32px] leading-[40px]">
                        Để lại thông tin và lời nhắn
                    </h2>
                    <div className="flex flex-col gap-5 pt-5">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Họ và tên"
                            required
                        />
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            placeholder="Số điện thoại"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="pt-5">
                        <label>Vai trò bạn muốn tham gia?</label>
                        <div className="flex justify-between w-full py-6">
                            <label className="flex items-center w-full">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Startup"
                                    className="mr-2"
                                    checked={formData.role === "Startup"}
                                    onChange={handleChange}
                                />
                                Startup
                            </label>

                            <label className="flex items-center w-full">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Investor"
                                    className="mr-2"
                                    checked={formData.role === "Investor"}
                                    onChange={handleChange}
                                />
                                Nhà đầu tư
                            </label>

                            <label className="flex items-center w-full">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Expert"
                                    className="mr-2"
                                    checked={formData.role === "Expert"}
                                    onChange={handleChange}
                                />
                                Chuyên gia
                            </label>
                        </div>
                    </div>
                    <div>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[200px]"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Nội dung"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="flex items-end px-4 py-2 mt-3 bg-green-500 text-white rounded-lg">
                            Gửi
                            <img
                                src="/img/icon/send.svg"
                                alt="/img/icon/send.svg"
                                className="pl-2"
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
