import Link from "next/link";
import SlideBar from "../SlideBar";
import Dashboard from "../Dashboard";
import PendingapprovalTable from "../Tables/PendingapprovalTable";

export default function Adimission() {
  return (
    <>
      <section>
        <div className="flex">
          <SlideBar />
          <div className="w-[calc(100vw_-_310px)]">
            <div className="container-fluid ">
              <div className="row">
                <Dashboard />
                <div className="col-12 flex items-center gap-2 p-4">
                  <div className="col-md-8 flex items-center gap-2">
                    <p className="text-[18px] font-[100] mt-2 text-[#333D61]">
                      New Admission/Teachers Lists
                    </p>
                    <Link
                      className="no-underline"
                      href="/admission"
                    >
                      <button className="px-2 py-1 p-0 mb-2 flex font-[100] items-center justify-between text-[12px] bg-[#f8f8f8] rounded-md border-solid border-[1px] border-[#333D61] text-[#333D61]">
                        New Admissions
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
                      <button className="px-2 py-1 p-0 mb-2 flex font-[100] items-center justify-between text-[12px] bg-[#FFB390] rounded-md text-[#333D61]">
                        Pending Approvals

                      </button>
                    </Link>
                  </div>
                  <div className="col-md-4 flex items-center justify-end gap-3 ps-2 mb-2">
                    <div>
                      <div className="flex gap-2">
                        <svg
                          width="22"
                          height="24"
                          viewBox="0 0 29 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.5556 7.22222H4.33333C1.94278 7.22222 0 9.165 0 11.5556V20.2222H5.77778V26H23.1111V20.2222H28.8889V11.5556C28.8889 9.165 26.9461 7.22222 24.5556 7.22222ZM20.2222 23.1111H8.66667V15.8889H20.2222V23.1111ZM24.5556 13C23.7539 13 23.1111 12.3572 23.1111 11.5556C23.1111 10.7539 23.7539 10.1111 24.5556 10.1111C25.3572 10.1111 26 10.7539 26 11.5556C26 12.3572 25.3572 13 24.5556 13ZM23.1111 0H5.77778V5.77778H23.1111V0Z"
                            fill="#E7E7E7"
                          />
                        </svg>

                      </div>
                    </div>
                  </div>
                </div>

                <PendingapprovalTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
