import Image from "next/image";
import SlideBar from "../components/SlideBar";
import Dashboard from "../components/Dashboard";
import AccountTable from "../components/Tables/AccountTable";


export default function Home() {
    return (
        <>
            <section>
                <div className="flex">
                    <SlideBar />
                    <div className="w-[calc(100vw_-_310px)]">
                        <div className="container-fluid overflow-hidden">
                            <div className="row">
                                <Dashboard />

                                <div className="col-12 flex gap-2">
                                    <div className="col-md-7">
                                        <div className="mt-3">
                                            <div className=" p-4 bg-[#fafaf8] rounded-2xl">
                                                <div className="grid grid-cols-2">
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

                                                <div className="mt-2 mb-4">
                                                    <Image
                                                        src="/images/Group 174.png"
                                                        alt=""
                                                        width={592}
                                                        height={310}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-5 mt-3 mb-2 bg-[#fafaf8] rounded-2xl">
                                        <div className="grid grid-cols-2 gap-3 p-3">
                                            <div className="border-solid border-2 p-4 pt-5 pb-4 rounded-[15px] border-[#DADADA] bg-[#fdfdfc]">
                                                <p className="mt-4 text-[14px] font-[200]">Fees Collections</p>
                                                <p className="text-[30px] leading-[20px] font-[200]">₹27,793,20</p>
                                                <svg width="30" height="30" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="24.9436" cy="25.2366" r="24.9436" fill="#333D61" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.4594 33.7307C27.948 33.6576 27.5927 33.1837 27.6659 32.6723L29.1796 22.0833L18.9468 18.9678C18.4525 18.8174 18.1738 18.2948 18.3243 17.8005C18.4748 17.3064 18.9974 17.0277 19.4917 17.1781L30.4916 20.5272C30.9329 20.6616 31.2103 21.0977 31.1451 21.5544L29.5178 32.9371C29.4447 33.4485 28.9708 33.8038 28.4594 33.7307Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.2504 36.4087C23.739 36.3355 23.3837 35.8617 23.4568 35.3503L24.9706 24.7613L14.7378 21.6458C14.2436 21.4954 13.9649 20.9727 14.1153 20.4785C14.2658 19.9844 14.7884 19.7057 15.2826 19.8562L26.2826 23.2051C26.7239 23.3396 27.0013 23.7756 26.9361 24.2324L25.3088 35.6151C25.2357 36.1265 24.7618 36.4818 24.2504 36.4087Z" fill="#FBFBFB" fillOpacity="0.6" />
                                                </svg>

                                            </div>
                                            <div className="border-solid border-2 p-4 pt-5 pb-4 rounded-[15px] border-[#DADADA] bg-[#fdfdfc]">
                                                <p className="mt-4 text-[14px] font-[200]">Fees Collections</p>
                                                <p className="text-[30px] leading-[20px] font-[200]">₹27,793,20</p>
                                                <svg width="30" height="30" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="24.9436" cy="25.2366" r="24.9436" fill="#333D61" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.4594 33.7307C27.948 33.6576 27.5927 33.1837 27.6659 32.6723L29.1796 22.0833L18.9468 18.9678C18.4525 18.8174 18.1738 18.2948 18.3243 17.8005C18.4748 17.3064 18.9974 17.0277 19.4917 17.1781L30.4916 20.5272C30.9329 20.6616 31.2103 21.0977 31.1451 21.5544L29.5178 32.9371C29.4447 33.4485 28.9708 33.8038 28.4594 33.7307Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.2504 36.4087C23.739 36.3355 23.3837 35.8617 23.4568 35.3503L24.9706 24.7613L14.7378 21.6458C14.2436 21.4954 13.9649 20.9727 14.1153 20.4785C14.2658 19.9844 14.7884 19.7057 15.2826 19.8562L26.2826 23.2051C26.7239 23.3396 27.0013 23.7756 26.9361 24.2324L25.3088 35.6151C25.2357 36.1265 24.7618 36.4818 24.2504 36.4087Z" fill="#FBFBFB" fillOpacity="0.6" />
                                                </svg>

                                            </div>
                                            <div className="border-solid border-2 p-4 pt-5 pb-4 rounded-[15px] border-[#DADADA] bg-[#fdfdfc]">
                                                <p className="mt-4 text-[14px] font-[200]">Fees Collections</p>
                                                <p className="text-[30px] leading-[20px] font-[200]">₹27,793,20</p>
                                                <svg width="30" height="30" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="24.9436" cy="25.2366" r="24.9436" fill="#333D61" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.4594 33.7307C27.948 33.6576 27.5927 33.1837 27.6659 32.6723L29.1796 22.0833L18.9468 18.9678C18.4525 18.8174 18.1738 18.2948 18.3243 17.8005C18.4748 17.3064 18.9974 17.0277 19.4917 17.1781L30.4916 20.5272C30.9329 20.6616 31.2103 21.0977 31.1451 21.5544L29.5178 32.9371C29.4447 33.4485 28.9708 33.8038 28.4594 33.7307Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.2504 36.4087C23.739 36.3355 23.3837 35.8617 23.4568 35.3503L24.9706 24.7613L14.7378 21.6458C14.2436 21.4954 13.9649 20.9727 14.1153 20.4785C14.2658 19.9844 14.7884 19.7057 15.2826 19.8562L26.2826 23.2051C26.7239 23.3396 27.0013 23.7756 26.9361 24.2324L25.3088 35.6151C25.2357 36.1265 24.7618 36.4818 24.2504 36.4087Z" fill="#FBFBFB" fillOpacity="0.6" />
                                                </svg>

                                            </div>
                                            <div className="border-solid border-2 p-4 pt-5 pb-4 rounded-[15px] border-[#DADADA] bg-[#fdfdfc]">
                                                <p className="mt-4 text-[14px] font-[200]">Fees Collections</p>
                                                <p className="text-[30px] leading-[20px] font-[200]">₹27,793,20</p>
                                                <svg width="30" height="30" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="24.9436" cy="25.2366" r="24.9436" fill="#333D61" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.4594 33.7307C27.948 33.6576 27.5927 33.1837 27.6659 32.6723L29.1796 22.0833L18.9468 18.9678C18.4525 18.8174 18.1738 18.2948 18.3243 17.8005C18.4748 17.3064 18.9974 17.0277 19.4917 17.1781L30.4916 20.5272C30.9329 20.6616 31.2103 21.0977 31.1451 21.5544L29.5178 32.9371C29.4447 33.4485 28.9708 33.8038 28.4594 33.7307Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.2504 36.4087C23.739 36.3355 23.3837 35.8617 23.4568 35.3503L24.9706 24.7613L14.7378 21.6458C14.2436 21.4954 13.9649 20.9727 14.1153 20.4785C14.2658 19.9844 14.7884 19.7057 15.2826 19.8562L26.2826 23.2051C26.7239 23.3396 27.0013 23.7756 26.9361 24.2324L25.3088 35.6151C25.2357 36.1265 24.7618 36.4818 24.2504 36.4087Z" fill="#FBFBFB" fillOpacity="0.6" />
                                                </svg>

                                            </div>




                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="col-12 mt-4">
                            <AccountTable />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
