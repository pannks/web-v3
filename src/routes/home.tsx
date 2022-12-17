import Button, { BUTTON_TYPE_CLASSES } from "../components/Button/button";
import Footer from "../components/Footer/footer";
import { AllMenu, Contact, Header, Problem, Skill } from "./home.styles";

const Home = () => {
  return (
    <>
      <Header>
        <h1 className="supertitle">
          <span className="supertitle__1">My name is </span>
          <span className="supertitle__2">Pann</span>
          <Button buttonType={BUTTON_TYPE_CLASSES.base}>Meet me</Button>
        </h1>
      </Header>
      <AllMenu></AllMenu>
      <Skill></Skill>
      <Problem></Problem>
      <Contact></Contact>
      <Footer />
    </>
  );
};

export default Home;
