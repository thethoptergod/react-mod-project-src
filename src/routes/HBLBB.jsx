import { useState, useEffect } from 'react'
import axios from 'axios';
import picture from "../images/brightlights.jpg";
export default function HBLBB(props){
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
            <h3>Hudson Bright Lights Big Bourbon</h3>
            <h4>My Rating: 8/10</h4>
            <div style={{display: "grid", gridTemplateAreas: `"map rev cocktail"
                                                              "rating rating rating"`}}>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <div className="review" style={{display: "grid", gridTemplateAreas: `
            " text img "
            ` ,maxWidth: 800, gridArea: "rev"}}>
                <div className="revText" style={{gridArea: "text"}}>
                    Hudson, the brand name used by the Tuthilltown Distillery, creates several amazing bourbons at their building in New York. My current favorite of theirs, along with Back Room Deal, is their Bright Lights Big Bourbon, is an amazingly
                    complex and sweet bourbon, with hints of stone fruit and caramel. 
                </div>
                <div className="revImage" style={{gridArea: "img"}}>
                    <img src={picture} style={{maxHeight:400}} alt="whiskey"></img>
                </div>
            </div>
            </div>
            <div style={{gridArea: 'rating'}}>
            <h4>Your Rating: {stars}/10</h4>
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
            {cocktail.strInstructions}</p>
            ))}</div>)}</div>
            <div style={{gridArea: "map", maxWidth: 400}}>
            {/* <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={() => {setVisible(!visible); setButton(!button)}} style={{display: button ? "block" : "none"}}>Where is it?</button>
            </div> */}
            <div style={{display: "flex", justifyContent: "center"}}>
            <img onClick={() => {setVisible(!visible); setButton(!button)}} src={url} id="map" alt='Tuthilltown Spirits 14 Grist Mill Ln, Gardiner, NY 12525 lat: 41.686908, long: -74.176883' style={{display: 'block'}}></img>
            </div>
            </div>
            </div>
        </>
    )
}