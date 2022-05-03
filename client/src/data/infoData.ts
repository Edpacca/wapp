import { Contact } from "../components/info/general/Contact"
import { Bank } from "../components/info/general/Bank"
import { ItineraryLinks } from "../components/info/general/ItineraryLinks"
import { MealLink } from "../components/info/general/MealLink"
import { ColourPallette } from "../components/info/general/ColourPallette"
import guitar from '../assets/icons/guitar.svg';
import pingpong from '../assets/icons/pingpong.svg';
import cocktail from '../assets/icons/cocktail.svg';
import car from '../assets/icons/car.svg';
import dress from '../assets/icons/dress.svg';
import gift from '../assets/icons/gift.svg';
import letter from '../assets/icons/letter.svg';
import QM from '../assets/icons/question-mark.svg';
import meal from '../assets/icons/knife-fork.svg';
import rings from '../assets/sprites/rings.svg';
import { Songs } from "../components/info/itinerary/Songs"

export interface InfoProps {
    title: string[],
    details: string[][],
    icon?: string,
    link?: [string[], string],
    extraJSX?: () => JSX.Element,
}

export const GENERAL_INFO: InfoProps[] = [
    {
        title: [
            "What's the plan", 
            "Jaki jest plan"
        ],
        details: [
            [
                "We have a full itinerary with information about different activities occuring over the weekend, as well as a fancy interactive timeline of the big day itself.",
                "These can be found back on the main 'Info' tab or by clicking the buttons below.",
                ""
            ],
            [
                "Pełna trasa na weekend znajduje się z powrotem w zakładce „Informacje”",
                "W tym interaktywna oś czasu samego dnia."
            ]
        ],
        extraJSX: ItineraryLinks,
        icon: QM,
    },
    {
        title: [
            "Choosing Your Meal", 
            "Jak wybrać posiłek"
        ],
        details: [
            [
                "To let us know what your choice is for the main meal, simply go to the 'Meal' tab and select your name from the family dropdown menu.",
                "",
                "Click on the circle next your choices. To change your mind, hit the 'X' at the bottom of the course and you'll see all the options again.",
                "You can filter to show only vegan options with the switch at the top of the menu.",
                "Enter any special dietary requirements such as \"gluten free\" in the text box at the bottom.",
                "",
                "(and yes, the desserts are all vegan!)",
                "",
                "When you're ready hit submit, and then confirm to save your choices.",
                "You can change your mind up until the end of June",
                "",
            ],
            [
                "Aby wybrać jedzenie, po prostu przejdź do zakładki 'Posiłek' i wybierz swoje imię z rozwijanego menu",
                "Wybierz przystawkę, danie główne i deser i wpisz wszelkie specjalne wymagania dietetyczne, takie jak \"Bezglutenowe\" w polu poniżej",
                "",
                "Kiedy będziesz gotowy, naciśnij Prześlij. Aby zmienić zdanie, naciśnij 'X' na dole kursu, a zobaczysz wszystkie opcje ponownie.",
                ""
            ]
        ],
        extraJSX: MealLink,
        icon: meal
    },
    {
        title: [
            "Dress Code",
            "Kodeks ubioru"
        ],
        details: [ 
            [
                "We don't expect black tie but dress classy folks!",
                "",
                "We're going with the theme of woodlands and nature - loosely colours like dark green, and autumny browns and oranges. But most importantly we want you to feel fabulous in whatever you choose to wear. If you fancy hot pink, go for it!",
                "",
                "Bear in mind that (weather permitting) we plan to have the ceremony outdoors in a nearby castle ruin. It's about a 10 minute walk from the house, or a short drive. The paths may be muddy so you might want to avoid stilettos for that bit.",
                "",
                "Plan for dancing in the evening!",
                ""
            ],
            [
                "Nie oczekujemy czarnego krawata, ale ubieramy się z klasą",
                "",
                "Idziemy z motywem lasu i natury - osobiście będziemy luźno chodzić z ziemistymi kolorami, takimi jak ciemna zieleń, rdzawe i brązy. Ale co najważniejsze, chcemy, abyś czuła się fantastycznie bez względu na to, co wybierzesz. Jeśli masz ochotę na gorący róż, zrób to!",
                "",
                "Należy pamiętać, że (przy sprzyjającej pogodzie) planujemy zorganizować ceremonię plenerową w pobliskich ruinach zamku. To około 10 minut spacerem od domu lub krótka przejażdżka, ale na terenie nie ma odpowiednich ścieżek dla pieszych, więc może w tym czasie unikaj obcasów.",
                "",
                "Zaplanuj wieczorne tańce!",
                ""
            ]
        ],
        link: [["Finlarig Castle ruins", "Ruiny zamku Finlarig"], "https://www.undiscoveredscotland.co.uk/killin/finlarigcastle/index.html"],
        icon: dress,
        extraJSX: ColourPallette
    },
    {
        title: [
            "The Ceremony",
            ""
        ],
        details: [ 
            [
               "The main ceremony will take place at the Finlarig Castle ruins. The ceremony will last around half an hour, but we won't have many chairs so most people will be standing for this time. Please let us know if you will need a chair",
               "",
               "Please be aware the ground may be a wee bit muddy (it is Scotland after all) - we plan to provide some umbrellas incase of light showers. If the weather is terrible we will conduct the ceremony at the House.",
               "",
               "We have two folk songs that we want to play during the ceremony, which people can sing together if they'd like.",
               "One is traditional Polish and one is Celtic. Don't feel like you have to join in but we've linked them below if you want to listen",
            ],
            [

            ],
        ],
        icon: rings,
        extraJSX: Songs
    },
    {
        title: [
            "\"DIY Open Bar\"", 
            "Jak wybrać posiłek"
        ],
        details: [
            [
                "On the Saturday we plan for no man or woman to go thirsty...",
                "The venue is exclusively ours for the weekend so there is no licensed bar. We will be providing a selection of booze including a beer keg, wine and a small spirit selection for people to make DIY cocktails.",
                "Please feel free to bring anything extra you might fancy or want to share but don't worry, we should have plenty to go around!",
                "",
                "Also remember this party is 50% Polish so..."
            ],
            [

            ]
        ],
        icon: cocktail
    },
    {
        title: [
            "Open mic",
            "Otwarta scena"
        ],
        details: [ 
            [
                "After the ceremony we'll be heading back to the House for some cocktails and canapés, while a few of us plan to play some tunes in one of the rooms.",
                "Anybody of any skill level is welcome to play or sing something! But no pressure, it's all a bit of fun. There is an old piano there but don't bank on it being in tune.",
                "Eddie and Ala will play some guitar and flute together.",
                "",
                "Give us a shout if you have something planned, or just surprise us!"
            ],
            [

            ]
        ],
        icon: guitar,
    },
    {
        title: [
            "Fun stuff at the House",
            "Wyposażenie Domu"
        ],
        details: [ 
            [
                "The House at the Bridge of Lochay is where the family are staying, but everyone is welcome to come and hang out at any time",
                "There is a games room with a large pool table, ping pong and a darts board (and even a Ms. PacMan machine!?). There is also a cinema, a hottub and a sauna for everyone to enjoy, so bring your swimming gear.",
                "",
                "Please be respectful of the other guests who are staying in the house while you're here."
            ],
            [

            ]
        ],
        icon: pingpong,
    },
    {
        title: [
            "Parking",
            "Parking"    
        ],
        details: [
            [
                "There is parking available at the House at the Bridge of Lochay where most of the guests are staying, and if it gets full there is more parking a short walk away. Let us know if you've any concerns.",
            ],
            [
                "W Domu przy Moście Lochay jest dostępny parking, gdzie przebywa większość gości, ale pamiętaj, że może być całkiem pełny!"
            ]
        ],
        icon: car
    },
    {
        title: [
            "Gifts",
            "Prezenty"
        ],
        details:[
            [ 
                "You being here with us on our special day is more than enough, and we mean that.",
                "", 
                "If you really feel inclined then the most useful thing would be a small contribution towards our honeymoon, or towards caring for our new puppy, Kora!",
                "",
            ],
            [
                "Bycie tutaj z nami w nasz wyjątkowy dzień jest więcej niż wystarczające, i to mamy na myśli.",
                "",
                "Jeżeli naprawdę masz na to ochotę, najbardziej przyda się mały wkład w podróż poślubną lub opiekę nad naszym nowym szczeniakiem Korą!",
                "",
            ]
        ],
        extraJSX: Bank,
        icon: gift
    },
    {
        title: ["Contact", "Kontakt"],
        details: [
            [ 
                "Any questions at all don't hesitate to get in touch with us", 
                "",
                "The best way to contact us is via email at ala.eddie.pace@gmail.com",
                "or phone/Whatsapp:"
            ],
            [
                "Jeśli masz jakiekolwiek pytania, nie wahaj się z nami skontaktować",
                "",
                "Najlepszym sposobem skontaktowania się z nami jest e-mail na adres ala.eddie.pace@gmail.com",
                "",
                "lub WhatsApp:"
            ]
        ],
        extraJSX: Contact,
        icon: letter,
    },


]

