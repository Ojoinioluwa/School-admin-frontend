import './App.css'
import Events from './components/Dashboard/Boards/Events';
import ListStudents from './components/Dashboard/Boards/Students';
import StudentsInfo from './components/Dashboard/Boards/students/StudentsInfo';
import MainDashBoard from './components/Dashboard/MainDashBoard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDashboard from './components/StudentDashboard/MainDashboard';
import Assignments from './components/StudentDashboard/boards/Assignments';
import StudentResult from './components/StudentDashboard/boards/StudentResult';

// import Login from './components/Users/Login'

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/admin" element={<MainDashBoard/>}>
        <Route path='/admin/students' element={<ListStudents/>}/>
        <Route path='/admin/student/:id' element={<StudentsInfo/>}/>
        <Route path='/admin/events' element={<Events/>}/>
      
      </Route>
      {/* the parts for the student */}
      <Route path='/student' element={<MainDashboard/>}>
        <Route path='/student/assignments' element={<Assignments/>}/>
        <Route path='/student/results' element={<StudentResult/>}/>
      </Route>
      </Routes>
    </Router>

  


  )
}

export default App
