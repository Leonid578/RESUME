import { Container, TitleName, Profession, About } from "./Description.style";
import "./Description.styled.css";

const Description = () => {
  return (
    <Container>
      <TitleName>Leonid Ivanov</TitleName>
      <Profession>FULL STACK DEVELOPER</Profession>

      <About>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui labore
        distinctio architecto quaerat exercitationem quibusdam expedita eligendi
        deserunt fuga, doloribus praesentium aliquid sequi quae quis placeat,
        obcaecati officia cupiditate sit, rerum illum. Et officia error cum
        placeat soluta. Eaque tempore dolorum corporis nisi incidunt minima
        repellat cupiditate beatae expedita. Quidem id cum nam dignissimos.
        Culpa, nam nemo. Praesentium, ratione qui provident nobis placeat est
        eos aut et dolores a odio commodi nihil quaerat sint facilis, ex, soluta
        blanditiis nulla?
      </About>
    </Container>
  );
};

export default Description;
