import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [temp, setTemp] = useState(student.score);

  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td className="score">{student.score}</td>

      <td>
        <span className={isPass ? "badge pass" : "badge fail"}>
          {isPass ? "PASS" : "FAIL"}
        </span>
      </td>

      <td>
        <input
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <button onClick={() => updateScore(student.id, temp)}>
          SAVE
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;