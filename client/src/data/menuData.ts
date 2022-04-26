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
                "Lokalne "
            ],
        description:
        [
            "with olives, sun blushed tomatoes and pickles.",
            "z oliwkami, suszonymi pomidorkami i okórkami konserwowymi"
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
                "Canon of Lamb",
                "Trio pieczonych kotletów jagnięcych"
            ],
        description:
        [
            "with a red wine and tomato reduction, pea and minted potatoes, local Kinnell Farm vegetables",
            "na torcie ziemniaczanym z miętą z sosem rekurencyjnym i czerwonym winem."
        ],
        isVegan: false,
        value: 0
    },
    {
        course: 'main',
        name: 
            [
                "Herb-crusted baked cod",
                "Plamiak w skórce ziołowej"
            ],
        description:
        [
            "with a red wine and tomato reduction, pea and minted potatoes, local Kinnell Farm vegetables",
            "zapiekane z pomidorkami koktajlowymi"
        ],
        isVegan: false,
        value: 1
    },
    {
        course: 'main',
        name: 
            [
                "Sunflower seed and sage Risotto",
                "Zapiekanka z cukinii i orzechów"
            ],
        description:
        [
            "with butternut squash",
            "podawany z kompotem pomidorowym"
        ],
        isVegan: true,
        value: 2
    },
    {
        course: 'main',
        name: 
            [
                "Tuscan spaghetti",
                "with tomatoes, olives, peppers, garlic and rocket"
            ],
        description:
        [
            "",
            "podawany z kompotem pomidorowym"
        ],
        isVegan: true,
        value: 3
    },
];

export const desserts: foodItem[] = [
    {
        course: 'dessert',
        name: 
            [
                "Warm chocolate brownie",
                "Ciasto czekoladowe"
            ],
        description:
        [
            "served with Scottish rasberries, compote and chantilly cream",
            "podawany z sosem czekoladowym i lodami waniliowymi"
        ],
        isVegan: true,
        value: 0
    },
    {
        course: 'dessert',
        name: 
            [
                "Scottish Cranachan",
                "Świeża sałatka owocowa"
            ],
        description:
        [
            "with toasted oats, rasberries, whiskey, local honey and cream",
            ""
        ],
        isVegan: true,
        value: 1
    },
    {
        course: 'dessert',
        name: 
            [
                "Cheese board",
                "Półmisek Serów"
            ],
        description:
        [
            "served with figs, fruit, homemade chutneys, oatcakes and crackers",
            "podawane z plackami owsianymi i krakersami"
        ],
        isVegan: false,
        value: 2,
        isSetCourse: true
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
