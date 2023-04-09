import React from "react";
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
// import Namber from "../../Image/svg/ava.svg";
import { ReactComponent as Ava } from "../../Image/svg/ava.svg";
import { ReactComponent as Earth } from "../../Image/svg/earth.svg";
import { ReactComponent as Mail } from "../../Image/svg/mail.svg";
// import { ReactComponent as Calendar } from '../../Image/svg/Feather-core-calendar.svg.png'
import logo from "../../Image/svg/Feather-core-calendar.svg.png";
import "./RunningTitle.style.css";

const RunningTitle = () => {
  return (
    <Container>
      <Fhoto></Fhoto>
      <Titile className="title">Contact</Titile>
      <Pass />
      <ContactsItemImg>
        <ContactsLI>
          <ContactsImg>
            <Ava width={18} height={20} />
          </ContactsImg>
          <ContactsText>380686082451</ContactsText>
        </ContactsLI>
        <ContactsLI>
          <ContactsImg>
            <Mail width={18} height={20} />
          </ContactsImg>
          <ContactsText>Leonid.Ivanov187@gmail.com</ContactsText>
        </ContactsLI>
        <ContactsLI>
          <ContactsImg>
            <img src={logo} alt="Logo" width={18} height={20} />
          </ContactsImg>
          <ContactsText>17/05/2003</ContactsText>
        </ContactsLI>
        <ContactsLI>
          <ContactsImg>
            <Ava width={18} height={20} />
          </ContactsImg>
          <ContactsText>MAN</ContactsText>
        </ContactsLI>
        <ContactsLI>
          <ContactsImg>
            <Earth width={18} height={20} />
          </ContactsImg>
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
