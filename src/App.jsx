import React, { useState } from 'react';
import './App.css';
import { Tittle } from './components/tittle';
import { Texts } from './components/text';
import { SwapiButton } from './components/swapiButton';

const App = () => {

  const [selectedData, setSelectedData] = useState({
  });

  const [count, changeCount] = useState(1)

  const getCharacter = async () => {
    changeCount((count) => count + 1);
    const rawData = await fetch(`https://swapi.dev/api/people/${count}/`);
    const dataJson = await rawData.json();
    const updatedSelectedData = {
      name: dataJson.name,
      gender: dataJson.gender,
      height: dataJson.height,
      hairColor: dataJson.hair_color,
      skinColor: dataJson.skin_color,
      eyeColor: dataJson.eye_color,
      birthYear: dataJson.birth_year
    };
    setSelectedData(updatedSelectedData);
  };

  if (selectedData === "undefined"){
    getCharacter()
    return <Texts text='Loading...' />;
  };

  return (
    <div className="App">
      <div id="firstBlock">
        <Tittle textTittle={selectedData.name} />
      </div>
      <div id="secondBlock">
        <Texts
          className="characterProperties"
          id="gender"
          text={`Gender: ${selectedData.gender}`}
        />
        <Texts
          className="characterProperties"
          id="height"
          text={`Height: ${selectedData.height}`}
        />
      </div>
      <div id="thirdBlock">
        <Texts
          id="description"
          text={`Birth Year: ${selectedData.birthYear}, has ${selectedData.eyeColor} eyes, ${selectedData.hairColor} hair and ${selectedData.skinColor} skin `}
        />
      </div>
      <div id="fourthButton">
        <SwapiButton func={getCharacter} text={"Next"} />
      </div>
    </div>
  );
};

export default App;