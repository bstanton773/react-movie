const movies = [
    {
        "listed": false,
        "seen": false,
        "id": 769, 
        "avgrank": 1, 
        "movie": "Goodfellas", 
        "avgtotal": 100, 
        "year": 1990, 
        "poster": "/oErEczcVUmJm0EPdvWsvK4g4Lv3.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 1891, 
        "avgrank": 2, 
        "movie": "Star Wars: Episode V - The Empire Strikes Back", 
        "avgtotal": 100, 
        "year": 1980, 
        "poster": "/7BuH8itoSrLExs2YZSsM01Qk2no.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 346, 
        "avgrank": 3, 
        "movie": "Seven Samurai", 
        "avgtotal": 100, 
        "year": 1954, 
        "poster": "/ApdijpVm1GNV9BQMOsGcAXq4gEB.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 122, 
        "avgrank": 4, 
        "movie": "Lord of the Rings: The Return of the King", 
        "avgtotal": 100, 
        "year": 2003, 
        "poster": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Winner)"
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 85, 
        "avgrank": 5, 
        "movie": "Indiana Jones and the Raiders of the Lost Ark", 
        "avgtotal": 99, 
        "year": 1981, 
        "poster": "/awUGN7ZCNq2EUTdpVaHDX23anOZ.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 121, 
        "avgrank": 6, 
        "movie": "Lord of the Rings: The Two Towers", 
        "avgtotal": 99, 
        "year": 2002, 
        "poster": "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg", 
        "oscar_winner": false, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 335984, 
        "avgrank": 7,
        "movie": "Blade Runner 2049", 
        "avgtotal": 99, 
        "year": 2017, 
        "poster": "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 238, 
        "avgrank": 8, 
        "movie": "Godfather, The", 
        "avgtotal": 99, 
        "year": 1972, 
        "poster": "/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Winner)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 76341, 
        "avgrank": 9, 
        "movie": "Mad Max: Fury Road", 
        "avgtotal": 99, 
        "year": 2015, 
        "poster": "/sQuxceRcV3cxKH5CAnAUZe0qFKS.jpg", 
        "oscar_winner": false, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 1422, 
        "avgrank": 10, 
        "movie": "Departed, The", 
        "avgtotal": 99, 
        "year": 2006, 
        "poster": "/p3tmqqwFPHFdu1oVpcgKGfcPCMZ.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 240, 
        "avgrank": 11, 
        "movie": "Godfather Part II, The", 
        "avgtotal": 99, 
        "year": 1974, 
        "poster": "/amvmeQWheahG3StKwIE1f7jRnkZ.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 6977, 
        "avgrank": 12, 
        "movie": "No Country For Old Men", 
        "avgtotal": 99, 
        "year": 2007, 
        "poster": "/6d5XOczc226jECq0LIX0siKtgHR.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 8587, 
        "avgrank": 13, 
        "movie": "Lion King, The", 
        "avgtotal": 99, 
        "year": 1994, 
        "poster": "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", 
        "oscar_winner": false, 
        "goldenglobes": "Best Picture: Musical or Comedy (Winner)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 496243, 
        "avgrank": 14, 
        "movie": "Parasite", 
        "avgtotal": 99, 
        "year": 2019, 
        "poster": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", 
        "oscar_winner": true, 
        "goldenglobes": null
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 16869, 
        "avgrank": 15, 
        "movie": "Inglourious Basterds", 
        "avgtotal": 99, 
        "year": 2009, 
        "poster": "/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 862, 
        "avgrank": 16, 
        "movie": "Toy Story", 
        "avgtotal": 99, 
        "year": 1995, 
        "poster": "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", 
        "oscar_winner": false, 
        "goldenglobes": "Best Picture: Musical or Comedy (Nominated)"
    }, 
    {
        "listed": false, 
        "seen": false, 
        "id": 578, 
        "avgrank": 17, 
        "movie": "Jaws", 
        "avgtotal": 98, 
        "year": 1975, 
        "poster": "/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 8363, 
        "avgrank": 18, 
        "movie": "Superbad", 
        "avgtotal": 98, 
        "year": 2007, 
        "poster": "/adNY5f4fio9g6UJ8WUlzSWIf7kR.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 891, 
        "avgrank": 19, 
        "movie": "All the President's Men", 
        "avgtotal": 98, 
        "year": 1976, 
        "poster": "/cPtSHR7D2WGsDBfnC5DxV927hKn.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 429, 
        "avgrank": 20, 
        "movie": "Good, the Bad and the Ugly, The", 
        "avgtotal": 98, 
        "year": 1966, 
        "poster": "/eWivEg4ugIMAd7d4uWI37b17Cgj.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 252, 
        "avgrank": 21, 
        "movie": "Willy Wonka and the Chocolate Factory", 
        "avgtotal": 98, 
        "year": 1971, 
        "poster": "/vzTmO4iKZjKPLHFXu9fIUKgFBCj.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 762, 
        "avgrank": 22, 
        "movie": "Monty Python and the Holy Grail", 
        "avgtotal": 98, 
        "year": 1975, 
        "poster": "/8AVb7tyxZRsbKJNOTJHQZl7JYWO.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 12405, 
        "avgrank": 23, 
        "movie": "Slumdog Millionaire", 
        "avgtotal": 98, 
        "year": 2008, 
        "poster": "/c6w9WarTTjbOhFFeAuiQ4Q3TRXK.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 318846, 
        "avgrank": 24, 
        "movie": "Big Short, The", 
        "avgtotal": 98, 
        "year": 2015, 
        "poster": "/isuQWbJPbjybBEWdcCaBUPmU0XO.jpg", 
        "oscar_winner": false, 
        "goldenglobes": "Best Picture: Musical or Comedy (Nominated)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 273481, 
        "avgrank": 25, 
        "movie": "Sicario", 
        "avgtotal": 97, 
        "year": 2015, 
        "poster": "/tw0lXhbNkklvseuJ4aYldkVyXV7.jpg", 
        "oscar_winner": false, 
        "goldenglobes": null
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 857, 
        "avgrank": 26, 
        "movie": "Saving Private Ryan", 
        "avgtotal": 97, 
        "year": 1998, 
        "poster": "/JC8KQ2BXaAIFEU8zEuakiwUQSr.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Winner)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 11, 
        "avgrank": 27, 
        "movie": "Star Wars: Episode IV - A New Hope", 
        "avgtotal": 97, 
        "year": 1977, 
        "poster": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", 
        "oscar_winner": false, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 28, 
        "avgrank": 28, 
        "movie": "Apocalypse Now", 
        "avgtotal": 97, 
        "year": 1979, 
        "poster": "/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg", 
        "oscar_winner": false, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 324857, 
        "avgrank": 29, 
        "movie": "Spider-Man: Into the Spider-Verse", 
        "avgtotal": 97, 
        "year": 2018, 
        "poster": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", 
        "oscar_winner": true, 
        "goldenglobes": null
    },
    {
        "listed": false, 
        "seen": false, 
        "id": 489, 
        "avgrank": 30, 
        "movie": "Good Will Hunting", 
        "avgtotal": 97, 
        "year": 1997, 
        "poster": "/ylagLHIbG0F1blqSFqY6pa56Omr.jpg", 
        "oscar_winner": true, 
        "goldenglobes": "Best Picture: Drama (Nomination)"
    }
]

export default movies;