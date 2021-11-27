import React from "react";
import QuestionForm from "../components/QuestionForm";
import Museo1 from "../images/imagen_museo_small.png";
import Museo2 from "../images/imagen_museo2_small.png";

function HomeView({ sendQuestion }) {
  const handleSubmit = (values) => {
    sendQuestion(values);
    // window.location.href = "/museum-asks";
  };

  return (
    <div className={"Description"}>
      <div className={"DescriptionText"}>
        <h3>
          Los museos no existirían si no nos hiciéramos preguntas: sobre los
          diferentes pueblos, su historia, sus objetos y saberes. Pero también
          aquellas que surgen de nuestra observación e imaginación y que quizás
          no tengan respuesta. Si visitaste el museo o sus redes sociales, te
          invitamos a ampliar nuestra Colección de Preguntas y a cambio te
          regalaremos una…
        </h3>
      </div>
      <div className="FormAndImages">
        <img src={Museo1} alt="MuseoEtnografico" className="ImagenMuseo1" />
        <QuestionForm onFinish={handleSubmit} />
        <img src={Museo2} alt="MuseoEtnografico2" className="ImagenMuseo2" />
      </div>
    </div>
  );
}

export default HomeView;
