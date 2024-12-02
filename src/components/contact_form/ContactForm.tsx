// components/ContactForm.tsx
import ModalEror from '@/app/ModalEror';
import ModalSucses from '@/app/ModalSucses';
import { postContact } from '@/services/contact.service';
import Image from 'next/image';
import { useState } from 'react';

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    question: '',
  });
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
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

    const response = await postContact({
      ...formData,
      role: parseInt(formData.role),
    });

    if (response.statusCode === 200) {
      setModal(true);
      alert('Đã gửi thành công');
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        question: '',
      });
    } else {
      setModal2(true);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div className=" -black max-h-[645px] min-h-480 max-w-[572px] xl:w-full">
      <ModalSucses modal={modal} setModal={setModal} />
      <ModalEror modal={modal2} setModal={setModal2} />
      <div className="h-full rounded-3xl ">
        <form className=" p-8 border-4 border-white rounded-3xl h-full max-w-[600px] bg-gradient-to-b from-black/[0.08] to-transparent to-[70.23%]">
          <h2 className="font-semibold text-[18px] leading-[26px]">
            Chúng tôi luôn đón nhận mọi ý kiến từ bạn
          </h2>
          <div className="flex flex-col gap-5 pt-5">
            <input
              className="shadow bg-black/[.03] text-base leading-6 appearance-none border-2 border-bg-black/[.06] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Họ và tên"
              required
            />
            <input
              className="shadow bg-black/[.03] text-base leading-6 appearance-none border-2 border-bg-black/[.06] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              className="shadow bg-black/[.03] text-base leading-6 appearance-none border-2 border-bg-black/[.06] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Số điện thoại"
              onChange={handleChange}
            />
          </div>
          <div className="pt-5">
            <textarea
              className="shadow bg-black/[.03] text-base leading-6 border-bg-black/[.06] appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[107px]"
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Nội dung"
              required
            />
          </div>
          <div className="pt-5">
            <label className="font-sans font-bold">
              Vai trò bạn muốn tham gia?
            </label>
            <div className="flex lg:flex-row flex-col items-start justify-start gap-4 w-full py-6">
              <label className="flex items-center ">
                <input
                  type="radio"
                  name="role"
                  value={0}
                  className="mr-2"
                  checked={formData.role === '0'}
                  onChange={handleChange}
                />
                Startup
              </label>

              <label className="flex items-center ">
                <input
                  type="radio"
                  name="role"
                  value={1}
                  className="mr-2"
                  checked={formData.role === '1'}
                  onChange={handleChange}
                />
                Nhà đầu tư
              </label>

              <label className="flex items-center ">
                <input
                  type="radio"
                  name="role"
                  value={2}
                  className="mr-2"
                  checked={formData.role === '2'}
                  onChange={handleChange}
                />
                Chuyên gia
              </label>
            </div>
          </div>

          <div className="flex justify-start">
            <button
              onClick={handleSubmit}
              className="flex items-center px-4 py-2 mt-3 bg-green-500 text-[18px] leading-[20px] flex gap-[8px] text-white rounded-full font-sans "
              style={{ fontWeight: 500, letterSpacing: '-2%' }}
            >
              <p>Gửi</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.51026 4.22965L18.0703 8.50965C21.9103 10.4296 21.9103 13.5696 18.0703 15.4896L9.51026 19.7696C3.75026 22.6496 1.40026 20.2896 4.28026 14.5396L5.15026 12.8096C5.37026 12.3696 5.37026 11.6396 5.15026 11.1996L4.28026 9.45965C1.40026 3.70965 3.76026 1.34965 9.51026 4.22965Z"
                  stroke="#F3F7F4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.44043 12H10.8404"
                  stroke="#F3F7F4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <ModalSucses modal={open} setModal={setOpen} />
    </div>
  );
};

export default ContactForm;
