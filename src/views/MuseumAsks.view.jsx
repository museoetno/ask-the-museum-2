/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd";
import React, { useEffect, useState } from "react";

function MuseumAsks({ getQuestions }) {
  const [museumQuestion, setMuseumQuestion] = useState(null);

  const getRandomQuestion = async () => {
    let questions = await getQuestions();
    console.log({ questions });
    let randomElement = Math.floor(Math.random() * questions.length);
    console.log({ randomElement });
    let randomQuestion = questions[randomElement];
    console.log({ randomQuestion });
    setMuseumQuestion(randomQuestion.pregunta);
  };

  const goToUserQuestions = () => {
    window.location.href = "/users-questions";
  };

  useEffect(async () => {
    getRandomQuestion();
  }, []);

  return (
    <div>
      <h3 className="Thanks">
        Gracias por dejarnos tu pregunta. El museo te regala una:
      </h3>
      <h2 className="MuseumQuestion">{museumQuestion}</h2>

      <div className="ButtonQuestion">
        <Button onClick={goToUserQuestions}>Ver preguntas de visitantes</Button>
      </div>
    </div>
  );
}

export default MuseumAsks;
