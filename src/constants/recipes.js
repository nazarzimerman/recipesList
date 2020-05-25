const DATA = [
    {title: "meat", amount: 2.5, units: "kg"},
    {title: "fish", amount: 0.9, units: "kg"},
    {title: "milk", amount: 1, units: "l"},
    {title: "eggs", amount: 4, units: "pcs"},
    {title: "salt", amount: 100, units: "g"},
];

export const RECIPE_LIST_DATA = [
    {
        title: "Salmon",
        id: 1,
        img:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."
    },
    {
        title: "ShrimpTost",
        id: 2,
        img:
            "https://images.unsplash.com/photo-1556694795-b6423d3d5b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "BenedictEggs",
        id: 3,
        img:
            "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Noodles",
        id: 4,
        img:
            "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "FranchToast",
        id: 5,
        img:
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "GeenBoul",
        id: 6,
        img:
            "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Pancakes",
        id: 7,
        img:
            "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "SalmonSteak",
        id: 8,
        img:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        ingredientsList: DATA,
    },
    {
        title: "GreenPorridge",
        id: 9,
        img:
            "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "TurkeyBurger",
        id: 10,
        img:
            "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "TomatoSoup ",
        id: 11,
        img:
            "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "NoodleSoup",
        id: 12,
        img:
            "https://images.unsplash.com/photo-1584003397078-45ef96d6174d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Noodles",
        id: 13,
        img:
            "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Pinza",
        id: 14,
        img:
            "https://images.unsplash.com/photo-1547558840-8ad6c8e662a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Tako",
        id: 15,
        img:
            "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "AvocadoToast",
        id: 16,
        img:
            "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=953&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "ChikenRoll",
        id: 17,
        img:
            "https://images.unsplash.com/photo-1517609948086-6a03114ae1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Salat",
        id: 18,
        img:
            "https://images.unsplash.com/photo-1556386470-bcdc6a5e9b9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Scallop",
        id: 19,
        img:
            "https://images.unsplash.com/photo-1560963805-6c64417e3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1921&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Noodles",
        id: 20,
        img:
            "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Cake",
        id: 21,
        img:
            "https://images.unsplash.com/photo-1585240698295-e14d61c50625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
    {
        title: "Cooke",
        id: 22,
        img:
            "https://images.unsplash.com/photo-1545396635-fdb4bdd02d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        ingredientsList: DATA,
        tutorial: "To keep your steak juicy and tender, you want an even sear and seal. You can accomplish this by not moving or turning the meat until halfway through cooking time. Also, letting the meat rest after cooking will redistribute the juices throughout, resulting in a nice and juicy steak. Follow these other tips for making any meat as tender as can be."

    },
];