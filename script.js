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
                    blocks: [
                        {
                            type: "call-To-Action", 
                            src:"images/Inferno-Jumbotron.png",
                            altText: "Inferno Blast Gameplay",
                            buttonLink: "https://steampowered.com",
                            buttonLinkText: "Buy now on Steam"
                            
                        },
                        {
                            type: "description",
                            text: "Description: Inferno Blast is an action-packed adventure game that takes players to a fiery realm of danger and excitement. In this game, you'll take on the role of a hero who must navigate through a series of treacherous levels filled with fiery obstacles and hordes of demons. With each level you complete, you'll unlock new weapons and power-ups to help you in your quest to defeat the ultimate demon boss. Can you survive the inferno and emerge victorious?",
                        },
                        {
                            type: "deck",
                            cards: [
                                {
                                    type: "card",
                                    src: "images/Inferno/Inferno-2-short.png",
                                    altText: "Inferno Blast Gameplay",
                                    title: "Dynamic Environments",
                                    description: "Navigate through a variety of fiery landscapes, including lava pits, crumbling ruins, and demonic strongholds."
                                },
                                {
                                    type: "card",
                                    src: "images/Inferno/Inferno-1-short.png",
                                    altText: "Inferno Blast Gameplay", 
                                    title: "Upgradable Weaponss",
                                    description: "Customize your arsenal with a range of weapons and power-ups, including flamethrowers, rocket launchers, and more."
                                },
                                {
                                    type: "card",
                                    src: "images/Inferno/Inferno-3-short.png",
                                    altText: "Inferno Blast Gameplay",
                                    title: "Epic Boss Battle",
                                    description: "Face off against towering demon bosses, each with their own unique strengths and weaknesses." 
                                },
                            ],
                        }
                    ],
                    
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