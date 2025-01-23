"use client";

import Image from "next/image";
import LeftSlideBar from "../leftslider";
import StudentCard from "../profilecard/StudentCard";
import { useState } from "react";
export default function Home() {
  const [activeTab, setActiveTab] = useState("Accepted"); // Default tab
  const ApprovedStudents = [{
    student_id: 'AIMT_2018',
    student_name: "Amit",
    class: "12",
    section: "C",
    phoneNumber: "+918700745015",
    email: "amit.code.404@gmail.com",
    status: 'Rejected'
  }, {
    student_id: 'AIMT_2013',
    student_name: "Amit",
    class: "12",
    section: "C",
    phoneNumber: "+918700745015",
    email: "amit.code.404@gmail.com",
    status: 'Accepted'
  },
  {
    student_id: 'AIMT_2013',
    student_name: "Amit",
    class: "12",
    section: "C",
    phoneNumber: "+918700745015",
    email: "amit.code.404@gmail.com",
    status: 'In Queue'
  },
  {
    student_id: 'AIMT_2013',
    student_name: "Amit",
    class: "12",
    section: "C",
    phoneNumber: "+918700745015",
    email: "amit.code.404@gmail.com",
    status: 'In Queue'
  },
  {
    student_id: 'AIMT_2013',
    student_name: "Amit",
    class: "12",
    section: "C",
    phoneNumber: "+918700745015",
    email: "amit.code.404@gmail.com",
    status: 'Accepted'
  }]
  const filteredStudents = ApprovedStudents.filter(
    (student) => student.status === activeTab
  );

  // 

  //
  return (
    <>
      <section>
        <div className="flex">
          <LeftSlideBar />
          <div className="w-[calc(100vw_-_310px)]">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9 ff-aTypeDisplay">
                  <div className="container-fluid p-0">
                    <div
                      className="row align-items-center p-4 mt-4 mb-2"
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
                            className="w-full font-[100] bg-gray-100 rounded-full py-2 pl-4 pr-10 border border-gray-100 focus:outline-none text-sm placeholder-gray-400"
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
                      <div className="col-md-4 d-flex justify-content-end align-items-center mb-4">
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

                      <div className="col-md-2 d-flex justify-content-center align-items-center mb-4">
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

                      <div className="col-md-2 d-flex justify-content-center align-items-center mb-4">
                        <Image
                          src="/images/Ellipse 3.png"
                          alt="Profile Picture"
                          width={30}
                          height={30}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <p className="text-[11px] font-[100] m-0">
                          Mr. Sukhee lal
                        </p>
                        <p className="text-[9px] font-[100]">Principal</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="col-12 flex justify-between items-center p-4">
                  {/* Left Section: Text */}
                  <div className="flex items-center">
                    <p className="text-[18px] font-[100] mt-2 text-[#333D61]">
                      Approval New Admission
                    </p>
                  </div>

                  {/* Right Section: Buttons */}
                  <div className="flex items-center gap-4">
                    <button className="px-2 font-[100] py-1 flex items-center gap-2 justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61]">
                      <svg width="13" height="15" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 9.16667H7.5V13.3333H11.6667V9.16667ZM10.8333 0V1.66667H4.16667V0H2.5V1.66667H1.66667C0.745833 1.66667 0.00833333 2.4125 0.00833333 3.33333L0 15C0 15.9208 0.745833 16.6667 1.66667 16.6667H13.3333C14.2542 16.6667 15 15.9208 15 15V3.33333C15 2.4125 14.2542 1.66667 13.3333 1.66667H12.5V0H10.8333ZM13.3333 15H1.66667V5.83333H13.3333V15Z" fill="#5C5C5C" />
                      </svg>
                      Jan 01, 2023 – Mar 14, 2024

                    </button>

                    <button className="px-2 font-[100] py-1 flex items-center justify-between text-[12px] bg-[#FFB390] rounded-md  text-[#333D61]">
                      Add New Admission

                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 ">

                  <div className="rounded-[10px] bg-[#fafaf8] py-2 px-2">
                    <p className="text-[14px] text-[#676767] font-[100] mb-0 mt-3 ms-3">All Apply Queue</p>
                    <p className="text-[18px] text-[#333D61] font-[100] mt-0 mb-2 ms-3">1436</p>
                  </div>


                  <div className="rounded-[10px] bg-[#fafaf8] py-2 px-2">
                    <p className="text-[14px] text-[#676767] font-[100] mb-0 mt-3 ms-3">All Apply Queue</p>
                    <p className="text-[18px] text-[#333D61] font-[100] mt-0 mb-2 ms-3">1436</p>
                  </div>


                  <div className="rounded-[10px] bg-[#fafaf8] py-2 px-2">
                    <p className="text-[14px] text-[#676767] font-[100] mb-0 mt-3 ms-3">All Apply Queue</p>
                    <p className="text-[18px] text-[#333D61] font-[100] mt-0 mb-2 ms-3">1436</p>
                  </div>


                  <div className="rounded-[10px] bg-[#fafaf8] py-2 px-2">
                    <p className="text-[14px] text-[#676767] font-[100] mb-0 mt-3 ms-3">All Apply Queue</p>
                    <p className="text-[18px] text-[#333D61] font-[100] mt-0 mb-2 ms-3">1436</p>
                  </div>

                </div>
                {/*  */}
                <div className="col-12 flex gap-4 mt-4 border-b-2 p-3">
                  <button
                    className={`px-4 py-2 rounded ${activeTab === "Accepted"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                      }`}
                    onClick={() => setActiveTab("Accepted")}
                  >
                    Accepted ({ApprovedStudents.filter((student) => student.status === "Accepted").length})
                  </button>
                  <button
                    className={`px-4 py-2 rounded ${activeTab === "In Queue"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                      }`}
                    onClick={() => setActiveTab("In Queue")}
                  >
                    In Queue ({ApprovedStudents.filter((student) => student.status === "In Queue").length})
                  </button>
                  <button
                    className={`px-4 py-2 rounded ${activeTab === "Rejected"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                      }`}
                    onClick={() => setActiveTab("Rejected")}
                  >
                    Rejected ({ApprovedStudents.filter((student) => student.status === "Rejected").length})
                  </button>
                  
                <div className="col-md-3 flex gap-4 justify-end items-center">
                  <button className="px-2 py-1 flex font-[100] items-center justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61] ">
                    Choose Class
                    <svg className=" ms-2" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.64967 0.161958L4.31372 3.49791L0.977772 0.161958C0.868957 0.056861 0.723217 -0.00129273 0.571941 2.18104e-05C0.420665 0.00133635 0.275958 0.0620139 0.168986 0.168986C0.0620139 0.275958 0.00133635 0.420665 2.18104e-05 0.571941C-0.00129273 0.723217 0.056861 0.868956 0.161958 0.977771L3.90408 4.7199C3.95775 4.77379 4.02161 4.81644 4.09194 4.84537C4.16228 4.87429 4.23767 4.88891 4.31372 4.88837C4.38975 4.88875 4.46509 4.87406 4.53541 4.84514C4.60572 4.81622 4.6696 4.77366 4.72336 4.7199L8.46548 0.977771C8.57058 0.868956 8.62873 0.723217 8.62742 0.571941C8.62611 0.420665 8.56543 0.275958 8.45846 0.168986C8.35148 0.0620139 8.20678 0.00133635 8.0555 2.18104e-05C7.90423 -0.00129273 7.75849 0.056861 7.64967 0.161958Z" fill="#333D61" />
                    </svg>

                  </button>
                  <button className="px-2 py-1 flex font-[100] items-center justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61]">
                    Choose Class
                    <svg className=" ms-2" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.64967 0.161958L4.31372 3.49791L0.977772 0.161958C0.868957 0.056861 0.723217 -0.00129273 0.571941 2.18104e-05C0.420665 0.00133635 0.275958 0.0620139 0.168986 0.168986C0.0620139 0.275958 0.00133635 0.420665 2.18104e-05 0.571941C-0.00129273 0.723217 0.056861 0.868956 0.161958 0.977771L3.90408 4.7199C3.95775 4.77379 4.02161 4.81644 4.09194 4.84537C4.16228 4.87429 4.23767 4.88891 4.31372 4.88837C4.38975 4.88875 4.46509 4.87406 4.53541 4.84514C4.60572 4.81622 4.6696 4.77366 4.72336 4.7199L8.46548 0.977771C8.57058 0.868956 8.62873 0.723217 8.62742 0.571941C8.62611 0.420665 8.56543 0.275958 8.45846 0.168986C8.35148 0.0620139 8.20678 0.00133635 8.0555 2.18104e-05C7.90423 -0.00129273 7.75849 0.056861 7.64967 0.161958Z" fill="#333D61" />
                    </svg>

                  </button>
                </div>

                </div>

                {/* Render Cards */}
                <div className="grid grid-cols-4 gap-3 mt-3">
                  {filteredStudents.map((student_details, index) => (
                    <div key={index}>
                      <StudentCard student_info={student_details} />
                    </div>
                  ))}
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// return (
//   <>
//     <section>
//       <div className="flex">
//         <LeftSlideBar />
//         <div className="w-[calc(100vw_-_310px)]">
//           <div className="container-fluid ">
//             <div className="row">
//               <div className="col-md-9 ff-aTypeDisplay">
//                 <div className="container-fluid p-0">
//                   <div
//                     className="row align-items-center p-4 mt-4 mb-2"
//                     style={{ borderBottom: "1px solid #E8E8E880" }}
//                   >
//                     <div className="col-md-4 d-flex align-items-center">
//                       <p className="text-[20px] font-[100] text-[#314061] mb-0">
//                         Dashboard
//                       </p>
//                     </div>

//                     <div className="col-md-6 flex items-center">
//                       <div className="relative w-full">
//                         <input
//                           type="text"
//                           className="w-full font-[100] bg-gray-100 rounded-full py-2 pl-4 pr-10 border border-gray-100 focus:outline-none text-sm placeholder-gray-400"
//                           placeholder="Search"
//                         />
//                         <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                           <svg
//                             width="14"
//                             height="14"
//                             viewBox="0 0 22 22"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M16.5 16.5L21 21"
//                               stroke="#B6B6B5"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                             <path
//                               d="M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10Z"
//                               stroke="#B6B6B5"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </span>
//                       </div>
//                     </div>



//                     <div className="col-md-2 d-flex align-items-center justify-content-center">
//                       <div
//                         className="row align-items-center me-4"
//                         style={{ marginBottom: 0 }}
//                       >
//                         <div
//                           className="col-md-6"
//                           style={{ paddingRight: "5px" }}
//                         >
//                           <Image
//                             src="/images/Vector.png"
//                             alt=""
//                             width={22}
//                             height={22}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 d-flex align-items-center"
//                           style={{ paddingLeft: "5px" }}
//                         >
//                           <span className="text-[15px] font-[100]">EN</span>
//                           <span style={{ marginLeft: "5px" }}>
//                             <svg
//                               width="8"
//                               height="5"
//                               viewBox="0 0 8 5"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M3.71835 4.46141C3.62056 4.46198 3.52362 4.44323 3.43309 4.40626C3.34255 4.36928 3.26021 4.31479 3.19078 4.24593L0.218528 1.27368C0.0786071 1.13376 0 0.943981 0 0.746102C0 0.548224 0.0786071 0.358449 0.218528 0.218528C0.35845 0.0786067 0.548224 0 0.746103 0C0.943981 0 1.13376 0.0786067 1.27368 0.218528L3.71835 2.67063L6.16303 0.225959C6.30518 0.104226 6.48802 0.0406147 6.67504 0.0478381C6.86205 0.0550615 7.03945 0.132587 7.17178 0.264923C7.30412 0.397258 7.38164 0.574656 7.38886 0.761667C7.39609 0.948678 7.33248 1.13153 7.21074 1.27368L4.2385 4.24593C4.10009 4.3832 3.91329 4.46059 3.71835 4.46141Z"
//                                 fill="#2D2D2D"
//                               />
//                             </svg>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                 </div>
//               </div>

//               {/* Third Column with fixed width of 200px */}
//               <div className="col-md-3 mt-5">
//                 <div className="col-12">
//                   <div className="row ">
//                     <div className="col-md-4 d-flex justify-content-end align-items-center mb-4">
//                       <svg
//                         width="22"
//                         height="16"
//                         viewBox="0 0 28 22"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M24.5417 0.185181H2.72685C1.22027 0.185181 0.0136342 1.40545 0.0136342 2.91203L0 19.2731C0 20.7797 1.22027 22 2.72685 22H24.5417C26.0483 22 27.2685 20.7797 27.2685 19.2731V2.91203C27.2685 1.40545 26.0483 0.185181 24.5417 0.185181ZM24.5417 4.99807C24.5417 5.39671 24.3363 5.76724 23.9983 5.97851L15.2859 11.4237C14.2754 12.0553 12.9931 12.0553 11.9826 11.4237L3.27026 5.97851C2.93221 5.76723 2.72685 5.39671 2.72685 4.99807C2.72685 4.08997 3.72574 3.53634 4.49581 4.01763L11.9826 8.69686C12.9931 9.32845 14.2754 9.32845 15.2859 8.69686L22.7727 4.01763C23.5428 3.53633 24.5417 4.08997 24.5417 4.99807Z"
//                           fill="black"
//                         />
//                       </svg>
//                     </div>

//                     <div className="col-md-2 d-flex justify-content-center align-items-center mb-4">
//                       <svg
//                         width="15"
//                         height="22"
//                         viewBox="0 0 20 22"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M19.7469 16.1195C19.1229 15.0483 18.3789 13.0155 18.3789 9.41453V8.67034C18.3789 4.02576 14.6435 0.219394 10.0521 0.18539C10.0306 0.185285 10.0094 0.185181 9.98795 0.185181C7.7628 0.185324 5.62883 1.06937 4.05547 2.64284C2.48211 4.21632 1.59823 6.35035 1.59825 8.5755V9.41453C1.59825 13.0151 0.853958 15.048 0.229602 16.1191C0.0805734 16.374 0.00146174 16.6638 0.000258084 16.9591C-0.00094557 17.2544 0.0758012 17.5448 0.222746 17.8009C0.369692 18.057 0.581631 18.2699 0.837156 18.4179C1.09268 18.5659 1.38274 18.6438 1.67804 18.6439H18.2983C18.5935 18.6438 18.8836 18.5659 19.1391 18.4179C19.3946 18.27 19.6065 18.0572 19.7535 17.8011C19.9004 17.545 19.9772 17.2547 19.976 16.9594C19.9749 16.6642 19.8959 16.3744 19.7469 16.1195ZM13.3368 20.3219H6.62455C6.40203 20.3219 6.18862 20.4103 6.03127 20.5677C5.87392 20.725 5.78552 20.9384 5.78552 21.161C5.78552 21.3835 5.87392 21.5969 6.03127 21.7542C6.18862 21.9116 6.40203 22 6.62455 22H13.3368C13.5593 22 13.7727 21.9116 13.9301 21.7542C14.0874 21.5969 14.1758 21.3835 14.1758 21.161C14.1758 20.9384 14.0874 20.725 13.9301 20.5677C13.7727 20.4103 13.5593 20.3219 13.3368 20.3219Z"
//                           fill="black"
//                         />
//                       </svg>
//                     </div>

//                     <div className="col-md-2 d-flex justify-content-center align-items-center mb-4">
//                       <Image
//                         src="/images/Ellipse 3.png"
//                         alt="Profile Picture"
//                         width={30}
//                         height={30}
//                       />
//                     </div>

//                     <div className="col-md-4 mb-3">
//                       <p className="text-[11px] font-[100] m-0">
//                         Mr. Sukhee lal
//                       </p>
//                       <p className="text-[9px] font-[100]">Principal</p>
//                     </div>
//                   </div>
//                 </div>

//               </div>

//               <div className="col-12 flex justify-between items-center p-4">
//                 {/* Left Section: Text */}
//                 <div className="flex items-center">
//                   <p className="text-[18px] font-[100] mt-2 text-[#333D61]">
//                     Approval New Admission
//                   </p>
//                 </div>

//                 {/* Right Section: Buttons */}
//                 <div className="flex items-center gap-4">
//                   <button className="px-2 font-[100] py-1 flex items-center gap-2 justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61]">
//                     <svg width="13" height="15" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M11.6667 9.16667H7.5V13.3333H11.6667V9.16667ZM10.8333 0V1.66667H4.16667V0H2.5V1.66667H1.66667C0.745833 1.66667 0.00833333 2.4125 0.00833333 3.33333L0 15C0 15.9208 0.745833 16.6667 1.66667 16.6667H13.3333C14.2542 16.6667 15 15.9208 15 15V3.33333C15 2.4125 14.2542 1.66667 13.3333 1.66667H12.5V0H10.8333ZM13.3333 15H1.66667V5.83333H13.3333V15Z" fill="#5C5C5C" />
//                     </svg>
//                     Jan 01, 2023 – Mar 14, 2024

//                   </button>

//                   <button className="px-2 font-[100] py-1 flex items-center justify-between text-[12px] bg-[#FFB390] rounded-md  text-[#333D61]">
//                     Add New Admission

//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-4 gap-3 ">

//                 <div className="rounded-[10px] bg-[#fafaf8] py-2 px-2">
//                   <p className="text-[14px] text-[#676767] font-[100] mb-0 mt-3 ms-3">All Apply Queue</p>
//                   <p className="text-[18px] text-[#333D61] font-[100] mt-0 mb-2 ms-3">1436</p>
//                 </div>


//                 <div className="rounded-[10px] bg-[#fafaf8] py-2 px-2">
//                   <p className="text-[14px] text-[#676767] font-[100] mb-0 mt-3 ms-3">All Apply Queue</p>
//                   <p className="text-[18px] text-[#333D61] font-[100] mt-0 mb-2 ms-3">1436</p>
//                 </div>


//                 <div className="rounded-[10px] bg-[#fafaf8] py-2 px-2">
//                   <p className="text-[14px] text-[#676767] font-[100] mb-0 mt-3 ms-3">All Apply Queue</p>
//                   <p className="text-[18px] text-[#333D61] font-[100] mt-0 mb-2 ms-3">1436</p>
//                 </div>


//                 <div className="rounded-[10px] bg-[#fafaf8] py-2 px-2">
//                   <p className="text-[14px] text-[#676767] font-[100] mb-0 mt-3 ms-3">All Apply Queue</p>
//                   <p className="text-[18px] text-[#333D61] font-[100] mt-0 mb-2 ms-3">1436</p>
//                 </div>

//               </div>

//               <div className="col-12 flex mt-4 p-3">
//                 {/* <div className="col-md-9 flex gap-2 mb-0 border-b-2">
//                     <div className="col-md-8 gap-14 flex text-[#BCBCBC] ms-4 mb-0">
//                       <p className="mb-2 text-[14px] ">Accepted (156)</p>
//                       <p className="mb-2 text-[14px] ">In Queue (1654)</p>
//                       <p className="mb-2 text-[14px] ">Rejected (151)</p>
//                     </div>
//                     <div className="col-md-4"></div>
//                   </div> */}


//                 {/* <div className="w-full px-4">

//       <div className="flex items-center justify-between py-2">
//         <div className="flex gap-8 text-sm text-gray-500">
//           <button
//             className={`px-4 py-2 rounded ${
//               activeTab === "Accepted" ? "bg-black text-white" : "bg-gray-100"
//             }`}
//             onClick={() => setActiveTab("StudentCard")}
//           >
//             Accepted (156)
//           </button>
//           <button
//             className={`px-4 py-2 rounded ${
//               activeTab === "In Queue" ? "bg-black text-white" : "bg-gray-100"
//             }`}
//             onClick={() => setActiveTab("Inqueue")}
//           >
//             In Queue (1654)
//           </button>
//           <button
//             className={`px-4 py-2 rounded ${
//               activeTab === "Rejected" ? "bg-black text-white" : "bg-gray-100"
//             }`}
//             onClick={() => setActiveTab("RejectedCard")}
//           >
//             Rejected (151)
//           </button>
//         </div>
//         <div>

//         </div>
//       </div>

   
//     </div> */}







//                 <div className="col-md-3 flex gap-4 justify-end items-center">
//                   <button className="px-2 py-1 flex font-[100] items-center justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61] ">
//                     Choose Class
//                     <svg className=" ms-2" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M7.64967 0.161958L4.31372 3.49791L0.977772 0.161958C0.868957 0.056861 0.723217 -0.00129273 0.571941 2.18104e-05C0.420665 0.00133635 0.275958 0.0620139 0.168986 0.168986C0.0620139 0.275958 0.00133635 0.420665 2.18104e-05 0.571941C-0.00129273 0.723217 0.056861 0.868956 0.161958 0.977771L3.90408 4.7199C3.95775 4.77379 4.02161 4.81644 4.09194 4.84537C4.16228 4.87429 4.23767 4.88891 4.31372 4.88837C4.38975 4.88875 4.46509 4.87406 4.53541 4.84514C4.60572 4.81622 4.6696 4.77366 4.72336 4.7199L8.46548 0.977771C8.57058 0.868956 8.62873 0.723217 8.62742 0.571941C8.62611 0.420665 8.56543 0.275958 8.45846 0.168986C8.35148 0.0620139 8.20678 0.00133635 8.0555 2.18104e-05C7.90423 -0.00129273 7.75849 0.056861 7.64967 0.161958Z" fill="#333D61" />
//                     </svg>

//                   </button>
//                   <button className="px-2 py-1 flex font-[100] items-center justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61]">
//                     Choose Class
//                     <svg className=" ms-2" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M7.64967 0.161958L4.31372 3.49791L0.977772 0.161958C0.868957 0.056861 0.723217 -0.00129273 0.571941 2.18104e-05C0.420665 0.00133635 0.275958 0.0620139 0.168986 0.168986C0.0620139 0.275958 0.00133635 0.420665 2.18104e-05 0.571941C-0.00129273 0.723217 0.056861 0.868956 0.161958 0.977771L3.90408 4.7199C3.95775 4.77379 4.02161 4.81644 4.09194 4.84537C4.16228 4.87429 4.23767 4.88891 4.31372 4.88837C4.38975 4.88875 4.46509 4.87406 4.53541 4.84514C4.60572 4.81622 4.6696 4.77366 4.72336 4.7199L8.46548 0.977771C8.57058 0.868956 8.62873 0.723217 8.62742 0.571941C8.62611 0.420665 8.56543 0.275958 8.45846 0.168986C8.35148 0.0620139 8.20678 0.00133635 8.0555 2.18104e-05C7.90423 -0.00129273 7.75849 0.056861 7.64967 0.161958Z" fill="#333D61" />
//                     </svg>

//                   </button>
//                 </div>

//               </div>


//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </>
// );
// }






//   return (
//     <>
//       <section>
//         <div className="flex">
//           <LeftSlideBar />
//           <div className="w-[calc(100vw_-_310px)]">
//             <div className="container-fluid">
//               <div className="row">
//                 {/* Header with Tabs */}
//                 <div className="col-12 flex gap-4 mt-4 border-b-2 p-3">
//                   <button
//                     className={`px-4 py-2 rounded ${activeTab === "Accepted"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 text-gray-600"
//                       }`}
//                     onClick={() => setActiveTab("Accepted")}
//                   >
//                     Accepted ({ApprovedStudents.filter((student) => student.status === "Accepted").length})
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded ${activeTab === "In Queue"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 text-gray-600"
//                       }`}
//                     onClick={() => setActiveTab("In Queue")}
//                   >
//                     In Queue ({ApprovedStudents.filter((student) => student.status === "In Queue").length})
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded ${activeTab === "Rejected"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 text-gray-600"
//                       }`}
//                     onClick={() => setActiveTab("Rejected")}
//                   >
//                     Rejected ({ApprovedStudents.filter((student) => student.status === "Rejected").length})
//                   </button>
//                 </div>

//                 {/* Render Cards */}
//                 <div className="grid grid-cols-4 gap-3 mt-3">
//                   {filteredStudents.map((student_details, index) => (
//                     <div key={index}>
//                       <StudentCard student_info={student_details} />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Additional Content */}
//                 <div className="mt-4 p-4 border rounded-lg">
//                   {activeTab === "Accepted" && (
//                     <div>
//                       <h2 className="text-xl font-[200] text-gray-700">Accepted Students</h2>
//                       <p>Here is the list of accepted students...</p>
//                     </div>
//                   )}

//                   {activeTab === "In Queue" && (
//                     <div>
//                       <h2 className="text-xl font-[200] text-gray-700">In Queue Students</h2>
//                       <p>Here is the list of students in queue...</p>
//                     </div>
//                   )}

//                   {activeTab === "Rejected" && (
//                     <div>
//                       <h2 className="text-xl font-[200] text-gray-700">Rejected Students</h2>
//                       <p>Here is the list of rejected students...</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
