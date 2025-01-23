"use client";
import Image from "next/image";
import LeftSlideBar from "../leftslider";
// import { useState } from "react";
import React, { useState } from 'react';


export default function Home() {
    // const [valueImage, setvalueImage] = useState(null);
    const [valueImage, setvalueImage] = React.useState<File | null>(null);
    const [formData, setFormData] = useState({
        studentName: "",
        fatherName: "",
        motherName: "",
        dob: "",
        classAdmission: "",
        section: "",
        phoneNo: "",
        emailId: "",
        houseNo: "",
        streetNo: "",
        city: "",
        state: "",
        zipCode: "",
        landmark: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };
    

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setvalueImage(file);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const submissionData = new FormData();
        Object.keys(formData).forEach((key) => {
            submissionData.append(key, formData[key as keyof typeof formData]);
        });

        if (valueImage) {
            submissionData.append("image", valueImage);
        }

        // Logic to send `submissionData` to a server
        console.log("Form Submitted!");
    };
    
    return (
        <>
            <section>
                <div className="flex">
                    <LeftSlideBar />
                    <div className="w-[calc(100vw_-_310px)]">
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-md-9 ff-aTypeDisplay">
                                    <div className="container-fluid p-0">
                                        <div
                                            className="row align-items-center p-4 mt-4 mb-1"
                                            style={{ borderBottom: "1px solid #E8E8E880" }}
                                        >
                                            <div className="col-md-4 d-flex align-items-center">
                                                <p className="text-[20px] font-[100] text-[#314061] mb-0">
                                                    Dashboard
                                                </p>
                                            </div>

                                            <div className="col-md-6 flex items-center">
                                                <div className="relative w-full">
                                                    <input
                                                        type="text"
                                                        className="w-full font-[100] bg-gray-100 rounded-full py-2 pl-4 pr-10 border border-gray-100 focus:outline-none text-[12px] placeholder-gray-400"
                                                        placeholder="Search"
                                                    />
                                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                                        <svg
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 22 22"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M16.5 16.5L21 21"
                                                                stroke="#B6B6B5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10Z"
                                                                stroke="#B6B6B5"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="col-md-2 d-flex align-items-center justify-content-center">
                                                <div
                                                    className="row align-items-center me-4"
                                                    style={{ marginBottom: 0 }}
                                                >
                                                    <div
                                                        className="col-md-6"
                                                        style={{ paddingRight: "5px" }}
                                                    >
                                                        <Image
                                                            src="/images/Vector.png"
                                                            alt=""
                                                            width={22}
                                                            height={22}
                                                        />
                                                    </div>
                                                    <div
                                                        className="col-md-6 d-flex align-items-center"
                                                        style={{ paddingLeft: "5px" }}
                                                    >
                                                        <span className="text-[15px] font-[100]">EN</span>
                                                        <span style={{ marginLeft: "5px" }}>
                                                            <svg
                                                                width="8"
                                                                height="5"
                                                                viewBox="0 0 8 5"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.71835 4.46141C3.62056 4.46198 3.52362 4.44323 3.43309 4.40626C3.34255 4.36928 3.26021 4.31479 3.19078 4.24593L0.218528 1.27368C0.0786071 1.13376 0 0.943981 0 0.746102C0 0.548224 0.0786071 0.358449 0.218528 0.218528C0.35845 0.0786067 0.548224 0 0.746103 0C0.943981 0 1.13376 0.0786067 1.27368 0.218528L3.71835 2.67063L6.16303 0.225959C6.30518 0.104226 6.48802 0.0406147 6.67504 0.0478381C6.86205 0.0550615 7.03945 0.132587 7.17178 0.264923C7.30412 0.397258 7.38164 0.574656 7.38886 0.761667C7.39609 0.948678 7.33248 1.13153 7.21074 1.27368L4.2385 4.24593C4.10009 4.3832 3.91329 4.46059 3.71835 4.46141Z"
                                                                    fill="#2D2D2D"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Third Column with fixed width of 200px */}
                                <div className="col-md-3 mt-5">
                                    <div className="col-12">
                                        <div className="row ">
                                            <div className="col-md-4 mt-2 d-flex justify-content-end align-items-center mb-4">
                                                <svg
                                                    width="22"
                                                    height="16"
                                                    viewBox="0 0 28 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M24.5417 0.185181H2.72685C1.22027 0.185181 0.0136342 1.40545 0.0136342 2.91203L0 19.2731C0 20.7797 1.22027 22 2.72685 22H24.5417C26.0483 22 27.2685 20.7797 27.2685 19.2731V2.91203C27.2685 1.40545 26.0483 0.185181 24.5417 0.185181ZM24.5417 4.99807C24.5417 5.39671 24.3363 5.76724 23.9983 5.97851L15.2859 11.4237C14.2754 12.0553 12.9931 12.0553 11.9826 11.4237L3.27026 5.97851C2.93221 5.76723 2.72685 5.39671 2.72685 4.99807C2.72685 4.08997 3.72574 3.53634 4.49581 4.01763L11.9826 8.69686C12.9931 9.32845 14.2754 9.32845 15.2859 8.69686L22.7727 4.01763C23.5428 3.53633 24.5417 4.08997 24.5417 4.99807Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="col-md-2 d-flex justify-content-center align-items-center mt-2 mb-4">
                                                <svg
                                                    width="15"
                                                    height="22"
                                                    viewBox="0 0 20 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M19.7469 16.1195C19.1229 15.0483 18.3789 13.0155 18.3789 9.41453V8.67034C18.3789 4.02576 14.6435 0.219394 10.0521 0.18539C10.0306 0.185285 10.0094 0.185181 9.98795 0.185181C7.7628 0.185324 5.62883 1.06937 4.05547 2.64284C2.48211 4.21632 1.59823 6.35035 1.59825 8.5755V9.41453C1.59825 13.0151 0.853958 15.048 0.229602 16.1191C0.0805734 16.374 0.00146174 16.6638 0.000258084 16.9591C-0.00094557 17.2544 0.0758012 17.5448 0.222746 17.8009C0.369692 18.057 0.581631 18.2699 0.837156 18.4179C1.09268 18.5659 1.38274 18.6438 1.67804 18.6439H18.2983C18.5935 18.6438 18.8836 18.5659 19.1391 18.4179C19.3946 18.27 19.6065 18.0572 19.7535 17.8011C19.9004 17.545 19.9772 17.2547 19.976 16.9594C19.9749 16.6642 19.8959 16.3744 19.7469 16.1195ZM13.3368 20.3219H6.62455C6.40203 20.3219 6.18862 20.4103 6.03127 20.5677C5.87392 20.725 5.78552 20.9384 5.78552 21.161C5.78552 21.3835 5.87392 21.5969 6.03127 21.7542C6.18862 21.9116 6.40203 22 6.62455 22H13.3368C13.5593 22 13.7727 21.9116 13.9301 21.7542C14.0874 21.5969 14.1758 21.3835 14.1758 21.161C14.1758 20.9384 14.0874 20.725 13.9301 20.5677C13.7727 20.4103 13.5593 20.3219 13.3368 20.3219Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="col-md-2 mt-2 d-flex justify-content-center align-items-center mb-4">
                                                <Image
                                                    src="/images/Ellipse 3.png"
                                                    alt="Profile Picture"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>

                                            <div className="col-md-4 ">
                                                <p className="text-[11px] font-[100] m-0">
                                                    Mr. Sukhee lal
                                                </p>
                                                <p className="text-[9px] font-[100]">Principal</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="p-4">
                                        <h1 className="text-[20px] font-[100] mb-3">
                                            Add New Student
                                        </h1>
                                        <div className="h-[0.5px] w-[100%] bg-black mx-auto mb-1"></div>
                                    </div>

                                    <section className="mb-6 ps-4">
                                        <h2 className="text-[18px] font-[100]">
                                            Student Information
                                        </h2>
                                        <p className="text-[12px] font-[100] mb-4">
                                            Enter the details of the student
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="studentName"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Student Name*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="studentName"
                                                        className="form-control font-[100]"
                                                        value={formData.studentName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* Father Name */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="fatherName"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Father Name*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fatherName"
                                                        className="form-control font-[100]"
                                                        value={formData.fatherName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="fatherName"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Upload Student Image*
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="ImageUpload"
                                                        className="form-control font-[100]"
                                                        onChange={handleImageChange}
                                                        accept="image/*"
                                                    />
                                                </div>
                                            </div>

                                            {/* Mother's Name */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="motherName"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Mother&apos;s Name*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="motherName"
                                                        className="form-control font-[100]"
                                                        value={formData.motherName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* Date of Birth */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="dob"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Date of Birth*
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="dob"
                                                        className="form-control w-64 font-[100]"
                                                        value={formData.dob}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* Class Admission */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="classAdmission"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        In which class has he/she taken admission?
                                                    </label>
                                                    <select
                                                        id="classAdmission"
                                                        className="form-select font-[100]"
                                                        value={formData.classAdmission}
                                                        onChange={handleChange}
                                                    >
                                                        <option>Select Class</option>
                                                        <option>Class 1</option>
                                                        <option>Class 2</option>
                                                        {/* Add more classes as needed */}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Section */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="section"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Which section has he/she got?
                                                    </label>
                                                    <select
                                                        id="section"
                                                        className="form-select w-64 font-[100]"
                                                        value={formData.section}
                                                        onChange={handleChange}
                                                    >
                                                        <option>Select Section</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        {/* Add more sections as needed */}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="p-4 mt-0">
                                        <div className="h-[0.5px] w-[100%] bg-black mx-auto mb-1"></div>
                                    </div>

                                    <section className="mb-6 ps-4">
                                        <h2 className="text-[18px] font-[100]">
                                            Contact Information
                                        </h2>
                                        <p className="text-[12px] font-[100] mb-4">
                                            Enter the details of the student contact information
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="phoneNo"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Phone No*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="phoneNo"
                                                        className="form-control font-[100]"
                                                        value={formData.phoneNo}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="emailId"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Email Id*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="emailId"
                                                        className="form-control font-[100]"
                                                        value={formData.emailId}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="p-3">
                                        <div className="h-[0.5px] w-[100%] bg-black mx-auto mb-1"></div>
                                    </div>

                                    <section className="mb-6 ps-3">
                                        <h2 className="text-[18px] font-[100]">Student Address</h2>
                                        <p className="text-[12px] font-[100] mb-4">
                                            Enter the student address details
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="houseNo"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        House/ Flat No.*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="houseNo"
                                                        className="form-control font-[100]"
                                                        value={formData.houseNo}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* Street No */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="streetNo"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Street No.*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="streetNo"
                                                        className="form-control font-[100]"
                                                        value={formData.streetNo}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* City */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="city"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        City*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        className="form-control font-[100]"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* State */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="state"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        State*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="state"
                                                        className="form-control font-[100]"
                                                        value={formData.state}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* Zip Code */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="zipCode"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Zip Code*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="zipCode"
                                                        className="form-control font-[100]"
                                                        value={formData.zipCode}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* Landmark */}
                                            <div className="col-md-6 mb-4">
                                                <div className="col-md-8">
                                                    <label
                                                        htmlFor="landmark"
                                                        className="block text-[12px] font-[100] mb-1"
                                                    >
                                                        Landmark*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="landmark"
                                                        className="form-control font-[100]"
                                                        value={formData.landmark}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="d-flex justify-content-start gap-10">
                                                    <button className="btn py-1 px-5 btn-outline-secondary text-black font-[100]">Cancel</button>
                                                    <button
                                                        className="btn py-2 px-5 text-white bg-black border border-black"
                                                        type="submit"
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </section>

                                </form>

                                {/* Buttons */}


                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
