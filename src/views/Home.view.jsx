import React from "react";
import QuestionForm from "../components/QuestionForm";
import Museo1 from "../images/imagen_museo_medium.png";
import Museo2 from "../images/imagen_museo2_medium.png";
import MediaQuery from "react-responsive";

function HomeView({ sendQuestion }) {
  const handleSubmit = async (values) => {
    await sendQuestion(values);
    window.location.href = "/museum-asks";
  };

  return (
    <div className={"Description"}>
      <div className={"DescriptionText"}>
        <MediaQuery minWidth={1224}>
          <h3 className={"Subtitle"}>
            Los museos existen porque nos hacemos preguntas: sobre los
            diferentes pueblos, sus historias, objetos y saberes.
            <br />
            Pero también aquellas preguntas que surgen de nuestra observación e
            imaginación y que quizás no tengan respuesta.
            <br /> Si visitaste el museo o sus redes sociales, te invitamos a
            ampliar nuestras Preguntas de Colección.
            <br />A cambio, te regalaremos una…
          </h3>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <h3 className={"SubtitleMobile"}>
            Los museos existen porque nos hacemos preguntas: sobre los
            diferentes pueblos, sus historias, objetos y saberes.
            <br />
            Pero también aquellas preguntas que surgen de nuestra observación e
            imaginación y que quizás no tengan respuesta.
            <br /> Si visitaste el museo o sus redes sociales, te invitamos a
            ampliar nuestras Preguntas de Colección.
            <br />A cambio, te regalaremos una…
          </h3>
        </MediaQuery>
      </div>
      <div className="FormAndImages">
        <MediaQuery minWidth={1224}>
          <img src={Museo1} alt="MuseoEtnografico" className="ImagenMuseo1" />
          <QuestionForm onFinish={handleSubmit} />
          <img src={Museo2} alt="MuseoEtnografico2" className="ImagenMuseo2" />
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <QuestionForm onFinish={handleSubmit} />
        </MediaQuery>
      </div>
    </div>
  );
}

export default HomeView;
