import React from 'react';

const AttendanceTable = () => {
  return (
    <div className="p-2 rounded-[6px]">
      <div className="flex justify-between bg-white py-2 px-2 items-center rounded-[10px]">
        <div className="flex items-center gap-2 py-1">
          <span className="bg-orange-100 text-orange-600 px-3 py-2 rounded text-[12px] font-medium">
            Monday, 08 July 2024
          </span>
        </div>
        <button className=" text-[12px] bg-[#FFB390] px-4 py-2 rounded-[4px]">
          Save Attendance
        </button>
      </div>
      <table className="table-auto w-full py-5 bg-white border-collapse">
        <thead className="bg-white">
        <tr>
  <th className="border-t border-b border-gray-300 px-6 py-3 text-left">
    <input type="checkbox" className="form-checkbox rounded bg-red" />
  </th>
  <th className="border-t border-b text-[14px] text-[#B0B0B0] font-[100] border-gray-300 px-6 py-3 text-left">Student ID</th>
  <th className="border-t border-b text-[14px] text-[#B0B0B0] font-[100] border-gray-300 px-6 py-3 text-left">Student Name</th>
  <th className="border-t border-b text-[14px] text-[#B0B0B0] font-[100] border-gray-300 px-6 py-3 text-center">Present</th>
  <th className="border-t border-b text-[14px] text-[#B0B0B0] font-[100] border-gray-300 px-6 py-3 text-center">Absent</th>
  <th className="border-t border-b text-[14px] text-[#B0B0B0] font-[100] border-gray-300 px-6 py-3 text-center">On Leave</th>
</tr>

        </thead>
        <tbody>
          {[
            { id: '#2345', name: 'Vishal Verma', status: 'P' },
            { id: '#8790', name: 'Deepu Chauhan', status: 'A' },
            { id: '#7680', name: 'Akanksha Singh', status: 'P' },
            { id: '#8760', name: 'Akshay Verma', status: 'L' },
            { id: '#2345', name: 'Vishal Verma', status: 'P' },
            { id: '#8790', name: 'Deepu Chauhan', status: 'A' },
            { id: '#7680', name: 'Akanksha Singh', status: 'P' },
            { id: '#8760', name: 'Akshay Verma', status: 'L' },
            { id: '#2345', name: 'Vishal Verma', status: 'P' },
            { id: '#8790', name: 'Deepu Chauhan', status: 'A' },
            { id: '#7680', name: 'Akanksha Singh', status: 'P' },
            { id: '#8760', name: 'Akshay Verma', status: 'L' },
            { id: '#2345', name: 'Vishal Verma', status: 'P' },
            { id: '#8790', name: 'Deepu Chauhan', status: 'A' },
            { id: '#7680', name: 'Akanksha Singh', status: 'P' },
            { id: '#8760', name: 'Akshay Verma', status: 'L' },
            
          ].map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className=" px-6 py-3 text-left">
                <input type="checkbox" className="form-checkbox rounded" />
              </td>
              <td className=" px-6 py-3 text-left">{student.id}</td>
              <td className=" px-6 py-3 text-left">{student.name}</td>
              <td className=" px-6 py-3 text-center">
                <input
                  type="radio"
                  name={`status-${index}`}
                  value="P"
                  className="form-radio text-[#333D61]"
                  defaultChecked={student.status === 'P'}
                />
              </td>
              <td className=" px-6 py-3 text-center">
                <input
                  type="radio"
                  name={`status-${index}`}
                  value="A"
                  className="form-radio text-[#333D61]"
                  defaultChecked={student.status === 'A'}
                />
              </td>
              <td className=" px-6 py-3 text-center">
                <input
                  type="radio"
                  name={`status-${index}`}
                  value="L"
                  className="form-radio text-[#333D61]"
                  defaultChecked={student.status === 'L'}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
