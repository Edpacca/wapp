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

const HOUSE_AT_THE_BRIDGE_OF_LOCHAY = [ "House at the Bridge of Lochay", "Dom nad Mostem Lochay" ];
const KILLIN_REGISTRY_OFFICE = [ "Killin Registry Office", "Urząd Miasta KilLin" ];
const FINLARIG_CASTLE = [ "Finlarig Castle Ruins", "Zamek Finlairg" ];

export interface Activity {
    heading: string[],
    location: string[],
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
        heading: 
        [ 
            "Signing Registry", 
            "Podpisanie aktu ślubu"
        ],
        location: KILLIN_REGISTRY_OFFICE,
        time: [ "12:00", "12:00" ],
        subheading: 
        [
            "Bride, Groom + witnesses only",
            "Tylko Państwo Młodzi i świadkowie"
        ],
        details: 
        [
            "Our celebrant Franny can't legally marry us in Scotland, so in the morning we will sneak off with our witnesses to do the boring part of the nuptuals.",
            "Nasza celebrantka Franny nie może nas oficjalnie zaślubić w Szkocji, więc przed główną cermonią wymkniemy się do urzędu, aby podpisać akt ślubu."
        ]
    },
    {
        heading: [ "Ceremony", "Ceremonia" ],
        location: FINLARIG_CASTLE,
        time: [ "13:00", "13:00" ],
        details: 
        [
            "Finlarig Castle is a 10 minute walk from the House. We'll ask everyone to gather here 15 minutes early and we will meet you all there. Franny will conduct the ceremony, which will involve some singing and the symbolic planting of a seed.",
            "Zamek Finlairg jest którkie 10 minut spacerem z Domu nad Mostem. Prosilibyśmy, aby wszyscy zebrali się tutaj 15 minut wcześniej, a my dołączymy do Was na miejscu. Franny poprowadzi ceremonię, podczas której będziemy wspólnie śpiewać, a my zasadzimy symboliczne ziarenko."
        ],
    },
    {
        heading: [ "Group photographs", "Zdjęcia grupowe" ],
        location: FINLARIG_CASTLE,
        time: [ "13:45", "13:45" ],
        subheading: [ "Everyone!", "Wszyscy!" ],
        details: 
        [
            "We'd love to get some group photos with all the guests, some family photos, and then the bridal and groom parties before everyone heads back for the drinks reception while the newlyweds have their couple photos taken.",
            "Zaraz po ceremonii będzie czas abyśmy upamiętnili ten dzień w formie grupowych zdjęć - więc proszę się nie rozbiegać!"
        ],
    },
    {
        heading: [ "Drinks Reception", "Popołudniowe przyjęcie" ],
        location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
        time: [ "14:30", "14:30" ],
        details: 
        [
            "Back at the house there will be some canapés and nibbles, as well as champagne and cocktails to kick off the festivities. Expect some games and a few live music performances here and there!",
            "Po zdjęciach wszyscy wracamy do Domu nad Mostem na przekąski, szmapana i koktajle na rozpoczęcie imprezy! Nie zabraknie także muzycznych występów."  
        ]
    },
    {
        heading: [ "The Dinner", "Obiad" ],
        location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
        time: [ "18:00", "18:00" ],
        subheading: [ "Speeches, Dinner and toasts", "Przemowy, obiad, toasty" ],
        details: 
        [
            "We sit down together to share a lovely three-course meal at a leisurely pace, with toasts, speeches and time for anyone else to share a few words if they wish.",
            "W tym czasie zasiądziemy razem do stołu gdzie będzie podana trzy-daniowa obiado-kolacja, podczas której będzie czas na wznoszenie toastów i przemowy każdego, kto ma ochotę podzielić się paroma słowami."           
        ]
    },
    {
        heading: [ "Dancing", "Tańce" ],
        location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
        time: [ "20:00", "20:00" ],
        details: 
        [
            "Time to kick off your heels and get down. You know the drill.",
            "Czas na rozkręcenie parkietu, chyba nie musimy tłumaczyć."
        ]
    }
]

