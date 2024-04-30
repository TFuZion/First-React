import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue)
      .then((res) => setData(res.data.meals));
  }, [searchValue]);

  return (
    <div className="App">
      <h1>TP Recette Api</h1>
      <input
        type="text"
        placeholder="recherche"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="container-card">
        {data && data
        .slice(0,24)
        .map((meals) => <Card key={meals.idMeal} meals={meals} />)
        } 
      </div>

    </div>
  );
}

export default App;
