/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "antd";
import React, { useEffect, useState } from "react";

function UsersQuestions({ getUsersQuestions }) {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const getActiveQuestions = async () => {
    let questions = await getUsersQuestions();
    console.log({ questions });
    let active = questions.filter((q) => q.active === true);
    console.log({ active });
    setActiveQuestions(active);
  };

  useEffect(async () => {
    getActiveQuestions();
  }, []);

  return (
    <div className="UsersQuestions">
      {activeQuestions.map((q) => (
        <Card bordered size="small" style={{ width: 200, margin: "1rem" }}>
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            {q.question}
          </p>
        </Card>
      ))}
    </div>
  );
}

export default UsersQuestions;
