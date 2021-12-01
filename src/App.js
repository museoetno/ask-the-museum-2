import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import HomeView from "./views/Home.view";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MuseumAsks from "./views/MuseumAsks.view";
import LogoFilo from "./images/logo_filo.jpg";
import LogoMuseo from "./images/logo_museo.jpg";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs, addDoc } from "firebase/firestore";
// Initialize Cloud Firestore through Firebase
import { getFirestore } from "firebase/firestore";
import UsersQuestions from "./views/UsersQuestions.view";
import MediaQuery from "react-responsive";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV_6tXRd4EAcZAvKbZl0Z-Yv1mvpNQ1MI",
  authDomain: "ask-the-museum-2.firebaseapp.com",
  projectId: "ask-the-museum-2",
  storageBucket: "ask-the-museum-2.appspot.com",
  messagingSenderId: "514842578270",
  appId: "1:514842578270:web:652445962263fdaf21d3cf",
  measurementId: "G-RPTFM0900D",
};

initializeApp(firebaseConfig);
const db = getFirestore();

function App() {
  const { Header, Content } = Layout;

  const getMuseumQuestions = async () => {
    let data = [];
    const querySnapshot = await getDocs(collection(db, "preguntas_museo"));
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
      // console.log(`${doc.id} => ${doc.data()}`);
    });
    return data;
  };

  const getUsersQuestions = async () => {
    let data = [];
    const querySnapshot = await getDocs(collection(db, "preguntas"));
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
      // console.log(`${doc.id} => ${doc.data()}`);
    });
    return data;
  };

  const sendQuestion = async (values) => {
    try {
      const docRef = await addDoc(collection(db, "preguntas"), {
        question: values.question,
        personalInfo: values.personalInfo,
        active: false,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const goToHome = () => {
    window.location.href = "/";
  };

  const goToFilo = () => {
    window.open("http://www.filo.uba.ar/", "_blank");
  };

  const goToMuseoEtno = () => {
    window.open("http://museo.filo.uba.ar/", "_blank");
  };

  return (
    <BrowserRouter>
      <div>
        <Layout
          style={{
            height: "100vh",
            fontFamily: "Geogrotesque Regular",
            backgroundColor: "#dadcdf",
            minHeight: "800px",
          }}
        >
          <Header
            style={{ height: "80px", background: "#873c50" }}
            onClick={() => goToHome()}
          >
            <div className="MainHeader">
              <MediaQuery minWidth={1224}>
                <h4 className="Title">PREGUNTAS DE COLECCIÓN</h4>
                <h4 className="SubHeader">
                  Un espacio del Museo para la curiosidad
                </h4>
              </MediaQuery>
              <MediaQuery maxWidth={1224}>
                <h4 className="TitleMobile">PREGUNTAS DE COLECCIÓN</h4>
                <h4 className="SubHeaderMobile">
                  Un espacio del Museo para la curiosidad
                </h4>
              </MediaQuery>
            </div>
          </Header>
          <Content className="Content">
            <Routes>
              <Route
                path="/"
                element={<HomeView sendQuestion={sendQuestion} />}
              />
              <Route
                path="museum-asks"
                element={<MuseumAsks getQuestions={getMuseumQuestions} />}
              />
              <Route
                path="users-questions"
                element={
                  <UsersQuestions getUsersQuestions={getUsersQuestions} />
                }
              />
            </Routes>
          </Content>
          <div className="Footer" style={{ background: "#dadcdf" }}>
            <MediaQuery minWidth={1224}>
              <img
                src={LogoFilo}
                alt="Facultad de Filosofía y Letras"
                className="LogoFilo"
              />
              <img src={LogoMuseo} alt="Filosofia" className="LogoMuseo" />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
              <img
                src={LogoFilo}
                alt="Facultad de Filosofía y Letras"
                className="LogoFiloMobile"
                onClick={() => goToFilo()}
              />
              <img
                src={LogoMuseo}
                alt="Filosofia"
                className="LogoMuseoMobile"
                onClick={() => goToMuseoEtno()}
              />
            </MediaQuery>
          </div>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
