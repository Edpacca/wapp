import { foodItem } from "../models/FoodItem"

export const starters: foodItem[] = [
    {
        name: 
            [
                "Chicken Liver Pate, Red Onion Chutney and Oatcakes",
                "ser"
            ],
        description:
        [
            "ooh we all know cheese. pongy but lovely.",
            "to jest ser"
        ],
        isVegan: false,
        img: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200",
        value: 0
    },
    {
        name: 
            [
                "Lentil and Aubergine Pate, Red Onion Chutney and Oatcakes",
                "ser"
            ],
        description:
        [
            "ooh we all know cheese. pongy but lovely.",
            "to jest ser"
        ],
        isVegan: false,
        img: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200",
        value: 1
    },
    {
        name: 
            [
                "Honeydew Melon, with Mixed Berry Coulis",
                "ser"
            ],
        description:
        [
            "ooh we all know cheese. pongy but lovely.",
            "to jest ser"
        ],
        isVegan: true,
        img: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200",
        value: 2
    },
];

export const mains: foodItem[] = [
    {
        name: 
            [
                "Roast Silverside of Beef, Yorkshire Pudding, Red Wine Gravy",
                "ser"
            ],
        description:
        [
            "ooh we all know cheese. pongy but lovely.",
            "to jest ser"
        ],
        isVegan: false,
        img: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200",
        value: 0
    },
    {
        name: 
            [
                "Baked Fillet of Salmon, with Samphire and Lemon Butter ",
                "ser"
            ],
        description:
        [
            "ooh we all know cheese. pongy but lovely.",
            "to jest ser"
        ],
        isVegan: false,
        img: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200",
        value: 1
    },
    {
        name: 
            [
                "Mushroom Ravioli, Sauce of Wild Mushrooms, Cherry Tomatoes and Thyme ",
                "ser"
            ],
        description:
        [
            "ooh we all know cheese. pongy but lovely.",
            "to jest ser"
        ],
        isVegan: true,
        img: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200",
        value: 2
    },
];

export const desserts: foodItem[] = [
    {
        name: 
            [
                "Chocolate and Raspberry Cheesecake",
                "ser"
            ],
        description:
        [
            "ooh we all know cheese. pongy but lovely.",
            "to jest ser"
        ],
        isVegan: false,
        img: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200",
        value: 0
    },
    {
        name: 
            [
                "Crème Brulee",
                "ser"
            ],
        description:
        [
            "ooh we all know cheese. pongy but lovely.",
            "to jest ser"
        ],
        isVegan: false,
        img: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200",
        value: 1
    }
]

export const chosenTexts = {
    starter: [
        "Kicking things off with ",
        " to start."
    ],
    main: [
        "You have chosen a main course of ",
        "."
    ],
    dessert: [
        "Ending on a bang with ",
        " for dessert."
    ],
    diet: [
        "No dietary requirements.",
        "Dietary requirements: "
    ]
}
