import React, { useState } from 'react';
import { StudentClass } from './types/Student';

type EditStudentProps = {
  student: StudentClass;
  onSave: (updatedStudent: StudentClass) => void;
  onCancel: () => void;
};

export default function EditStudent({ student, onSave, onCancel }: EditStudentProps): React.ReactElement {
  const [name, setName] = useState(student.Name);
  const [surname, setSurname] = useState(student.Surname);

  const handleSave = () => {
    const updatedStudent = new StudentClass(name, surname, student.Index_nr, student.dataUrodzenia);
    updatedStudent.adres = student.adres;
    updatedStudent.grupa = student.grupa;
    updatedStudent.stypendium = student.stypendium;
    updatedStudent.marks = student.marks;
    onSave(updatedStudent);
  };

  return (
    <div>
      <label>
        Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Surname: <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
