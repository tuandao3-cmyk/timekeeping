import { formatDateTimeVn } from '@/util/util';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NewsItemProps {
  index: number;
  id: number;
  title: string;
  link_img: string;
  blog_category: any;
  updated_at: string;
  description: string;
}

function NewsItem(props: NewsItemProps) {
  const { index, id, link_img, blog_category, updated_at, title, description } =
    props;
  const router = useRouter();
  return (
    <div
      key={index}
      className={` rounded-lg md:flex flex-col gap-[16px]  shadow-lg hidden  p-5 hover:scale-105 transition ease-in-out duration-150 hover:cursor-pointer  ${
        index === 1
          ? 'p-4 lg:row-span-2 lg:col-span-1 bg-[#07212C] md:row-span-1 col-span-1 '
          : 'bg-white '
      }`}
      onClick={() => router.push(`/news/${id}`)}
    >
      <Image
        width={320}
        height={245}
        src={
          link_img[0] ||
          'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
        }
        alt=""
        className={`w-full object-cover object-center rounded-lg ${
          index === 1 ? 'md:h-[245px] ' : 'md:h-[234px]'
        }`}
      />
      <div className=" flex flex-col justify-between flex-grow">
        <div>
          <Link
            href={`news/${id}` || '#'}
            className="md:text-[15px]  text-[#579DFF]  text-sm font-semibold"
          >
            {blog_category?.name || 'TIN TÀI CHÍNH'}
          </Link>
          <h1
            className={` font-bold mt-3 line-clamp-2 text-lg ${index === 1 ? 'text-white ' : 'text-[#151515] capitalize  '}`}
          >
            {title}
          </h1>
          <p
            className={`text-sm line-clamp-4 mt-3 ${index === 1 ? 'text-[#CBCBCD]' : 'text-gray-600'}`}
          >
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center text-sm mt-8">
          <p
            className={`flex flex-row items-center gap-2 ${index === 1 ? 'text-[#CBCBCD]' : 'text-gray-600'}`}
          >
            <Calendar size={16} /> {formatDateTimeVn(updated_at)}
          </p>
          <a
            href={`news/${id}` || '#'}
            className={`md:px-6 hover:bg-[#48B96D] hover:text-white md:py-3 px-3 py-2 ${index === 1 ? 'text-[#FFFFFF]/90 border-[#2f454e]' : 'text-[#000000]/90 border-[#c2c2c2] mx-4'} font-medium border-[1px] mb-2 rounded-full `}
          >
            Đọc thêm
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
