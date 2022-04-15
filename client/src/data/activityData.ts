import barrel from '../assets/icons/barrel.svg';
import house from '../assets/icons/house.svg';
import knifeFork from '../assets/icons/knife-fork.svg';
import rings from '../assets/icons/rings.svg';
import coffee from '../assets/icons/coffee.svg';
import pen from '../assets/icons/pen.svg';
import drink from '../assets/icons/drink.svg';
import camera from '../assets/icons/camera.svg';
import disco from '../assets/icons/disco.svg';
import footsteps from '../assets/icons/footsteps.svg';
import pingpong from '../assets/icons/pingpong.svg';
import { days, times } from './constantsEngPol';
import { Songs } from '../components/info/itinerary/Songs';

export interface Activity {
    heading: string[],
    location: string,
    time: string[],
    subheading?: string[],
    details?: string[]
    url?: string
    icon?: string,
    extraJSX?: () => JSX.Element,
}
export interface Day {
    date: Date,
    title: string[],
    summary: string[],
    activities: Activity[],
}

export const BIG_DAY_SCHEDULE: Activity[] = [
    {
        heading: [ 
            "Signing Registry", 
            ""
        ],
        location: "Killin Registry Office",
        time: ["12:00", "12:00"],
        subheading: [
            "Bride, Groom + witnesses only",
            ""
        ],
        details: [
            "Our celebrant Franny can't legally marry us in Scotland, so in the morning we will sneak off with our witnesses to do the boring part of the nuptuals.",
            ""
        ]
    },
    {
        heading: ["Ceremony",],
        location: "Finlarig Castle",
        time: ["13:00", "13:00"],
        details: ["Finlarig Castle is a 10 minute walk from the House. We'll ask everyone to gather here 15 minutes early and we will meet you all there. Franny will conduct the ceremony, which will involve some singing and the symbolic planting of a seed."],
    },
    {
        heading: ["Group photographs",],
        location: "Finlarig Castle",
        time: ["13:45", "13:45"],
        subheading: ["Everyone!", ""],
        details: ["We'd love to get some group photos with all the guests, some family photos, and then the bridal and groom parties before everyone heads back for the drinks reception while the newlyweds have their couple photos taken."],
    },
    {
        heading: ["Drinks Reception",],
        location: "House at the Bridge of Lochay",
        time: ["14:30", "14:30"],
        details: ["Back at the house there will be some canapés and nibbles, as well as champagne and cocktails to kick off the festivities. Expect some games and a few live music performances here and there!"]
    },
    {
        heading: ["The Dinner",],
        location: "House at the Bridge of Lochay",
        time: ["18:00", "18:00"],
        subheading: ["Speeches, Dinner and toasts", ""],
        details: ["We sit down together to share a lovely three-course meal at a leisurely pace, with toasts, speeches and time for anyone else to share a few words if they wish."]
    },
    {
        heading: ["Dancing",],
        location: "House at the Bridge of Lochay",
        time: ["20:00", "20:00"],
        details: ["Time to kick off your heels and get down. You know the drill."]
    }
]

