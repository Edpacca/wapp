import { Contact } from "../components/info/general/Contact"
import { Bank } from "../components/info/general/Bank"
import { ItineraryLinks } from "../components/info/general/ItineraryLinks"
import { MealLink } from "../components/info/general/MealLink"
import car from '../assets/icons/car.svg';
import dress from '../assets/icons/dress.svg';
import gift from '../assets/icons/gift.svg';
import letter from '../assets/icons/letter.svg';
import QM from '../assets/icons/question-mark.svg';
import meal from '../assets/icons/knife-fork.svg';

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
            "Dress Code",
            "Kodeks ubioru"
        ],
        details: [ 
            [
                "We don't expect black tie but dress classy folks!",
                "",
                "We're going with the theme of woodlands and nature - we'll personally be going loosely with earthy colours like dark green, russets and browns. But most importantly we want you to feel fabulous in whatever you choose to wear. If you fancy hot pink, go for it!",
                "",
                "Bear in mind that (weather permitting) we plan to have the ceremony outdoors in a nearby castle ruin. It's about a 10 minute walk from the house, or a short drive, but there aren't proper paths inside the grounds so maybe avoid heels for that bit.",
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
    },
    {
        title: [
            "What's the plan", 
            "Jaki jest plan"
        ],
        details: [
            [
                "Full itinerary for the weekend is listed back in the 'Info' tab" ,
                "As well as an interactive timeline of the day itself."
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
                "To choose what food you want, simply go to the 'Meal' tab and select your name from the dropdown",
                "Choose your starter, main and dessert and enter any special dietary requirements like 'Gluten Free' in the box below",
                "",
                "When you're ready hit submit. To change your mind, hit the 'X' at the bottom of the course and you'll see all the options again.",
                ""
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
            "Parking",
            "Parking"    
        ],
        details: [
            ["There is parking available at the House at the Bridge of Lochay where most of the guests are staying, but bear in mind it may get quite full!"],
            ["W Domu przy Moście Lochay jest dostępny parking, gdzie przebywa większość gości, ale pamiętaj, że może być całkiem pełny!"]
        ],
        icon: car
    },
    {
        title: ["Contact", "Kontakt"],
        details: [
            [ 
                "Any questions at all don't hesitate to get in touch with us", 
                "",
                "The best way to contact us is via email at ala.eddie.pace@gmail.com",
                "",
                "or whatsapp:"
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
    {
        title: [
            "Gifts",
            "Prezenty"
        ],
        details:[
            [ 
                "You being here with us on our special day is more than enough, and we mean that.",
                "", 
                "If you really feel inclined then the most useful thing would be a small contribution towards our honeymoon, or towards caring for for our new puppy, Kora!",
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

]