export const DAYS: Day[] = [
    {
        date: new Date(2022, 7, 15),
        title: days.friday,
        summary: 
            [ 
                "Friday will be a relaxed time for folk to turn up and get settled.",
                "Na piątek planujmy luźny czas na zjechanie się i odpoczęcię przed sobotnimi celebracjami." 
            ],
        activities: [
            {
                heading: [ "Family meal", "Rodzinny posiłek" ],
                details: 
                [
                    "Starting with a family meal at the house. Due to space this is only for folk staying at the house with the Bridge and Groom, but we'll be heading to the pub right afterwards to meet up with anyone else who's keen for a greeting drink.",
                    "Rozpoczniemy wieczór rodzinną obiado-kolacją dla gości którzy mają pokoje w Domu. Niestety z powodu limitowanego miejsca i braku pomocy kuchennej nie będziemy w stanie zaprosić wszystkich gości weselnych, jednak mamy zamiar udać się zaraz potem do pubu, gdzie każdy kto chce się przywitać może się z nami spotkać!"
                ],
                location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
                time: [ "7pm", "7pm" ],
                icon: house,
            },
            {
                heading: [ "Welcome drinks", "Piwko powitalne" ],
                details: 
                [
                    "A trip to a local pub to meet up with everyone, have a pint and say hi! The yellow text above should be a link to the pub, but give Ala or Eddie a text if you want confirmation.",
                    "Wspólny wypad do lokalnego pubu, aby przywitać się przy piwku lub szklaneczce whisky! Żółty link powyżej zabierze Was do strony pubu, ale daj nam znać jeśli masz jakieś pytania."
                ],
                location: [ "The Pub - Falls of Dochart Inn", "The Pub - Falls of Dochart Inn" ],
                time: [ "~9pm", "~9pm" ],
                url: "https://www.fallsofdochartinn.co.uk/",
                icon: barrel,
            },
            {
                heading: [ "Hangout", "Wspólny wieczór" ],
                details: 
                [  
                    "After this there's a chance to come back to the House and play some games and hang out. Because there is no bar at the House and we'll be saving most of the booze for Saturday, it'd be good to bring along a bottle or some cans for yourself if you're wanting a tipple. Ala and Eddie will try their best to get an earlyish night, but we know how these things go...",
                    "Po wizycie w pubie każdy jest zaproszony (nieobowiązkowo) do ogólnego rozgoszczenia się w Domu nad Mostem, gdzie można razem posiedzieć, porozmawiać i pograć w gry przed pójściem spać. W Domu nie ma baru, lecz jeśli masz ochotę przynieść dla siebie coś do picia, bądź naszym gościem! My sami będziemy starali się udać spać dosyć wcześnie, ale nigdy nie wiadomo :)" 
                ],
                location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
                time: [ "~11pm", "~11pm" ],
                icon: pingpong,
            },
        ]
    },
    {
        date: new Date(2022, 7, 16),
        title: days.saturday,
        summary: 
        [ 
            "Saturdy is the big day! Also check out our interactive scrolling timeline 😎",
            "Sobota to nasz Wielki Dzień! Zobaczcie także nasz interaktywny plan dnia 😎" 
        ],
        activities: [
            {
                heading: [ "Breakfast at the house", "Śniadanie w domu" ],
                details: 
                [ 
                    "For those staying in the House - a help yourself breakfast situation where we plan to have a bunch of different cereals, milk, bread, eggs and bacon available to get yourself fed. % We'd ask if you'd kindly make sure you clear up after yourselves as there are no staff to do this, it's all on us. The caterers will be arriving arround midday to begin their preparation so ideally we'd like breakfast things packed up by 11:30. Let us know if you've any questions.",
                    "Dla rezydentów Domu nad Mostem - śniadanko w zakresie własnym, w kuchni będą płatki, mleko, chlebek, jajka i bekon do wspólnego urzytku. Bardzo prosilibyśmy, aby każdy po sobie posprzątał, jako że w Domu nad Mostem nie ma pomocy hotelowej, więc jesteśmy sami za wszystko odpowiedzialni. Panie od kateringu przyjeżdżają koło południa, więc prosilibyśmy też, aby wszyscy skończyli śniadać do 11:30. Jeśli macie jakiekolwiek pytania dajcie nam znać!" 
                ],
                location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
                time: [ "Morning", "Poranek" ],
                icon: coffee
            },
            {
                heading: [ "Signing Registry", "Podpisanie aktu ślubu" ],
                details:
                [ 
                    "Ala, Eddie and their witnesses will head off to officially get married in Killin. Because Franny isn't legally marrying us during the ceremony we must go and sort the boring bits out before hand. Time for everyone else to get themselves ready for the ceremony at 1pm!",
                    "Wraz ze świadkami wymkniemy się aby podpisać oficjalny akt ślubu. Nasza celebrantka Franny nie może nas oficjalnie zaślubić w Szkocji, więc przed główną cermonią wymkniemy się wraz ze świadakmi do urzędu, aby odfajkować urzędniczą porcję naszego ślubu"
                ],
                location: KILLIN_REGISTRY_OFFICE,
                time: [ "12am", "12am" ],
                icon: pen
            },
            {
                heading: [ "Wedding Ceremony", "Ceremonia Ślubu" ],
                details: 
                [ 
                    "The ceremony itself! This will happen by the ruins of Finlarig Castle which is a 10-15 minute walk from the house. This setting is special to us as we love the outdoors and adventure. And castles are awesome. % We'd ask everyone to kindly arrive at least 15 minutes early and to help with any set up if possible - the Best-Men Joe and Adam and the Maid of Honour Jagoda will know what needs to be done. % Remember that this is an outdoor ceremony so be prepared for a little bit of uneven terrain! The grounds are up a small hill and the paths can be a little unkempt. % The ceremony will take about 30 minutes during which time most people will need to stand. We will provide seating for anyone that requests it though. % This ceremony will involve a little bit of singing, if you're wanting to join in please find the lyrics and a link to the songs below! If the weather is looking really bad we will conduct the ceremony at the House, but you will be well informed if this is the case.", 

                    "Hajtamy się! To będzie miało miejsce przy ruinach zamku Finlairg, 10-15 minut spacerem z Domu nad Mostem. Postanowiliśmy wybrać to miejsce na złożenie sobie przysięgi małżeńskiej, z racji, że oboje uwielbiamy szkocką naturę i przygody. No i zamki są super. % Bardzo prosimy, aby wszyscy przybyli conajmniej 15 minut wcześniej by pomóc z organizacją, jeśli to możliwe - drużbowie Joe i Adam i druhna Jagoda będą wiedzieli w czym potrzebujemy pomocy. % Pamiętajcie, że jest to ceremonia na dworze, więc bądźcie gotowi na nierówny teren! Do zamku trzeba dojść pod małą górkę i ścieżki nie zawsze są w najlepszym stanie. Podczas ceremonii, która będzie trwała około 30 minut, nie przewidujemy krzesełek dla gości, jednak daj nam znać z wyprzedzeniem jeśli będzie Ci ono potrzebne, a upewnimy się, że będzie dla Ciebie dostępne. Podczas ceremonii chcemy wspólnie ze wszytkimi zaśpiewać, nie jest to absolutnie obowiązkowe, ale jeśli masz ochotę do nas dołączyć, albo chociaż sobie pomruczeć, teksty i melodie piosenek możecie znaleźć w linku poniżej! Jeśli pogoda totalnie nam się rozkraczy, przeniesiemy ceremonię do Domu nad Mostem, ale nie martwcie się, upewnimy się, że wszyscy są dobrze powiadomieni, jeśli tak się stanie."
                ],
                location: FINLARIG_CASTLE,
                time: [ "1pm", "1pm" ],
                url: "https://www.undiscoveredscotland.co.uk/killin/finlarigcastle/index.html",
                icon: rings,
                extraJSX: Songs,
            },
            {
                heading: [ "Photographs", "Zdjęcia" ],
                details: 
                [ 
                    "After the ceremony we'll ask everyone to hang around in the Castle grounds to take some group photos - we'll start with one of everybody and then do seperate groups: % Families, Friends, Bridesmades, Groomsmen and finally the Newlyweds will get their couple photos taken, while this happens we'll ask everyone to head back to the House for some drinks and nibbles. % We may get some of you to help by taking back anything that needs clearing up after the ceremony.",
                    
                    "Po ceremonii prosimy aby się nie rozpraszać od razu, jako że zostaniemy wkoło zameczku aby zrobić zdjęcia grupowe. Zaczniemy od zdjęcia wszystkich razem, a potem będziemy przechodzić przez poszczególne grupy - rodziny z obu stron, druhny, drużbowie, przyjaciele etc. Na końcu my, Państwo Młodzi, zostaniemiy na zamku z fotografem na parę zdjęć tylko we dwójkę, podczas którego czasu zapraszamy resztę do udania się do Domu nad Mostem na kolejny punkt programu" 
                ],
                location: [ "Finlarig Castle Ruins", "Ruiny Zamku Finlairg" ],
                time: [ "2pm", "2pm" ],
                icon: camera
            },
            {
                heading: [ "Drinks Reception", "Popołudniowe Przyjęcie" ],
                details: [ 
                    "While the bride and groom get their photos taken, the rest of you can head back to the house for some afternoon drinks, nibbles and games. This is a fairly lax time for everyone to take a break and kick back. % When the couple are back we toast with some bubbles and begin the festivities! We'll have kegs of Pale ale and IPA in the games room, as well as a DIY cocktail bar. Wine will be near the kitchen. Go wild but be concious that this is for everyone and is to last the whole evening! We will also make sure to provide non-alcoholic options for kiddos and non-drinkers. % We also plan to have a few live music performances in an open mic setting, so if you fancy playing something then bring an instrument or sing a song! There's plenty of musical folk so a jam is definitely on the cards.", 
                    "Podczas sesji zdjęciowej Państwa Młodych, zapraszamy resztę towarzystwa do Domu nad Mostem na popołudniowe drinki, przekąski i gry w zrelaksowanej atmosferze, aby wszyscy mogli odetchnąć po pierwszym z głównych punktów dnia. Na niespełna godzinie na przybycie Pańtwa Młodych wzniesiemy toast szampanem i rozpoczniemy wspólne świętowanie! W domu będzie parę baryłek piwa Pale Ale i IPA, zamierzamy też wystawić barek do robienia koktajli DIY a także barek z winami. Obliczamy wszystko z zapasem tak, żeby alkoholu na pewno starczyło dla wszystkich na całą noc, jednak pamiętajcie, że to co zobaczycie w barku to zapewnie większość tego co mamy w zapasie, więc warto myśleć o innych nalewając dziesiątą pintę IPY. Oprócz dóbr procentowych będą też oczywiście opcje bezalkoholowe dla niepijących i nieletnich. Oprócz tako w tym czasie planujemuy coś eksperymentalnego - otwarta scena! Każdy kto ma ochotę może coś zagrać lub zaśpiewać. Jeśli chcesz, możesz dać nam znać z wyprzedzeniem lub zaskoczyć nas w samym dniu. Może nawet zrobimy spontaniczny jam session." 
                ],
                location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
                time: [ "2:30pm", "2:30pm" ],
                icon: drink
            },
            {
                heading: [ "Dinner", "Obiad"],
                details: 
                [ 
                    "We'll move into the Dining Room at the back once everything is ready and begin with some speeches. See the seating plan to find out where you're sat. Starters are all the same, soup if you want it and sharing platters with both meat and vegan options. We plan for dinner to be enjoyed at a leisurely pace and will pop a toast or two in between courses. % The wonderful food is all prepared by our fantastic local caterers \"Peaches and Pickles\"!", 

                    "Do posiłku przeniesiemy się do Jadalni z tyłu Domu gdzie rozpoczniemy wzniesieniem toastu. Tu bliscy będą mieli okazję powiedzieć parę słów o parze młodej jeśli chcą! Bliżej daty będzie dostępny plan stołów, więc możesz sprawdzić koło kogo siedzisz już wcześniej. Zupa i przystawki w formie desek mięs i desek wegańskich są takie same dla wszystkich, natomiast danie głównie i deser prosimy dla siebie wybrać w sekcji menu. Obiadokolacja odbędzie się w zrelaksowanej rodzinnej atmosferze, a dań będzie sporo, ale będą podawane powoli. Nasze cudowne lokalne panie od kateringu to \"Peaches and Pickles\", czyli \"Brzoskwinie i Pikle\"!  " 
                ],
                location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
                time: [ "6pm", "6pm" ],
                icon: knifeFork
            },
            {
                heading: [ "Dancing", "Tańce"],
                details: 
                [ 
                    "We'll kick things off with the couple's first dance and then let the evening party commence!",
                    "Oficjalne otworzymy parkiet naszym pierwszym tańcem i tym samym wieczorna impreza zostanie rozpoczęta!"
                ],
                location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
                time: [ "8pm", "8pm" ],
                icon: disco
            },
        ]
    },
    {
        date: new Date(2022, 7, 17),
        title: days.sunday,
        summary: 
        [ 
            "Sunday will be the slow hangover day. Chill out, sit in the hot tub. Finish off the booze!",
            "Niedziela będzie prawdopodobnie powolnym, skacowanym dniem. Relaks, sauna, jacuzzi, może parę spacerów w pięknych okolicach. I trzeba wykończyć alkohol!"
        ],
        activities: [
            {
                heading: [ "Breakfast?", "Śniadanie?"],
                details: [ "Sort yerselves out!", "Samoobsługa :)"],
                location: [ "Wherever" ],
                time: times.morning,
                icon: coffee,
            },
            {
                heading: [ "Group Walk", "Wspólny spacer"],
                details: 
                [ 
                    "Check out the map tab to see a few potential walks we've found that might suit people. Walk A is a gentle stroll about a nearby lake. Walk B is a shorter but more strenous hike up the nearby hill - might not be for everyone. We will make sure to coordinate and let everyone know when these walks will happen, but we're not setting a concrete time just yet.",
                    "Spójrz w zakładkę Mapa aby zobaczyć parę proponowanych spacerów. Spacer A jest spokojną traską na przechadzkę wkoło pobliskiego jeziora. Spacer B jest którszy, jednak troszkę bardziej męczący i idzie pod górkę - może nie być dla wszystkich. Postaramy się skoordynować osoby które będą miały ochotę na spacer tak żebyśmy mogli wyruszyć w tym samym czasie, jednak na razie nie ustalamy konkretnej godziny."
                ],
                location: [ "Killin" ],
                time: times.afternoon,
                url: "https://www.walkhighlands.co.uk/perthshire/loch-tay.shtml",
                icon: footsteps,
            },
            {
                heading: [ "Pub trip?", "Popołudniowe drinki?"],
                details: 
                [ 
                    "A post walk pint is always welcome. If we have a lot of alcohol left over then maybe we'll just hang out at the House! Again we'll make sure everyone is made aware of the plans",
                    "Po spacerku jeśli będziemy mieć ochotę możemy wpaść do pubu na piwko, jednak jeśli będziemy mieli wciąż dużo alkoholu z wesela może być tak że łatwiej będzie pochillować razem w Domu nad Mostem. Będziemy informować na bieżąco w ciągu dnia."
                ],
                location: [ "A pub / the House", "" ],
                time: times.afternoon,
                url: "https://www.fallsofdochartinn.co.uk/",
                icon: barrel
            },
            {
                heading: [ "Games Contest", "Gry!" ],
                details: 
                [ 
                    "We'll get those interested parties together to compete at pool, ping pong and whatever people can think of. The winner may get a prize...",
                    "Dla zainteresowanych będziemy niedziela będzie też dniem gier, bilard, ping pong, Pac Man czy rzutki, czy na co jeszcze ma kto ochotę. Może będzie do wygrania nagroda..."
                ],
                location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
                time: times.evening,
                icon: pingpong
            },
        ]
    },
    {
        date: new Date(2022, 7, 18),
        title: days.monday,
        summary:
        [ 
            "We have the House and The Bridge of Lochay booked until 10am on Monday morning. We should all make an effort to be ready to go by this time.",
            "Dom na Mostem jest zabookowany do 10 rano więc, prosilibyśmy aby wszyscy zorganizowali się tak, aby zawinąć się do tego czasu."
        ],
        activities: [
            {
                heading: [ "Departure", "Pożegananie"],
                details: 
                [ 
                    "Final goodbyes. We have be out by 10am and say our farewells. Ala and Eddie will likely have to leave fairly promptly to pack as they leave for their honeymoon in Malta the morning after!",
                    "Ostatnie pożegnania! Mamy do 10 aby pożegnać się z każdym, a my sami będziemy zapewnie spieszyli się do domu aby spakować się na naszą podróż poślubną na Maltę."
                ],
                location: HOUSE_AT_THE_BRIDGE_OF_LOCHAY,
                time: [ "10am" , "10am" ],
                icon: house
            },
        ]
    }
]
