import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Student from './Student';
import { StudentClass } from './types/Student';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

type StudentsProps = {
  studentList: StudentClass[];
  addStudent: (student: StudentClass) => void;
  saveEditedStudent: (updatedStudent: StudentClass) => void;  
};

export default function Students({ studentList, addStudent, saveEditedStudent }: StudentsProps) {
  const [showAddForm, changeValue] = useState(false);
  const [editingStudent, setEditingStudent] = useState<StudentClass | null>(null);

  const navigate = useNavigate();

  const handleSave = (updatedStudent: StudentClass) => {
    saveEditedStudent(updatedStudent);
    setEditingStudent(null);
  };

  return (
    <>
      <h1>Students list</h1>
      {studentList.length > 0 && (
        <ul>
          {studentList.map((el) => (
            <li key={el.Index_nr}>
              {editingStudent?.Index_nr === el.Index_nr ? (
                <EditStudent
                  student={el}
                  onSave={handleSave}
                  onCancel={() => setEditingStudent(null)}
                />
              ) : (
                <>
                  <Student student={el} />
                  <button onClick={() => setEditingStudent(el)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      {studentList.length === 0 && <p>No students stored</p>}
      {!showAddForm && <button onClick={() => changeValue(true)}>Add student</button>}
      {showAddForm && <AddStudent addFn={addStudent} />}
      <button onClick={() => navigate('/delete')}>Delete students</button>
    </>
  );
}
