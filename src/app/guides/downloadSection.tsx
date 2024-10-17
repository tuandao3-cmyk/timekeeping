'use client';

import React from "react";
import styles from "@/app/guides/guide.module.css";
import Link from "next/link";
import Footer from "../Footer";
import { FiSearch } from "react-icons/fi";

const DownloadSection: React.FC = () => {
    return (
        <div className={styles.downloadSection}>
            <h2>Trải nghiệm ngay nền tảng đầu tư HyraCap</h2>
<p>Đầu tư dễ dàng - Sinh lời vững vàng</p>

<div className={styles.qrContainer}>
    <p>Quét mã QR tại đây!</p>
    <img src="/img/qrcode.png" alt="QR Code" className={styles.qrCode} />
</div>

<div className={styles.storeButtons}>
    <a href="https://play.google.com/store/apps/details?id=com.hyracap" className={styles.storeButton}>
        <img src="/img/icon/ggpl.png" alt="Google Play" />
        Tải miễn phí<br/>
        Google Play
    </a>
    <a href="https://apps.apple.com/app/hyracap/id123456789" className={styles.storeButton}>
        <img src="/img/icon/apic.png" alt="App Store" />
        Tải miễn phí<br/>
        App Store
                </a>
            </div>
        </div>
    );
};

export default DownloadSection;