import { useState } from 'react'
import picture from "../images/suntorytoki.jpg";
export default function STTK(props){
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},${props.long}&zoom=16&size=400x400&markers=${props.lat},${props.long}&maptype=roadmap&${props.pass}`
    const [visible, setVisible] = useState(false);
    const [button, setButton] = useState(true);
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
            <h3>Suntory Toki Blended Japanese Whiskey</h3>
            <h4>My Rating: 7/10</h4>
            <div style={{display: "grid", gridTemplateAreas: `"map rev cocktail"
                                                              "rating rating rating"`}}>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <div className="review" style={{display: "grid", gridTemplateAreas: `
            " text img "
            ` ,maxWidth: 800, gridArea: "rev"}}>
                <div className="revText" style={{gridArea: "text"}}>
                    Toki, a blended whisky made by the Suntory company, is a great entry into the world of Japanese whisky. It is sweet, with an easy finish, and is the perfect whisky for a highball.
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
            <div className='cocktail' style={{maxWidth: 400}}>
            <p>Reccomended Cocktail: Japanese Highball<br/>
            What You'll Need:<br/>
            Highball Glass<br/>
            1 1/2 Ounces of Japanese Whiskey<br/>
            4 1/2 Ounces of sparkling water<br/>
            Slice of Lemon<br/>
            Fill the Highball glass half full with ice. Add the water and whiskey, and stir. Then drop the lemon in, and serve!</p>
            </div>
            </div>
            <div style={{gridArea: "map", maxWidth: 400}}>
            {/* <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={() => {setVisible(!visible); setButton(!button)}} style={{display: button ? "block" : "none"}}>Where is it?</button>
            </div> */}
            <div style={{display: "flex", justifyContent: "center"}}>
            <img onClick={() => {setVisible(!visible); setButton(!button)}} src={url} id="map" alt='Yamazaki Distillery 5-2-1 Yamazaki, Shimamoto-cho, Mishima-gun, Osaka lat: 34.892574 long: 135.674487' style={{display: 'block'}}></img>
            </div>
            </div>
            </div>
        </>
    )
}