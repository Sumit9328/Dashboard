import React from "react";
import Image from "next/image";

interface StudentInfo {
    student_id: string;
    student_name: string;
    class: string;
    section: string;
    phoneNumber: string;
    email: string;
    status: string;
}

const Queue = ({ student_info }: { student_info: StudentInfo }) => {
    return (
        <div className="relative bg-white rounded-lg p-6 max-w-sm border overflow-hidden">
            {/* Queue Ribbon */}
            <div
                className="absolute top-6 right-[-45px] bg-[#FFE1A5] text-[#333D61] text-[12px] px-5 py-2 transform"
                style={{ rotate: "45deg" }}
            >
                New Queue
            </div>
            <p>Student Bio</p>

            {/* Avatar */}
            <div className="flex justify-center">
                <div className="rounded-[25px]"></div>

                <div className="rounded-[75px] border-solid border-1 border-black flex justify-center items-center p-1">
                    <Image src="/images/Ellipse 17.png" alt="" width={90} height={90} />
                </div>
            </div>

            {/* Student Details */}
            <div className="text-center mt-4">
                <p className="text-[12px] font-[100] text-[#333D61] mb-1">
                    Student ID:{" "}
                    <span className="text-[11px] font-semibold text-[#333D61]">
                        {student_info.student_id}
                    </span>
                </p>
                <h2 className="text-[20px] font-[100] text-[#333D61] mt-0">
                    {student_info.student_name}
                </h2>
                <p className="text-[12px] font-[100] text-[#333D61] mt-1 mb-2">
                    Class & Section:{" "}
                    <span className="text-[12px] font-semibold text-[#333D61]">
                        {student_info.class} {student_info.section}
                    </span>
                </p>
            </div>

            {/* Contact Details */}
            <div className="mt-0 text-center mb-0">
                <p className="text-[14px] font-[100] text-[#333D61] mb-2">
                    {student_info.phoneNumber}
                </p>
                <p className="text-[14px] font-[100] text-[#333D61]">
                    {student_info.email}
                </p>
            </div>

            {/* Icons */}
            <div className="flex justify-center items-center gap-2 mt-4 text-gray-500">
                <button className="hover:text-gray-800 px-3 py-2 bg-[#FFB390] text-[12px] text-[#333D61] rounded-md">
                    Approve
                </button>
                <button className="hover:text-gray-800 px-4 py-2 border-solid border-1 border-[#333D61] text-[12px] text-[#333D61] rounded-md">
                    Reject
                </button>
            </div>
        </div>
    );
};

export default Queue;
