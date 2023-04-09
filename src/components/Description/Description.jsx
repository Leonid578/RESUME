import { Container, TitleName, Profession, About } from "./Description.style";
import "./Description.styled.css";

const Description = () => {
  return (
    <Container>
      <TitleName>Leonid Ivanov</TitleName>
      <Profession>FULL STACK DEVELOPER</Profession>

      <About>
        Experienced June with over 1 year experience in React . Excellent track
        record for problem solving, customer satisfaction and overall increased
        activity levels.
      </About>


      {/* <Titile className="title">Contact</Titile>
      <Pass /> */}
    </Container>
  );
};

export default Description;
