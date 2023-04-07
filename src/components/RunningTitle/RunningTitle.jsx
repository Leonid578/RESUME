import { Fhoto, Pass } from './RunningTitle.style'
import "./RunningTitle.style.css";
import { Container } from "./RunningTitle.style";

const RunningTitle = () => {
  return (
    <Container>
      <Fhoto></Fhoto>
      <h2 className="titleText">Contact information</h2>
      <Pass></Pass>

    </Container>
  );
};

export default RunningTitle;
