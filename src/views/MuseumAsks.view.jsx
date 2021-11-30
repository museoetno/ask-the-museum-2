/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Museo3 from "../images/imagen_museo_3_medium.png";
import Museo4 from "../images/imagen_museo_4_medium.png";

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

  const goToHome = () => {
    window.location.href = "/";
  };

  const goToUserQuestions = () => {
    // window.open(
    //   "https://padlet.com/rodrigo_garciaseoane/y35engng8hywv803",
    //   "_blank" // <- This is what makes it open in a new window.
    // );
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

      <div className="MuseumAsksImages">
        <img src={Museo3} alt="MuseoEtnografico" className="ImagenMuseo3" />
        <h2 className="MuseumQuestion">{museumQuestion}</h2>
        <img src={Museo4} alt="MuseoEtnografico" className="ImagenMuseo4" />
      </div>

      <div className="ButtonQuestion">
        <Button onClick={goToUserQuestions}>Ver preguntas de visitantes</Button>
      </div>

      <div className="ButtonQuestion">
        <Button onClick={goToHome}>Volver a preguntar</Button>
      </div>
    </div>
  );
}

export default MuseumAsks;
