"use client";
import dynamic from "next/dynamic";
import React from "react";
import styles from "@/app/contact/contact.module.css";
import Link from "next/link";
import Footer from "../Footer";
import ContactForm from "@/components/contact_form/ContactForm";
import ContactInfo from "@/components/contact_information/ContactInfo";

const Map = dynamic(() => import("./Map"), { ssr: false });

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Liên hệ với chúng tôi
      </h1>
      <div className="sm:grid-cols-1 grid lg:grid-cols-2 gap-4">
        {/* Left box: Contact Form */}

        <ContactForm />

        {/* Right box: Contact Information */}
        {/* <div className="flex-1 p-8 border rounded-lg shadow-lg max-w-md h-full"> */}
        <div className="flex-1 contain-center">
          <ContactInfo />
        </div>
        {/* Embed the map inside ContactInfo */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default ContactPage;
