import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 32 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: students.length + 1,
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  // Stats
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    students.reduce((acc, s) => acc + s.score, 0) / students.length;

  return (
    <div className="app">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      {/* Stats */}
      <div className="stats">
        <div className="card">
          <p>TOTAL</p>
          <h2>{total}</h2>
        </div>
        <div className="card">
          <p>PASSED</p>
          <h2>{passed}</h2>
        </div>
        <div className="card">
          <p>AVG SCORE</p>
          <h2>{Math.round(avg)}</h2>
        </div>
      </div>

      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;