import Image from "next/image";
import Link from "next/link";
export default function LeftSlideBar() {
  return (
    <>
      <div className="bg-[#fafaf8] w-[311px]">
        <>
          <div className="d-flex p-4 mt-4 ps-5 justify-content-center align-items-center mb-4">
            <div className="col-md-2">
              <Image
                src="/images/Group1.png"
                alt=""
                width={59}
                height={62}
              />
            </div>
            <div className="mb-0 p-0 m-0 ff-aTypeDisplay col-md-10">
              <span className="text-[15px] ff-aTypeDisplay font-[100]">SMS</span>
              <p className=" ff-aTypeDisplay font-[100] text-[11px] p-0 m-0">
                SCHOOL MANAGEMENT SYSTEM
              </p>
            </div>
          </div>

          <div className="d-flex ps-5 justify-content-center align-items-center mb-4">
            <div className="col-md-2">
              <Image
                src="/images/Group 4.png"
                alt=""
                width={25}
                height={25}
              />
            </div>
            <div className="mb-0 p-0 m-0 ff-aTypeDisplay col-md-10 flex items-center justify-between">
              <span className="text-[16px] font-[100]text-[#333D61]  ml-1">
                Dashboard
              </span>
              <Image
                src="/images/Rectangle 2.png"
                alt=""
                width={5}
                height={46}
              />
            </div>

          </div>

          <div className="d-flex ps-5 pt-3 pb-3 justify-content-center align-items-center mb-4">
            <div className="col-md-2">
              <Image
                src="/images/Group 7.png"
                alt=""
                width={25}
                height={25}
              />
            </div>
            <div className="mb-0 p-0 m-0 ff-aTypeDisplay col-md-10 flex items-center justify-between">
              <Link className="no-underline" href='/components/NewAdmissionlist'>

                <span className="text-[15px] font-[100] font-[100] text-[#B6B6B5] no-underline ml-1">New Admission Lists</span>
              </Link>
            </div>
          </div>
          <div className="d-flex ps-5 pt-3 pb-3 justify-content-center align-items-center mb-4">
            <div className="col-md-2">
              <Image
                src="/images/Group 6.png"
                alt=""
                width={25}
                height={25}
              />
            </div>
            <div className="mb-0 p-0 m-0 ff-aTypeDisplay col-md-10 flex items-center justify-between">
              <Link className="no-underline" href='/components/admissionpage'>

                <span className="text-[15px] font-[100] font-[100] text-[#B6B6B5] no-underline ml-1">Add Student</span>
              </Link>
            </div>
          </div>













        </>
      </div>
    </>
  )
}