import Image from "next/image";
import Updatedsidebar from "./dashcomponent/updatedsidebar";
// import WeeklyComparisonChart from "./grapghcomponent/WeeklyComparisonChart";
import Dashboard from "../../components/Dashboard";

export default function Home() {
    return (
        <>
            <section>
                <div className="flex">
                    <Updatedsidebar />
                    <div className="w-[calc(100vw_-_310px)]">
                        <div className="container-fluid">
                            <div className="row">
                                <Dashboard />
                                {/* <div className="row"> */}
                                <div className="col-md-12 mt-3 mb-3">
                                    <div className="grid grid-cols-4 gap-3 mt-1">
                                        <div className="bg-[#fafaf8] rounded-2xl p-0 flex justify-around items-center">
                                            <div className="flex flex-col items-start">
                                                <p className="text-[14px] font-[100] text-[#333D61] m-0">
                                                    Revenue this Month
                                                </p>
                                                <p className="text-[17px] font-[200] text-[#333D61] m-0">
                                                    ₹10,44,675
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
                                                <p className="text-[14px] font-[100] text-[#333D61] m-0">
                                                    Staff Salary Distribution
                                                </p>
                                                <p className="text-[17px] font-[200] text-[#333D61] m-0">
                                                    ₹3,00,321
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
                                                <p className="text-[14px] font-[100] text-[#333D61] m-0">
                                                    Pending Payments
                                                </p>
                                                <p className="text-[17px] font-[200] text-[#333D61] m-0">
                                                    ₹1,09,897
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
                                                <p className="text-[14px] font-[100] text-[#333D61] m-0">
                                                    Outstanding Invoice
                                                </p>
                                                <p className="text-[17px] font-[200] text-[#333D61] m-0">
                                                    2,103
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
                                <div className="grid grid-cols-4 gap-3 mb-3">
                                    <div className="border-solid border-2 border-sky-500 flex justify-between">
                                        <p>Recent Transcations</p>
                                        <p>See all </p>
                                    </div>
                                    <div className="border-solid border-2 border-sky-500 col-span-3">
                                        <p>Statistics</p>
                                        {/* <WeeklyComparisonChart/> */}
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-3 mb-3">
                                    <div className="border-solid border-2 border-sky-500 bg-[#fafaf8]  justify-between">


                                        <div className="mt-2">
                                            <div className="col-12 ms-4 mb-3 flex gap-4 ">
                                                <div>All</div>
                                                <div>Revenue</div>
                                                <div>Expenses</div>
                                            </div>
                                            <div className="flex border-t-2 p-2 justify-around items-center">
                                                <div>
                                                    <Image
                                                        src="/images/Group 475.png"
                                                        alt=""
                                                        width={35}
                                                        height={35}
                                                    />

                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-[14px] mt-3">Electricity Bill</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-[12px]">₹60,000</p>
                                                    <p className="mb-0 text-[#4F4F4F] text-[12px]">07/06/2024</p>

                                                </div>
                                            </div>
                                            <div className="flex border-t-2 p-2 justify-around items-center">
                                                <div>
                                                    <Image
                                                        src="/images/Group 475.png"
                                                        alt=""
                                                        width={35}
                                                        height={35}
                                                    />

                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-[14px] mt-3">Electricity Bill</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-[12px]">₹60,000</p>
                                                    <p className="mb-0 text-[#4F4F4F] text-[12px]">07/06/2024</p>

                                                </div>
                                            </div>
                                            <div className="flex border-t-2 p-2 justify-around items-center">
                                                <div>
                                                    <Image
                                                        src="/images/Group 475.png"
                                                        alt=""
                                                        width={35}
                                                        height={35}
                                                    />

                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-[14px] mt-3">Electricity Bill</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-[12px]">₹60,000</p>
                                                    <p className="mb-0 text-[#4F4F4F] text-[12px]">07/06/2024</p>

                                                </div>
                                            </div>
                                            <div className="flex border-t-2 p-2 justify-around items-center">
                                                <div>
                                                    <Image
                                                        src="/images/Group 475.png"
                                                        alt=""
                                                        width={35}
                                                        height={35}
                                                    />

                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-[14px] mt-3">Electricity Bill</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-[12px]">₹60,000</p>
                                                    <p className="mb-0 text-[#4F4F4F] text-[12px]">07/06/2024</p>

                                                </div>
                                            </div>
                                            <div className="flex border-t-2 p-2 justify-around items-center">
                                                <div>
                                                    <Image
                                                        src="/images/Group 475.png"
                                                        alt=""
                                                        width={35}
                                                        height={35}
                                                    />

                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-[14px] mt-3">Electricity Bill</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-[12px]">₹60,000</p>
                                                    <p className="mb-0 text-[#4F4F4F] text-[12px]">07/06/2024</p>

                                                </div>
                                            </div>
                                            <div className="flex border-t-2 p-2 justify-around items-center">
                                                <div>
                                                    <Image
                                                        src="/images/Group 475.png"
                                                        alt=""
                                                        width={35}
                                                        height={35}
                                                    />

                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-[14px] mt-3">Electricity Bill</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-[12px]">₹60,000</p>
                                                    <p className="mb-0 text-[#4F4F4F] text-[12px]">07/06/2024</p>

                                                </div>
                                            </div>
                                            <div className="flex border-t-2 p-2 justify-around items-center">
                                                <div>
                                                    <Image
                                                        src="/images/Group 475.png"
                                                        alt=""
                                                        width={35}
                                                        height={35}
                                                    />

                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-[14px] mt-3">Electricity Bill</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-[12px]">₹60,000</p>
                                                    <p className="mb-0 text-[#4F4F4F] text-[12px]">07/06/2024</p>

                                                </div>
                                            </div>
                                            <div className="flex border-t-2 p-2 justify-around items-center">
                                                <div>
                                                    <Image
                                                        src="/images/Group 475.png"
                                                        alt=""
                                                        width={35}
                                                        height={35}
                                                    />

                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-[14px] mt-3">Electricity Bill</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-[12px]">₹60,000</p>
                                                    <p className="mb-0 text-[#4F4F4F] text-[12px]">07/06/2024</p>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="border-solid border-2 border-sky-500 col-span-3">
                                        <p>Statistics</p>

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
