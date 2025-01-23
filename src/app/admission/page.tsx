"use client";
import Link from "next/link";
import SlideBar from "../components/SlideBar";
import CustomDropdownClass from "../components/Tables/CustomDropdownClass";
import CustomDropdownSection from "../components/Tables/CustomDropdownSection";
import Dashboard from "../components/Dashboard";
import StudentTable from "../components/Tables/StudentTable";

export default function Adimission() {
  return (
    <>
      <section>
        <div className="flex">
          <SlideBar />
          <div className="w-[calc(100vw_-_310px)]">
            <div className="container-fluid">
              <div className="row">
                <Dashboard />
                <div className="col-12 flex items-center gap-2 p-4">
                  <div className="col-md-8 flex items-center gap-2">
                    <p className="text-[18px] font-[100] mt-2 text-[#333D61]">
                      New Admission/Teachers Lists
                    </p>

                    <button className="px-2 py-1 p-0 mb-2 flex font-[100] items-center justify-between text-[12px] bg-[#FFB390] rounded-md  text-[#333D61]">
                      New Admissions
                    </button>

                    <Link
                      className="no-underline"
                      href="/components/NewTeacher"
                    >
                      <button className="px-2 py-1 p-0 mb-2 flex font-[100] items-center justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61]">
                        New Teacher
                        <svg
                          className=" ms-2"
                          width="9"
                          height="5"
                          viewBox="0 0 9 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.64967 0.161958L4.31372 3.49791L0.977772 0.161958C0.868957 0.056861 0.723217 -0.00129273 0.571941 2.18104e-05C0.420665 0.00133635 0.275958 0.0620139 0.168986 0.168986C0.0620139 0.275958 0.00133635 0.420665 2.18104e-05 0.571941C-0.00129273 0.723217 0.056861 0.868956 0.161958 0.977771L3.90408 4.7199C3.95775 4.77379 4.02161 4.81644 4.09194 4.84537C4.16228 4.87429 4.23767 4.88891 4.31372 4.88837C4.38975 4.88875 4.46509 4.87406 4.53541 4.84514C4.60572 4.81622 4.6696 4.77366 4.72336 4.7199L8.46548 0.977771C8.57058 0.868956 8.62873 0.723217 8.62742 0.571941C8.62611 0.420665 8.56543 0.275958 8.45846 0.168986C8.35148 0.0620139 8.20678 0.00133635 8.0555 2.18104e-05C7.90423 -0.00129273 7.75849 0.056861 7.64967 0.161958Z"
                            fill="#333D61"
                          />
                        </svg>
                      </button>
                    </Link>

                    <Link
                      className="no-underline"
                      href="/components/PendingApproval"
                    >
                      <button className="px-2 py-1 p-0 mb-2 flex font-[100] items-center justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61]">
                        Pending Approvals
                        <svg
                          className=" ms-2"
                          width="9"
                          height="5"
                          viewBox="0 0 9 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.64967 0.161958L4.31372 3.49791L0.977772 0.161958C0.868957 0.056861 0.723217 -0.00129273 0.571941 2.18104e-05C0.420665 0.00133635 0.275958 0.0620139 0.168986 0.168986C0.0620139 0.275958 0.00133635 0.420665 2.18104e-05 0.571941C-0.00129273 0.723217 0.056861 0.868956 0.161958 0.977771L3.90408 4.7199C3.95775 4.77379 4.02161 4.81644 4.09194 4.84537C4.16228 4.87429 4.23767 4.88891 4.31372 4.88837C4.38975 4.88875 4.46509 4.87406 4.53541 4.84514C4.60572 4.81622 4.6696 4.77366 4.72336 4.7199L8.46548 0.977771C8.57058 0.868956 8.62873 0.723217 8.62742 0.571941C8.62611 0.420665 8.56543 0.275958 8.45846 0.168986C8.35148 0.0620139 8.20678 0.00133635 8.0555 2.18104e-05C7.90423 -0.00129273 7.75849 0.056861 7.64967 0.161958Z"
                            fill="#333D61"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>


                  <div className="col-md-4 flex items-center gap-4 p-2">


                    <div className=" mt-2 flex gap-4">

                      <CustomDropdownClass />
                      <CustomDropdownSection />

                    </div>
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
