'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from '@/app/contact/contact.module.css';
import Link from 'next/link';

import ContactForm from '@/components/contact_form/ContactForm';
import ContactInfo from '@/components/contact_information/ContactInfo';

const Map = dynamic(() => import('./Map'), { ssr: false });

const ContactPage: React.FC = () => {
    return (
        <div className=" px-[120px] my-8 max-md:!px-8">
            <h1 className="text-4xl font-bold text-start mb-10">
                Liên hệ với chúng tôi
            </h1>
            <div className="sm:grid-cols-1 grid lg:grid-cols-2 gap-4">
                <ContactForm />
                <div className="flex-1 contain-center">
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
};
export default ContactPage;
