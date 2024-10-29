import Image from 'next/image';

export default function NewsDetail() {
  return (
      <div className='max-w-[1200px] mx-auto'> 
        <div className="relative mb-8 w-full">
            <img
                src="/img/aboutbg.jpg"
                alt="Header image"
                className="rounded-lg shadow-lg w-full h-[600px] object-cover"
                />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start  text-white">
                <h1 className="text-4xl xl:text-6xl leading-10 px-10 md:px-20 xl:px-[150px] 2xl:px-[200px] font-bold mb-4">Lễ ký kết quan hệ hợp tác với Qualcomm</h1>
        </div>
          </div>
            <div className=" w-full px-10 md:px-20 xl:px-[150px] 2xl:px-[200px] ">
    
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Hyratek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.
          </h1>
          
          <p className="mb-6 text-xs md:text-base text-gray-600">
          Hà Nội, ngày 30 tháng 8 năm 2024 – Tại buổi lễ long trọng diễn ra sáng nay, Hyratek – công ty công nghệ hàng đầu Việt Nam, đã chính thức ký kết hợp tác chiến lược với Qualcomm – tập đoàn viễn thông và bán dẫn danh tiếng toàn cầu. Đây là cột mốc quan trọng đánh dấu sự hợp tác sâu rộng giữa hai công ty trong việc phát triển các giải pháp công nghệ tiên tiến tại Việt Nam và khu vực Đông Nam Á.
          </p>
          
          
          <div className="mb-8 flex justify-center items-center">
            <Image 
              src="/img/22.png"
              alt="Privacy policy"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          
          <h2 className="text-2xl font-bold mb-4">Mục tiêu và ý nghĩa của dự án phục dựng ảnh liệt sĩ</h2>
          
          <p className="mb-6 text-xs md:text-base text-gray-600">
          Dự án phục dựng ảnh liệt sĩ bằng AI là một sáng kiến của Hyratek, sử dụng các công nghệ tiên tiến như trí tuệ nhân tạo và học máy (machine learning) để tái hiện những bức chân dung của các liệt sĩ đã hy sinh trong cuộc kháng chiến. Rất nhiều bức ảnh tư liệu về các liệt sĩ bị mờ, thiếu chi tiết, hoặc thậm chí bị hư hại hoàn toàn theo thời gian.
          </p>
          
          <p className="mb-6 text-xs md:text-base text-gray-600">
          Ông Trần Nam Chung, CEO của Hyratek, phát biểu tại buổi lễ: "Chúng tôi muốn tôn vinh những người đã cống hiến cuộc đời mình cho độc lập dân tộc. Với sự hỗ trợ từ Qualcomm, dự án này sẽ giúp phục dựng lại những hình ảnh quý giá của các liệt sĩ, giúp thân nhân và cả thế hệ sau có thể nhìn thấy và ghi nhớ."
          </p>
          <p className="mb-6 text-xs md:text-base text-gray-600">
          Dự án không chỉ có ý nghĩa về mặt công nghệ mà còn mang tính nhân văn sâu sắc, là một cách để tri ân những người đã hy sinh cho đất nước. Mỗi bức ảnh phục dựng là một câu chuyện, một kỷ niệm đáng trân trọng.
          </p>
          <h2 className="text-2xl font-bold mb-4">Vai trò của Qualcomm và công nghệ tiên tiến</h2>
          <p className="mb-6 text-xs md:text-base text-gray-600">Với vai trò là đối tác chiến lược, Qualcomm sẽ cung cấp nền tảng công nghệ mạnh mẽ và các giải pháp AI tối ưu nhất cho Hyratek. Bằng việc sử dụng các con chip hiệu suất cao và nền tảng AI tiên tiến của Qualcomm, quy trình phục dựng ảnh sẽ diễn ra nhanh hơn và chính xác hơn, ngay cả với những bức ảnh có chất lượng kém.</p>
          <p className="mb-6 text-xs md:text-base text-gray-600">Ông Alex Rogers, Phó Chủ tịch Qualcomm, chia sẻ: "Chúng tôi rất tự hào khi có cơ hội hợp tác với Hyratek trong dự án đầy ý nghĩa này. Qualcomm luôn cam kết mang công nghệ tiên tiến đến mọi lĩnh vực, và chúng tôi tin rằng trí tuệ nhân tạo có thể làm nên điều kỳ diệu, nhất là trong việc tái hiện lịch sử qua những bức chân dung."</p>
          <h2 className="text-2xl font-bold mb-4">Lộ trình phát triển và ứng dụng công nghệ AI trong dự án</h2>
          <p className="mb-6 text-xs md:text-base text-gray-600">Theo kế hoạch, Hyratek sẽ phối hợp với Qualcomm để triển khai dự án theo từng giai đoạn. Trong giai đoạn đầu, công nghệ AI sẽ được thử nghiệm với khoảng 1.000 bức ảnh liệt sĩ từ các kho tư liệu quốc gia. Sau khi đánh giá kết quả, dự án sẽ mở rộng phục dựng hàng chục nghìn bức ảnh khác với sự phối hợp của các cơ quan nhà nước và thân nhân gia đình liệt sĩ.</p>
          <div className="mb-8 flex justify-center items-center">
            <Image 
              src="/img/21.png"
              alt="Privacy policy"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="mb-6 text-xs md:text-base text-gray-600">Ngoài việc phục dựng ảnh, Hyratek cũng có kế hoạch ứng dụng công nghệ AI để tạo ra các bản phục dựng 3D, cho phép gia đình và người thân có thể nhìn thấy chân dung của các liệt sĩ dưới dạng hình ảnh chân thực, sống động.</p>
          <h2 className="text-2xl font-bold mb-4">Triển vọng và tác động của dự án</h2>
          <p className="mb-6 text-xs md:text-base text-gray-600">Dự án phục dựng ảnh liệt sĩ bằng AI của Hyratek không chỉ là một sáng kiến nhân văn, mà còn là một bước đột phá trong việc sử dụng công nghệ AI để bảo tồn lịch sử và tôn vinh những người đã hy sinh. Hyratek hy vọng rằng, với sự hợp tác cùng Qualcomm, dự án sẽ mang lại những kết quả đáng kinh ngạc và góp phần tôn vinh những hành động anh dũng của các liệt sĩ.</p>
          <p className="mb-6 text-xs md:text-base text-gray-600">Sự hợp tác này không chỉ góp phần vào sự phát triển của lĩnh vực công nghệ AI tại Việt Nam mà còn là nguồn cảm hứng cho các dự án sử dụng AI vào các mục đích nhân văn khác.</p>
        </div>
      </div>
  );
}