import React from 'react';

const TaskScheduler = () => {
  const tasks = [
    {
      date: '11 Jan',
      items: [
        { subject: 'Mathematics', class: 'Class 6', time: '08:00 am - 09:00 am' },
        { subject: 'English', class: 'Class 7', time: '09:00 am - 10:00 am' },
        { subject: 'History', class: 'Class 10', time: '10:00 am - 11:00 am' },
      ],
    },
    {
      date: '10 Jan',
      items: [
        { subject: 'English', class: 'Class 7', time: '08:00 am - 09:00 am' },
        { subject: 'Mathematics', class: 'Class 8', time: '09:00 am - 10:00 am' },
        { subject: 'History', class: 'Class 10', time: '10:00 am - 11:00 am' },
        { subject: 'Break', class: '', time: '11:00 am - 11:20 am' },
        { subject: 'History', class: 'Class 7', time: '11:30 am - 12:00 pm' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-6 px-4">
      {/* Calendar */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4 px-4">
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <button className="p-2 rounded-full hover:bg-gray-200">&lt;</button>
          <h2 className="text-sm font-medium">February 2024</h2>
          <button className="p-2 rounded-full hover:bg-gray-200">&gt;</button>
        </div>
        <div className="grid grid-cols-7 text-center text-[12px] text-gray-500">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mt-2">
          {Array.from({ length: 28 }, (_, i) => i + 1).map((date) => (
            <div
              key={date}
              className={`py-1 rounded-md ${
                date === 23
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="mt-6 w-full max-w-4xl mx-auto">
        <h3 className="text-sm font-semibold mb-2">Today&apos;s Tasks</h3>
        {tasks.map((task) => (
          <div key={task.date} className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold">{task.date}</h4>
              <button className="p-2 rounded-full hover:bg-gray-200">...</button>
            </div>
            <div className="space-y-4">
              {task.items.map((item, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg shadow-sm px-2 py-0">
                  {/* Scheduler Text before the vertical line */}
                  <div className="text-xs text-gray-500 mr-2 ml-0">
                    {item.time} {/* Replaced item.schedule with item.time */}
                  </div>

                  {/* Vertical Line */}
                  <div className="h-10 w-[2px] bg-blue-500 mr-3"></div>

                  {/* Subject and Class */}
                  <div className="flex-1 mt-3">
                    <h5 className="text-xs font-medium">{item.subject}</h5>
                    <p className="text-xs text-gray-500">{item.class}</p>
                  </div>

                  {/* Time on the Right */}
                  <div className="text-xs text-gray-500">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskScheduler;
