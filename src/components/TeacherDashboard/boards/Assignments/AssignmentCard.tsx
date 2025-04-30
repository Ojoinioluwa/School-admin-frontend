

function AssignmentCard() {
    const active = true
    const taskDoc = true
    const isOverdue = true
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 max-w-sm">
      <div className="flex justify-between items-center">
        {/* title goes here */}
        <h3 className="text-lg font-semibold text-gray-800">Finding the Name of all student</h3>
        {/* whether or not it is active is displayed here */}
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
          }`}
        >
         Active
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-1">
        Subject: <span className="font-medium">Computer Science</span>
      </p>

      <div className="text-sm text-gray-600 mt-2 space-y-1">
        <p>Start Date: 2025-23-12</p>
        <p>
          Deadline:{" "}
          <span className={isOverdue ? "text-red-600 font-semibold" : ""}>
          12-13-42
          </span>
        </p>
        {/* the number of students that have submitted */}
        <p>Submissions: 10</p>
        {taskDoc && (
          <p className="text-blue-500 text-xs">📎 Document attached</p>
        )}
      </div>

      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        More Info
      </button>
    </div>
  )
}

export default AssignmentCard
