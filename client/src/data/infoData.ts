import { Contact } from "../components/info/general/Contact"
import { Bank } from "../components/info/general/Bank"

export interface InfoProps {
    title: string,
    details: string[],
    icon?: string,
    link?: [string, string],
    extraJSX?: () => JSX.Element,
}

export const GENERAL_INFO: InfoProps[] = [
    {
        title: "Dress Code",
        details: [ 
            "We don't expect black tie but dress classy folks!",
            "",
            "We're going with the theme of woodlands and nature - we'll personally be going loosely with earthy colours like dark green, russets and browns. But most importantly we want you to feel fabulous in whatever you choose to wear. If you fancy hot pink, go for it!",
            "",
            "Bear in mind that (weather permitting) we plan to have the ceremony outdoors in a nearby castle ruin. It's about a 10 minute walk from the house, or a short drive, but there aren't proper paths inside the grounds so maybe avoid heels for that bit.",
            "",
            "Plan for dancing in the evening!",
            "",
        ],
        link: ["Finlarig Castle ruins", "https://www.undiscoveredscotland.co.uk/killin/finlarigcastle/index.html"]
    },
    {
        title: "What's the plan?",
        details: [
            "Full itinerary for the weekend is listed back in the 'Info' tab" ,
            "As well as an interactive timeline of the day itself."
        ]
    },
    {
        title: "Choosing Your Meal",
        details: [
            "To choose what food you want, simply go to the 'Meal' tab and select your name from the dropdown",
            "Choose your starter, main and dessert and enter any special dietary requirements like 'Gluten Free' in the box below",
            "",
            "When you're ready hit submit. To change your mind, hit the 'X' at the bottom of the course and you'll see all the options again.",
            ""
        ]
    },
    {
        title: "Parking",
        details: ["There is parking available at the House at the Bridge of Lochay where most of the guests are staying, but bear in mind it may get quite full!"]
    },
    {
        title: "Contact",
        details: [ 
            "Any questions at all don't hesitate to get in touch with us", 
            "",
            "The best way to contact us is via email at ala.eddie.pace@gmail.com",
            "",
            "or whatsapp:"
        ],
        extraJSX: Contact
    },
    {
        title: "Gifts",
        details: [ 
            "You being here with us on our special day is more than enough, and we mean that.",
            "", 
            "If you really feel inclined then the most useful thing would be a small contribution towards our honeymoon, or towards caring for for our new puppy, Kora!",
            "",
        ],
        extraJSX: Bank
    },

]

