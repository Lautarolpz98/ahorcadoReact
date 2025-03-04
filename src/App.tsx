import "./App.css";
import { letters } from "./helpers/letters";
import { HangImage } from "./components/HangImage";
import { useEffect, useState } from "react";
import { getRandomWords } from "./helpers/getRandomWords";

function App() {
  const [word, setWord] = useState(getRandomWords());
  const [hiddenWord, setHiddenword] = useState("_ ".repeat(word.length));

  const [attemps, setAttemps] = useState(0);

  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  //HOOKS saber siperdio
  useEffect(() => {
    if (attemps >= 9) {
      setLose(true);
    }
  }, [attemps]);
  //saber si gano
  useEffect(() => {
    const currentHidentWord = hiddenWord.split(" ").join("");
    if (currentHidentWord === word) {
      setWin(true);
    }
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if (lose) return;
    if (win) return;
    if (!word.includes(letter)) {
      setAttemps(Math.min(attemps + 1, 9));

      return;
    }
    const hiddenWordArray = hiddenWord.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenword(hiddenWordArray.join(" "));
  };
  // repetir juego
  const newGame = () => {
    const newWord = getRandomWords();
    setWord(newWord);
    setHiddenword("_ ".repeat(word.length));

    setAttemps(0);
    setLose(false);
    setWin(false);
  };

  return (
    <div className="App">
      {/* imagenes */}
      <HangImage imageNumber={attemps} />
      {/* palabra oculta */}
      <h3>{hiddenWord}</h3>
      {/* intentos */}
      <h3>intentos:{attemps}</h3>
      {/* letter button*/}
      {letters.map((letter) => (
        <button onClick={() => checkLetter(letter)} key={letter}>
          {letter}
        </button>
      ))}
      {/* mensaje de win o lose */}
      {lose ? <h2>Perdio,su palabra secreta era: {word}</h2> : "   "}
      {win ? <h2>Adivinaste,la palabra secreta era: {word}</h2> : "   "}
      <br />
      <button onClick={newGame}>Jugar De Nuevo</button>
    </div>
  );
}

export default App;
