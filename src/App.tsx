import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Students from './Students';
import DeletePage from './DeletePage';
import { useState } from 'react';
import { StudentClass } from './types/Student';

function App() {
  const [studentList, setStudentList] = useState<StudentClass[]>([
    new StudentClass('Ala', 'Makota', 123485, new Date('2000-01-21')),
    new StudentClass('Jan', 'Kowlaski', 2345, new Date('1999-10-23')),
    new StudentClass('Adrian', 'Duda', 156789, new Date('2001-04-01')),
  ]);

  const addStudent = (student: StudentClass) => {
    setStudentList((prevList) => [...prevList, student]);
  };

  const deleteStudent = (index_nr: number) => {
    setStudentList((prevList) => prevList.filter((student) => student.Index_nr !== index_nr));
  };

  const saveEditedStudent = (updatedStudent: StudentClass) => {
    setStudentList((prevList) =>
      prevList.map((student) =>
        student.Index_nr === updatedStudent.Index_nr ? updatedStudent : student
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Students studentList={studentList} addStudent={addStudent} saveEditedStudent={saveEditedStudent} />}
        />
        <Route
          path="/delete"
          element={<DeletePage studentList={studentList} deleteStudent={deleteStudent} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
