import React from 'react';

// Interfaces
interface Guidance {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  role: 'parent' | 'sponsor' | 'relative';
}

interface Student {
  firstName: string;
  lastName: string;
  email: string;
  studentId: string;
  gender: 'male' | 'female';
  classId?: string;
  dateOfBirth: string;
  admissionDate: string;
  guardianInfo: Guidance[];
  address: string;
  profileImage: string;
  paid: boolean;
  role: 'student' | 'teacher' | 'admin';
}

// Dummy Data
const dummyStudent: Student = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  studentId: 'STU123456',
  gender: 'male',
  classId: 'CLS7890',
  dateOfBirth: '2006-03-15',
  admissionDate: '2022-09-01',
  address: '123 Elm Street, Springfield',
  profileImage: 'https://i.pravatar.cc/150?img=12',
  paid: true,
  role: 'student',
  guardianInfo: [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '123-456-7890',
      email: 'jane.doe@example.com',
      address: '123 Elm Street, Springfield',
      role: 'parent'
    }
  ]
};

// Component
const StudentProfilePage: React.FC = () => {
  const student = dummyStudent;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img
            src={student.profileImage}
            alt={`${student.firstName} ${student.lastName}`}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            {student.firstName} {student.lastName}
          </h2>
          <p className="text-sm text-gray-500 mt-1">ID: {student.studentId}</p>

          <div className="mt-4 flex space-x-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                student.paid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {student.paid ? 'Fees Paid' : 'Pending'}
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
              {student.role.charAt(0).toUpperCase() + student.role.slice(1)}
            </span>
          </div>

          <div className="mt-6 w-full text-left">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Contact</h3>
            <p className="text-sm text-gray-600 truncate">{student.email}</p>
            <p className="text-sm text-gray-600 truncate">{student.address}</p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Gender</p>
              <p className="text-gray-800 font-medium capitalize">{student.gender}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Date of Birth</p>
              <p className="text-gray-800 font-medium">
                {new Date(student.dateOfBirth).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Admission Date</p>
              <p className="text-gray-800 font-medium">
                {new Date(student.admissionDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Class ID</p>
              <p className="text-gray-800 font-medium">{student.classId || 'N/A'}</p>
            </div>
          </div>

          {/* Guardian Information */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Guardian Info</h3>
            <div className="space-y-4">
              {student.guardianInfo.map((g, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start"
                >
                  <div>
                    <p className="text-gray-500 text-xs">Name</p>
                    <p className="text-gray-800 font-medium">{g.firstName} {g.lastName}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Role</p>
                    <p className="text-gray-800 font-medium capitalize">{g.role}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Phone</p>
                    <p className="text-gray-800 font-medium truncate">{g.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Email</p>
                    <p className="text-gray-800 font-medium truncate">{g.email}</p>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-4">
                    <p className="text-gray-500 text-xs">Address</p>
                    <p className="text-gray-800 text-sm truncate">{g.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;
