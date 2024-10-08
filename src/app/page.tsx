import React from 'react';
import Head from 'next/head';
import Header from '@/app/Header';
import styles from './page.module.css';
import Partner from "@/app/Partner";
import ProjectSection from "@/app/ProjectSection";
import PressSection from "@/app/PressSection";
import ArticlesSection from "@/app/ArticlesSection";
import Footer from "@/app/Footer";
const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>HYRA CAPITAL - Quỹ đầu tư Việt Nam</title>
            </Head>
            <Header/>
            <Partner/>
            <ProjectSection/>
            <ArticlesSection/>
            <PressSection/>
            <Footer/>


        </div>
    );
};

export default Home;