export const DAYS: Day[] = [
    {
        date: new Date(2022, 7, 15),
        title: days.friday,
        summary: ["Friday will be a relaxed time for folk to turn up and get settled",],
        activities: [
            {
                heading: ["Family meal"],
                details: ["Starting with a family meal at the house. Due to space this is only for folk staying at the house with the Bridge and Groom, but we'll be heading to the pub right afterwards to meet up with anyone else who's keen for a greeting drink."],
                location: "House at Bridge of Lochay",
                time: ["7pm", "7pm"],
                icon: house,
            },
            {
                heading: ["Pub trip"],
                details: ["A trip to a local pub to meet up with everyone, have a pint and say hi! The yellow text above should be a link to the pub, but give Ala or Eddie a text if you want confirmation."],
                location: "The Pub - Falls of Dochart Inn",
                time: ["~9pm", "~9pm"],
                url: "https://www.fallsofdochartinn.co.uk/",
                icon: barrel,
            },
            {
                heading: ["Hangout"],
                details: ["After this there's a chance to come back to the House and play some games and hang out. Because there is no bar at the House and we'll be saving most of the booze for Saturday, it'd be good to bring along a bottle or some cans for yourself if you're wanting a tipple. Ala and Eddie will try their best to get an earlyish night, but we know how these things go..."],
                location: "House at Bridge of Lochay",
                time: ["~11pm", "~11pm"],
                icon: pingpong,
            },
        ]
    },
    {
        date: new Date(2022, 7, 16),
        title: days.saturday,
        summary: ["Saturdy is the big day! Also check out our interactive scrolling timeline 😎",],
        activities: [
            {
                heading: ["Breakfast at the house",],
                details: ["For those staying in the House - a help yourself breakfast situation where we plan to have a bunch of different cereals, milk, bread, eggs and bacon available to get yourself fed. % We'd ask if you'd kindly make sure you clear up after yourselves as there are no staff to do this, it's all on us. The caterers will be arriving arround midday to begin their preparation so ideally we'd like breakfast things packed up by 11:30. Let us know if you've any questions.",],
                location: "House at Bridge of Lochay",
                time: ["Morning", "Poranek"],
                icon: coffee
            },
            {
                heading: ["Signing Registry",],
                details: ["Ala, Eddie and their witnesses will head off to officially get married in Killin. Because Franny isn't legally marrying us during the ceremony we must go and sort the boring bits out before hand. Time for everyone else to get themselves ready for the ceremony at 1pm!",],
                location: "Killing Registry Office",
                time: ["12am", "12am"],
                icon: pen
            },
            {
                heading: ["Wedding Ceremony",],
                details: ["The ceremony itself! This will happen in the ruins of Finlarig Castle which is a 10-15 minute walk from the house. This setting is special to us as we love the outdoors and adventure. And castles are awesome. % We'd ask everyone to kindly arrive at least 15 minutes early and to help with any set up if possible - the Best-Men Joe and Adam and and the Maid of Honour Jagoda will know what needs to be done. % Remember that this is an outdoor ceremony so be prepared for a little bit of uneven terrain! The grounds are up a small hill and the paths can be a little unkempt. % The ceremony will take about 30 minutes during which time most people will need to stand. We will provide seating for anyone that requests it though. % This ceremony will involve a little bit of singing, if you're wanting to join in please find the lyrics and a link to the songs below! If the weather is looking really bad we will conduct the ceremony at the House, but you will be well informed if this is the case.", ""],
                location: "Finlarig Castle Ruins",
                time: ["1pm", "1pm"],
                url: "https://www.undiscoveredscotland.co.uk/killin/finlarigcastle/index.html",
                icon: rings,
                extraJSX: Songs,
            },
            {
                heading: ["Photographs",],
                details: ["After the ceremony we'll ask everyone to hang around in the Castle grounds to take some group photos - we'll start with one of everybody and then do seperate groups: % Families, Friends, Bridesmades, Groomsmen and finally the Newlyweds will get their couple photos taken, while this happens we'll ask everyone to head back to the House for some drinks and nibbles. % We may get some of you to help by taking back anything that needs clearing up after the ceremony.",],
                location: "Finlarig Castle",
                time: ["2pm", "2pm"],
                icon: camera
            },
            {
                heading: ["Drinks Reception",],
                details: ["While the bride and groom get their photos taken, the rest of you can head back to the house for some afternoon drinks, nibbles and games. This is a fairly lax time for everyone to take a break and kick back. % When the couple are back we toast with some bubbles and begin the festivities! We'll have kegs of Pale ale and IPA in the games room, as well as a DIY cocktail bar. Wine will be near the kitchen. Go wild but be concious that this is for everyone and is to last the whole evening! % We also plan to have a few live music performances in an open mic setting, so if you fancy playing something then bring an instrument or sing a song! There's plenty of musical folk so a jam is definitely on the cards.", ""],
                location: "House at Bridge of Lochay",
                time: ["2:30pm", "2:30pm"],
                icon: drink
            },
            {
                heading: ["Dinner",],
                details: ["We'll move into the Dining Room at the back once everything is ready and begin with some speeches. See the seating plan to find out where you're sat. Starters are all the same, soup if you want it and sharing platters with both meat and vegan options. We plan for dinner to be enjoyed at a leisurely pace and will pop a toast or two in between courses. % The wonderful food is all prepared by our fantastic local caterers \"Peaches and Pickles\"!", ""],
                location: "House at Bridge of Lochay",
                time: ["6pm", "6pm"],
                icon: knifeFork
            },
            {
                heading: ["Dancing",],
                details: ["We'll kick things off with the couple's first dance and then let the evening party commence!",],
                location: "House at Bridge of Lochay",
                time: ["8pm", "8pm"],
                icon: disco
            },
        ]
    },
    {
        date: new Date(2022, 7, 17),
        title: days.sunday,
        summary: ["Friday will be a relaxed time for folk to turn up and get settled",],
        activities: [
            {
                heading: ["Breakfast",],
                details: ["A big ol' breaky to beat the hangover",],
                location: "House at Bridge of Lochay",
                time: times.morning,
                icon: coffee,
            },
            {
                heading: ["Wee Hike",],
                details: ["A short outdoor adventure around Killin",],
                location: "Killin",
                time: times.noon,
                url: "https://www.walkhighlands.co.uk/perthshire/loch-tay.shtml",
                icon: footsteps,
            },
            {
                heading: ["Pub trip",],
                details: ["A trip to the local pub",],
                location: "House at Bridge of Lochay",
                time: times.evening,
                url: "https://www.fallsofdochartinn.co.uk/",
                icon: barrel
            },
        ]
    },
    {
        date: new Date(2022, 7, 18),
        title: days.monday,
        summary:[ "We have the House and The Bridge of Lochay booked until 10am on Monday morning. We should all make an effort to be ready to go by this time.",],
        activities: [
            {
                heading: ["Departure",],
                details: ["Final goodbyes",],
                location: "House at Bridge of Lochay",
                time: ["10am" , "10am"],
                icon: house
            },
        ]
    }
]
