import React from 'react';

const DetailCategoryPage: React.FC = () => {
  const projects = [
    {
      name: 'Công việc đã đào tạo',
      amount: '+2,985,122,684',
      icon: '/img/icon/google-docs.svg',
    },
    {
      name: 'Mô hình đào tạo',
      amount: '+2,985,122,684',
      icon: '/img/icon/google-docs.svg',
    },
    {
      name: 'Mô hình đào tạo',
      amount: '+2,985,122,684',
      icon: '/img/icon/device.svg',
    },
    {
      name: 'Tổng Hyra kiếm được',
      amount: '+2,985,122,684',
      icon: '/img/icon/device.svg',
    },
  ];
  return (
    <>
      <main className=" bg-[#F7F9FC] flex justify-center items-center">
        <div className="py-6   rounded-lg shadow-md md:max-w-[80%]">
          <div className="flex flex-col gap-3 sm:flex-row px-11 lg:px-32">
            <img
              src="/img/19.jpg"
              alt="/img/19.jpg"
              className="w-52 h-44 object-cover rounded-xl md:mr-8"
            />
            <div className="flex flex-col justify-between">
              <div className="sm:ml-10">
                <span className="text-base font-normal text-black pb-3">
                  CÔNG NGHỆ
                </span>
                <h2 className="text-3xl font-bold text-[#363636]">
                  Dự án Salala AI
                </h2>
              </div>
              <div className="lg:flex justify-start hidden ">
                <a
                  href="#"
                  className="text-green-600 text-sm font-semibold px-7 py-3 bg-white"
                >
                  Thông tin
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm font-semibold px-7 py-3"
                >
                  Pitchingdeck
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm font-semibold px-7 py-3"
                >
                  Hợp đồng mẫu
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm font-semibold px-7 py-3"
                >
                  Lộ trình tài chính
                </a>
                <a
                  href="#"
                  className="text-gray-500 text-sm font-semibold px-7 py-3"
                >
                  Kế hoạch kinh doanh
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-3 lg:hidden ">
            <a
              href="#"
              className="text-green-600 text-sm font-semibold px-7 py-3 bg-white"
            >
              Thông tin
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm font-semibold px-7 py-3"
            >
              Pitchingdeck
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm font-semibold px-7 py-3"
            >
              Hợp đồng mẫu
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm font-semibold px-7 py-3"
            >
              Lộ trình tài chính
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm font-semibold px-7 py-3"
            >
              Kế hoạch kinh doanh
            </a>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-4 bg-white px-11 py-10">
            <div className="w-full md:w-1/3 lg:w-1/3">
              <h3 className="text-xl font-bold mb-2">Thông tin</h3>
              <p className="font-normal text-lg">
                Salala là một nền tảng điện toán biên cho phép người dùng tận
                dụng phần cứng của các thiết bị biên (edge devices) để huấn
                luyện mô hình trí tuệ nhân tạo (AI).
              </p>
              <div className="mt-4 text-lg font-normal text-[#666666]">
                <p>📍 10 Anson Road #11 - 20 International Plaza Singapore</p>
                <p>👥 150 - 200</p>
                <p>
                  🌐{' '}
                  <a href="https://salala.io" className="">
                    https://salala.io
                  </a>
                </p>
              </div>
            </div>

            <div className="hidden md:block lg:block w-[1px] bg-[#DDDDDD] rounded-md"></div>

            <div className="w-full md:w-1/3 lg:w-1/3">
              <h3 className="text-xl font-bold mb-2">Dữ liệu nổi bật</h3>
              <div className="grid grid-cols-2 gap-7">
                <div className="flex flex-col bg-white shadow-lg rounded-md p-4">
                  <span className="font-normal text-lg">Vốn huy động</span>
                  <span className="font-bold text-xl text-[#009467]">$1M</span>
                </div>
                <div className="flex flex-col bg-white shadow-lg rounded-md p-4">
                  <span className="font-normal text-lg">Vốn đầu tư</span>
                  <span className="font-bold text-xl text-[#009467]">
                    $850,000
                  </span>
                </div>
                <div className="flex flex-col bg-white shadow-lg rounded-md p-4">
                  <span className="font-normal text-lg">Tổng Slot</span>
                  <span className="font-bold text-xl text-[#009467]">20</span>
                </div>
                <div className="flex flex-col bg-white shadow-lg rounded-md p-4">
                  <span className="font-normal text-lg">Giá trị/slot</span>
                  <span className="font-bold text-xl text-[#009467]">
                    $50,000
                  </span>
                </div>
                <div className="flex flex-col bg-white shadow-lg rounded-md p-4">
                  <span className="font-normal text-lg">Nhà đầu tư</span>
                  <span className="font-bold text-xl text-[#009467]">18</span>
                </div>
                <div className="flex flex-col bg-white shadow-lg rounded-md p-4">
                  <span className="font-normal text-lg">Vòng đầu tư</span>
                  <span className="font-bold text-xl text-[#009467]">
                    Series C
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:block lg:block w-[1px] bg-[#DDDDDD] rounded-md"></div>

            <div className="w-full md:w-1/3 lg:w-1/3">
              <h3 className="text-xl font-bold mb-2">Hoạt động gần đây</h3>
              <div className="space-y-2 text-gray-500">
                <div className="flex items-start gap-2">
                  <img
                    src="/img/icon/megaphone.svg"
                    alt="/img/icon/megaphone.svg"
                    className="pt-2"
                  />
                  <div className="flex flex-col">
                    <div className="border-b pb-2">
                      <span className="block text-gray-700">
                        Tin tức 10/10/2024
                      </span>
                    </div>
                    <p>
                      Dự án SalalaAI tăng trưởng mạnh mẽ với lượng thiết bị tăng
                      liên tục với lượt tải đã đạt trên 1M
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img
                    src="/img/icon/megaphone.svg"
                    alt="/img/icon/megaphone.svg"
                    className="pt-2"
                  />
                  <div className="flex flex-col">
                    <div className="border-b pb-2">
                      <span className="block text-gray-700">
                        Tin tức 10/10/2024
                      </span>
                    </div>
                    <p>
                      Dự án SalalaAI tăng trưởng mạnh mẽ với lượng thiết bị tăng
                      liên tục với lượt tải đã đạt trên 1M
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img
                    src="/img/icon/megaphone.svg"
                    alt="/img/icon/megaphone.svg"
                    className="pt-2"
                  />
                  <div className="flex flex-col">
                    <div className="border-b pb-2">
                      <span className="block text-gray-700">
                        Tin tức 10/10/2024
                      </span>
                    </div>
                    <p>
                      Dự án SalalaAI tăng trưởng mạnh mẽ với lượng thiết bị tăng
                      liên tục với lượt tải đã đạt trên 1M
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a href="#" className="text-green-600 font-semibold">
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'linear-gradient(90deg, #2A7082 0%, #73E097 100%)',
            }}
            className="mx-11 rounded-xl"
          >
            <div className="flex flex-col lg:flex-row py-9 px-11">
              <div className="w-full lg:w-1/3 sm:flex sm:gap-3 xs:block md:block lg:block">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Triển vọng tăng trưởng
                  </h3>
                  <p className="text-base font-bold text-white">
                    Dự án Salala AI đã huy đông được tổng cộng 220,5 triệu đô la
                    vòng đầu tư Series C. Nguồn đầu tư mới nhất được huy động
                    vào ngày 10/10/2024.Với 20 slot được tài trợ bởi 18 nhà đầu
                    tư.
                  </p>
                </div>
                <img
                  src="/img/raise.png"
                  alt="/img/raise.png"
                  className="m-auto"
                />
              </div>
              <div className="w-full lg:w-2/3 lg:ml-10">
                <h5 className="text-xl font-bold text-white mb-4">Thông số</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-10 gap-3">
                  {projects.map((project, index) => (
                    <div className="flex gap-3" key={index}>
                      <img
                        src={project.icon}
                        alt={project.icon}
                        className=" bg-white p-[16px] rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="text-xl font-normal text-white">
                          {project.name}
                        </p>
                        <span className="text-2xl font-bold text-white">
                          {project.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-11 pt-6 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white py-6 px-11 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Chi tiết</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
                  <li className="flex">
                    <div className="m-3 w-1 h-1 rounded-full bg-[#444444]"></div>
                    <div className="text-lg font-normal">
                      <span className="text-[#444444]">Lĩnh vực đầu tư</span>
                      <p className="text-black">Công nghệ</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="m-3 w-1 h-1 rounded-full bg-[#444444]"></div>
                    <div className="text-lg font-normal">
                      <span className="text-[#444444]">Trụ sở chính</span>{' '}
                      <p className="text-black">Singapore</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="m-3 w-1 h-1 rounded-full bg-[#444444]"></div>
                    <div className="text-lg font-normal">
                      <span className="text-[#444444]">Người sáng lập</span>
                      <p className="text-black">Trần Nam Chung</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="m-3 w-1 h-1 rounded-full bg-[#444444]"></div>
                    <div className="text-lg font-normal">
                      <span className="text-[#444444]">Email</span>{' '}
                      <p className="text-black">info@hyraetek.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="m-3 w-1 h-1 rounded-full bg-[#444444]"></div>
                    <div className="text-lg font-normal">
                      <span className="text-[#444444]">Ngày thành lập</span>{' '}
                      <p className="text-black">20/02/2020</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="m-3 w-1 h-1 rounded-full bg-[#444444]"></div>
                    <div className="text-lg font-normal">
                      <span className="text-[#444444]">
                        Tình trạng hoạt động
                      </span>
                      <p className="text-black">Đang hoạt động</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="m-3 w-1 h-1 rounded-full bg-[#444444]"></div>
                    <div className="text-lg font-normal">
                      <span className="text-[#444444]">Tên công ty</span>
                      <p className="text-black">Công ty cổ phần Hyraetek</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="m-3 w-1 h-1 rounded-full bg-[#444444]"></div>
                    <div className="text-lg font-normal">
                      <span className="text-[#444444]">Số điện thoại</span>
                      <p className="text-black">(+84) 58 8668 777</p>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-lg font-normal text-black">
                  Dự án Salala là một ứng dụng di động chuyên cung cấp các giải
                  pháp huấn luyện trí tuệ nhân tạo (AI) trên các thiết bị biên.
                  Phạm vi của dự án bao gồm việc phát triển các tính năng huấn
                  luyện mô hình AI ngay trên thiết bị của bạn và hỗ trợ huấn
                  luyện phát triển mô hình AI trên cloud.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Có thể bạn quan tâm</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-5 py-3">
                    <img
                      src="/img/16.jpg"
                      alt="/img/16.jpg"
                      className="w-[53px] h-[48px] object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">Hyperas Chain</p>
                      <p className="text-sm text-gray-500">
                        Mạng lưới tập trung định hình tương lai của AI
                      </p>
                    </div>
                  </li>
                  <div className="w-full h-[1px] bg-[#ccc]"></div>
                  <li className="flex items-center gap-5 py-3">
                    <img
                      src="/img/17.jpg"
                      alt="/img/17.jpg"
                      className="w-[53px] h-[48px] object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">Hyperas Chain</p>
                      <p className="text-sm text-gray-500">
                        Mạng lưới tập trung định hình tương lai của AI
                      </p>
                    </div>
                  </li>
                  <div className="w-full h-[1px] bg-[#ccc]"></div>
                  <li className="flex items-center gap-5 py-3">
                    <img
                      src="/img/18.jpg"
                      alt="/img/18.jpg"
                      className="w-[53px] h-[48px] object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">Hyperas Chain</p>
                      <p className="text-sm text-gray-500">
                        Mạng lưới tập trung định hình tương lai của AI
                      </p>
                    </div>
                  </li>
                  <div className="w-full h-[1px] bg-[#ccc]"></div>
                  <li className="flex items-center gap-5 py-3">
                    <img
                      src="/img/19.jpg"
                      alt="/img/19.jpg"
                      className="w-[53px] h-[48px] object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">Hyperas Chain</p>
                      <p className="text-sm text-gray-500">
                        Mạng lưới tập trung định hình tương lai của AI
                      </p>
                    </div>
                  </li>
                  <div className="w-full h-[1px] bg-[#ccc]"></div>
                  <div className="flex justify-center">
                    <a href="#" className="text-green-600 font-semibold">
                      Tìm hiểu thêm
                    </a>
                  </div>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="w-1/2 p-2 text-center border rounded-s font-bold text-lg">
                        Thuật ngữ
                      </th>
                      <th className="w-1/2 p-2 text-center border rounded-s font-bold text-lg">
                        Mô tả
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pl-8 pt-6">
                        Huấn luyện AI <br /> (Training AI)
                      </td>
                      <td className="p-2 pt-6">
                        Training AI (Huấn luyện AI) là quá trình trong đó một mô
                        hình học máy hoặc mạng nơ-ron học từ dữ liệu để thực
                        hiện một nhiệm vụ cụ thể, chẳng hạn như phân loại hình
                        ảnh, nhận dạng giọng nói, dự đoán, hoặc đưa ra quyết
                        định.
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-8 pt-6">
                        Cụm thiết bị <br /> (Cluster)
                      </td>
                      <td className="p-2 pt-6">
                        Điện toán biên (Edge Computing) là một mô hình tính toán
                        phân tán trong đó việc xử lý dữ liệu được thực hiện gần
                        với nơi dữ liệu được tạo ra hoặc thu thập, thay vì
                        chuyển toàn bộ dữ liệu về một trung tâm dữ liệu hoặc đám
                        mây để xử lý. Mục tiêu chính của điện toán biên là giảm
                        độ trễ, tiết kiệm băng thông và cải thiện hiệu suất ứng
                        dụng.
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-8 py-6">Cum thiết bị</td>
                      <td className="p-2 py-6">
                        Là tập hợp các thiết bị active do người dùng trực tiếp
                        giới thiệu.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div
                  style={{
                    background:
                      'linear-gradient(180deg, #FFFFFF 0%, #DCFFE8 100%)',
                  }}
                  className="bg-white p-6 rounded-xl shadow"
                >
                  <h2 className="text-lg font-bold mb-4">
                    Cập nhật thông tin mới nhất
                  </h2>
                  <form className="flex gap-2">
                    <input
                      className="w-full p-3 border rounded-lg"
                      type="text"
                      placeholder="Nhập email của bạn"
                    />
                    {/* <input type="email" placeholder="Nhập email của bạn" className="w-full p-3 border rounded-lg"> */}
                    <button className="flex items-center px-4 bg-green-500 text-white rounded-lg">
                      Gửi
                      <img
                        src="/img/icon/send.svg"
                        alt="/img/icon/send.svg"
                        className="px-4"
                      />
                    </button>
                  </form>
                </div>
                <h2 className="text-xl font-bold mt-11 mb-5">
                  Những câu hỏi thường gặp
                </h2>
                <ul className="list-disc list-inside space-y-4 text-xl font-normal">
                  <li>Dự án Salala hoạt động như thế nào?</li>
                  <li>Những lợi ích đầu tư và HyraCap là gì?</li>
                  <li>Làm sao để tận dụng các lợi thế trên HyraCap?</li>
                  <li>Mạng lưới tập trung định hình tương lai của AI?</li>
                </ul>
                <div className="flex justify-center py-6">
                  <a href="#" className="text-green-600 font-semibold">
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default DetailCategoryPage;
