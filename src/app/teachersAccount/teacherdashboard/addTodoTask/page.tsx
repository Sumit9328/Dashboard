"use client";
import Updatedsidetech from "../dashtechcomponent/updatedsidetech";
import Dashboard from "@/app/components/Dashboard";
import TodoTaskTable from "./todotaskcomp/TodoTaskTable";

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
                  <div className="col-md-11 flex items-center gap-4 ps-4 p-4">



     <TodoTaskTable/>
                   
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
