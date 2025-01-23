"use client";
import Image from "next/image";
import NewDropdown from "@/app/components/Tables/NewDropdown";
import Updatedsidetech from "./dashtechcomponent/updatedsidetech";
// import TeachingActivityGraph from "./allgrapghcomponent/TeachingActivity";
import TaskScheduler from "./allgrapghcomponent/TaskScheCalender";
// import CircularTaskBar from "./allgrapghcomponent/circularTaskBar";
// import WeeklyComparisonChart from "./grapghcomponent/WeeklyComparisonChart";
import Dashboard from "../../components/Dashboard";

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
                <div className="col-md-12 mt-3 mb-3">
                  <div className="grid grid-cols-4 gap-3 mt-1">
                    <div className="bg-[#fafaf8] rounded-2xl p-0 flex justify-around items-center">
                      <div className="flex flex-col items-start">
                        <p className="text-[15px] font-[100] text-[#676767] m-0">
                          Total Classes
                        </p>
                        <p className="text-[20px] font-[200] text-[#333D61] m-0">
                          06
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

                    <div className="bg-[#fafaf8] rounded-2xl p-1 flex justify-around items-center">
                      <div className="flex flex-col items-start">
                        <p className="text-[15px] font-[100] text-[#676767] m-0">
                          Total Classes
                        </p>
                        <p className="text-[20px] font-[200] text-[#333D61] m-0">
                          06
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

                    <div className="bg-[#fafaf8] rounded-2xl p-1 flex justify-around items-center">
                      <div className="flex flex-col items-start">
                        <p className="text-[15px] font-[100] text-[#676767] m-0">
                          Total Classes
                        </p>
                        <p className="text-[20px] font-[200] text-[#333D61] m-0">
                          06
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

                    <div className="bg-[#fafaf8] rounded-2xl p-3 flex justify-around items-center">
                      <div className="flex flex-col items-start">
                        <p className="text-[15px] font-[100] text-[#676767] m-0">
                          Total Classes
                        </p>
                        <p className="text-[20px] font-[200] text-[#333D61] m-0">
                          06
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
                <div className="col-12 flex ">
                  <div className="col-md-8">
                    <div className="col-12 flex gap-3 mt-2">
                      <div className=" bg-[#fafaf8] rounded-[16px] w-[500px]">
                        <div className="col-12 flex px-3 py-2">
                          <div className="col-md-6 mt-2">Today Task</div>
                          <div className="col-md-6 flex gap-2">
                            <NewDropdown />
                            <NewDropdown />
                          </div>
                        </div>

                        <div className="col-12 flex px-3 mt-3 mb-2">
                          <div className="col-md-6 ">
                            <div className="col-12">
                              <p className="text-[13px] mb-0">
                                Class 10th B | Excercise 30.3
                              </p>
                              <p className="text-[12px] text-[#A098AE] mb-0">
                                Maths
                              </p>
                            </div>
                            <div className="col-12 flex">
                              <div className="col-md-6 flex">
                                <svg
                                  width="13"
                                  height="15"
                                  viewBox="0 0 13 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.218994 13.3699V5.86455H12.5808V13.3699C12.5808 14.115 11.9738 14.6944 11.2563 14.6944H1.54348C0.798455 14.6944 0.218994 14.115 0.218994 13.3699ZM9.04887 7.96165V9.06538C9.04887 9.25854 9.18683 9.3965 9.37999 9.3965H10.4837C10.6493 9.3965 10.8148 9.25854 10.8148 9.06538V7.96165C10.8148 7.79609 10.6493 7.63053 10.4837 7.63053H9.37999C9.18683 7.63053 9.04887 7.79609 9.04887 7.96165ZM9.04887 11.4936V12.5973C9.04887 12.7905 9.18683 12.9285 9.37999 12.9285H10.4837C10.6493 12.9285 10.8148 12.7905 10.8148 12.5973V11.4936C10.8148 11.328 10.6493 11.1625 10.4837 11.1625H9.37999C9.18683 11.1625 9.04887 11.328 9.04887 11.4936ZM5.51692 7.96165V9.06538C5.51692 9.25854 5.65489 9.3965 5.84804 9.3965H6.95177C7.11733 9.3965 7.28289 9.25854 7.28289 9.06538V7.96165C7.28289 7.79609 7.11733 7.63053 6.95177 7.63053H5.84804C5.65489 7.63053 5.51692 7.79609 5.51692 7.96165ZM5.51692 11.4936V12.5973C5.51692 12.7905 5.65489 12.9285 5.84804 12.9285H6.95177C7.11733 12.9285 7.28289 12.7905 7.28289 12.5973V11.4936C7.28289 11.328 7.11733 11.1625 6.95177 11.1625H5.84804C5.65489 11.1625 5.51692 11.328 5.51692 11.4936ZM1.98497 7.96165V9.06538C1.98497 9.25854 2.12294 9.3965 2.31609 9.3965H3.41982C3.58538 9.3965 3.75094 9.25854 3.75094 9.06538V7.96165C3.75094 7.79609 3.58538 7.63053 3.41982 7.63053H2.31609C2.12294 7.63053 1.98497 7.79609 1.98497 7.96165ZM1.98497 11.4936V12.5973C1.98497 12.7905 2.12294 12.9285 2.31609 12.9285H3.41982C3.58538 12.9285 3.75094 12.7905 3.75094 12.5973V11.4936C3.75094 11.328 3.58538 11.1625 3.41982 11.1625H2.31609C2.12294 11.1625 1.98497 11.328 1.98497 11.4936ZM11.2563 2.3326C11.9738 2.3326 12.5808 2.93966 12.5808 3.65708V4.98157H0.218994V3.65708C0.218994 2.93966 0.798455 2.3326 1.54348 2.3326H2.86796V1.00812C2.86796 0.787375 3.06111 0.566628 3.30945 0.566628H4.19244C4.41318 0.566628 4.63393 0.787375 4.63393 1.00812V2.3326H8.16588V1.00812C8.16588 0.787375 8.35903 0.566628 8.60737 0.566628H9.49036C9.71111 0.566628 9.93186 0.787375 9.93186 1.00812V2.3326H11.2563Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[11px] text-[#A098AE]">
                                  Sep 5, 2023
                                </p>
                              </div>
                              <div className="col-md-6 flex">
                                <svg
                                  width="15"
                                  height="14"
                                  viewBox="0 0 15 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.63079 0.177405C11.4111 0.177405 14.4739 3.24027 14.4739 7.02056C14.4739 10.8008 11.4111 13.8637 7.63079 13.8637C3.8505 13.8637 0.787641 10.8008 0.787641 7.02056C0.787641 3.24027 3.8505 0.177405 7.63079 0.177405ZM10.1694 8.81413C10.2246 8.75894 10.2798 8.64857 10.2798 8.53819C10.2798 8.40022 10.197 8.28985 10.1142 8.20707L8.51378 7.02056V3.04711C8.51378 2.82637 8.29303 2.60562 8.07229 2.60562H7.1893C6.94096 2.60562 6.74781 2.82637 6.74781 3.04711V7.35168C6.74781 7.71039 6.88577 8.01392 7.16171 8.20707L9.01046 9.58674C9.06565 9.64193 9.17602 9.69711 9.2588 9.69711C9.42436 9.69711 9.53474 9.61433 9.61752 9.50396L10.1694 8.81413Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[11px] text-[#A098AE]">
                                  Sep 5, 2023
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 flex justify-end mt-2">
                            <div>
                              <button className="px-3 py-1 border border-gray-400 rounded bg-[#FFB390] text-[10px] hover:bg-gray-100">
                                Accept
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 flex px-3 mt-3 mb-2">
                          <div className="col-md-6 ">
                            <div className="col-12">
                              <p className="text-[13px] mb-0">
                                Class 10th B | Excercise 30.3
                              </p>
                              <p className="text-[12px] text-[#A098AE] mb-0">
                                Maths
                              </p>
                            </div>
                            <div className="col-12 flex">
                              <div className="col-md-6 flex">
                                <svg
                                  width="13"
                                  height="15"
                                  viewBox="0 0 13 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.218994 13.3699V5.86455H12.5808V13.3699C12.5808 14.115 11.9738 14.6944 11.2563 14.6944H1.54348C0.798455 14.6944 0.218994 14.115 0.218994 13.3699ZM9.04887 7.96165V9.06538C9.04887 9.25854 9.18683 9.3965 9.37999 9.3965H10.4837C10.6493 9.3965 10.8148 9.25854 10.8148 9.06538V7.96165C10.8148 7.79609 10.6493 7.63053 10.4837 7.63053H9.37999C9.18683 7.63053 9.04887 7.79609 9.04887 7.96165ZM9.04887 11.4936V12.5973C9.04887 12.7905 9.18683 12.9285 9.37999 12.9285H10.4837C10.6493 12.9285 10.8148 12.7905 10.8148 12.5973V11.4936C10.8148 11.328 10.6493 11.1625 10.4837 11.1625H9.37999C9.18683 11.1625 9.04887 11.328 9.04887 11.4936ZM5.51692 7.96165V9.06538C5.51692 9.25854 5.65489 9.3965 5.84804 9.3965H6.95177C7.11733 9.3965 7.28289 9.25854 7.28289 9.06538V7.96165C7.28289 7.79609 7.11733 7.63053 6.95177 7.63053H5.84804C5.65489 7.63053 5.51692 7.79609 5.51692 7.96165ZM5.51692 11.4936V12.5973C5.51692 12.7905 5.65489 12.9285 5.84804 12.9285H6.95177C7.11733 12.9285 7.28289 12.7905 7.28289 12.5973V11.4936C7.28289 11.328 7.11733 11.1625 6.95177 11.1625H5.84804C5.65489 11.1625 5.51692 11.328 5.51692 11.4936ZM1.98497 7.96165V9.06538C1.98497 9.25854 2.12294 9.3965 2.31609 9.3965H3.41982C3.58538 9.3965 3.75094 9.25854 3.75094 9.06538V7.96165C3.75094 7.79609 3.58538 7.63053 3.41982 7.63053H2.31609C2.12294 7.63053 1.98497 7.79609 1.98497 7.96165ZM1.98497 11.4936V12.5973C1.98497 12.7905 2.12294 12.9285 2.31609 12.9285H3.41982C3.58538 12.9285 3.75094 12.7905 3.75094 12.5973V11.4936C3.75094 11.328 3.58538 11.1625 3.41982 11.1625H2.31609C2.12294 11.1625 1.98497 11.328 1.98497 11.4936ZM11.2563 2.3326C11.9738 2.3326 12.5808 2.93966 12.5808 3.65708V4.98157H0.218994V3.65708C0.218994 2.93966 0.798455 2.3326 1.54348 2.3326H2.86796V1.00812C2.86796 0.787375 3.06111 0.566628 3.30945 0.566628H4.19244C4.41318 0.566628 4.63393 0.787375 4.63393 1.00812V2.3326H8.16588V1.00812C8.16588 0.787375 8.35903 0.566628 8.60737 0.566628H9.49036C9.71111 0.566628 9.93186 0.787375 9.93186 1.00812V2.3326H11.2563Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[11px] text-[#A098AE]">
                                  Sep 5, 2023
                                </p>
                              </div>
                              <div className="col-md-6 flex">
                                <svg
                                  width="15"
                                  height="14"
                                  viewBox="0 0 15 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.63079 0.177405C11.4111 0.177405 14.4739 3.24027 14.4739 7.02056C14.4739 10.8008 11.4111 13.8637 7.63079 13.8637C3.8505 13.8637 0.787641 10.8008 0.787641 7.02056C0.787641 3.24027 3.8505 0.177405 7.63079 0.177405ZM10.1694 8.81413C10.2246 8.75894 10.2798 8.64857 10.2798 8.53819C10.2798 8.40022 10.197 8.28985 10.1142 8.20707L8.51378 7.02056V3.04711C8.51378 2.82637 8.29303 2.60562 8.07229 2.60562H7.1893C6.94096 2.60562 6.74781 2.82637 6.74781 3.04711V7.35168C6.74781 7.71039 6.88577 8.01392 7.16171 8.20707L9.01046 9.58674C9.06565 9.64193 9.17602 9.69711 9.2588 9.69711C9.42436 9.69711 9.53474 9.61433 9.61752 9.50396L10.1694 8.81413Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[11px] text-[#A098AE]">
                                  Sep 5, 2023
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 flex justify-end mt-2">
                            <div>
                              <button className="px-3 bg-[#FFB390] py-1 border border-gray-400 rounded text-[10px] hover:bg-gray-100">
                                Accept
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 bg-[#fafaf8] rounded-[16px]">
                        <div className="col-12 flex mt-2 px-2 ">
                          <div className="col-md-7 mt-2 ">
                            <p>Chapter Progress</p>
                            {/* <CircularTaskBar /> */}
                          </div>
                          <NewDropdown />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      {/* <TeachingActivityGraph /> */}
                    </div>
                    <div className="col-12 flex">
                      <div className="col-md-8">
                        <p className="ps-2">Teaching History</p>
                      </div>
                      <div className="col-md-4 ">
                        <div className="flex justify-end pe-4">
                          <div className="space-y-1">
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 flex bg-[#fafaf8] rounded-[16px]">
                      <div className="relative ms-3 top-[15px] right-[-75px]">
                        <div className="w-[12px] h-[12px] border-3 border-[#333D61] rounded-full bg-white z-10 relative top-[13px] right-[5px]"></div>
                        <div className="w-[12px] h-[12px] border-3 border-[#333D61] rounded-full bg-white z-10 relative top-[210px] right-[5px]"></div>

                        <div className="w-[12px] h-[12px] border-3 border-[#333D61] rounded-full bg-white z-10 relative top-[93px] right-[5px]"></div>

                        <div className="w-[2px] h-[242px] relative bottom-[23px] bg-[#A098AE]"></div>
                      </div>
                      <div className="col-md-11  me-4">
                        <div className="col-12 flex">
                          <div className="col-md-1 mt-0 flex items-center">
                            <p className="text-[#333D61]">Sep22</p>
                          </div>

                          <div className="col-md-7 ps-3 ">
                            <p className="mb-0 text-[#333D61] mt-4 text-[17px] font-semibold">
                              Mathematics Class 10th
                            </p>
                            <div className="col-12 flex">
                              <div className="col-md-4 flex gap-1">
                                <svg
                                  width="13"
                                  height="15"
                                  viewBox="0 0 13 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.610107 13.4375V6H12.8601V13.4375C12.8601 14.1758 12.2585 14.75 11.5476 14.75H1.92261C1.18433 14.75 0.610107 14.1758 0.610107 13.4375ZM9.36011 8.07812V9.17188C9.36011 9.36328 9.49683 9.5 9.68823 9.5H10.782C10.946 9.5 11.1101 9.36328 11.1101 9.17188V8.07812C11.1101 7.91406 10.946 7.75 10.782 7.75H9.68823C9.49683 7.75 9.36011 7.91406 9.36011 8.07812ZM9.36011 11.5781V12.6719C9.36011 12.8633 9.49683 13 9.68823 13H10.782C10.946 13 11.1101 12.8633 11.1101 12.6719V11.5781C11.1101 11.4141 10.946 11.25 10.782 11.25H9.68823C9.49683 11.25 9.36011 11.4141 9.36011 11.5781ZM5.86011 8.07812V9.17188C5.86011 9.36328 5.99683 9.5 6.18823 9.5H7.28198C7.44604 9.5 7.61011 9.36328 7.61011 9.17188V8.07812C7.61011 7.91406 7.44604 7.75 7.28198 7.75H6.18823C5.99683 7.75 5.86011 7.91406 5.86011 8.07812ZM5.86011 11.5781V12.6719C5.86011 12.8633 5.99683 13 6.18823 13H7.28198C7.44604 13 7.61011 12.8633 7.61011 12.6719V11.5781C7.61011 11.4141 7.44604 11.25 7.28198 11.25H6.18823C5.99683 11.25 5.86011 11.4141 5.86011 11.5781ZM2.36011 8.07812V9.17188C2.36011 9.36328 2.49683 9.5 2.68823 9.5H3.78198C3.94604 9.5 4.11011 9.36328 4.11011 9.17188V8.07812C4.11011 7.91406 3.94604 7.75 3.78198 7.75H2.68823C2.49683 7.75 2.36011 7.91406 2.36011 8.07812ZM2.36011 11.5781V12.6719C2.36011 12.8633 2.49683 13 2.68823 13H3.78198C3.94604 13 4.11011 12.8633 4.11011 12.6719V11.5781C4.11011 11.4141 3.94604 11.25 3.78198 11.25H2.68823C2.49683 11.25 2.36011 11.4141 2.36011 11.5781ZM11.5476 2.5C12.2585 2.5 12.8601 3.10156 12.8601 3.8125V5.125H0.610107V3.8125C0.610107 3.10156 1.18433 2.5 1.92261 2.5H3.23511V1.1875C3.23511 0.96875 3.42651 0.75 3.67261 0.75H4.54761C4.76636 0.75 4.98511 0.96875 4.98511 1.1875V2.5H8.48511V1.1875C8.48511 0.96875 8.67651 0.75 8.92261 0.75H9.79761C10.0164 0.75 10.2351 0.96875 10.2351 1.1875V2.5H11.5476Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[13px] text-[#A098AE]">
                                  September 5, 2023
                                </p>
                              </div>
                              <div className="line-container">
                                <div className="w-px h-[14px] bg-[#A098AE] me-1"></div>
                              </div>

                              <div className="col-md-8 flex gap-1">
                                <svg
                                  width="14"
                                  height="15"
                                  viewBox="0 0 14 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.13013 0.96875C10.8762 0.96875 13.9114 4.00391 13.9114 7.75C13.9114 11.4961 10.8762 14.5312 7.13013 14.5312C3.38403 14.5312 0.348877 11.4961 0.348877 7.75C0.348877 4.00391 3.38403 0.96875 7.13013 0.96875ZM9.64575 9.52734C9.70044 9.47266 9.75513 9.36328 9.75513 9.25391C9.75513 9.11719 9.6731 9.00781 9.59106 8.92578L8.00513 7.75V3.8125C8.00513 3.59375 7.78638 3.375 7.56763 3.375H6.69263C6.44653 3.375 6.25513 3.59375 6.25513 3.8125V8.07812C6.25513 8.43359 6.39185 8.73438 6.66528 8.92578L8.49731 10.293C8.552 10.3477 8.66138 10.4023 8.74341 10.4023C8.90747 10.4023 9.01685 10.3203 9.09888 10.2109L9.64575 9.52734Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[13px] text-[#A098AE]">
                                  09:00 am - 10:00 am (Chapter 01-08)
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 flex justify-end items-center">
                            <div>
                              <button className=" px-4 py-1 rounded-[8px] bg-[#FFB390] text-[14px] text-[#333D61]">
                                In Progress
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 flex">
                          <div className="col-md-1 mt-0 flex items-center">
                            <p className="text-[#333D61]">Sep22</p>
                          </div>

                          <div className="col-md-7 ps-3 ">
                            <p className="mb-0 text-[#333D61] mt-4 text-[17px] font-semibold">
                              Mathematics Class 10th
                            </p>
                            <div className="col-12 flex">
                              <div className="col-md-4 flex gap-1">
                                <svg
                                  width="13"
                                  height="15"
                                  viewBox="0 0 13 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.610107 13.4375V6H12.8601V13.4375C12.8601 14.1758 12.2585 14.75 11.5476 14.75H1.92261C1.18433 14.75 0.610107 14.1758 0.610107 13.4375ZM9.36011 8.07812V9.17188C9.36011 9.36328 9.49683 9.5 9.68823 9.5H10.782C10.946 9.5 11.1101 9.36328 11.1101 9.17188V8.07812C11.1101 7.91406 10.946 7.75 10.782 7.75H9.68823C9.49683 7.75 9.36011 7.91406 9.36011 8.07812ZM9.36011 11.5781V12.6719C9.36011 12.8633 9.49683 13 9.68823 13H10.782C10.946 13 11.1101 12.8633 11.1101 12.6719V11.5781C11.1101 11.4141 10.946 11.25 10.782 11.25H9.68823C9.49683 11.25 9.36011 11.4141 9.36011 11.5781ZM5.86011 8.07812V9.17188C5.86011 9.36328 5.99683 9.5 6.18823 9.5H7.28198C7.44604 9.5 7.61011 9.36328 7.61011 9.17188V8.07812C7.61011 7.91406 7.44604 7.75 7.28198 7.75H6.18823C5.99683 7.75 5.86011 7.91406 5.86011 8.07812ZM5.86011 11.5781V12.6719C5.86011 12.8633 5.99683 13 6.18823 13H7.28198C7.44604 13 7.61011 12.8633 7.61011 12.6719V11.5781C7.61011 11.4141 7.44604 11.25 7.28198 11.25H6.18823C5.99683 11.25 5.86011 11.4141 5.86011 11.5781ZM2.36011 8.07812V9.17188C2.36011 9.36328 2.49683 9.5 2.68823 9.5H3.78198C3.94604 9.5 4.11011 9.36328 4.11011 9.17188V8.07812C4.11011 7.91406 3.94604 7.75 3.78198 7.75H2.68823C2.49683 7.75 2.36011 7.91406 2.36011 8.07812ZM2.36011 11.5781V12.6719C2.36011 12.8633 2.49683 13 2.68823 13H3.78198C3.94604 13 4.11011 12.8633 4.11011 12.6719V11.5781C4.11011 11.4141 3.94604 11.25 3.78198 11.25H2.68823C2.49683 11.25 2.36011 11.4141 2.36011 11.5781ZM11.5476 2.5C12.2585 2.5 12.8601 3.10156 12.8601 3.8125V5.125H0.610107V3.8125C0.610107 3.10156 1.18433 2.5 1.92261 2.5H3.23511V1.1875C3.23511 0.96875 3.42651 0.75 3.67261 0.75H4.54761C4.76636 0.75 4.98511 0.96875 4.98511 1.1875V2.5H8.48511V1.1875C8.48511 0.96875 8.67651 0.75 8.92261 0.75H9.79761C10.0164 0.75 10.2351 0.96875 10.2351 1.1875V2.5H11.5476Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[13px] text-[#A098AE]">
                                  September 5, 2023
                                </p>
                              </div>
                              <div className="line-container">
                                <div className="w-px h-[14px] bg-[#A098AE] me-1"></div>
                              </div>

                              <div className="col-md-8 flex gap-1">
                                <svg
                                  width="14"
                                  height="15"
                                  viewBox="0 0 14 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.13013 0.96875C10.8762 0.96875 13.9114 4.00391 13.9114 7.75C13.9114 11.4961 10.8762 14.5312 7.13013 14.5312C3.38403 14.5312 0.348877 11.4961 0.348877 7.75C0.348877 4.00391 3.38403 0.96875 7.13013 0.96875ZM9.64575 9.52734C9.70044 9.47266 9.75513 9.36328 9.75513 9.25391C9.75513 9.11719 9.6731 9.00781 9.59106 8.92578L8.00513 7.75V3.8125C8.00513 3.59375 7.78638 3.375 7.56763 3.375H6.69263C6.44653 3.375 6.25513 3.59375 6.25513 3.8125V8.07812C6.25513 8.43359 6.39185 8.73438 6.66528 8.92578L8.49731 10.293C8.552 10.3477 8.66138 10.4023 8.74341 10.4023C8.90747 10.4023 9.01685 10.3203 9.09888 10.2109L9.64575 9.52734Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[13px] text-[#A098AE]">
                                  09:00 am - 10:00 am (Chapter 01-08)
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 flex justify-end items-center">
                            <div>
                              <button className=" px-4 py-1 rounded-[8px] bg-[#FFB390] text-[14px] text-[#333D61]">
                                In Progress
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 flex">
                          <div className="col-md-1 mt-0 flex items-center">
                            <p className="text-[#333D61]">Sep22</p>
                          </div>

                          <div className="col-md-7 ps-3 ">
                            <p className="mb-0 text-[#333D61] mt-4 text-[17px] font-semibold">
                              Mathematics Class 10th
                            </p>
                            <div className="col-12 flex">
                              <div className="col-md-4 flex gap-1">
                                <svg
                                  width="13"
                                  height="15"
                                  viewBox="0 0 13 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.610107 13.4375V6H12.8601V13.4375C12.8601 14.1758 12.2585 14.75 11.5476 14.75H1.92261C1.18433 14.75 0.610107 14.1758 0.610107 13.4375ZM9.36011 8.07812V9.17188C9.36011 9.36328 9.49683 9.5 9.68823 9.5H10.782C10.946 9.5 11.1101 9.36328 11.1101 9.17188V8.07812C11.1101 7.91406 10.946 7.75 10.782 7.75H9.68823C9.49683 7.75 9.36011 7.91406 9.36011 8.07812ZM9.36011 11.5781V12.6719C9.36011 12.8633 9.49683 13 9.68823 13H10.782C10.946 13 11.1101 12.8633 11.1101 12.6719V11.5781C11.1101 11.4141 10.946 11.25 10.782 11.25H9.68823C9.49683 11.25 9.36011 11.4141 9.36011 11.5781ZM5.86011 8.07812V9.17188C5.86011 9.36328 5.99683 9.5 6.18823 9.5H7.28198C7.44604 9.5 7.61011 9.36328 7.61011 9.17188V8.07812C7.61011 7.91406 7.44604 7.75 7.28198 7.75H6.18823C5.99683 7.75 5.86011 7.91406 5.86011 8.07812ZM5.86011 11.5781V12.6719C5.86011 12.8633 5.99683 13 6.18823 13H7.28198C7.44604 13 7.61011 12.8633 7.61011 12.6719V11.5781C7.61011 11.4141 7.44604 11.25 7.28198 11.25H6.18823C5.99683 11.25 5.86011 11.4141 5.86011 11.5781ZM2.36011 8.07812V9.17188C2.36011 9.36328 2.49683 9.5 2.68823 9.5H3.78198C3.94604 9.5 4.11011 9.36328 4.11011 9.17188V8.07812C4.11011 7.91406 3.94604 7.75 3.78198 7.75H2.68823C2.49683 7.75 2.36011 7.91406 2.36011 8.07812ZM2.36011 11.5781V12.6719C2.36011 12.8633 2.49683 13 2.68823 13H3.78198C3.94604 13 4.11011 12.8633 4.11011 12.6719V11.5781C4.11011 11.4141 3.94604 11.25 3.78198 11.25H2.68823C2.49683 11.25 2.36011 11.4141 2.36011 11.5781ZM11.5476 2.5C12.2585 2.5 12.8601 3.10156 12.8601 3.8125V5.125H0.610107V3.8125C0.610107 3.10156 1.18433 2.5 1.92261 2.5H3.23511V1.1875C3.23511 0.96875 3.42651 0.75 3.67261 0.75H4.54761C4.76636 0.75 4.98511 0.96875 4.98511 1.1875V2.5H8.48511V1.1875C8.48511 0.96875 8.67651 0.75 8.92261 0.75H9.79761C10.0164 0.75 10.2351 0.96875 10.2351 1.1875V2.5H11.5476Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[13px] text-[#A098AE]">
                                  September 5, 2023
                                </p>
                              </div>
                              <div className="line-container">
                                <div className="w-px h-[14px] bg-[#A098AE] me-1"></div>
                              </div>

                              <div className="col-md-8 flex gap-1">
                                <svg
                                  width="14"
                                  height="15"
                                  viewBox="0 0 14 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.13013 0.96875C10.8762 0.96875 13.9114 4.00391 13.9114 7.75C13.9114 11.4961 10.8762 14.5312 7.13013 14.5312C3.38403 14.5312 0.348877 11.4961 0.348877 7.75C0.348877 4.00391 3.38403 0.96875 7.13013 0.96875ZM9.64575 9.52734C9.70044 9.47266 9.75513 9.36328 9.75513 9.25391C9.75513 9.11719 9.6731 9.00781 9.59106 8.92578L8.00513 7.75V3.8125C8.00513 3.59375 7.78638 3.375 7.56763 3.375H6.69263C6.44653 3.375 6.25513 3.59375 6.25513 3.8125V8.07812C6.25513 8.43359 6.39185 8.73438 6.66528 8.92578L8.49731 10.293C8.552 10.3477 8.66138 10.4023 8.74341 10.4023C8.90747 10.4023 9.01685 10.3203 9.09888 10.2109L9.64575 9.52734Z"
                                    fill="#A098AE"
                                  />
                                </svg>

                                <p className="text-[13px] text-[#A098AE]">
                                  09:00 am - 10:00 am (Chapter 01-08)
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 flex justify-end items-center">
                            <div>
                              <button className=" px-4 py-1 rounded-[8px] bg-[#FFB390] text-[14px] text-[#333D61]">
                                In Progress
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <TaskScheduler />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
