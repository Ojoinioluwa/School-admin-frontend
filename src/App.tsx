import './App.css'
import ListStudents from './components/Dashboard/Boards/Students';
import StudentsInfo from './components/Dashboard/Boards/students/StudentsInfo';
import MainDashBoard from './components/Dashboard/MainDashBoard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDashboard from './components/StudentDashboard/MainDashboard';
import Assignments from './components/StudentDashboard/boards/Assignments';
import StudentResult from './components/StudentDashboard/boards/StudentResult';
import Dashboard from './components/Dashboard/Boards/Dashboard';
import AdminEvents from './components/Dashboard/Boards/AdminEvents';
import StudentDashboard from './components/StudentDashboard/boards/StudentDashboard';
import ListTeachers from './components/Dashboard/Boards/teachers/ListTeachers';

// import Login from './components/Users/Login'

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/admin" element={<MainDashBoard/>}>
        <Route path='/admin/students' element={<ListStudents/>}/>
        <Route path='/admin/student/:id' element={<StudentsInfo/>}/>
        <Route path='/admin/events' element={<AdminEvents/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/' element={<Dashboard/>}/>
        <Route path='/admin/teachers' element={<ListTeachers/>}/>
      
      </Route>
      {/* the parts for the student */}
      <Route path='/student' element={<MainDashboard/>}>
        <Route path='/student/assignments' element={<Assignments/>}/>
        <Route path='/student/results' element={<StudentResult/>}/>
        <Route path='/student/dashboard' element={<StudentDashboard/>}/>

      </Route>
      </Routes>
    </Router>

  


  )
}

export default App
