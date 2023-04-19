import { Container, TitleName, Profession, About, Title, Pass} from "./Description.style";
// import "./Description.styled.css";

const Description = () => {
  return (
    <Container>
      <TitleName>Leonid Ivanov</TitleName>
      <Profession>FULL STACK DEVELOPER</Profession>

      <About>
        Прошел курсы в GoIt по React, участвовал в более 3х командных проектах,
        которые можно посмотреть ниже.
      </About>

      <Title>Experience</Title>
      <Pass />
    </Container>
  );
};

export default Description;
