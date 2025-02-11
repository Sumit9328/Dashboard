"use client";
import Updatedsidetech from "../dashtechcomponent/updatedsidetech";
import ResultTable from "@/app/components/Tables/ResultTable";
import Dashboard from "@/app/components/Dashboard";
import CustomDropdownClass from "@/app/components/Tables/CustomDropdownClass";
import CustomDropdownSection from "@/app/components/Tables/CustomDropdownSection";
export default function Home() {
  return (
    <>
      <section>
        <div className="flex">
          <Updatedsidetech />
          <div className="w-[calc(100vw_-_310px)]">
            <div className="container-fluid ">
              <div className="row">
                <Dashboard />
                <div className="col-12 flex items-center gap-2">
                  <div className="col-md-6 flex items-center gap-4 ps-4 p-4">
                  <p className="text-[18px] font-[100] text-[#333D61] mt-0 ms-2">Exam Lists</p>
                    <div className="col-md-4 flex items-center gap-4 p-2">
                      <div className=" mt-3 flex gap-4">

                        <CustomDropdownClass />
                        <CustomDropdownSection />

                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 flex items-center justify-end gap-2 ps-4 p-4">
                    <svg width="22" height="24" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.5556 7.22222H4.33333C1.94278 7.22222 0 9.165 0 11.5556V20.2222H5.77778V26H23.1111V20.2222H28.8889V11.5556C28.8889 9.165 26.9461 7.22222 24.5556 7.22222ZM20.2222 23.1111H8.66667V15.8889H20.2222V23.1111ZM24.5556 13C23.7539 13 23.1111 12.3572 23.1111 11.5556C23.1111 10.7539 23.7539 10.1111 24.5556 10.1111C25.3572 10.1111 26 10.7539 26 11.5556C26 12.3572 25.3572 13 24.5556 13ZM23.1111 0H5.77778V5.77778H23.1111V0Z" fill="#E7E7E7" />
                    </svg>
                    <svg width="22" height="24" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.377 14.677C7.25515 14.7979 7.15844 14.9416 7.09244 15.1C7.02644 15.2585 6.99246 15.4284 6.99246 15.6C6.99246 15.7716 7.02644 15.9415 7.09244 16.0999C7.15844 16.2584 7.25515 16.4021 7.377 16.523L11.277 20.423C11.3979 20.5448 11.5416 20.6416 11.7001 20.7076C11.8585 20.7736 12.0284 20.8075 12.2 20.8075C12.3716 20.8075 12.5415 20.7736 12.7 20.7076C12.8584 20.6416 13.0021 20.5448 13.123 20.423L17.023 16.523C17.2678 16.2782 17.4053 15.9462 17.4053 15.6C17.4053 15.2538 17.2678 14.9218 17.023 14.677C16.7782 14.4322 16.4462 14.2947 16.1 14.2947C15.7538 14.2947 15.4218 14.4322 15.177 14.677L13.5 16.367V1.3C13.5 0.955218 13.363 0.624558 13.1192 0.380761C12.8754 0.136964 12.5448 0 12.2 0C11.8552 0 11.5246 0.136964 11.2808 0.380761C11.037 0.624558 10.9 0.955218 10.9 1.3V16.367L9.223 14.677C9.10215 14.5552 8.95837 14.4584 8.79995 14.3924C8.64153 14.3264 8.47162 14.2925 8.3 14.2925C8.12839 14.2925 7.95847 14.3264 7.80005 14.3924C7.64163 14.4584 7.49785 14.5552 7.377 14.677ZM20 9.1H17.4C17.0552 9.1 16.7246 9.23696 16.4808 9.48076C16.237 9.72456 16.1 10.0552 16.1 10.4C16.1 10.7448 16.237 11.0754 16.4808 11.3192C16.7246 11.563 17.0552 11.7 17.4 11.7H20C20.3448 11.7 20.6754 11.837 20.9192 12.0808C21.163 12.3246 21.3 12.6552 21.3 13V22.1C21.3 22.4448 21.163 22.7754 20.9192 23.0192C20.6754 23.263 20.3448 23.4 20 23.4H4.4C4.05522 23.4 3.72456 23.263 3.48076 23.0192C3.23696 22.7754 3.1 22.4448 3.1 22.1V13C3.1 12.6552 3.23696 12.3246 3.48076 12.0808C3.72456 11.837 4.05522 11.7 4.4 11.7H7C7.34478 11.7 7.67544 11.563 7.91924 11.3192C8.16304 11.0754 8.3 10.7448 8.3 10.4C8.3 10.0552 8.16304 9.72456 7.91924 9.48076C7.67544 9.23696 7.34478 9.1 7 9.1H4.4C3.36566 9.1 2.37368 9.51089 1.64228 10.2423C0.910892 10.9737 0.5 11.9657 0.5 13V22.1C0.5 23.1343 0.910892 24.1263 1.64228 24.8577C2.37368 25.5891 3.36566 26 4.4 26H20C21.0343 26 22.0263 25.5891 22.7577 24.8577C23.4891 24.1263 23.9 23.1343 23.9 22.1V13C23.9 11.9657 23.4891 10.9737 22.7577 10.2423C22.0263 9.51089 21.0343 9.1 20 9.1Z" fill="#E7E7E7" />
                    </svg>
                  </div>
                </div>


                <ResultTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
