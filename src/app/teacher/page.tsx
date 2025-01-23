"use client";
import SlideBar from '../components/SlideBar';
import TeachersTable from "../components/Tables/TeachersTable";
import CustomDropdownClass from "../components/Tables/CustomDropdownClass";
import Dashboard from "../components/Dashboard";

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


                                <div className="col-12 flex items-center gap-4 ps-4 p-2">
                  <div>

                    <p className="text-[18px] font-[100] text-[#333D61] mt-1 ms-2">
                      Teachers List
                    </p>
                  </div>

                  <div className="mt-3 mb-4 flex gap-4">

                    <CustomDropdownClass />
                    <CustomDropdownClass />

                  </div>
                </div>


                                <TeachersTable />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
