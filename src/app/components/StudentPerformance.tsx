const StudentPerformance = () => {
    return (
        <div className="relative w-[150px] h-[150px]">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                {/* Background Circle */}
                <circle
                    cx="18"
                    cy="18"
                    r="15.91549431"
                    className="fill-none stroke-gray-300"
                    strokeWidth="3"
                />

                {/* Attendance - Dark Blue */}
                <circle
                    cx="18"
                    cy="18"
                    r="15.91549431"
                    className="fill-none stroke-blue-900"
                    strokeWidth="3"
                    strokeDasharray="62.5 100"
                    style={{
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                    }}
                />

                {/* Class Performance - Peach */}
                <circle
                    cx="18"
                    cy="18"
                    r="15.91549431"
                    className="fill-none stroke-red-300"
                    strokeWidth="3"
                    strokeDasharray="25 100"
                    strokeDashoffset="-62.5"
                    style={{
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                    }}
                />

                {/* Sports Activity - Light Blue */}
                <circle
                    cx="18"
                    cy="18"
                    r="15.91549431"
                    className="fill-none stroke-blue-200"
                    strokeWidth="3"
                    strokeDasharray="12.5 100"
                    strokeDashoffset="-87.5"
                    style={{
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                    }}
                />
            </svg>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[12px] font-[100] text-gray-800">
                Overall Performance
            </div>
        </div>
    );
};

export default StudentPerformance;
