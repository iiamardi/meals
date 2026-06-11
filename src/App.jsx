import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => {
            setItems(res.data.meals);
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    const itemsList = items.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <section className="card">
                <img src={strMealThumb} alt="" />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        );
    });

  return (
    <div className="items-container">{itemsList}</div>
  )
}

export default App