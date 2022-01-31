import { useState } from 'react'
import picture from "../images/johnniewalkerbluelabel.jpg";
export default function JWBL(props){
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
            <h3>Johnnie Walker Blue Label</h3>
            <h4>My Rating: 7/10</h4>
            <div style={{display: "grid", gridTemplateAreas: `"map rev cocktail"
                                                              "rating rating rating"`}}>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <div className="review" style={{display: "grid", gridTemplateAreas: `
            " text img "
            ` ,maxWidth: 800, gridArea: "rev"}}>
                <div className="revText" style={{gridArea: "text"}}>
                    Johnnie Walker Blue Label. A whisky famed by even those who have never heard the term "scotch". Expensive, (ranging 230 - 260 a bottle), and to be honest, thouroghly dissapointing. 
                    I bought a 50ml mini-bottle, and boy am i glad, because it wasnt even worth the 20 dollars i ppaid for that. It is good, sure, but pretty much any single malt worth its salt is better than 
                    Blue Label. If you want nice blended Whisky, look to Johnnie Walker 18, something I've reviewed <a href="/JW18">here</a>.
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