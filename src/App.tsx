import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  StyledComponentButton,
  StyledComponentHeader,
  StyledComponentParagraph,
} from "./appstyledcomponent";
import { EmotionButton, EmotionHeader, EmotionParagraph } from "./appemotion";
import { LinariaButton, LinariaHeader, LinariaParagraph } from "./applinaria";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Styled component</p>
      <div>
        <StyledComponentHeader>
          Selamat Datang di Pelajaran CSS-in-JS
        </StyledComponentHeader>
        <StyledComponentParagraph>JayJay</StyledComponentParagraph>
        <StyledComponentButton primary>Lanjut Belajar!</StyledComponentButton>
        <StyledComponentButton>Kembali</StyledComponentButton>
      </div>
      <hr />
      <p>emotion</p>
      <div>
        <EmotionHeader>Selamat Datang di Pelajaran CSS-in-JS</EmotionHeader>
        <EmotionParagraph>JayJay</EmotionParagraph>
        <EmotionButton primary>Lanjut Belajar!</EmotionButton>
        <EmotionButton>Kembali</EmotionButton>
      </div>
      <hr />
      <p>linarias on top of WyW-in-JS.dev</p>
      <div>
        <LinariaHeader>Selamat Datang di Pelajaran CSS-in-JS</LinariaHeader>
        <LinariaParagraph>JayJay</LinariaParagraph>
        <LinariaButton primary>Lanjut Belajar!</LinariaButton>
        <LinariaButton>Kembali</LinariaButton>
      </div>
    </div>
  );
}

export default App;
