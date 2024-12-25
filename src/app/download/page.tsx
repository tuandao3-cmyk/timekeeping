'use client'; // Đảm bảo rằng file này là Client Component

import { useRouter } from 'next/navigation'; // Sử dụng next/navigation thay vì next/router
import { useEffect } from 'react';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    const androidLink =
      'https://play.google.com/store/apps/details?id=your_android_app_id';
    const iosLink = 'https://apps.apple.com/app/your_ios_app_id';
    const installedAppLink = 'myapp://dev-7lpsbtmaoo16lp8f.auth0.com';

    const checkAppInstalled = (link: string, fallback: string) => {
      const start = new Date().getTime();
      // Tạo một thử nghiệm mở deep link
      window.location.href = link;

      // Kiểm tra nếu link không mở được trong một khoảng thời gian
      setTimeout(() => {
        if (new Date().getTime() - start < 2000) {
          window.location.href = fallback;
        }
      }, 1500);
    };

    if (/android/i.test(userAgent)) {
      // Thử mở ứng dụng Android
      checkAppInstalled(installedAppLink, androidLink);
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      // Thử mở ứng dụng iOS
      checkAppInstalled(installedAppLink, iosLink);
    } else {
      // Nếu không phải Android hay iOS, dẫn đến deep link mở ứng dụng
      checkAppInstalled(installedAppLink, androidLink); // Hoặc iosLink tùy vào trường hợp
    }
  }, [router]);

  return <div></div>;
}
