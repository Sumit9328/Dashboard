import Image from "next/image";
import SlideBar from "./components/SlideBar";
import Dashboard from "./components/Dashboard";


export default function Home() {
  return (
    <>
      <section>
        <div className="flex">
          <SlideBar />
          <div className="w-[calc(100vw_-_310px)]">
            <div className="container-fluid">
              <div className="row">
                <Dashboard />
                {/* <div className="row"> */}
                <div className="col-md-9 mt-3">
                  <div className="grid grid-cols-4 gap-3 mt-1">
                    <div className="bg-[#fafaf8] rounded-2xl p-0 flex justify-around items-center">
                      <div className="flex flex-col items-start">
                        <p className="text-[14px] font-[100] m-0">Students</p>
                        <p className="text-[17px] font-[100] m-0">1376</p>
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
                        <p className="text-[14px] font-[100] m-0">Teachers</p>
                        <p className="text-[17px] font-[100] m-0">224</p>
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
                        <p className="text-[14px] font-[100] m-0">Parents</p>
                        <p className="text-[17px] font-[100] m-0">835</p>
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
                        <p className="text-[14px] font-[100] m-0">Earnings</p>
                        <p className="text-[17px] font-[100] m-0">
                          ₹2,02,793,20
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
                  <div className="grid grid-cols-4 gap-3 mt-3">
                    <div className="col-span-3 p-4 bg-[#fafaf8] rounded-2xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[15px] font-[100] m-0">Earn</p>
                          <p className="text-[12px] font-[100] mt-1 flex items-center">
                            2003
                            <svg
                              className=" ms-1"
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
                          </p>
                        </div>
                        <div className="flex flex-col items-end mt-2">
                          <div className="col-md-4 flex items-center justify-end space-x-1">
                            <span className="w-1 h-1 bg-[#ADADAD] rounded-full"></span>
                            <span className="w-1 h-1 bg-[#ADADAD] rounded-full"></span>
                            <span className="w-1 h-1 bg-[#ADADAD] rounded-full"></span>
                          </div>
                          <div className="flex items-center justify-end space-x-4 mt-2">
                            <div className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-[#333D61] rounded-full mr-2"></span>
                              <p className="text-[10px] text-[#ADADAD] font-[100] m-0">
                                Earnings
                              </p>
                            </div>
                            <div className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-[#FFB390] rounded-full mr-2"></span>
                              <p className="text-[10px] text-[#ADADAD] font-[100] m-0">
                                Expense
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2">
                        <Image
                          src="/images/Group 174.png"
                          alt=""
                          width={592}
                          height={300}
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-[#fafaf8] rounded-2xl">
                      <div className="grid grid-cols-2 items-center">
                        <p className="text-[15px] font-[100]">Students</p>
                        <div className="flex justify-end items-center space-x-1 mb-3">
                          <span className="w-1 h-1 bg-[#ADADAD] rounded-full"></span>
                          <span className="w-1 h-1 bg-[#ADADAD] rounded-full"></span>
                          <span className="w-1 h-1 bg-[#ADADAD] rounded-full"></span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Image
                          src="/images/Group 186.png"
                          alt=""
                          width={315}
                          height={301}
                          className="w-full h-auto"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <div className="flex items-center">
                            <div className="rounded-full flex items-center justify-center bg-[#FFB390]">
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="15" cy="15" r="15" fill="#333D61" />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.4764 9.67671H16.5282C16.3693 9.67671 16.2169 9.61358 16.1045 9.5012C15.9921 9.38883 15.929 9.23641 15.929 9.07749C15.929 8.91856 15.9921 8.76615 16.1045 8.65377C16.2169 8.54139 16.3693 8.47826 16.5282 8.47826H20.1236C20.8962 8.47826 21.5217 9.10385 21.5217 9.87645V13.4718C21.5217 13.6307 21.4586 13.7831 21.3462 13.8955C21.2339 14.0079 21.0814 14.071 20.9225 14.071C20.7636 14.071 20.6112 14.0079 20.4988 13.8955C20.3864 13.7831 20.3233 13.6307 20.3233 13.4718V10.5244L16.7144 14.1325C17.3925 15.017 17.7262 16.1178 17.6533 17.23C17.5804 18.3421 17.1059 19.3899 16.3181 20.1783C15.4564 21.0391 14.2882 21.5225 13.0703 21.5225C11.8523 21.5225 10.6842 21.0391 9.82249 20.1783C8.96175 19.3166 8.47827 18.1485 8.47827 16.9305C8.47827 15.7126 8.96175 14.5444 9.82249 13.6827C10.6107 12.895 11.6583 12.4205 12.7703 12.3474C13.8823 12.2744 14.9829 12.6078 15.8675 13.2856L19.4764 9.67671ZM10.6678 19.3314C10.0319 18.6942 9.67473 17.8308 9.67473 16.9305C9.67473 16.0303 10.0319 15.1668 10.6678 14.5296C11.305 13.8935 12.1687 13.5362 13.0691 13.5362C13.9695 13.5362 14.8331 13.8935 15.4704 14.5296C16.1063 15.1668 16.4634 16.0303 16.4634 16.9305C16.4634 17.8308 16.1063 18.6942 15.4704 19.3314C14.8332 19.9673 13.9697 20.3245 13.0695 20.3245C12.1693 20.3245 11.305 19.9673 10.6678 19.3314Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div className="ml-2 flex flex-col items-center">
                              <p className="text-[13px] font-[100] m-0">Male</p>
                            </div>
                          </div>
                          <p className="text-[20px] font-[100] m-0">45%</p>
                        </div>

                        <div>
                          <div className="flex items-center">
                            <div className="rounded-full flex items-center justify-center bg-[#FFB390]">
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="15" cy="15" r="15" fill="#FFB390" />
                                <path
                                  d="M20.2175 13.0496C20.2187 12.0493 19.9322 11.0697 19.3923 10.2275C18.8524 9.38542 18.0818 8.71626 17.1723 8.29978C16.2628 7.8833 15.2527 7.73707 14.2624 7.8785C13.2722 8.01993 12.3434 8.44307 11.5868 9.0975C10.8303 9.75193 10.2778 10.6101 9.99521 11.5697C9.71263 12.5293 9.71187 13.5499 9.99302 14.5099C10.2742 15.4699 10.8254 16.3288 11.581 16.9844C12.3366 17.6399 13.2647 18.0645 14.2548 18.2074V19.7577H13.5094C13.3117 19.7577 13.1222 19.8362 12.9824 19.976C12.8426 20.1158 12.7641 20.3053 12.7641 20.503C12.7641 20.7007 12.8426 20.8903 12.9824 21.03C13.1222 21.1698 13.3117 21.2484 13.5094 21.2484H14.2548V21.9937C14.2548 22.1914 14.3333 22.381 14.4731 22.5207C14.6128 22.6605 14.8024 22.739 15.0001 22.739C15.1978 22.739 15.3874 22.6605 15.5271 22.5207C15.6669 22.381 15.7454 22.1914 15.7454 21.9937V21.2484H16.4908C16.6885 21.2484 16.878 21.1698 17.0178 21.03C17.1576 20.8903 17.2361 20.7007 17.2361 20.503C17.2361 20.3053 17.1576 20.1158 17.0178 19.976C16.878 19.8362 16.6885 19.7577 16.4908 19.7577H15.7454V18.2074C16.9861 18.0283 18.1209 17.4085 18.9421 16.4614C19.7633 15.5143 20.216 14.3031 20.2175 13.0496ZM15.0001 16.7763C14.263 16.7763 13.5425 16.5577 12.9297 16.1482C12.3168 15.7387 11.8391 15.1567 11.5571 14.4757C11.275 13.7948 11.2012 13.0455 11.345 12.3226C11.4888 11.5996 11.8437 10.9356 12.3649 10.4144C12.8861 9.89323 13.5501 9.53829 14.2731 9.39449C14.996 9.2507 15.7453 9.3245 16.4263 9.60657C17.1072 9.88863 17.6893 10.3663 18.0987 10.9791C18.5082 11.592 18.7268 12.3125 18.7268 13.0496C18.7268 13.539 18.6304 14.0236 18.4431 14.4757C18.2558 14.9279 17.9813 15.3387 17.6353 15.6848C17.2892 16.0308 16.8784 16.3053 16.4263 16.4926C15.9741 16.6799 15.4895 16.7763 15.0001 16.7763Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div className="ml-2 flex flex-col items-center">
                              <p className="text-[13px] font-[100] m-0">
                                Female
                              </p>
                            </div>
                          </div>
                          <p className="text-[20px] font-[100] m-0">55%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 bg-[#fafaf8] rounded-2xl mt-3 p-4">
                    <div className="col-12 d-flex">
                      <div className="col-md-8 text-black w-full">
                        <p className="text-[20px] text-[#333D61] font-[100] mt-2">
                          Notice Board
                        </p>
                      </div>

                      <div className="col-md-4 flex items-center justify-end space-x-1">
                        <span className="w-1 h-1 bg-[#B9B9B9] rounded-full"></span>
                        <span className="w-1 h-1 bg-[#B9B9B9] rounded-full"></span>
                        <span className="w-1 h-1 bg-[#B9B9B9] rounded-full"></span>
                      </div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-md-8 d-flex text-black w-full">
                        <p className="text-[13px] text-[#B9B9B9] font-[100]">
                          Create a notice or find a nessage for you!
                        </p>
                      </div>
                    </div>
                    <div className="row bg-[#fff] rounded-2xl p-1">
                      <div className="col-md-2">
                        <Image
                          src="/images/Rectangle 112.png"
                          alt=""
                          width={90}
                          height={59}
                        />
                      </div>
                      <div className="col-md-4 mt-2">
                        <p className="text-[12px] font-[100]">
                          Inter-school competition
                          (Sports/Singing/Drawing/Drama)
                        </p>
                      </div>
                      <div className="col-md-2 ">
                        <p className="mt-3 text-[12px] font-[100] text-center bg-[#FFB390] ps-2 p-1 pe-2 rounded-lg">
                          20 JAN, 2024
                        </p>
                      </div>

                      <div className="col-md-2">
                        <div className="mt-3 rounded-lg p-2 bg-[#f3f3f3] d-flex align-items-center justify-content-between">
                          <svg
                            width="5"
                            height="12"
                            viewBox="0 0 9 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.37151 2.87587H9V0.121296C8.21153 0.0393063 7.41929 -0.0011731 6.62656 2.58688e-05C4.27045 2.58688e-05 2.65929 1.43795 2.65929 4.07125V6.34074H0V9.42447H2.65929V17.3244H5.84697V9.42447H8.49759L8.89605 6.34074H5.84697V4.37442C5.84697 3.4649 6.08951 2.87587 7.37151 2.87587Z"
                              fill="#D8D8D8"
                            />
                          </svg>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.5 6.392C8.08308 6.392 7.67552 6.51563 7.32886 6.74726C6.9822 6.97889 6.71201 7.30812 6.55246 7.6933C6.39291 8.07849 6.35117 8.50234 6.43251 8.91125C6.51384 9.32016 6.71461 9.69577 7.00942 9.99058C7.30423 10.2854 7.67984 10.4862 8.08875 10.5675C8.49766 10.6488 8.92151 10.6071 9.3067 10.4475C9.69188 10.288 10.0211 10.0178 10.2527 9.67114C10.4844 9.32448 10.608 8.91692 10.608 8.5C10.608 8.22317 10.5535 7.94906 10.4475 7.6933C10.3416 7.43755 10.1863 7.20516 9.99058 7.00942C9.79484 6.81367 9.56245 6.6584 9.3067 6.55246C9.05094 6.44653 8.77683 6.392 8.5 6.392ZM16.9405 4.3095C16.936 3.65309 16.8152 3.00269 16.5835 2.3885C16.4129 1.93907 16.1489 1.53093 15.809 1.19101C15.4691 0.851085 15.0609 0.58711 14.6115 0.4165C13.9973 0.184844 13.3469 0.0639718 12.6905 0.0594999C11.594 -5.69969e-08 11.271 0 8.5 0C5.729 0 5.406 -5.69969e-08 4.3095 0.0594999C3.65309 0.0639718 3.00269 0.184844 2.3885 0.4165C1.93907 0.58711 1.53093 0.851085 1.19101 1.19101C0.851085 1.53093 0.58711 1.93907 0.4165 2.3885C0.184844 3.00269 0.0639718 3.65309 0.0594999 4.3095C-5.69969e-08 5.406 0 5.729 0 8.5C0 11.271 -5.69969e-08 11.594 0.0594999 12.6905C0.0686493 13.3492 0.189358 14.0016 0.4165 14.62C0.586354 15.0674 0.850109 15.4732 1.19 15.81C1.52846 16.152 1.93748 16.4159 2.3885 16.5835C3.00269 16.8152 3.65309 16.936 4.3095 16.9405C5.406 17 5.729 17 8.5 17C11.271 17 11.594 17 12.6905 16.9405C13.3469 16.936 13.9973 16.8152 14.6115 16.5835C15.0625 16.4159 15.4715 16.152 15.81 15.81C16.1499 15.4732 16.4136 15.0674 16.5835 14.62C16.8149 14.0028 16.9358 13.3496 16.9405 12.6905C17 11.594 17 11.271 17 8.5C17 5.729 17 5.406 16.9405 4.3095ZM14.7815 11.1095C14.7542 11.634 14.6423 12.1507 14.45 12.6395C14.285 13.0472 14.0397 13.4176 13.7287 13.7287C13.4176 14.0397 13.0472 14.285 12.6395 14.45C12.1461 14.6316 11.6265 14.732 11.101 14.7475C10.4295 14.7475 10.251 14.7475 8.5 14.7475C6.749 14.7475 6.5705 14.7475 5.899 14.7475C5.37347 14.732 4.85391 14.6316 4.3605 14.45C3.93899 14.2934 3.55834 14.0435 3.247 13.719C2.93902 13.4141 2.70117 13.0457 2.55 12.6395C2.36772 12.1466 2.27002 11.6264 2.261 11.101C2.261 10.4295 2.261 10.251 2.261 8.5C2.261 6.749 2.261 6.5705 2.261 5.899C2.27002 5.37355 2.36772 4.8534 2.55 4.3605C2.70664 3.93899 2.95653 3.55834 3.281 3.247C3.58728 2.94068 3.95527 2.70308 4.3605 2.55C4.85391 2.36844 5.37347 2.26798 5.899 2.2525C6.5705 2.2525 6.749 2.2525 8.5 2.2525C10.251 2.2525 10.4295 2.2525 11.101 2.2525C11.6265 2.26798 12.1461 2.36844 12.6395 2.55C13.061 2.70664 13.4417 2.95653 13.753 3.281C14.061 3.58594 14.2988 3.95431 14.45 4.3605C14.6316 4.85391 14.732 5.37347 14.7475 5.899C14.7475 6.5705 14.7475 6.749 14.7475 8.5C14.7475 10.251 14.807 10.4295 14.7815 11.101V11.1095ZM13.4215 4.7855C13.3203 4.51094 13.1607 4.2616 12.9538 4.05468C12.7469 3.84777 12.4976 3.6882 12.223 3.587C11.846 3.45632 11.4489 3.39302 11.05 3.4C10.387 3.4 10.2 3.4 8.5 3.4C6.8 3.4 6.613 3.4 5.95 3.4C5.54903 3.40392 5.15191 3.47874 4.777 3.621C4.50664 3.71761 4.25994 3.87066 4.0533 4.06997C3.84665 4.26929 3.6848 4.5103 3.5785 4.777C3.45506 5.15556 3.39475 5.55186 3.4 5.95C3.4 6.613 3.4 6.8 3.4 8.5C3.4 10.2 3.4 10.387 3.4 11.05C3.40843 11.4505 3.4831 11.8469 3.621 12.223C3.7222 12.4976 3.88177 12.7469 4.08868 12.9538C4.2956 13.1607 4.54494 13.3203 4.8195 13.4215C5.18217 13.5549 5.56381 13.6295 5.95 13.6425C6.613 13.6425 6.8 13.6425 8.5 13.6425C10.2 13.6425 10.387 13.6425 11.05 13.6425C11.451 13.6386 11.8481 13.5638 12.223 13.4215C12.4976 13.3203 12.7469 13.1607 12.9538 12.9538C13.1607 12.7469 13.3203 12.4976 13.4215 12.223C13.5638 11.8481 13.6386 11.451 13.6425 11.05C13.6425 10.387 13.6425 10.2 13.6425 8.5C13.6425 6.8 13.6425 6.613 13.6425 5.95C13.6427 5.54863 13.5678 5.15076 13.4215 4.777V4.7855ZM8.5 11.747C8.074 11.747 7.65218 11.663 7.25871 11.4997C6.86525 11.3364 6.50786 11.0971 6.20702 10.7955C5.90619 10.4938 5.66782 10.1358 5.50557 9.74193C5.34332 9.34804 5.26038 8.926 5.2615 8.5C5.2615 7.85744 5.45215 7.22933 5.80931 6.69518C6.16648 6.16103 6.67409 5.74486 7.2679 5.49936C7.86171 5.25385 8.515 5.19005 9.14509 5.31603C9.77518 5.442 10.3537 5.75209 10.8075 6.20705C11.2612 6.662 11.5698 7.24135 11.6941 7.87177C11.8185 8.50218 11.753 9.15531 11.5059 9.74847C11.2588 10.3416 10.8413 10.8482 10.3062 11.2039C9.77116 11.5597 9.14256 11.7487 8.5 11.747ZM11.9 5.8905C11.7121 5.87061 11.5382 5.78189 11.4118 5.64143C11.2855 5.50096 11.2155 5.3187 11.2155 5.12975C11.2155 4.9408 11.2855 4.75854 11.4118 4.61808C11.5382 4.47761 11.7121 4.38889 11.9 4.369C12.0879 4.38889 12.2618 4.47761 12.3882 4.61808C12.5145 4.75854 12.5845 4.9408 12.5845 5.12975C12.5845 5.3187 12.5145 5.50096 12.3882 5.64143C12.2618 5.78189 12.0879 5.87061 11.9 5.8905Z"
                              fill="#D8D8D8"
                            />
                          </svg>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.4684 10.2694C12.2976 10.184 11.1874 9.67157 11.0166 9.58617C10.8458 9.50077 10.675 9.50077 10.5042 9.67157C10.3334 9.84237 9.99182 10.3548 9.82102 10.5256C9.73562 10.6964 9.56482 10.6964 9.39402 10.611C8.79622 10.3548 8.19841 10.0132 7.68601 9.58617C7.25901 9.15917 6.83201 8.64677 6.49041 8.13437C6.40501 7.96356 6.49041 7.79276 6.57581 7.70736C6.66121 7.62196 6.74661 7.45116 6.91741 7.36576C7.00281 7.28036 7.08821 7.10956 7.08821 7.02416C7.17361 6.93876 7.17361 6.76796 7.08821 6.68256C7.00281 6.59716 6.57581 5.57236 6.40501 5.14536C6.31961 4.54756 6.14881 4.54756 5.97801 4.54756H5.55101C5.38021 4.54756 5.12401 4.71836 5.03861 4.80376C4.52621 5.31616 4.27001 5.91396 4.27001 6.59716C4.35541 7.36576 4.61161 8.13437 5.12401 8.81757C6.06341 10.184 7.25901 11.2942 8.71082 11.9774C9.13782 12.1482 9.47942 12.319 9.90642 12.4044C10.3334 12.5752 10.7604 12.5752 11.2728 12.4898C11.8706 12.4044 12.383 11.9774 12.7246 11.465C12.8954 11.1234 12.8954 10.7818 12.81 10.4402L12.4684 10.2694ZM14.6034 2.49795C11.2728 -0.832651 5.89261 -0.832651 2.562 2.49795C-0.1708 5.23076 -0.683201 9.41537 1.1956 12.746L0 17.1014L4.52621 15.9058C5.80721 16.589 7.17361 16.9306 8.51002 16.9306C13.237 16.9306 16.9946 13.173 16.9946 8.47597C17.08 6.25556 16.1406 4.12056 14.6034 2.49795ZM12.2976 14.454C11.1874 15.1372 9.90642 15.5642 8.51002 15.5642C7.25901 15.5642 6.06341 15.2226 4.95321 14.6248L4.69701 14.454L2.0496 15.1372L2.73281 12.5752L2.562 12.319C0.512401 8.90297 1.5372 4.63296 4.86781 2.49795C8.19841 0.362951 12.4684 1.47315 14.518 4.71836C16.5676 8.04897 15.6282 12.4044 12.2976 14.454Z"
                              fill="#D8D8D8"
                            />
                          </svg>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 19 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.0443022 0L7.05984 9.37651L0 17H1.58889L7.76976 10.3255L12.7637 17H18.1708L10.7605 7.09608L17.3318 0H15.7429L10.0506 6.14707L5.45134 0H0.0443022ZM2.38088 1.16989H4.86489L15.8338 15.8299H13.3498L2.38088 1.16989Z"
                              fill="#D8D8D8"
                            />
                          </svg>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.170898 1.97475C0.170898 1.40235 0.371241 0.930123 0.771909 0.558081C1.17258 0.186021 1.69346 0 2.33453 0C2.96417 0 3.47359 0.183154 3.86282 0.549495C4.26349 0.927273 4.46383 1.41952 4.46383 2.02626C4.46383 2.57576 4.26922 3.03366 3.87999 3.4C3.47932 3.77778 2.95272 3.96667 2.30019 3.96667H2.28302C1.65338 3.96667 1.14397 3.77778 0.754737 3.4C0.365506 3.02222 0.170898 2.54713 0.170898 1.97475ZM0.394131 17V5.52929H4.20625V17H0.394131ZM6.31837 17H10.1305V10.5949C10.1305 10.1943 10.1763 9.88517 10.2679 9.66768C10.4281 9.27845 10.6714 8.94932 10.9977 8.6803C11.3239 8.41127 11.7332 8.27677 12.2254 8.27677C13.5076 8.27677 14.1487 9.14107 14.1487 10.8697V17H17.9608V10.4232C17.9608 8.72895 17.5601 7.44394 16.7588 6.56818C15.9574 5.69242 14.8985 5.25455 13.582 5.25455C12.1052 5.25455 10.9547 5.8899 10.1305 7.16061V7.19495H10.1133L10.1305 7.16061V5.52929H6.31837C6.34126 5.89562 6.35272 7.03467 6.35272 8.94646C6.35272 10.8582 6.34126 13.5427 6.31837 17Z"
                              fill="#D8D8D8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-md-2 flex justify-center items-center">
                        <svg
                          width="25"
                          height="15"
                          viewBox="0 0 25 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 0C7.92969 0 4.36942 2.72321 0 7.14286C3.76116 10.9208 6.91964 14.2857 12.5 14.2857C18.0748 14.2857 22.1763 10.0223 25 7.22098C22.1094 3.93973 18.0134 0 12.5 0ZM12.5 12.2377C9.7433 12.2377 7.5 9.94978 7.5 7.14286C7.5 4.33036 9.7433 2.04799 12.5 2.04799C15.2567 2.04799 17.5 4.33594 17.5 7.14286C17.5 9.95536 15.2567 12.2377 12.5 12.2377Z"
                            fill="#D8D8D8"
                          />
                          <path
                            d="M12.5001 5.35723C12.5001 4.91638 12.6619 4.51459 12.9242 4.20209C12.7847 4.17977 12.6452 4.16861 12.5001 4.16861C10.8929 4.16861 9.58154 5.50232 9.58154 7.14294C9.58154 8.78356 10.8929 10.1173 12.5001 10.1173C14.1072 10.1173 15.4186 8.78356 15.4186 7.14294C15.4186 7.01459 15.4074 6.88624 15.3963 6.7579C15.0894 6.99785 14.7099 7.14294 14.2914 7.14294C13.2981 7.14294 12.5001 6.34495 12.5001 5.35723Z"
                            fill="#D8D8D8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 bg-[#f8f8f8]">
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
                              xmlns="http://www.w3.org/2000/svg"
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
                              xmlns="http://www.w3.org/2000/svg"
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
                              xmlns="http://www.w3.org/2000/svg"
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
                  <div className="col-12 mt-3 bg-[#fec6ac] rounded-[10px] p-4 ">
                    <div className="col-12 flex">
                      <div className="col-md-10 text-black w-full">
                        <p className="text-[15px] font-[100] mb-1">
                          Teachers Attendance
                        </p>
                      </div>

                      <div className="col-md-2 flex items-center justify-end mb-1 space-x-1">
                        <span className="w-1 h-1 bg-[#000] rounded-full"></span>
                        <span className="w-1 h-1 bg-[#000] rounded-full"></span>
                        <span className="w-1 h-1 bg-[#000] rounded-full"></span>
                      </div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-md-8 d-flex text-black w-full">
                        <p className="text-[15px] font-[100] ">FEB</p>
                        <div className="col-md-40  ml-1 flex items-center">
                          <p className="text-[15px] font-[100]">2023</p>
                          <svg
                            className="mb-3 ms-1"
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
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        borderTop: "1px solid #000",
                        borderBottom: "1px solid #000",
                      }}
                    >
                      <div className="grid grid-cols-3 gap-2 p-2">
                        <div className="text-[12px] font-[100]">ID</div>
                        <div className="text-[12px] font-[100]">Name</div>
                        <div className="text-[12px] font-[100]">Percentage</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
