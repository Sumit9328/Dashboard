import React from "react";
import Image from "next/image";
interface StudentInfo {
    student_id: string,
    student_name: string,
    class: string,
    section: string,
    phoneNumber: string;
    email: string;
    status: string;
}
const StudentCard = ({ student_info }: { student_info: StudentInfo }) => {
    if (student_info.status == "Accepted") {
        return (

            <div className="relative bg-white rounded-lg p-6 max-w-sm border overflow-hidden">
                {/* New Admission Ribbon */}
                <div
                    className="absolute top-6 right-[-52px] bg-[#FFB390] text-[#333D61] text-[12px] px-5 py-2 transform"
                    style={{ rotate: "45deg" }}
                >
                    New Admission
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
                    <p className="text-[12px] font-[100] text-[#333D61] mb-1">Student ID:
                        <span className="text-[11px] font-semibold text-[#333D61]">{student_info.student_id}</span></p>
                    <h2 className="text-[20px] font-[100] text-[#333D61] mt-0">{student_info.student_name}</h2>
                    <p className="text-[12px] font-[100] text-[#333D61] mt-1 mb-2">Class & Section:
                        <span className="text-[12px] font-semibold text-[#333D61]">{student_info.class} C</span></p>
                </div>

                {/* Contact Details */}
                <div className="mt-0 text-center mb-0">
                    <p className="text-[14px] font-[100] text-[#333D61] mb-2">{student_info.phoneNumber}</p>
                    <p className="text-[14px] font-[100] text-[#333D61]">{student_info.email}</p>
                </div>

                {/* Icons */}
                <div className="flex justify-center items-center gap-2 mt-4 text-gray-500">
                    <button className="hover:text-gray-800">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9461 6.00578H3.3372C1.61022 6.00578 0.206726 7.40927 0.206726 9.13625V15.3972H4.38069V19.5712H16.9026V15.3972H21.0765V9.13625C21.0765 7.40927 19.673 6.00578 17.9461 6.00578ZM14.8156 17.4842H6.46767V12.2667H14.8156V17.4842ZM17.9461 10.1797C17.3669 10.1797 16.9026 9.71539 16.9026 9.13625C16.9026 8.55711 17.3669 8.09276 17.9461 8.09276C18.5252 8.09276 18.9895 8.55711 18.9895 9.13625C18.9895 9.71539 18.5252 10.1797 17.9461 10.1797ZM16.9026 0.78833H4.38069V4.96229H16.9026V0.78833Z" fill="#ACB2C6" />
                        </svg>
                    </button>
                    <button className="hover:text-gray-800">
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.15853 0.78833C6.16656 0.790567 4.25681 1.58287 2.84828 2.9914C1.43974 4.39994 0.64744 6.30968 0.645203 8.30165C0.645203 11.3586 2.86445 13.8972 5.21518 16.5842C5.959 17.435 6.72912 18.315 7.41471 19.2054C7.50244 19.3192 7.61513 19.4113 7.74408 19.4748C7.87304 19.5382 8.01482 19.5712 8.15853 19.5712C8.30223 19.5712 8.44402 19.5382 8.57297 19.4748C8.70193 19.4113 8.81461 19.3192 8.90235 19.2054C9.58794 18.315 10.3581 17.435 11.1019 16.5842C13.4526 13.8972 15.6719 11.3586 15.6719 8.30165C15.6696 6.30968 14.8773 4.39994 13.4688 2.9914C12.0602 1.58287 10.1505 0.790567 8.15853 0.78833ZM8.15853 11.1192C7.60128 11.1192 7.05654 10.9539 6.59321 10.6443C6.12987 10.3347 5.76875 9.89469 5.5555 9.37986C5.34225 8.86503 5.28645 8.29853 5.39517 7.75199C5.50388 7.20545 5.77222 6.70342 6.16626 6.30938C6.56029 5.91535 7.06232 5.64701 7.60886 5.5383C8.1554 5.42958 8.72191 5.48538 9.23674 5.69863C9.75157 5.91188 10.1916 6.273 10.5012 6.73634C10.8108 7.19967 10.976 7.74441 10.976 8.30165C10.976 9.0489 10.6792 9.76554 10.1508 10.2939C9.62242 10.8223 8.90577 11.1192 8.15853 11.1192Z" fill="#ACB2C6" />
                        </svg>
                    </button>
                </div>
            </div>

        );
    }
    else if (student_info.status == "Rejected") {
        return (
            <div className="relative bg-white rounded-lg p-6 max-w-sm border overflow-hidden">
                {/* Rejected Ribbon */}
                <div
                    className="absolute top-5 right-[-34px] bg-[#D80000] text-[#ffffff] text-[12px] px-5 py-2 transform"
                    style={{ rotate: "45deg" }}
                >
                    Rejected
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
                    <button className="hover:text-gray-800">
                        <svg
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.9461 6.00578H3.3372C1.61022 6.00578 0.206726 7.40927 0.206726 9.13625V15.3972H4.38069V19.5712H16.9026V15.3972H21.0765V9.13625C21.0765 7.40927 19.673 6.00578 17.9461 6.00578ZM14.8156 17.4842H6.46767V12.2667H14.8156V17.4842ZM17.9461 10.1797C17.3669 10.1797 16.9026 9.71539 16.9026 9.13625C16.9026 8.55711 17.3669 8.09276 17.9461 8.09276C18.5252 8.09276 18.9895 8.55711 18.9895 9.13625C18.9895 9.71539 18.5252 10.1797 17.9461 10.1797ZM16.9026 0.78833H4.38069V4.96229H16.9026V0.78833Z"
                                fill="#ACB2C6"
                            />
                        </svg>
                    </button>
                    <button className="hover:text-gray-800">
                        <svg
                            width="16"
                            height="20"
                            viewBox="0 0 16 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.15853 0.78833C6.16656 0.790567 4.25681 1.58287 2.84828 2.9914C1.43974 4.39994 0.64744 6.30968 0.645203 8.30165C0.645203 11.3586 2.86445 13.8972 5.21518 16.5842C5.959 17.435 6.72912 18.315 7.41471 19.2054C7.50244 19.3192 7.61513 19.4113 7.74408 19.4748C7.87304 19.5382 8.01482 19.5712 8.15853 19.5712C8.30223 19.5712 8.44402 19.5382 8.57297 19.4748C8.70193 19.4113 8.81461 19.3192 8.90235 19.2054C9.58794 18.315 10.3581 17.435 11.1019 16.5842C13.4526 13.8972 15.6719 11.3586 15.6719 8.30165C15.6696 6.30968 14.8773 4.39994 13.4688 2.9914C12.0602 1.58287 10.1505 0.790567 8.15853 0.78833ZM8.15853 11.1192C7.60128 11.1192 7.05654 10.9539 6.59321 10.6443C6.12987 10.3347 5.76875 9.89469 5.5555 9.37986C5.34225 8.86503 5.28645 8.29853 5.39517 7.75199C5.50388 7.20545 5.77222 6.70342 6.16626 6.30938C6.56029 5.91535 7.06232 5.64701 7.60886 5.5383C8.1554 5.42958 8.72191 5.48538 9.23674 5.69863C9.75157 5.91188 10.1916 6.273 10.5012 6.73634C10.8108 7.19967 10.976 7.74441 10.976 8.30165C10.976 9.0489 10.6792 9.76554 10.1508 10.2939C9.62242 10.8223 8.90577 11.1192 8.15853 11.1192Z"
                                fill="#ACB2C6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        )


    }
    else if (student_info.status == "Queue") {
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

    }
};

export default StudentCard;
