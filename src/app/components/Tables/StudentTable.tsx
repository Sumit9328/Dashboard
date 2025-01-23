
export default function StudentTable() {
    return (
        <div
            style={{
                backgroundColor: "#f8f8f8", // Background color for the outer div
                padding: "20px", // Padding around the table
                borderRadius: "10px", // Rounded corners for the outer div
                width: "96%", // Reduced width of the container
                margin: "0 auto", // Center the div horizontally
                marginTop: '10px',
            }}
        >
            <table className="w-full border-collapse bg-white rounded-lg">
                <thead className="bg-[#f8f8f8]">
                    <tr>
                        <th className="p-3 text-left text-[14px] font-[100] text-gray-100">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </th>
                        <th className="p-3 text-left text-[14px] font-[100] text-[#B0B0B0]">
                            Student ID
                        </th>
                        <th className="p-3 text-left text-[14px] font-[100] text-[#B0B0B0]">
                            Student Name
                        </th>
                        <th className="p-3 text-left text-[14px] font-[100] text-[#B0B0B0]">
                            Class
                        </th>
                        <th className="p-3 text-left text-[14px] font-[100] text-[#B0B0B0]">
                            Section
                        </th>
                        <th className="p-3 text-left text-[14px] font-[100] text-[#B0B0B0]">
                            Parents/Guardian
                        </th>
                        <th className="p-3 text-left text-[14px] font-[100] text-[#B0B0B0]">
                            Contact
                        </th>
                        <th className="p-3 text-left text-[14px] font-[100] text-[#B0B0B0]">
                            Email ID’s
                        </th>
                        <th className="p-3 text-left text-[14px] font-[100] text-transparent">
                            Actions
                        </th>
                    </tr>


                </thead>

                <tbody className='rounded-xl'>
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">#2345</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Vishal Verma</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">1st</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">B</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Mr. Amit Singh</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">amitcode404@gmail.com</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61] flex items-center">
                            <div className="ml-2">
                          
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-15 text-[#333D61] cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 30 24"
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
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">#2345</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Vishal Verma</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">1st</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">B</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Mr. Amit Singh</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">amitcode404@gmail.com</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61] flex items-center">
                            <div className="ml-2">
                          
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-15 text-[#333D61] cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 30 24"
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
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">#2345</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Vishal Verma</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">1st</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">B</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Mr. Amit Singh</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">amitcode404@gmail.com</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61] flex items-center">
                            <div className="ml-2">
                          
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-15 text-[#333D61] cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 30 24"
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
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">#2345</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Vishal Verma</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">1st</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">B</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Mr. Amit Singh</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">amitcode404@gmail.com</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61] flex items-center">
                            <div className="ml-2">
                          
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-15 text-[#333D61] cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 30 24"
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
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">#2345</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Vishal Verma</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">1st</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">B</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Mr. Amit Singh</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">amitcode404@gmail.com</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61] flex items-center">
                            <div className="ml-2">
                          
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-15 text-[#333D61] cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 30 24"
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
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">#2345</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Vishal Verma</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">1st</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">B</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Mr. Amit Singh</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">amitcode404@gmail.com</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61] flex items-center">
                            <div className="ml-2">
                          
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-15 text-[#333D61] cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 30 24"
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
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">#2345</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Vishal Verma</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">1st</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">B</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Mr. Amit Singh</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">amitcode404@gmail.com</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61] flex items-center">
                            <div className="ml-2">
                          
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-15 text-[#333D61] cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 30 24"
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
                    <tr className="border-t">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="h-3 w-3 text-blue-100 rounded focus:ring-blue-500"
                            />
                        </td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">#2345</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Vishal Verma</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">1st</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">B</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">Mr. Amit Singh</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">+91 890-908-0809</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61]">amitcode404@gmail.com</td>
                        <td className="p-3 text-[13px] font-[100] text-[#333D61] flex items-center">
                            <div className="ml-2">
                          
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-15 text-[#333D61] cursor-pointer ml-4"
                                fill="none"
                                viewBox="0 0 30 24"
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
