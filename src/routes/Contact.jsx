import Email from "../components/Email";
import Name from "../components/Name";
import Info from "../components/Info";
import Button from "../components/Button";
import { FormContext } from "../data/Context"
export default function Contact(){
    return(
        <>
        <FormContext>
        <h3>Send Me Feedback, Reccomendations, and anything else you want me to hear!</h3>
        <Name />
        <Email />
        <Info /><br/>
        <Button pantryID="6419a445-b67f-4246-b5ab-8930a0fcc999" basket="contactInfo"/>
        </FormContext>
        </>
    )
}