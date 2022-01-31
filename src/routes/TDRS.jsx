import { useState, useEffect } from 'react'
import picture from "../images/TaconicPrivateReserveBourbon.jpg";
import axios from 'axios';
export default function TDRS(props){
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},${props.long}&zoom=16&size=400x400&markers=${props.lat},${props.long}&maptype=roadmap&${props.pass}`
    const [cocktail, setCocktail] = useState(null);
    const [visible, setVisible] = useState(false);
    const [button, setButton] = useState(true);
    useEffect(() => {
        Cocktail();
    async function Cocktail(){
        try{
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`);
        const data = await response.data
        setCocktail(data);
        }catch(error){console.log(error)}
    }})
    const [stars, setStars] = useState(0);
    const starReset = () => setStars(0);
    function starUp(){
        let star = stars
        if (star < 10){
            setStars(star = star + 1)
        }
        else {
            setStars(10)
        }
    }
    function starDown(){
        let star = stars
        if (star !== 0){
            setStars(star = star - 1)
        }
        else {
            setStars(0)
        }
    }
    return (
        <>
            <h3>Taconic Duchess Private Reserve</h3>
            <h4>My Rating: 8.5/10</h4>
            <div style={{display: "grid", gridTemplateAreas: `"map rev cocktail"
                                                              "rating rating rating"`}}>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <div className="review" style={{display: "grid", gridTemplateAreas: `
            " text img "
            ` ,maxWidth: 800, gridArea: "rev"}}>
                <div className="revText" style={{gridArea: "text"}}>
                    Taconic Duchess Reserve was the first New York Bourbon I had, and it caused me to fall in love with that realm of whiskey. The high rye mashbill, with about 5% barley, really gives the bourbon an amazing cacaphony of flavors.
                </div>
                <div className="revImage" style={{gridArea: "img"}} >
                    <img src={picture} style={{maxHeight:400}} alt="whiskey"></img>
                </div>
            </div>
            </div>
            <div style={{gridArea: 'rating'}}>
            <h4>Your Rating: {stars}/10</h4><br/>
            <button onClick={starUp}>Increase Rating</button><button onClick={starDown}>Decrease Rating</button><button onClick={starReset}>Reset Rating</button>
            </div>
            <div style={{display: "flex", justifyContent: "center", gridArea: "cocktail"}}>
            {cocktail && (
                <div className='cocktail' style={{maxWidth: 400}}>
                    {cocktail.drinks.map((cocktail, index) => (
            <p>Reccomended Cocktail: {cocktail.strDrink}<br/>
            What you Need: <br/>
            {cocktail.strGlass}<br/>
            {cocktail.strMeasure1}{cocktail.strIngredient1}<br/>
            {cocktail.strMeasure2}{cocktail.strIngredient2}<br/>
            {cocktail.strMeasure3}{cocktail.strIngredient3}<br/>
            {cocktail.strMeasure4}{cocktail.strIngredient4}<br/>
            {cocktail.strMeasure5}{cocktail.strIngredient5} (for garnish)<br/>
            {cocktail.strMeasure6}{cocktail.strIngredient6} (for garnish)<br/>
            {cocktail.strInstructions}</p>
            ))}</div>)}</div>
            <div style={{gridArea: "map", maxWidth: 400}}>
            {/* <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={() => {setVisible(!visible); setButton(!button)}} style={{display: button ? "block" : "none"}}>Where is it?</button>
            </div> */}
            <div style={{display: "flex", justifyContent: "center"}}>
            <img onClick={() => {setVisible(!visible); setButton(!button)}} src={url} id="map" alt='Taconic Distillery 179 Bowen Rd, Stanfordville, NY 12581' style={{display: 'block'}}></img>
            </div>
            </div>
            </div>
        </>
    )
}