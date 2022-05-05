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
            "Jaki jest plan?"
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
                "To let us know what your choice is for the main meal, simply go to the 'Menu' tab and select your name from the family dropdown menu.",
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
                "Aby wybrać danie główne, kliknij na zakładkę 'Menu' i wybierz z listy swoje imię.",
                "Wybierz danie główne i deser i wpisz wszelkie specjalne wymagania dietetyczne, takie jak \"Bez glutenu\" w polu poniżej",
                "",
                "Kiedy będziesz gotowy, kliknij Prześlij. Aby zmienić zdanie, kliknij 'X' na dole ekranu, a zobaczysz wszystkie opcje ponownie.",
                ""
            ]
        ],
        extraJSX: MealLink,
        icon: meal
    },
    {
        title: [
            "Dress Code",
            "Dresscode"
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
                "Nie oczekujemy fraków, ale zachęcamy aby ubrać się odświętnie!",
                "",
                "Naszym motywem przedownim są las i natura - sami wybieramy ciepłe naturalne kolory, jak zieleń, krzsztany, beże i brązy. Ale co najważniejsze, chcemy, abyście czuli się świetnie w swoim stroku bez względu na to, co wybierzecie. Jeśli masz ochotę na gorący róż, to super!",
                "",
                "Należy pamiętać, że (przy sprzyjającej pogodzie) planujemy zorganizować ceremonię plenerową w pobliskich ruinach zamku. To około 10 minut spacerem od domu lub krótka przejażdżka samochodem, ale na terenie nie ma zbyt dobrze wyznaczonych ścieżek dla pieszych, więc może na ten czas unikaj obcasów.",
                "",
                "Pamiętaj też, że wieczorem rozkręcamy parkiet!",
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
            "Ceremonia ślubu"
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
                "Główna ceremonia ślubu będzie miała miejsce przy ruinach zamku Finlairg. Będzie trwać około pół godziny i nie planujemy rozstawiać krzeseł, więc większość osób będzie zapewnie stać. Jednak daj nam proszę znać z wyprzedzeniem, jeśli potrzebujesz na taki czas usiąć, a zorganizujemy dla Ciebie siedzonko",
                "",
                "Proszę pamiętać, że to jednak Szkocja i ziemia może być nieco błotnista - mamy też w planie zapasowe parasolki dla wszystkich w razie lekkiego deszczu. Jeśli pogoda jednak będzie naprawdę okropna, przeniesiemy całą ceremonię do Domu nad Mostem.",
                "",
                "Mamy dwie folkowe piosenki które będą grane podczas cerenomii. Jeśli chcesz możesz zaśpiewać je razem z nami!",
                "Jedna z nich to polska pieśń ludowa, a druga to celtycka piosenka folkowa. Śpiew oczywiście nie jest obowiązkowy ale jeśli chcesz dołączyć, poniżej znajdziesz do nich linki.",

            ],
        ],
        icon: rings,
        extraJSX: Songs
    },
    {
        title: [
            "\"DIY Open Bar\"", 
            "Barek \"Zrób to sam!\""
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
                "Poczas sobotniej imprezy alkoholu nie zabraknie dla nikogo!",
                "Dom nad Mostem jest całkiem do naszej dyspozycji, jednak nie ma tam oficjalnego baru a więc i barmanów. Planujemy dostarczyć dosyć zróżnicowany barek do dyspozycji gości, będą beczki piwa, wino, a także mocniejsze alkohole i miksery do robienia sobie koktajli.",
                "Nie krępuj się też przynieść alkoholu swojego wyboru, jeśli masz ochotę, ale oczywiście nie jest to absolutnie niezbędne!",
                "",
                "Poza tym pamiętajcie że to wesele jest w 50% polskie, więc..."

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
                "Po ceremonii ślubu, gdy wszyscy zbierzemy się w Domu nad Mostem na drkinki i przekąski, będzie okazja by parę z nas zagrało/zaśpiewało parę kawałków w jednym z pokoi.",
                "Każdy jest mile widziany, niezależnie od poziomu zaawansowania! Zupełnie bez presji, chcemy po prostu poświętować tak jak kochamy - grając muzykę. W pokoju jest stare pianino, które będzie do naszej dyspozycji, jednak nie liczymy na to żeby było świetnie nastrojone.",
                "My sami rozpoczniemy, zagramy razem dla Was na gitarze i flecie.",
                "",
                "Daj znać jeśli masz coś zaplanowanego, albo po prostu zrób nam niespodziankę w ciągu dnia!"
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
                "W Domu nad Mostem będzie miała pokoje głównie rodzina, jednak wszyscy są mile widziani i chcemy, by było to miejsce gdzie razem spędzamy czas przez cały weekend.",
                "Jest tam pokój gier, gdzie znajdziecie bilard, ping ponga, rzutki, a nawet Pac Mana! Oprócz tego jest pokój kinowy z wygodnymi siedzeniami i wielkim ekranem, a także jacuzzi i sauna, więc pamiętaj wziąć strój kąpielowy!",
                "",
                "Prosimy o traktowanie tych miejsc z szacunkiem, niepalenie w środku (nawet papierosów elektronicznych), i ogólne zachowanie porządku!"

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
                "W Domu przy Moście Lochay jest dostępny parking, gdzie zmieści się większość gości, ale pamiętaj, że może się zrobić ciasno! Wkoło jest jendak parę alternatyw parkingowych jeśli zabraknie miejsca."
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
                "Bycie tutaj z nami w nasz wyjątkowy dzień będzie dla nas najwspanialszym prezentem, i naprawdę nie potrzebujemu niczego innego.",
                "",
                "Jeżeli jednak naprawdę chcielibyście sprawić nam coś ekstra, najbardziej przydałby się nam mały wkład w podróż poślubną lub koszty adopcji i opieki nad naszym nowym pieskiem Korą!",
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

