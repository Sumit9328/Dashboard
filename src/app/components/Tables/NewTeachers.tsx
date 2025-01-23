
export default function NewTeachers() {
    return (
        <div
            style={{
                backgroundColor: "#f8f8f8", // Background color for the outer div
                padding: "20px", // Padding around the table
                borderRadius: "10px", // Rounded corners for the outer div
                width: "96%", // Reduced width of the container
                margin: "0 auto", // Center the div horizontally
                marginTop: "10px",
            }}
        >
            <table className="w-full border-collapse bg-white rounded-lg">
                <thead className="bg-[#f8f8f8]">
                    <tr>
                        <th className="p-3 text-left text-[14px] font-[100] text-gray-400">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-500 rounded focus:ring-blue-500"
                            />
                        </th>
                        <th className="p-3 text-left text-[14px] font-[500] text-[#B0B0B0]">
                            Teachers ID
                        </th>
                        <th className="p-3 text-left text-[14px] font-[500] text-[#B0B0B0]">
                            Teachers Name
                        </th>
                        <th className="p-3 text-left text-[14px] font-[500] text-[#B0B0B0]">
                            Class
                        </th>
                        <th className="p-3 text-left text-[14px] font-[500] text-[#B0B0B0]">
                            Subject
                        </th>
                        <th className="p-3 text-left text-[14px] font-[500] text-[#B0B0B0]">
                            Gender
                        </th>
                        <th className="p-3 text-left text-[14px] font-[500] text-[#B0B0B0]">
                            Contact No.
                        </th>
                        <th className="p-3 text-left text-[14px] font-[500] text-transparent">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody className="rounded-xl">
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-500 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[500] text-[#333D61]">#SS45</td>
                        <td className="p-3 text-[13px] font-[500] text-[#333D61]">Kabir Singh</td>
                        <td className="p-3 text-[13px] font-[500] text-[#333D61]">10th</td>
                        <td className="p-3 text-[13px] font-[500] text-[#333D61]">Mathematics</td>
                        <td className="p-3 text-[13px] font-[500] text-[#333D61]">Male</td>
                        <td className="p-3 text-[13px] font-[500] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[500] text-[#333D61] flex items-center justify-end space-x-4">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.5 0C7.92969 0 4.36942 2.72321 0 7.14286C3.76116 10.9208 6.91964 14.2857 12.5 14.2857C18.0748 14.2857 22.1763 10.0223 25 7.22098C22.1094 3.93973 18.0134 0 12.5 0ZM12.5 12.2377C9.7433 12.2377 7.5 9.94978 7.5 7.14286C7.5 4.33036 9.7433 2.04799 12.5 2.04799C15.2567 2.04799 17.5 4.33594 17.5 7.14286C17.5 9.95536 15.2567 12.2377 12.5 12.2377Z"
                                    fill="#333D61"
                                />
                                <path
                                    d="M12.5001 5.35723C12.5001 4.91638 12.6619 4.51459 12.9242 4.20209C12.7847 4.17977 12.6452 4.16861 12.5001 4.16861C10.8929 4.16861 9.58154 5.50232 9.58154 7.14294C9.58154 8.78356 10.8929 10.1173 12.5001 10.1173C14.1072 10.1173 15.4186 8.78356 15.4186 7.14294C15.4186 7.01459 15.4074 6.88624 15.3963 6.7579C15.0894 6.99785 14.7099 7.14294 14.2914 7.14294C13.2981 7.14294 12.5001 6.34495 12.5001 5.35723Z"
                                    fill="#333D61"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-14 text-[#333D61] cursor-pointer" // Updated h-6 and w-6 for larger size
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 12h.01M16 12h.01M8 12h.01"
                                />
                            </svg>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
