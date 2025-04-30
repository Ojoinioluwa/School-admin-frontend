import React from "react";

const DepartmentInfo = () => {
  const department = {
    name: "Computer Science",
    code: "CSC",
    description:
      "The Computer Science Department focuses on providing theoretical and practical foundations in software engineering, AI, data science, and cybersecurity.",
    profileImage:
      "https://images.unsplash.com/photo-1603575448363-ff4f54f06cf4?auto=format&fit=crop&w=400&q=80",
    createdAt: "2020-01-10",
    headOfDepartment: {
      name: "Dr. John Adewale",
      email: "john.adewale@university.edu",
      photo:
        "https://randomuser.me/api/portraits/men/75.jpg",
    },
    teachers: [
      { name: "Mr. James Olaniyan", email: "james@uni.edu" },
      { name: "Mrs. Aisha Bello", email: "aisha@uni.edu" },
    ],
    students: [
      { name: "Samuel", level: "100" },
      { name: "Ada", level: "200" },
      { name: "Chika", level: "300" },
      { name: "David", level: "100" },
      { name: "Grace", level: "200" },
    ],
  };

  // Group students by level
  const groupedStudents = department.students.reduce((acc, student) => {
    if (!acc[student.level]) acc[student.level] = [];
    acc[student.level].push(student.name);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
      <div className="flex items-center gap-6">
        <img
          src={department.profileImage}
          alt="Department"
          className="w-28 h-28 rounded-xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{department.name} Department</h2>
          <p className="text-sm text-gray-500 uppercase">
            Code: {department.code}
          </p>
          <p className="mt-2 text-gray-700">{department.description}</p>
          <p className="text-sm text-gray-500 mt-1">
            Established: {new Date(department.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Head of Department */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Head of Department</h3>
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
          <img
            src={department.headOfDepartment.photo}
            className="w-14 h-14 rounded-full object-cover"
            alt="HOD"
          />
          <div>
            <p className="font-medium">{department.headOfDepartment.name}</p>
            <p className="text-sm text-gray-600">
              {department.headOfDepartment.email}
            </p>
          </div>
        </div>
      </div>

      {/* Teachers */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Teachers</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {department.teachers.map((teacher, index) => (
            <li key={index}>
              {teacher.name} —{" "}
              <span className="text-sm text-gray-500">{teacher.email}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Students Grouped by Level */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Students by Level</h3>
        {Object.entries(groupedStudents).map(([level, names], index) => (
          <div key={index} className="mb-4">
            <p className="font-medium text-gray-800">Level {level}</p>
            <ul className="list-disc pl-6 text-gray-600">
              {names.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentInfo;
