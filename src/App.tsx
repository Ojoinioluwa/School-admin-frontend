import './App.css'
import StudentsInfo from './components/Dashboard/Boards/students/StudentsInfo';
import MainDashBoard from './components/Dashboard/MainDashBoard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDashboardStudent from './components/StudentDashboard/MainDashboardStudent';
import Assignments from './components/StudentDashboard/boards/Assignments';
import StudentResult from './components/StudentDashboard/boards/StudentResult';
import Dashboard from './components/Dashboard/Boards/Dashboard';
import AdminEvents from './components/Event/Events';
import StudentDashboard from './components/StudentDashboard/boards/StudentDashboard';
import ListTeachers from './components/Dashboard/Boards/teachers/ListTeachers';
import ListStudentsAdmin from './components/Dashboard/Boards/students/ListStudentsAdmin';
import ListCourse from './components/Course/ListCourse';
import Annoucement from './components/Annoucements/Annoucement';
import AddCourse from './components/Course/AddCourse';
import AddDepartment from './components/Dashboard/Boards/Department/AddDepartment';
import ListDepartment from './components/Dashboard/Boards/Department/ListDepartment';
import ViewCourse from './components/Course/CourseInfoPage';
import SchoolCalender from './components/Event/SchoolCalender';
import Login from './components/Users/Login';
import MainDashboardTeacher from './components/TeacherDashboard/MainDashboardTeacher';
import TeacherDashboard from './components/TeacherDashboard/boards/TeacherDashboard';
import CreateAssignments from './components/TeacherDashboard/boards/Assignments/CreateAssignments';
import TeacherAssignments from './components/TeacherDashboard/boards/Assignments/TeacherAssignments';
import CourseCard from './components/Course/CourseCard';
import ClassesCard from './components/TeacherDashboard/boards/Classes/ClassesCard';
import DepartmentInfo from './components/TeacherDashboard/boards/DepartmentInfo';
import TeachersInfo from './components/Dashboard/Boards/teachers/TeachersInfo';
import StudentProfilePage from './components/StudentDashboard/boards/Profile';

// import Login from './components/Users/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='adminLogin' element={<Login/>}/>
      <Route path="/admin" element={<MainDashBoard/>}>
        <Route path='/admin/students' element={<ListStudentsAdmin/>}/>
        <Route path='/admin/student/:id' element={<StudentsInfo/>}/>
        <Route path='/admin/events' element={<AdminEvents/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/' element={<Dashboard/>}/>
        <Route path='/admin/teacher' element={<ListTeachers/>}/>
        <Route path='/admin/annoucements' element={<Annoucement/>}/>
        <Route path='/admin/courses' element={<ListCourse/>}/>
        <Route path='/admin/department' element={<ListDepartment/>}/>
        <Route path='/admin/courses/add' element={<AddCourse/>}/>
        <Route path='/admin/department/add' element={<AddDepartment/>}/>
        <Route path='/admin/courses/view' element={<ViewCourse/>}/>
        <Route path='/admin/t' element={<TeachersInfo/>}/>
      
      </Route>
      {/* the parts for the student */}
      <Route path='/student' element={<MainDashboardStudent/>}>
        <Route path='/student/assignments' element={<Assignments/>}/>
        <Route path='/student/results' element={<StudentResult/>}/>
        <Route path='/student/dashboard' element={<StudentDashboard/>}/>
        <Route path='/student/course'  element={<ListCourse/>}/>
        <Route path='/student/calender'  element={<SchoolCalender/>}/>
        <Route path='/student/profile'  element={<StudentProfilePage/>}/>

      </Route>
      {/* the parts for the student */}
      <Route path='/teacher' element={<MainDashboardTeacher/>}>
        <Route path='/teacher/results' element={<StudentResult/>}/>
        <Route path='/teacher/dashboard' element={<TeacherDashboard/>}/>
        <Route path='/teacher/course'  element={<ListCourse/>}/>
        <Route path='/teacher/annoucements' element={<Annoucement/>}/>
        <Route path='/teacher/calender'  element={<SchoolCalender/>}/>
        <Route path='/teacher/Assignments'  element={<TeacherAssignments/>}/>
        <Route path='/teacher/classes'  element={<ClassesCard/>}/>
        <Route path='/teacher/department'  element={<DepartmentInfo/>}/>

      </Route>
      </Routes>
    </Router>

  


  )
}

export default App
