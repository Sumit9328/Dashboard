"use client";
import Image from "next/image";
import AttendanceTable from "./techattencomponent/AttendanceTable";
import Updatedsidetech from "../dashtechcomponent/updatedsidetech";
import ClassStud from "../techStudent/allstudentcomp/ClassStud";
import SectionStud from "../techStudent/allstudentcomp/SectionStud";
import BatchStud from "../techStudent/allstudentcomp/BatchStud";
import SubjectStu from "../techStudent/allstudentcomp/SubjectStu";
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
                  <div className="col-md-9 p-3">

                  <div className="col-12 flex justify-around items-end">
                  <div>
                            <ClassStud />
                          </div>

                          <div>
                            <SectionStud />
                          </div>
                          <div>
                            <BatchStud />
                          </div>
                          <div>
                            <SubjectStu />
                          </div>
                          <button className="text-[#333D61] rounded-[5px] bg-[#FFB390] text-[12px] w-[160px] h-[30px]">
                          Search
                    </button>
                  </div>


                    <div className="col-12 bg-[#fafaf8] p-2 rounded-[10px] mt-4">
                  <AttendanceTable/>
                
                    </div>
                    
                  </div>
                  <div className="col-md-3">
                    <div className="col-12 bg-[#556089] rounded-xl mb-3">
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
                    <div className="bg-[#FFB390] rounded-[10px] py-3 px-4 flex justify-between mb-2 items-center">
                      <div className="flex flex-col items-start">
                        <p className="text-[15px] font-[100] text-[#676767] m-0">
                          Total Classes
                        </p>
                        <p className="text-[20px] font-[200] text-[#333D61] m-0">
                          40
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image
                          src="/images/Group 160.png"
                          alt=""
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                    <div className="bg-[#0D9F00] rounded-[10px] py-3 px-4 flex justify-between mb-2 items-center">
                      <div className="flex flex-col items-start">
                        <p className="text-[15px] font-[100] text-[#fff] m-0">
                          Total Classes
                        </p>
                        <p className="text-[20px] font-[200] text-[#fff] m-0">
                          36
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image
                          src="/images/Group 160 (1).png"
                          alt=""
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                    <div className="bg-[#D50000] rounded-[10px] py-3 px-4 flex justify-between mb-2 items-center">
                      <div className="flex flex-col items-start">
                        <p className="text-[15px] font-[100] text-[#fff] m-0">
                          Total Classes
                        </p>
                        <p className="text-[20px] font-[200] text-[#fff] m-0">
                          04
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image
                          src="/images/Group 160 (1).png"
                          alt=""
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
{/* <StudentTable/> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
