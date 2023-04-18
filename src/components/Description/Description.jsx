import { Container, TitleName, Profession, About } from "./Description.style";
import "./Description.styled.css";

const Description = () => {
  return (
    <Container>
      <TitleName>Leonid Ivanov</TitleName>
      <Profession>FULL STACK DEVELOPER</Profession>

      <About>
        Прошел курсы в GoIt по 
      </About>


      {/* <Titile className="title">Contact</Titile>
      <Pass /> */}
    </Container>
  );
};

export default Description;
