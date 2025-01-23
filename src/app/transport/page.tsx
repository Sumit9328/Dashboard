"use client";
import SlideBar from '../components/SlideBar';
import CustomDropdownClass from "../components/Tables/CustomDropdownClass";
import CustomDropdownSection from "../components/Tables/CustomDropdownSection";
import Dashboard from "../components/Dashboard";
import TransportTable from "../components/Tables/TransportTable";

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
                <div className="col-12 flex items-center gap-4 ps-4 p-2">
                  <p className="text-[18px] font-[100] text-[#333D61] mt-1 ms-2">Transport</p>
                  <div className=" mt-3 flex gap-4">

                    <CustomDropdownClass />
                    <CustomDropdownSection />

                  </div>

                </div>
                <TransportTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
