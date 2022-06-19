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
        "z dodatkiem śmietanki i bazylią"
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
                "Lokalne deski mięsne"
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
                "Wegańskie i wegetariańskie deski przystawek "
            ],
        description:
        [
            "with flatbreads and dips",
            "z dipami i pitą"
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
            "Venison fillet",
            "Filet z dziczyzny"
        ],
        description:
        [
            "with jus of blackcurrent and port, and local Kinnell Farm vegetables",
            "z sosem czarnej porzeczki i porto i lokalnymi warzywkami z Farmy Kinnell"
        ],
        isVegan: false,
        value: 0
    },
    {
        course: 'main',
        name: 
        [
            "Herb-crusted baked cod",
            "Dorsz w panierce ziołowej"
        ],
        description:
        [
            "with a red wine and tomato reduction, pea and minted potatoes, local Kinnell Farm vegetables",
            "z sosem z czerwonego wina i pomidorów, ziemniaczkami z groszkiem i miętą i lokalnymi warzywkami z Farmy Kinnell"
        ],
        isVegan: false,
        value: 1
    },
    {
        course: 'main',
        name: 
        [
            "Sunflower seed and sage Risotto",
            "Risotto z szałwią i ziarnami słonecznika"
        ],
        description:
        [
            "with butternut squash",
            "podawane z dynią piżmową"
        ],
        isVegan: true,
        value: 2
    },
    {
        course: 'main',
        name: 
        [
            "Tuscan spaghetti",
            "Toskańskie spaghetti"
        ],
        description:
        [
            "",
            ""
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
            "Ciepłe czekoladowe brownie"
        ],
        description:
        [
            "served with Scottish rasberries, compote and chantilly cream",
            "podawane ze Szkockimi malinami, konfiturą i bitą śmietaną"
        ],
        isVegan: true,
        value: 0
    },
    {
        course: 'dessert',
        name: 
        [
            "Scottish Cranachan",
            "Szkocki Cranachan (deser bezowy)"
        ],
        description:
        [
            "with toasted oats, rasberries, whiskey, local honey and cream",
            "z prażonym owsem, malinami, whiskey, lokalnym miodem i śmietanką"
        ],
        isVegan: true,
        value: 1
    },
    {
        course: 'dessert',
        name: 
        [
            "Cheese board",
            "Deska Serów"
        ],
        description:
        [
            "served with figs, fruit, homemade chutneys, oatcakes and crackers",
            "podawana z figami, owocami, domowymi konfiturami, ciastkami owsianymi i krakersami"
        ],
        isVegan: false,
        value: 2,
        isSetCourse: true
    }
]

export const chosenTexts = {
    starter: 
    [
        "Kicking things off with ",
        " to start.",
        "Zaczynając od ",
        "."
    ],
    main: 
    [
        "With a main course of ",
        ".",
        "Następnie główne danie: ",
        "."
    ],
    dessert: 
    [
        "Ending on a bang with ",
        " for dessert.",
        "Kończąc deserem:",
        "."
    ],
    diet: 
    [
        "No dietary requirements.",
        "Dietary requirements: ",
        "Brak wymagań dietetycznych.",
        "Wymagania dietetyczne:"
    ]
}
