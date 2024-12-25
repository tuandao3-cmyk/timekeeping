'use client'; // Đảm bảo rằng file này là Client Component
import { useRouter } from 'next/navigation'; // Sử dụng next/navigation thay vì next/router
import { useEffect } from 'react';
export default function RedirectPage() {
  const router = useRouter();
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const androidLink =
      'https://play.google.com/store/apps/details?id=com.yourapp.android'; // Link Google Play của bạn
    const iosLink = 'https://apps.apple.com/app/your-ios-app-id'; // Link App Store của bạn
    const installedAppLink = 'yourapp://open'; // Deep link mở app nếu đã cài
    if (/android/i.test(userAgent)) {
      router.push(androidLink);
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      router.push(iosLink);
    } else {
      router.push(installedAppLink); // Mở ứng dụng nếu đã cài
    }
  }, [router]);

  return <div></div>;
}

// 'use client';

// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function RedirectPage() {
//   const router = useRouter();

//   useEffect(() => {
//     const userAgent = navigator.userAgent.toLowerCase();

//     const androidLink =
//       'https://play.google.com/store/apps/details?id=your_android_app_id';
//     const iosLink = 'https://apps.apple.com/app/your_ios_app_id';
//     const installedAppLink = 'myapp://dev-7lpsbtmaoo16lp8f.auth0.com';

//     const checkAppInstalled = (link: string, fallback: string) => {
//       const start = new Date().getTime();

//       window.location.href = link;

//       setTimeout(() => {
//         if (new Date().getTime() - start < 2000) {
//           window.location.href = fallback;
//         }
//       }, 1500);
//     };

//     if (/android/i.test(userAgent)) {

//       checkAppInstalled(installedAppLink, androidLink);
//     } else if (/iphone|ipad|ipod/i.test(userAgent)) {

//       checkAppInstalled(installedAppLink, iosLink);
//     } else {

//       checkAppInstalled(installedAppLink, androidLink)
//     }
//   }, [router]);

//   return <div></div>;
// }
