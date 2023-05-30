// index.html Smash Games - Home
// blast.html Smash Games - Inferno Blast


const Data = {
    brandName: "Smash Games",
    pages: [
        {
            name: "index",
            pageName: "Home",
            callToAction: {
                src:"images/SmashGamesLogo-short.png",
                altText: "Smash Games Logo"
            }
        },    
        {
            name: "about",
            pageName: "About Us"
        },
        {
            name: "games",
            pageName: "Our Games",
            pages: [
                {
                    name: "blast",
                    pageName: "Inferno Blast",
                    callToAction: {
                        src:"images/Inferno-Jumbotron.png",
                        altText: "Inferno Blast Gameplay",
                        buttonLink: "https://steampowered.com"
                    }
                },
                {
                    name: "game2",
                    pageName: "Super Charged!"
                },
                {
                    name: "game3",
                    pageName: "Starfighter Assult"
                },
            ],
        },
        {
            name: "contact",
            pageName: "Contact Us"
        },
    ]


}