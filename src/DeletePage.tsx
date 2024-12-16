import { useNavigate } from 'react-router-dom';
import { StudentClass } from './types/Student';

type DeletePageProps = {
  studentList: StudentClass[];
  deleteStudent: (index_nr: number) => void;
};

export default function DeletePage({ studentList, deleteStudent }: DeletePageProps) {
  const navigate = useNavigate();

  const handleDelete = (student: StudentClass) => {
    if (window.confirm(`Are you sure you want to delete ${student.Name} ${student.Surname}?`)) {
      deleteStudent(student.Index_nr);
    }
  };

  return (
    <>
      <h1>Delete Students</h1>
      {studentList.length > 0 ? (
        <ul>
          {studentList.map((el) => (
            <li key={el.Index_nr}>
              {el.Name} {el.Surname}
              <button onClick={() => handleDelete(el)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students stored</p>
      )}
      <button onClick={() => navigate('/')}>Back to main page</button>
    </>
  );
}
