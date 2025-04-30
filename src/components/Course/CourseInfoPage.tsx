import React, { useState, ChangeEvent } from 'react';
import { Modal, Button, TextField } from '@mui/material';

// Interfaces matching your schema
interface StudentRole {
  studentId: string;
  role: 'captain' | 'assistant captain' | 'member';
}

interface Course {
  courseCode: string;
  courseTitle: string;
  teacherName: string;
  students: StudentRole[];
  year: string;
  semester: 'First' | 'Second';
  creditUnit: number;
  departmentName: string;
  levelName: string;
  description: string;
  materialUrl?: string;
  createdAt: string;
  assignments: Assignment[];
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  submissions: Submission[];
}

interface Submission {
  studentId: string;
  studentName: string;
  submittedAt: string;
  fileUrl: string;
}

// Component
const CourseInfoPage: React.FC<{ course: Course }> = ({ course }) => {
  const [materialFile, setMaterialFile] = useState<File | null>(null);
  const [openMaterialModal, setOpenMaterialModal] = useState(false);
  const [openAssignmentModal, setOpenAssignmentModal] = useState(false);
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '' });
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  const handleMaterialChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setMaterialFile(e.target.files[0]);
  };

  const handleUploadMaterial = () => {
    // TODO: implement upload logic
    setOpenMaterialModal(false);
  };

  const handleAssignmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAssignment(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateAssignment = () => {
    // TODO: implement assignment creation logic
    setOpenAssignmentModal(false);
  };

  const captain = course.students.find(s => s.role === 'captain');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header: Course Info & Actions */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{course.courseTitle} ({course.courseCode})</h2>
            <p className="text-sm text-gray-600">{course.year} - {course.semester} Semester</p>
            <p className="text-sm text-gray-600">Dept: {course.departmentName} | Level: {course.levelName} | Credits: {course.creditUnit}</p>
            <p className="mt-2 text-gray-700 text-sm">{course.description}</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="contained" onClick={() => setOpenMaterialModal(true)}>Upload Material</Button>
            <Button variant="contained" onClick={() => setOpenAssignmentModal(true)}>New Assignment</Button>
          </div>
        </div>

        {/* Assignments & Submissions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* List of assignments */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Assignments</h3>
            <ul className="space-y-3">
              {course.assignments.map(a => (
                <li key={a.id} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedAssignment(a)}>
                  <h4 className="font-medium text-gray-800">{a.title}</h4>
                  <p className="text-xs text-gray-500">Due: {new Date(a.dueDate).toLocaleDateString()}</p>
                  <p className="mt-1 text-gray-600 text-sm truncate">{a.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Submissions for selected assignment */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">{selectedAssignment ? `${selectedAssignment.title} Submissions` : 'Select an assignment'}</h3>
            {selectedAssignment && (
              <ul className="space-y-2">
                {selectedAssignment.submissions.map(sub => (
                  <li key={sub.studentId} className="flex justify-between items-center p-3 border rounded-lg">
                    <span>{sub.studentName}</span>
                    <a href={sub.fileUrl} target="_blank" rel="noopener" className="text-blue-600 hover:underline">Download</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Students & Captain */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Class Roster</h3>
          <p className="mb-3 text-sm text-gray-600">Class Captain: {captain ? captain.studentId : 'None'}</p>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-sm font-medium">Student ID</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Role</th>
                </tr>
              </thead>
              <tbody>
                {course.students.map(s => (
                  <tr key={s.studentId} className="border-t">
                    <td className="px-4 py-2 text-sm">{s.studentId}</td>
                    <td className="px-4 py-2 text-sm capitalize">{s.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Upload Material Modal */}
      <Modal open={openMaterialModal} onClose={() => setOpenMaterialModal(false)}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
          <h3 className="text-lg font-semibold mb-4">Upload Course Material</h3>
          <input type="file" onChange={handleMaterialChange} className="mb-4" />
          <Button variant="contained" fullWidth onClick={handleUploadMaterial}>Upload</Button>
        </div>
      </Modal>

      {/* New Assignment Modal */}
      <Modal open={openAssignmentModal} onClose={() => setOpenAssignmentModal(false)}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md space-y-4">
          <h3 className="text-lg font-semibold">Create Assignment</h3>
          <TextField
            label="Title"
            name="title"
            value={newAssignment.title}
            onChange={handleAssignmentChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={newAssignment.description}
            onChange={handleAssignmentChange}
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            label="Due Date"
            name="dueDate"
            type="date"
            value={newAssignment.dueDate}
            onChange={handleAssignmentChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <Button variant="contained" fullWidth onClick={handleCreateAssignment}>Create</Button>
        </div>
      </Modal>
    </div>
  );
};

export default CourseInfoPage;