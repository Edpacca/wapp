import { foodItem } from "../models/FoodItem"

export const entree: foodItem = 
{
    course: 'entree',
    name: 
        [
            "Roasted red pepper and tomato soup",
            "Zupa z pieczonej czerwonej papryki i pomidorów"
        ],
    description:
    [
        "with a basil cream drizzle",
        ""
    ],
    isVegan: true,
    value: 0
}

export const starters: foodItem[] = [
    {
        course: 'starter',
        name: 
            [
                "Locally cured charcuterie sharing platters",
                "Zupa z pieczonej czerwonej papryki i pomidorów"
            ],
        description:
        [
            "with olives, sun blushed tomatoes and pickles.",
            ""
        ],
        isVegan: false,
        value: 0
    },
    {
        course: 'starter',
        name: 
            [
                "Vegan and vegetarian hors d'oeuvres",
                "Zupa z pieczonej czerwonej papryki i pomidorów"
            ],
        description:
        [
            "with flatbreads and dips",
            ""
        ],
        isVegan: true,
        value: 0
    }
]


export const setStarter = [
    {
        title: "Entree",
        foodItems: [ entree ]
    },
    {
        title: "Starters",
        foodItems: starters
    }
]

export const mains: foodItem[] = [
    {
        course: 'main',
        name: 
            [
                "Trio of baked lamb cutlets",
                "Trio pieczonych kotletów jagnięcych"
            ],
        description:
        [
            "set on a minted potato cake with recurrant and red wine gravy.",
            "na torcie ziemniaczanym z miętą z sosem rekurencyjnym i czerwonym winem."
        ],
        isVegan: false,
        value: 0
    },
    {
        course: 'main',
        name: 
            [
                "Herb-crusted haddock",
                "Plamiak w skórce ziołowej"
            ],
        description:
        [
            "baked with cherry tomatoes",
            "zapiekane z pomidorkami koktajlowymi"
        ],
        isVegan: false,
        value: 1
    },
    {
        course: 'main',
        name: 
            [
                "Courgette and nut bake",
                "Zapiekanka z cukinii i orzechów"
            ],
        description:
        [
            "served with a tomato compote",
            "podawany z kompotem pomidorowym"
        ],
        isVegan: true,
        value: 2
    },
];

export const desserts: foodItem[] = [
    {
        course: 'dessert',
        name: 
            [
                "Chocolate brownie",
                "Ciasto czekoladowe"
            ],
        description:
        [
            "served with chocolate Sauce and vanilla ice-cream",
            "podawany z sosem czekoladowym i lodami waniliowymi"
        ],
        isVegan: false,
        value: 0
    },
    {
        course: 'dessert',
        name: 
            [
                "Fresh fruit salad",
                "Świeża sałatka owocowa"
            ],
        description:
        [
            "",
            ""
        ],
        isVegan: true,
        value: 1
    },
    {
        course: 'dessert',
        name: 
            [
                "Cheese Platter",
                "Półmisek Serów"
            ],
        description:
        [
            "served with oatcakes and crackers",
            "podawane z plackami owsianymi i krakersami"
        ],
        isVegan: false,
        value: 2
    }
]

export const chosenTexts = {
    starter: [
        "Kicking things off with ",
        " to start.",
        "Zaczynając od ",
        "."
    ],
    main: [
        "With a main course of ",
        ".",
        "Następnie główne danie z ",
        "."

    ],
    dessert: [
        "Ending on a bang with ",
        " for dessert.",
        "Kończąc z ",
        "."
    ],
    diet: [
        "No dietary requirements.",
        "Dietary requirements: ",
        "Brak wymagań dietetycznych.",
        "Wymagania dietetyczne:"
    ]
}
