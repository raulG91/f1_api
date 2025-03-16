# F1 API

This is an API created using express. It will allow to manage information about an F1 season. To persist the information a MongoDB database will be used.  

### Operations 

| Endpoint | Operation | Comments
| -------- | --------- | --------
| /        | GET       | Return information for all seasons available
| /:year   | GET       | Return season information for the year indicated
| /:year/worldChampion| GET | Return driver world champion for the year passed as parameter
| /:year/constructorChampion | GET | Return world champion team for the year passed as parameter
| /:year/teams | GET | Return information about all teams for season passed for the year parameter
| /:year/drivers | GET | Return ifnromation about drivers participating in a specific season
| / | POST | Create a new season
| /:year | PUT | Replace exisiting information for season indicated with parameter :year 
| /:year | DELETE | Delete season data for year indicated

### Databse 

For this project a MongoDB database has been used.  A new collection called `seasons` has been created, that collection will store documents for the different F1 seasons. 

An example document included in `seasons` could be found here:

```
{
        "year":2024,
        "worldChampion": "Max Verstappen",
        "teamChampion": "Mclaren F1",
        "teams": [
            {
                "name": "Red Bull Racing Honda RBPT",
                "points": 589,
                "engine": "Honda",
                "drivers":[
                    {
                        "name":"Max Verstappen",
                        "nationality":"Dutch",
                        "points": 437,
                        "fastestLaps": 3,
                        "podiums": 13,
                        "wins": 9
                    },
                    {
                        "name":"Sergio Perez",
                        "nationality":"Mexican",
                        "points": 152,
                        "fastestLaps": 1,
                        "podiums": 4,
                        "wins": 0
                    }
                ]
            },
            {
                "name":"Ferrari",
                "points":652,
                "engine":"Ferrari",
                "drivers":[
                    {
                        "name":"Charles Leclerc",
                        "nationality":"Monegasque",
                        "points": 356,
                        "fastestLaps": 3,
                        "podiums": 13,
                        "wins": 3
                    },
                    {
                        "name":"Carlos Sainz",
                        "nationality":"Spanish",
                        "points": 290,                        
                        "fastestLaps": 1,
                        "podiums": 9,
                        "wins": 2
                    }
                ]
            },
            {
                "name": "McLaren Mercedes",
                "points": 666,
                "engine": "Mercedes",
                "drivers":[
                    {
                        "name":"Lando Norris",
                        "nationality":"British",
                        "points":374,
                        "fastestLaps": 6,
                        "podiums": 12,
                        "wins": 4
                    },
                    {
                        "name":"Oscar Piastri",
                        "nationality":"Australian",
                        "points":292,
                        "fastestLaps": 1,
                        "podiums": 8,
                        "wins": 2
                    }
                ]
            },
            {
                "name": "Mercedes",
                "points": 468,
                "engine": "Mercedes",
                "drivers":[
                    {
                        "name":"Lewis Hamilton",
                        "nationality":"British",
                        "points": 223,
                        "fastestLaps": 2,
                        "podiums": 5,
                        "wins": 2
                    },
                    {
                        "name":"George Russell",
                        "nationality":"British",
                        "points": 245,
                        "fastestLaps": 2,
                        "podiums": 4,
                        "wins": 2
                    }
                ]
            },
            {
                "name": "Aston Martin Aramco Mercedes",
                "points": 94,
                "engine": "Mercedes",
                "drivers":[
                    {
                        "name":"Fernando Alonso",
                        "nationality":"Spanish",
                        "points": 70,
                        "fastestLaps": 2,
                        "podiums": 0,
                        "wins": 0
                    },
                    {
                        "name":"Lance Stroll",
                        "nationality":"Canadian",
                        "points": 24,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                    }
                ]
            },
            {
                "name": "Alpine Renault",
                "points": 65,
                "engine": "Renault",
                "drivers":[
                    {
                        "name":"Esteban Ocon",
                        "nationality":"French",
                        "points": 23,
                        "fastestLaps": 1,
                        "podiums": 1,
                        "wins": 0
                    },
                    {
                        "name":"Pierre Gasly",
                        "nationality" :"French",
                        "points":42,
                        "fastestLaps": 0,
                        "podiums": 1,
                        "wins": 0

                    },
                    {
                        "name":"Jack Doohan",
                        "nationality":"Australian",
                        "points": 0,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                    }
                ]
            },
            {
                "name": "RB Honda RBPT",
                "points": 46,
                "engine": "Honda",
                "drivers":[
                    {
                        "name":"Yuki Tsunoda",
                        "nationality":"Japanese",
                        "points": 30,
                        "fastestLaps": 1,
                        "podiums": 0,
                        "wins": 0
                    },
                    {
                        "name":"Daniel Ricciardo",
                        "nationality":"Australian",
                        "points":12,
                        "fastestLaps": 1,
                        "podiums": 0,
                        "wins": 0
                    },
                    {
                        "name": "Liam Lawson",
                        "nationality" :"New Zealander",
                        "points":4,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                    }
                ]
            },
            {
                "name":"Haas Ferrari",
                "points": 58,
                "engine": "Ferrari",
                "drivers":[
                    {
                        "name":"Kevin Magnussen",
                        "nationality":"Danish",
                        "points": 16,
                        "fastestLaps": 1,
                        "podiums": 0,
                        "wins": 0
                    },
                    {
                        "name": "Nico Hulkenberg",
                        "nationality":"German",
                        "points": 41,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                    },
                    {
                        "name":"Oliver Bearman",
                        "nationality":"British",
                        "points": 7,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0

                    }
                ]
            },
            {
                "name":"Williams Mercedes",
                "points": 17,
                "engine": "Mercedes",
                "drivers":[
                    {
                        "name":"Logan Sargeant",
                        "nationality":"Canadian",
                        "points": 0,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                    },
                    {
                        "name":"Alex Albon",
                        "nationality":"Thai",
                        "points": 12,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                    },
                    {
                        "name":"Franco Colapinto",
                        "nationality":"Argentinian",
                        "points":5,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                    }
                ]
            },
            {
                "name": "Kick Sauber Ferrari",
                "points": 4,
                "engine": "Ferrari",
                "drivers":[
                    {
                        "name":"Valtteri Bottas",
                        "nationality":"Finnish",
                        "points": 0,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                    },
                    {
                        "name":"Zhou Guanyu",
                        "nationality": "Chinese",
                        "points": 4,
                        "fastestLaps": 0,
                        "podiums": 0,
                        "wins": 0
                        
                    }
                ]
            }
        ]
    }

```

### Deploy 

Before deploying the application to any service, it is needed to create your MongoDB databse and get connection URL. That URL should included as environment varible with key: `MONGODB_URI`.