// components/ContactForm.tsx
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    message: '',
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

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        message: '',
      });
    } else {
      alert('Error submitting the form.');
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div className="flex-1 contain-center min-h-480">
      <div className="h-full">
        <form className="flex-1 p-8 border rounded-lg shadow-lg h-full bg-[#ECECEC80]">
          <h2 className="font-noto font-medium text-[32px] leading-[40px]">
            Để lại thông tin lời nhắn
          </h2>
          <div>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="quang"
              required
            />
          </div>
          <div>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="quang"
              required
            />
          </div>
          <div>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="quang"
              onChange={handleChange}
            />
          </div>
          <div>
            <br />
            <label>Vai trò bạn muốn tham gia?</label>
            <div className="flex justify-between w-full">
              <label className="flex items-center w-full">
                <input
                  type="radio"
                  name="role"
                  value="Startup"
                  className="mr-2"
                  checked={formData.role === 'Startup'}
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
                  checked={formData.role === 'Investor'}
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
                  checked={formData.role === 'Expert'}
                  onChange={handleChange}
                />
                Chuyên gia
              </label>
            </div>
          </div>
          <div>
            <br />
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[200px]"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="quang"
              required
            />
          </div>
          <br />
          {/* <button type="submit">Gửi</button> */}
          <button
            type="submit"
            className="bg-[#C7C7C7] text-white py-2 px-4 rounded hover:bg-green-700"
          />

          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
