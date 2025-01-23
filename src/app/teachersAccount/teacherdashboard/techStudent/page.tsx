"use client";
import Image from "next/image";
import ClassStud from "./allstudentcomp/ClassStud";
import StudentTable from "@/app/components/Tables/StudentTable";
import BatchStud from "./allstudentcomp/BatchStud";
import SectionStud from "./allstudentcomp/SectionStud";
import Updatedsidetech from "../dashtechcomponent/updatedsidetech";
import StudentPerformance from "@/app/components/StudentPerformance";
// import WeeklyComparisonChart from "./grapghcomponent/WeeklyComparisonChart";
import Dashboard from "../../../components/Dashboard";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex">
          <Updatedsidetech />
          <div className="w-[calc(100vw_-_310px)]">
            <div className="container-fluid">
              <div className="row">
                <Dashboard />
                {/* <div className="row"> */}
                <div className="col-md-12 mt-3 mb-3 flex">
                  <div className="col-md-9 ">
                    <div className="col-12">
                      <div className="rounded-2xl p-2 grid grid-cols-10 gap-3">
                        <div className="col-span-7 rounded-[10px] flex justify-around">
                          <div>
                            <ClassStud />
                          </div>

                          <div>
                            <SectionStud />
                          </div>
                          <div>
                            <BatchStud />
                          </div>
                        </div>
                        <div className="col-span-3 rounded-[10px] flex justify-center items-end">
                          <div>
                            <div className="rounded-[15px]">
                              <button className="text-[12px] bg-[#FFB390] px-5 py-2 text-[#333D61] rounded-[4px]">
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" rounded-2xl mt-1 p-2 grid grid-cols-10 gap-3">
                      <div className="col-span-4 bg-[#fafaf8] rounded-[10px] flex flex-col items-center p-4 justify-between h-[400px]">
                        <p className="text-[18px] text-[#333D61] font-[100] self-start mb-3 mt-2">
                          Student Bio
                        </p>
                        <div className="flex flex-col items-center">
                          <div className="rounded-full border border-black flex justify-center items-center p-1">
                            <Image
                              src="/images/Ellipse 17.png"
                              alt=""
                              width={90}
                              height={90}
                            />
                          </div>
                          <div className="flex justify-center w-full mt-2">
                            <p className="text-[11px] text-[#333D61] font-[100] mb-0">
                              Student ID:
                            </p>
                            <p className="text-[11px] text-[#333D61] font-[600] ms-1 mb-1">
                              #2345
                            </p>
                          </div>
                          <p className="text-[15px] text-[#333D61] font-[600] text-center mb-2">
                            Vishal Verma
                          </p>
                          <p className="text-[13px] text-[#333D61] font-[100] text-center">
                            Section B
                          </p>
                        </div>
                        <div className="flex justify-center space-x-4">
                          <div className="flex justify-center space-x-4 mt-2 mb-2">
                            <svg
                              width="23"
                              height="20"
                              viewBox="0 0 23 20"
                              fill="none"
                              xmlns="http://www.w3.org/6000/svg"
                            >
                              <path
                                d="M18.8889 5.55556H3.33333C1.49444 5.55556 0 7.05 0 8.88889V15.5556H4.44444V20H17.7778V15.5556H22.2222V8.88889C22.2222 7.05 20.7278 5.55556 18.8889 5.55556ZM15.5556 17.7778H6.66667V12.2222H15.5556V17.7778ZM18.8889 10C18.2722 10 17.7778 9.50556 17.7778 8.88889C17.7778 8.27222 18.2722 7.77778 18.8889 7.77778C19.5056 7.77778 20 8.27222 20 8.88889C20 9.50556 19.5056 10 18.8889 10ZM17.7778 0H4.44444V4.44444H17.7778V0Z"
                                fill="#333D61"
                              />
                            </svg>
                            <svg
                              width="17"
                              height="20"
                              viewBox="0 0 17 20"
                              fill="none"
                              xmlns="http://www.w3.org/6000/svg"
                            >
                              <path
                                d="M8.80026 0C6.6792 0.00238217 4.6457 0.846024 3.14589 2.34584C1.64607 3.84565 0.802431 5.87915 0.800049 8.00021C0.800049 11.2553 3.16311 13.9584 5.66618 16.8194C6.4582 17.7255 7.27822 18.6625 8.00824 19.6105C8.10166 19.7317 8.22164 19.8298 8.35895 19.8974C8.49626 19.9649 8.64724 20 8.80026 20C8.95327 20 9.10425 19.9649 9.24156 19.8974C9.37887 19.8298 9.49886 19.7317 9.59228 19.6105C10.3223 18.6625 11.1423 17.7255 11.9343 16.8194C14.4374 13.9584 16.8005 11.2553 16.8005 8.00021C16.7981 5.87915 15.9544 3.84565 14.4546 2.34584C12.9548 0.846024 10.9213 0.00238217 8.80026 0ZM8.80026 11.0003C8.2069 11.0003 7.62686 10.8243 7.1335 10.4947C6.64014 10.165 6.25562 9.69648 6.02855 9.14829C5.80148 8.1001 5.74207 7.99688 5.85782 7.41492C5.97358 6.83296 6.25931 6.2984 6.67888 5.87883C7.09845 5.45926 7.63301 5.17353 8.21497 5.05778C8.79693 4.94202 9.40015 5.00143 9.94834 5.2285C10.4965 5.45557 10.9651 5.84009 11.2947 6.33345C11.6244 6.82681 11.8003 7.40685 11.8003 8.00021C11.8003 8.79588 11.4843 9.55896 10.9216 10.1216C10.359 10.6842 9.59593 11.0003 8.80026 11.0003Z"
                                fill="#333D61"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 bg-[#fafaf8] mb-0 rounded-[10px] flex justify-center items-center p-0">
                        <div>
                          <div className="mb-4">
                            <p className="text-[18px] text-[#333D61] font-[100] ms-2 p-2 ">
                              Student School Data
                            </p>
                          </div>

                          <div className="grid ms-2 p-2 grid-cols-2 gap-y-2 text-[13px] text-[#333D61] font-[100]">
                            <p className="text-[11px] text-[#333D61] font-[100]">
                              Class Section:
                            </p>
                            <p className="ms-1 text-[11px] text-[#333D61] font-[600]">
                              B
                            </p>

                            <p className="text-[11px] text-[#333D61] font-[100]">
                              Parents/Guardian:
                            </p>
                            <p className="ms-1 text-[11px] text-[#333D61] font-[600]">
                              Mr. Amit Verma
                            </p>

                            <p className="text-[11px] text-[#333D61] font-[100]">
                              D.O.B:
                            </p>
                            <p className="ms-1 text-[11px] text-[#333D61] font-[600]">
                              19-09-6000
                            </p>

                            <p className="text-[11px] text-[#333D61] font-[100]">
                              Contact Number:
                            </p>
                            <p className="ms-1 text-[11px] text-[#333D61] font-[600]">
                              +91 890-908-0809
                            </p>

                            <p className="text-[11px] text-[#333D61] font-[100]">
                              Class Teacher Name:
                            </p>
                            <p className="ms-1 text-[11px] text-[#333D61] font-[600]">
                              Ms. Alka Rathi
                            </p>

                            <p className="text-[11px] text-[#333D61] font-[100]">
                              Student Address:
                            </p>
                            <p className="ms-1 text-[11px] text-[#333D61] font-[600]">
                              A-78, New Modern Shahdara Delhi-110032
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 bg-[#fafaf8] rounded-[10px] ">
                        <div className="pt-4 ps-3 mt-0">
                          <p className="text-[18px] mt-2 font-[100] text-[#333D61]">
                            Student Performance
                          </p>
                        </div>
                        <div className="col-12 flex justify-center mt-3">
                          <StudentPerformance />
                        </div>
                        <div className="col-12 p-4 mb-2">
                          <div className="row mb-2 border-b-2 border-[#333D61]">
                            <div className="col-8 ">
                              <p className="text-[14px] font-[600] ms-3 text-[#333D61]">
                                Activities
                              </p>
                            </div>
                            <div className="col-4 text-center">
                              <p className="text-[14px] font-[500] text-[#333D61]">
                                %
                              </p>
                            </div>
                          </div>

                          <div className="row mb-2">
                            <div className="col-8 d-flex align-items-center">
                              <div className="w-3 h-3 bg-[#333D61] rounded-full me-2"></div>
                              <p className="text-[11px] font-[100] mb-0 flex-grow">
                                Attendance
                              </p>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                              <p className="text-[11px] font-[100] mb-0">
                                62.5%
                              </p>
                            </div>
                          </div>

                          <div className="row mb-2">
                            <div className="col-8 d-flex align-items-center">
                              <div className="w-3 h-3 bg-[#FFB390] rounded-full me-2"></div>
                              <p className="text-[11px] font-[100] mb-0 flex-grow">
                                Class Performance
                              </p>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                              <p className="text-[11px] font-[100] mb-0">25%</p>
                            </div>
                          </div>

                          <div className="row mb-2">
                            <div className="col-8 d-flex align-items-center">
                              <div className="w-3 h-3 bg-[#7480AA] rounded-full me-2"></div>
                              <p className="text-[11px] font-[100] mb-0 flex-grow">
                                Sports Activity
                              </p>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                              <p className="text-[11px] font-[100] mb-0">
                                12.5%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="col-12 bg-[#556089] rounded-xl mt-4">
                      <div className="p-3">
                        <div className="flex justify-between items-center">
                          <div className="text-[16px] font-[100] text-white text-left p-2">
                            Event Calendar
                          </div>
                          <div className="flex space-x-1">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          </div>
                        </div>

                        <div className="flex bg-white p-1 rounded-[5px] mt-3 mx-auto w-[95%] max-w-[600px] gap-2">
                          <div className="bg-[#FFB390] p-2 flex items-center justify-center flex-1 rounded-[5px]">
                            <p className="text-[12px] font-[100] text-center m-0">
                              Day to day
                            </p>
                          </div>
                          <div className="flex items-center justify-center flex-1 rounded-lg">
                            <p className="text-[12px] font-[100] text-center m-0">
                              Social Media
                            </p>
                          </div>
                        </div>

                        <div className="col-12 flex justify-between p-2 mt-3">
                          <div className="col-md-6 ">
                            <div className="d-flex gap-1 items-center">
                              <p className="text-[14px] text-white font-[100] mb-0 ">
                                FEB 2023
                              </p>
                              <svg
                                className="mb-1"
                                width="8"
                                height="5"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/6000/svg"
                              >
                                <path
                                  d="M3.71835 4.46141C3.62056 4.46198 3.52362 4.44323 3.43309 4.40626C3.34255 4.36928 3.26021 4.31479 3.19078 4.24593L0.218528 1.27368C0.0786071 1.13376 0 0.943981 0 0.746102C0 0.548224 0.0786071 0.358449 0.218528 0.218528C0.35845 0.0786067 0.548224 0 0.746103 0C0.943981 0 1.13376 0.0786067 1.27368 0.218528L3.71835 2.67063L6.16303 0.225959C6.30518 0.104226 6.48802 0.0406147 6.67504 0.0478381C6.86205 0.0550615 7.03945 0.132587 7.17178 0.264923C7.30412 0.397258 7.38164 0.574656 7.38886 0.761667C7.39609 0.948678 7.33248 1.13153 7.21074 1.27368L4.2385 4.24593C4.10009 4.3832 3.91329 4.46059 3.71835 4.46141Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <div className="d-flex items-center gap-2 justify-end">
                              <svg
                                width="6"
                                height="11"
                                viewBox="0 0 6 11"
                                fill="none"
                                xmlns="http://www.w3.org/6000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.77902 0.920932C5.90106 0.798889 5.90106 0.601018 5.77901 0.478982L5.52096 0.220952C5.39892 0.0989219 5.20106 0.0989262 5.07903 0.220961L0.220971 5.07902C0.0989323 5.20106 0.0989323 5.39892 0.220971 5.52096L5.07902 10.379C5.20106 10.501 5.39892 10.501 5.52096 10.379L5.77903 10.1209C5.90107 9.9989 5.90107 9.80103 5.77903 9.67899L1.62099 5.52096C1.49896 5.39892 1.49895 5.20106 1.62099 5.07902L5.77902 0.920932Z"
                                  fill="#EAEAEA"
                                />
                              </svg>
                              <svg
                                width="6"
                                height="11"
                                viewBox="0 0 6 11"
                                fill="none"
                                xmlns="http://www.w3.org/6000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.220978 0.920932C0.0989365 0.798889 0.0989413 0.601018 0.220989 0.478982L0.479041 0.220952C0.601082 0.0989219 0.798938 0.0989262 0.920973 0.220961L5.77903 5.07902C5.90107 5.20106 5.90107 5.39892 5.77903 5.52096L0.920983 10.379C0.798944 10.501 0.60108 10.501 0.479041 10.379L0.220971 10.1209C0.0989319 9.9989 0.098932 9.80103 0.220971 9.67899L4.37901 5.52096C4.50104 5.39892 4.50105 5.20106 4.37901 5.07902L0.220978 0.920932Z"
                                  fill="#EAEAEA"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-7 gap-1 mt-4 text-[12px] font-[100]">
                          <div className="text-center text-[#7480AA]">Sun</div>
                          <div className="text-center text-[#7480AA]">Mon</div>
                          <div className="text-center text-[#7480AA]">Tue</div>
                          <div className="text-center text-[#7480AA]">Wed</div>
                          <div className="text-center text-[#7480AA]">Thu</div>
                          <div className="text-center text-[#7480AA]">Fri</div>
                          <div className="text-center text-[#7480AA]">Sat</div>

                          {Array.from({ length: 31 }, (_, i) => (
                            <div
                              key={i}
                              className="text-center py-2 cursor-pointer text-[#D4D3D3] hover:bg-blue-100 rounded"
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-12 flex justify-between p-2 pb-4">
                        <div className="col-md-4 ms-2">
                          <div className="d-flex items-center">
                            <div className="w-2 h-2 bg-[#FFB390] rounded-full me-2 mb-1"></div>
                            <p className="text-[10px] text-white font-[100] mb-0 flex-grow">
                              Sports Day
                            </p>
                          </div>
                        </div>
                        <div className="col-md-8 ms-2">
                          <div className="d-flex items-center">
                            <div className="w-2 h-2 bg-[#0E1738] rounded-full me-2 mb-1"></div>
                            <p className="text-[10px] text-white mb-0 flex-grow">
                              Parents Teachers Meeting
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 flex items-center gap-2">
                  <div className="col-md-6 flex items-center gap-4 ps-4 p-4">
                    <p className="text-[18px] font-[100] text-[#333D61] mt-3 ms-2">
                      Exam Lists
                    </p>
                    <button className="text-[#333D61] rounded-[5px] bg-[#FFB390] text-[12px] w-[90px] h-[30px]">
                      Class 1
                    </button>
                    <button className="text-[#333D61] rounded-[5px] bg-[#FFB390] text-[12px] w-[90px] h-[30px]">
                      Section B
                    </button>
                    <button className="text-[#333D61] rounded-[5px] bg-[#FFB390] text-[12px] w-[90px] h-[30px]">
                      2022
                    </button>
                  </div>
                  <div className="col-md-6 flex items-center justify-end gap-2 ps-4 p-4">
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 29 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5556 7.22222H4.33333C1.94278 7.22222 0 9.165 0 11.5556V20.2222H5.77778V26H23.1111V20.2222H28.8889V11.5556C28.8889 9.165 26.9461 7.22222 24.5556 7.22222ZM20.2222 23.1111H8.66667V15.8889H20.2222V23.1111ZM24.5556 13C23.7539 13 23.1111 12.3572 23.1111 11.5556C23.1111 10.7539 23.7539 10.1111 24.5556 10.1111C25.3572 10.1111 26 10.7539 26 11.5556C26 12.3572 25.3572 13 24.5556 13ZM23.1111 0H5.77778V5.77778H23.1111V0Z"
                        fill="#E7E7E7"
                      />
                    </svg>
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 24 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.377 14.677C7.25515 14.7979 7.15844 14.9416 7.09244 15.1C7.02644 15.2585 6.99246 15.4284 6.99246 15.6C6.99246 15.7716 7.02644 15.9415 7.09244 16.0999C7.15844 16.2584 7.25515 16.4021 7.377 16.523L11.277 20.423C11.3979 20.5448 11.5416 20.6416 11.7001 20.7076C11.8585 20.7736 12.0284 20.8075 12.2 20.8075C12.3716 20.8075 12.5415 20.7736 12.7 20.7076C12.8584 20.6416 13.0021 20.5448 13.123 20.423L17.023 16.523C17.2678 16.2782 17.4053 15.9462 17.4053 15.6C17.4053 15.2538 17.2678 14.9218 17.023 14.677C16.7782 14.4322 16.4462 14.2947 16.1 14.2947C15.7538 14.2947 15.4218 14.4322 15.177 14.677L13.5 16.367V1.3C13.5 0.955218 13.363 0.624558 13.1192 0.380761C12.8754 0.136964 12.5448 0 12.2 0C11.8552 0 11.5246 0.136964 11.2808 0.380761C11.037 0.624558 10.9 0.955218 10.9 1.3V16.367L9.223 14.677C9.10215 14.5552 8.95837 14.4584 8.79995 14.3924C8.64153 14.3264 8.47162 14.2925 8.3 14.2925C8.12839 14.2925 7.95847 14.3264 7.80005 14.3924C7.64163 14.4584 7.49785 14.5552 7.377 14.677ZM20 9.1H17.4C17.0552 9.1 16.7246 9.23696 16.4808 9.48076C16.237 9.72456 16.1 10.0552 16.1 10.4C16.1 10.7448 16.237 11.0754 16.4808 11.3192C16.7246 11.563 17.0552 11.7 17.4 11.7H20C20.3448 11.7 20.6754 11.837 20.9192 12.0808C21.163 12.3246 21.3 12.6552 21.3 13V22.1C21.3 22.4448 21.163 22.7754 20.9192 23.0192C20.6754 23.263 20.3448 23.4 20 23.4H4.4C4.05522 23.4 3.72456 23.263 3.48076 23.0192C3.23696 22.7754 3.1 22.4448 3.1 22.1V13C3.1 12.6552 3.23696 12.3246 3.48076 12.0808C3.72456 11.837 4.05522 11.7 4.4 11.7H7C7.34478 11.7 7.67544 11.563 7.91924 11.3192C8.16304 11.0754 8.3 10.7448 8.3 10.4C8.3 10.0552 8.16304 9.72456 7.91924 9.48076C7.67544 9.23696 7.34478 9.1 7 9.1H4.4C3.36566 9.1 2.37368 9.51089 1.64228 10.2423C0.910892 10.9737 0.5 11.9657 0.5 13V22.1C0.5 23.1343 0.910892 24.1263 1.64228 24.8577C2.37368 25.5891 3.36566 26 4.4 26H20C21.0343 26 22.0263 25.5891 22.7577 24.8577C23.4891 24.1263 23.9 23.1343 23.9 22.1V13C23.9 11.9657 23.4891 10.9737 22.7577 10.2423C22.0263 9.51089 21.0343 9.1 20 9.1Z"
                        fill="#E7E7E7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-12">
<StudentTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
