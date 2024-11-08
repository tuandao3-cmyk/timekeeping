'use client';
import {
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/icons';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';

import { getNewsDetail, getNews } from '@/services/news.service';
import { useEffect, useState } from 'react';
import { Page } from '@/type/page.type';

const NewsDetail: React.FC = ({ params, searchParams }: any) => {
  const [dataNews, setDataNews] = useState<any>({});
  const [dataList, setDataList] = useState<any>([]);
  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['news', params.id],
    queryFn: () => getNewsDetail(params.id),
  });
  const {
    data: data1,
    error: error1,
    isLoading: isLoading1,
    isError: isError1,
    isSuccess: isSuccess1,
  } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(Page),
  });

  useEffect(() => {
    if (isSuccess1) {
      console.log(data1?.data);

      setDataList(data1?.data);
    }
  }, [data1]);

  useEffect(() => {
    if (isSuccess) {
      console.log(data?.data);

      setDataNews(data?.data);
    }
  }, [data]);

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const newsData = [
    {
      title:
        'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
      date: '30/08/2024',
      imageUrl: '/img/news/newsimg3.png',
      link: '/news/newsdetail',
      text: 'Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công...',
    },
    {
      title:
        'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
      date: '30/08/2024',
      imageUrl: '/img/news/newsimg4.png',
      link: '/news/newsdetail',
      text: 'Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công...',
    },
    {
      title:
        'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
      date: '30/08/2024',
      imageUrl: '/img/news/newsimg5.png',
      link: '/news/newsdetail',
      text: 'Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công...',
    },
  ];

  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center">
        <div className="w-full max-w-[1200px] p-8 ">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-fit rounded-full bg-[#000000]/10 text-sm font-semibold text-[#000000]/50 px-2 py-1">
                News
              </div>
              <div className="text-sm font-semibold text-[#000000]/50">
                5 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold  mb-4">
              {dataNews?.title}
            </h1>
          </div>

          <div className="relative flex flex-row gap-4 py-4 items-center">
            <img
              src="/img/logohyracap.png"
              alt="logo"
              className="flex-start"
              width={100}
              height={100}
            />
            <div className="flex flex-row justify-center space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FacebookIcon />
                <span className="sr-only">Facebook page</span>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <XIcon />
                <span className="sr-only">X page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <YouTubeIcon />
                <span className="sr-only">Youtube page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <LinkedInIcon />
                <span className="sr-only">LinkedIn page</span>
              </a>
            </div>
          </div>

          <div className="mb-8 flex justify-center items-center">
            <Image
              src={
                dataNews?.link_img
                  ? dataNews?.link_img[0]
                  : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
              }
              loading="lazy"
              alt="Privacy policy"
              width={1200}
              height={600}
              className="w-full max-w-[1200px] max-h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* <p className="mb-6 text-xs md:text-base text-gray-600">
            Hà Nội, ngày 30 tháng 8 năm 2024 – Tại buổi lễ long trọng diễn ra
            sáng nay, Hyratek – công ty công nghệ hàng đầu Việt Nam, đã chính
            thức ký kết hợp tác chiến lược với Qualcomm – tập đoàn viễn thông và
            bán dẫn danh tiếng toàn cầu. Đây là cột mốc quan trọng đánh dấu sự
            hợp tác sâu rộng giữa hai công ty trong việc phát triển các giải
            pháp công nghệ tiên tiến tại Việt Nam và khu vực Đông Nam Á.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Mục tiêu và ý nghĩa của dự án phục dựng ảnh liệt sĩ
          </h2>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Dự án phục dựng ảnh liệt sĩ bằng AI là một sáng kiến của Hyratek, sử
            dụng các công nghệ tiên tiến như trí tuệ nhân tạo và học máy
            (machine learning) để tái hiện những bức chân dung của các liệt sĩ
            đã hy sinh trong cuộc kháng chiến. Rất nhiều bức ảnh tư liệu về các
            liệt sĩ bị mờ, thiếu chi tiết, hoặc thậm chí bị hư hại hoàn toàn
            theo thời gian.
          </p>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Ông Trần Nam Chung, CEO của Hyratek, phát biểu tại buổi lễ: "Chúng
            tôi muốn tôn vinh những người đã cống hiến cuộc đời mình cho độc lập
            dân tộc. Với sự hỗ trợ từ Qualcomm, dự án này sẽ giúp phục dựng lại
            những hình ảnh quý giá của các liệt sĩ, giúp thân nhân và cả thế hệ
            sau có thể nhìn thấy và ghi nhớ."
          </p>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Dự án không chỉ có ý nghĩa về mặt công nghệ mà còn mang tính nhân
            văn sâu sắc, là một cách để tri ân những người đã hy sinh cho đất
            nước. Mỗi bức ảnh phục dựng là một câu chuyện, một kỷ niệm đáng trân
            trọng.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Vai trò của Qualcomm và công nghệ tiên tiến
          </h2>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Với vai trò là đối tác chiến lược, Qualcomm sẽ cung cấp nền tảng
            công nghệ mạnh mẽ và các giải pháp AI tối ưu nhất cho Hyratek. Bằng
            việc sử dụng các con chip hiệu suất cao và nền tảng AI tiên tiến của
            Qualcomm, quy trình phục dựng ảnh sẽ diễn ra nhanh hơn và chính xác
            hơn, ngay cả với những bức ảnh có chất lượng kém.
          </p>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Ông Alex Rogers, Phó Chủ tịch Qualcomm, chia sẻ: "Chúng tôi rất tự
            hào khi có cơ hội hợp tác với Hyratek trong dự án đầy ý nghĩa này.
            Qualcomm luôn cam kết mang công nghệ tiên tiến đến mọi lĩnh vực, và
            chúng tôi tin rằng trí tuệ nhân tạo có thể làm nên điều kỳ diệu,
            nhất là trong việc tái hiện lịch sử qua những bức chân dung."
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Lộ trình phát triển và ứng dụng công nghệ AI trong dự án
          </h2>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Theo kế hoạch, Hyratek sẽ phối hợp với Qualcomm để triển khai dự án
            theo từng giai đoạn. Trong giai đoạn đầu, công nghệ AI sẽ được thử
            nghiệm với khoảng 1.000 bức ảnh liệt sĩ từ các kho tư liệu quốc gia.
            Sau khi đánh giá kết quả, dự án sẽ mở rộng phục dựng hàng chục nghìn
            bức ảnh khác với sự phối hợp của các cơ quan nhà nước và thân nhân
            gia đình liệt sĩ.
          </p>

          <div className="mb-8 flex justify-center items-center">
            <Image
              src="/img/news/chitiet1.png"
              alt="Privacy policy"
              width={1200}
              height={720}
              className="w-full max-w-[1200px] max-h-[720px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Ngoài việc phục dựng ảnh, Hyratek cũng có kế hoạch ứng dụng công
            nghệ AI để tạo ra các bản phục dựng 3D, cho phép gia đình và người
            thân có thể nhìn thấy chân dung của các liệt sĩ dưới dạng hình ảnh
            chân thực, sống động.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Triển vọng và tác động của dự án
          </h2>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Dự án phục dựng ảnh liệt sĩ bằng AI của Hyratek không chỉ là một
            sáng kiến nhân văn, mà còn là một bước đột phá trong việc sử dụng
            công nghệ AI để bảo tồn lịch sử và tôn vinh những người đã hy sinh.
            Hyratek hy vọng rằng, với sự hợp tác cùng Qualcomm, dự án sẽ mang
            lại những kết quả đáng kinh ngạc và góp phần tôn vinh những hành
            động anh dũng của các liệt sĩ.
          </p>

          <p className="mb-6 text-xs md:text-base text-gray-600">
            Sự hợp tác này không chỉ góp phần vào sự phát triển của lĩnh vực
            công nghệ AI tại Việt Nam mà còn là nguồn cảm hứng cho các dự án sử
            dụng AI vào các mục đích nhân văn khác.
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: dataNews?.content }}></div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full bg-[#F3F7F4] mx-auto">
        <div className="max-w-[1280px] my-10 px-5">
          <div className="text-3xl md:text-4xl w-full text-left lg:text-5xl font-bold mb-4 ">
            Bài viết liên quan
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataList.map((news: any, index: number) => (
              <>
                <div
                  key={index}
                  className={`rounded-lg p-2 overflow-hidden shadow-sm hover:scale-105 transition ease-in-out duration-100 hover:shadow-lg ${'bg-[#F3F7F4] md:max-h-[517px]'}`}
                >
                  <img
                    src={
                      news?.link_img ||
                      'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
                    }
                    alt=""
                    className={`w-full object-cover object-center rounded-lg ${'md:h-[234px]'}`}
                  />
                  <div className="mt-3">
                    <Link
                      href={`/${news.id}` || '#'}
                      className="md:text-[15px] text-[#579DFF] text-sm font-semibold"
                    >
                      {news?.blog_category?.name || 'CÔNG NGHỆ'}
                    </Link>
                    <h1
                      className={`font-bold mt-3 line-clamp-2 text-lg ${'text-[#151515]'}`}
                    >
                      {news.title}
                    </h1>
                    <p className={`text-sm mt-3 ${'text-gray-600'}`}>
                      {news.text}
                    </p>
                    <div className="flex justify-between items-center text-sm mt-8">
                      <p
                        className={`flex flex-row items-center gap-2 ${'text-gray-600'}`}
                      >
                        <Calendar size={16} /> {news.date}
                      </p>
                      <a
                        href={`${news.id}` || '#'}
                        className={`md:px-6 md:py-3 px-3 py-2 ${'text-[#000000]/90 border-[#000000]/90 mx-4'} font-medium border-[1px] mb-2 rounded-full`}
                      >
                        Đọc thêm
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
