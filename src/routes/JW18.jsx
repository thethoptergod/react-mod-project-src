import { useState, } from 'react'
import picture from "../images/johnniewalker18.jpg";
export default function JW18(props){
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
            <h3>Johnnie Walker 18 Year</h3>
            <h4>My Rating: 8.5/10</h4>
            <div style={{display: "grid", gridTemplateAreas: `"map rev cocktail"
                                                              "rating rating rating"`}}>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <div className="review" style={{display: "grid", gridTemplateAreas: `
            " text img "
            ` ,maxWidth: 800, gridArea: "rev"}}>
                <div className="revText" style={{gridArea: "text"}}>
                    Let me preface this by saying, I am not a fan of blended scotch. I belive it ruins the individual character of the parts, and generally leads to a whole that is less than the sum of its parts. So when I say Johnnie Walker 18 is one of the 
                    best scotches I've ever had, it means a lot. It's fruity nose, and complex and sweet taste make it unique from single malts in that it can really provide a little bit of everything, especially as it lessens the smokier components of other Johnnie 
                    Walker blends.
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
            <p>Reccomended Cocktail: Do Not Drink In A Cocktail!</p>
            </div>
            </div>
            <div style={{gridArea: "map", maxWidth: 400}}>
            {/* <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={() => {setVisible(!visible); setButton(!button)}} style={{display: button ? "block" : "none"}}>Where is it?</button>
            </div> */}
            <div style={{display: "flex", justifyContent: "center"}}>
            <img onClick={() => {setVisible(!visible); setButton(!button)}} src={url} id="map" alt='Johnnie Walker 145 Princes St, Edinburgh EH2 4BL, United Kingdom lat: 55.95046630932092 long: -3.207577172596807' style={{display: 'block'}}></img>
            </div>
            </div>
            </div>
        </>
    )
}