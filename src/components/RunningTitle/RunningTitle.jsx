import {
  Container,
  Fhoto,
  Titile,
  Pass,
  ContactsItemImg,
  ContactsLI,
  ContactsText,
  ContactsImg,
  ItemUl,
  TextLi,
} from "./RunningTitle.style";
import "./RunningTitle.style.css";

const RunningTitle = () => {
  return (
    <Container>
      <Fhoto></Fhoto>
      <Titile className="title">Contact</Titile>
      <Pass />
      <ContactsItemImg>
        <ContactsLI>
          <ContactsImg />
          <ContactsText>380686082451</ContactsText>
        </ContactsLI>
        <ContactsLI>
          <ContactsImg />
          <ContactsText>Leonid.Ivanov187@gmail.com</ContactsText>
        </ContactsLI>
        {/* <ContactsLI>
          <ContactsImg />
          <ContactsText></ContactsText>
        </ContactsLI> */}
        <ContactsLI>
          <ContactsImg />
          <ContactsText>17/05/2003</ContactsText>
        </ContactsLI>
        <ContactsLI>
          <ContactsImg />
          <ContactsText>MAN</ContactsText>
        </ContactsLI>
        <ContactsLI>
          <ContactsImg />
          <ContactsText>Ukraine</ContactsText>
        </ContactsLI>
      </ContactsItemImg>

      <Titile className="skill">SKILL'S</Titile>
      <Pass />
      <ItemUl>
        <TextLi>JavaScript</TextLi>
        <TextLi>Node.js</TextLi>
        <TextLi>React</TextLi>
        <TextLi>Redux</TextLi>
      </ItemUl>
      <Titile className="software">SOFTWARE</Titile>
      <Pass />
      <ItemUl>
        <TextLi>MS Excel</TextLi>
      </ItemUl>
      <Titile className="language">LANGUAGE</Titile>
      <Pass />
      <ItemUl>
        <TextLi>English - Intermediate</TextLi>
        <TextLi>Ukraine - Native</TextLi>
      </ItemUl>
    </Container>
  );
};

export default RunningTitle;
