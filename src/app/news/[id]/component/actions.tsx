import Image from 'next/image';

import {
  FacebookGrayIcon,
  LinkedInIcon,
  LinkedInIconGray,
  XIconGray,
  RivetIcon,
} from '@/components/icons';

function NewsActions() {
  return (
    <div className="relative flex flex-row gap-4 py-4 items-center w-full justify-between">
      <Image
        src="/img/logohyracap.png"
        // layout="responsive"
        alt="logo"
        className="flex-start"
        width={100}
        height={100}
      />
      <div className="flex flex-row justify-center space-x-5 rtl:space-x-reverse">
        <a
          href="https://www.facebook.com/hyraholdings/"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white color-gray"
        >
          <FacebookGrayIcon />
          <span className="sr-only">Facebook page</span>
        </a>

        <a
          href="https://x.com/hyraholdings"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <XIconGray />
          <span className="sr-only">X page</span>
        </a>
        <a
          href="https://www.linkedin.com/company/hyraholdings/"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <LinkedInIconGray />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://www.youtube.com"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <RivetIcon />
          <span className="sr-only">Link</span>
        </a>
      </div>
    </div>
  );
}

export default NewsActions;
