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
                        },
                    ],
                },
                {
                    type: "requirement",
                    platforms: [
                        steam,
                        playstation,
                        xbox,
                        facebook,
                        twitter,
                        instagram,
                        patreon,
                        twitch,
                        youtube,
                    ],
                    requirements: [
                        {
                            type: "minimum-requirements",
                            reqirements: [
                                {title: "OS", value: "Win-7"},
                                {title: "Processor", value: "Intel-I3 or Ryzen-3"},
                                {title: "RAM", value: "8gb"},
                                {title: "Graphics", value: "Geforce-GTX-570"},
                                {title: "Storage", value: "1gb-HDD"}
                            ]
                        },
                        {
                            type: "Recommended Requirements",
                            reqirements: [
                                {title: "OS", value: "Win-11"},
                                {title: "Processor", value: "Intel-I9 or Ryzen-7"},
                                {title: "RAM", value: "16gb"},
                                {title: "Graphics", value: "Geforce-RTX-2080"},
                                {title: "Storage", value: "5gb-SSD"}
                            ]
                        }
                    ],
                },
                {
                    type: "Wishlist",
                },
                {
                    type: "FAQ",
                    questions: [
                        {
                            title: "Question One",
                            text: [
                                {
                                    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum quo a repellendus eligendi, dolore doloribus sequi recusandae nam eveniet dolorum, qui quidem id quam aspernatur, doloremque sint in? Nesciunt",
                                    answer: "Nostrum illo explicabo fugiat architecto quos hic omnis iste velit quo corporis, maiores eaque. Fugiat voluptas voluptate officia quisquam veniam velit ad architecto? Soluta laboriosam commodi repellat aspernatur, vel excepturi."
                                }
                            ]
                        },
                        {
                            title: "Question Two",
                            text: [
                                {
                                    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum quo a repellendus eligendi, dolore doloribus sequi recusandae nam eveniet dolorum, qui quidem id quam aspernatur, doloremque sint in? Nesciunt.",
                                    answer: "Nostrum illo explicabo fugiat architecto quos hic omnis iste velit quo corporis, maiores eaque. Fugiat voluptas voluptate officia quisquam veniam velit ad architecto? Soluta laboriosam commodi repellat aspernatur, vel excepturi"
                                }
                            ] 
                        },
                        {
                            title: "Question Three",
                            text: [
                                {
                                    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum quo a repellendus eligendi, dolore doloribus sequi recusandae nam eveniet dolorum, qui quidem id quam aspernatur, doloremque sint in? Nesciunt",
                                    answer: "Nostrum illo explicabo fugiat architecto quos hic omnis iste velit quo corporis, maiores eaque. Fugiat voluptas voluptate officia quisquam veniam velit ad architecto? Soluta laboriosam commodi repellat aspernatur, vel excepturi."
                                }
                            ]
                        },
                        {
                            title: "Question Four",
                            text: [
                                {
                                    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum quo a repellendus eligendi, dolore doloribus sequi recusandae nam eveniet dolorum, qui quidem id quam aspernatur, doloremque sint in? Nesciunt",
                                    answer: "Nostrum illo explicabo fugiat architecto quos hic omnis iste velit quo corporis, maiores eaque. Fugiat voluptas voluptate officia quisquam veniam velit ad architecto? Soluta laboriosam commodi repellat aspernatur, vel excepturi."
                                }
                            ]
                        },
                        {
                            title: "Question Five",
                            text: [
                                {
                                    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum quo a repellendus eligendi, dolore doloribus sequi recusandae nam eveniet dolorum, qui quidem id quam aspernatur, doloremque sint in? Nesciunt.",
                                    answer: "Nostrum illo explicabo fugiat architecto quos hic omnis iste velit quo corporis, maiores eaque. Fugiat voluptas voluptate officia quisquam veniam velit ad architecto? Soluta laboriosam commodi repellat aspernatur, vel excepturi."
                                }
                            ]
                        }
                    ]
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