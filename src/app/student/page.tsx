"use client";
import Image from "next/image";
import SlideBar from "../components/SlideBar";
import Dashboard from "../components/Dashboard";
import SliderComponent from "../components/slider/SliderComponent";
import StudentPerformance from "../components/StudentPerformance";
import StudentTable from "../components/Tables/StudentTable";
import CustomDropdown from "../components/Tables/CustomDropdownClass";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex">
          <SlideBar />
          <div className="w-[calc(100vw_-_310px)]">
            <div className="container-fluid ">
              <div className="row">
                <Dashboard />
                <div className="col-md-9 mt-3">
                  <SliderComponent />
                  <div className=" rounded-2xl mt-3 p-2 grid grid-cols-10 gap-3">
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
                            <p className="text-[11px] font-[100] mb-0">62.5%</p>
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
                            <p className="text-[11px] font-[100] mb-0">12.5%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
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
                <div className="col-12 flex items-center gap-4 ps-4 p-2">
                  <div>

                    <p className="text-[18px] font-[100] text-[#333D61] mt-1 ms-2">
                      Students List
                    </p>
                  </div>

                  <div className="mt-3">

                    <CustomDropdown />
                  </div>
                </div>

                <StudentTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
