/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function UsersQuestions({ getUsersQuestions }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
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

  const checkMobile = () => (isTabletOrMobile ? "column" : "row");

  return (
    <div className="UsersQuestions" style={{ flexDirection: checkMobile() }}>
      {activeQuestions.map((q) => (
        <Card
          bordered
          size="small"
          style={{
            width: 200,
            margin: "1rem",
            background: "#873c50",
            color: "white",
          }}
        >
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            {q.question}
          </p>
          <p>{q.personalInfo}</p>
        </Card>
      ))}
    </div>
  );
}

export default UsersQuestions;
