export default function TodoTaskTable() {
    return (
      <div className="col-12 flex justify-center items-center bg-gray-100 min-h-screen">
        {/* Add a wrapper div with custom width */}
        <div className="bg-white shadow-md rounded-md p-6 w-full max-w-[700px]">
          <form>
            {/* Task Topic */}
            <div className="mb-4">
              <label htmlFor="taskTopic" className="form-label text-gray-600 font-medium">
                Task Topic
              </label>
              <input
                type="text"
                id="taskTopic"
                className="form-control border-gray-300 rounded-md shadow-sm w-full"
                placeholder="Enter Task Topic"
              />
            </div>
  
            {/* Row with Dropdowns */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="chooseClass" className="form-label text-gray-600 font-medium">
                  Choose Class
                </label>
                <select
                  id="chooseClass"
                  className="form-select border-gray-300 rounded-md shadow-sm w-full"
                >
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="chooseSection" className="form-label text-gray-600 font-medium">
                  Choose Section
                </label>
                <select
                  id="chooseSection"
                  className="form-select border-gray-300 rounded-md shadow-sm w-full"
                >
                  <option>Section A</option>
                  <option>Section B</option>
                  <option>Section C</option>
                </select>
              </div>
            </div>
  
            {/* Another Row with Dropdowns */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="chooseSubject" className="form-label text-gray-600 font-medium">
                  Choose Subject
                </label>
                <select
                  id="chooseSubject"
                  className="form-select border-gray-300 rounded-md shadow-sm w-full"
                >
                  <option>Math</option>
                  <option>Science</option>
                  <option>History</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="typeChapter" className="form-label text-gray-600 font-medium">
                  Type Chapter or Exercise
                </label>
                <select
                  id="typeChapter"
                  className="form-select border-gray-300 rounded-md shadow-sm w-full"
                >
                  <option>Chapter 1</option>
                  <option>Exercise 2</option>
                </select>
              </div>
            </div>
  
            {/* Date and Time */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="chooseDate" className="form-label text-gray-600 font-medium">
                  Choose Date
                </label>
                <input
                  type="date"
                  id="chooseDate"
                  className="form-control border-gray-300 rounded-md shadow-sm w-full"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="chooseTime" className="form-label text-gray-600 font-medium">
                  Choose Time
                </label>
                <input
                  type="time"
                  id="chooseTime"
                  className="form-control border-gray-300 rounded-md shadow-sm w-full"
                />
              </div>
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary bg-orange-300 hover:bg-orange-400 text-white px-4 py-2 rounded-md shadow-sm"
              >
                Add To-Do Task
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  