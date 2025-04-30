import React from "react";

const dummySubject = {
    courseCode: "CSC401",
    courseTitle: "Advanced Database Systems",
    semester: "First",
    year: "2024/2025",
    creditUnit: 3,
    description: "This course explores advanced concepts in database systems including distributed databases, NoSQL, and performance optimization.",
    students: [
      { studentId: "stu001", role: "member" },
      { studentId: "stu002", role: "captain" },
    ],
  };
  

  

const ClassesCard = () => {
 

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 max-w-sm mx-auto mt-6">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">
          {dummySubject.courseCode}
        </h3>
        <span className="text-sm text-gray-600">{dummySubject.creditUnit} units</span>
      </div>

      <p className="text-md text-gray-700 mt-1 font-medium">
        {dummySubject.courseTitle}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Semester: <span className="font-semibold">{dummySubject.semester}</span> • Year: <span className="font-semibold">{dummySubject.year}</span>
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Students Enrolled: {dummySubject.students.length}
      </p>

      <p className="text-sm text-gray-600 mt-3 line-clamp-3">
        {dummySubject.description}
      </p>

      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        View More
      </button>
    </div>
  );
};

export default ClassesCard;
