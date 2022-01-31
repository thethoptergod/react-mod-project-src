import { useState, useEffect } from 'react'
import axios from 'axios';
import picture from "../images/glenfiddich15.jpg";
export default function G15S(props){
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
            <h3>Glenfiddich 15 Year Solera Cask</h3>
            <h4>My Rating: 8/10</h4>
            <div style={{display: "grid", gridTemplateAreas: `"map rev cocktail"
                                                              "rating rating rating"`}}>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <div className="review" style={{display: "grid", gridTemplateAreas: `
            " text img "
            ` ,maxWidth: 800, gridArea: "rev"}}>
                <div className="revText" style={{gridArea: "text"}}>
                    An amazing Speyside whiskey, finished and married in old Solera casks, Glenfiddich 15 has a firey bite, and an amazing sweet sherry finish.
                </div>
                <div className="revImage" style={{gridArea: "img"}}>
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
            {cocktail.strMeasure1} {cocktail.strIngredient1}<br/>
            {cocktail.strMeasure2} {cocktail.strIngredient2}<br/>
            {cocktail.strMeasure3} {cocktail.strIngredient3}<br/>
            A {cocktail.strMeasure4} {cocktail.strIngredient4}<br/>
            {cocktail.strMeasure5}{cocktail.strIngredient5}<br/>
            {cocktail.strInstructions}</p>
            ))}</div>)}</div>
            <div style={{gridArea: "map", maxWidth: 400}}>
            {/* <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={() => {setVisible(!visible); setButton(!button)}} style={{display: button ? "block" : "none"}}>Where is it?</button>
            </div> */}
            <div style={{display: "flex", justifyContent: "center"}}>
            <img onClick={() => {setVisible(!visible); setButton(!button)}} src={url} id="map" alt='Glenfiddich Dufftown, Keith AB55 4DH, United Kingdom lat: 57.455152, long: -3.128712' style={{display: 'block'}}></img>
            </div>
            </div>
            </div>
        </>
    )
}