# POKEDEXpress - NO PROMPTS!

## Express app for Pokemon data

![pikachu](http://orig10.deviantart.net/54d7/f/2013/265/a/b/w_by_professorlayton22-d6nd2yl.jpg)

This weekend you are going to make an Express app for Pokemon with server-side rendered views using Handlebars! Hopefully you'll have a much better time than Pikachu.


## Setup
1. Make sure that you are on the `master` branch of your `wdi-remote-...` repo.
Then run `git pull upstream master` to pull the latest materials from the
instructors' repository. You shouldn't hit a merge conflict here, but if you do, flag down an instructor right away.

2. Run `npm install` to install all the dependencies that are already in `package.json`.


### Exercise Objectives

- gain independent practice creating an Express app with Read + Delete
- gain more practice setting up an Express app with [MVC](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm) framework in mind
- work with middleware like `method-override`,  `body-parser`
- build important debugging skills by understanding errors


### Directions

- Your app's [MVC](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm) ("Models Views Controllers") folder structure has been created for you:
  - `models`: our massive Pokemon data model lives here (do not modify)
  - `views`: your Handlebars views live here
  - `controllers`:  you will code your routes in `controllers/pokemon.js`

- Run `npm install` in the pokedexpress directory. Express is already listed as a dependency for you.

### Starter Code
- There is none!

- Create your server file in `server.js`  
- Build your controller in `controllers/pokemon.js`.
- Visiting `localhost:3000/pokemon` lists:
  - all pokemon images, names, and a delete button
  - Clicking the pokemon name (or image) takes you to the Pokemon show page
  - The show page lists the Pokemon's name, image, type, and stats.

- A massive collection of Pokemon data is stored inside `poke_array.js`. This data is an *array* of *objects* that is ready to export using module.exports. You don't need to modify this file. Note: this isn't 100% airtight, and some images might be broken.

<details><summary>Example Pokemon Object</summary>
```
{
    id: "001",
    name: "Bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
    type: [
      "Grass",
      "Poison"
    ],
    stats: {
      hp: "45",
      attack: "49",
      defense: "49",
      spattack: "65",
      spdefense: "65",
      speed: "45"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "3",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "7",
        name: "leech seed",
        gen: "V"
      }, {
        learnedat: "9",
        name: "vine whip",
        gen: "V"
      }, {
        learnedat: "13",
        name: "poison powder",
        gen: "V"
      }, {
        learnedat: "13",
        name: "sleep powder",
        gen: "V"
      }, {
        learnedat: "15",
        name: "take down",
        gen: "V"
      }, {
        learnedat: "19",
        name: "razor leaf",
        gen: "V"
      }, {
        learnedat: "21",
        name: "sweet scent",
        gen: "V"
      }, {
        learnedat: "25",
        name: "growth",
        gen: "V"
      }, {
        learnedat: "27",
        name: "double-edge",
        gen: "V"
      }, {
        learnedat: "31",
        name: "worry seed",
        gen: "V"
      }, {
        learnedat: "33",
        name: "synthesis",
        gen: "V"
      }, {
        learnedat: "37",
        name: "seed bomb",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm16",
        name: "light screen",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm20",
        name: "safeguard",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm22",
        name: "solarbeam",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm53",
        name: "energy ball",
        gen: "V"
      }, {
        learnedat: "tm70",
        name: "flash",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm86",
        name: "grass knot",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      egg: [{
        name: "skull bash",
        gen: "V"
      }, {
        name: "charm",
        gen: "V"
      }, {
        name: "petal dance",
        gen: "V"
      }, {
        name: "magical leaf",
        gen: "V"
      }, {
        name: "grasswhistle",
        gen: "V"
      }, {
        name: "curse",
        gen: "V"
      }, {
        name: "ingrain",
        gen: "V"
      }, {
        name: "nature power",
        gen: "V"
      }, {
        name: "amnesia",
        gen: "V"
      }, {
        name: "leaf storm",
        gen: "V"
      }, {
        name: "power whip",
        gen: "V"
      }, {
        name: "sludge",
        gen: "V"
      }, {
        name: "endure",
        gen: "V"
      }, {
        name: "giga drain",
        gen: "V"
      }],
      tutor: [{
        name: "grass pledge",
        gen: "V"
      }],
      gen34: [{
        name: "bullet seed",
        method: "Gen IV TM09"
      }, {
        name: "secret power",
        method: "Gen IV TM43"
      }, {
        name: "captivate",
        method: "Gen IV TM78"
      }, {
        name: "sleep talk",
        method: "Gen IV TM82"
      }, {
        name: "natural gift",
        method: "Gen IV TM83"
      }, {
        name: "fury cutter",
        method: "Move Tutor  PtHGSS"
      }, {
        name: "knock off",
        method: "Move Tutor  PtHGSS"
      }, {
        name: "snore",
        method: "Move Tutor  PtHGSS"
      }, {
        name: "mudslap",
        method: "Move Tutor  PtHGSS"
      }, {
        name: "string shot",
        method: "Move Tutor  HGSS"
      }, {
        name: "headbutt",
        method: "Move Tutor  HGSS"
      }, {
        name: "defense curl",
        method: "Move Tutor  Emerald"
      }, {
        name: "body slam",
        method: "Move Tutor  FRLG"
      }, {
        name: "mimic",
        method: "Move Tutor  FRLG"
      }]
    },
    damages: {
      normal: "1",
      fire: "2",
      water: "0.5",
      electric: "0.5",
      grass: "0.25",
      ice: "2",
      fight: "0.5",
      poison: "1",
      ground: "1",
      flying: "2",
      psychic: "2",
      bug: "1",
      rock: "1",
      ghost: "1",
      dragon: "1",
      dark: "1",
      steel: "1"
    },
    misc: {
      sex: {
        male: "87.5",
        female: "12.5"
      },
      abilities: {
        normal: [
          "Overgrow"
        ],
        hidden: [
          "Chlorophyll"
        ]
      },
      classification: "seed pokemon",
      height: "2’04”",
      weight: "15.2",
      capturerate: "45",
      eggsteps: "5120",
      expgrowth: "1059860",
      happiness: "70",
      evpoints: [
        "1 Sp. Attack Point(s)"
      ],
      fleeflag: "34",
      entreeforestlevel: "10"
    }
  }
```


</details>

- The views folder is empty. There are no rules of when to set these up, so if you'd like to pre-create views or build them as you create your routes, do your thing.

   - On the Pokemon's show page, display: name, img, type, and stats.

- Start simply, build the app piece by piece testing each piece along the way.

<details><summary>.. Stuck?</summary>
####SETUP
- "No module" error? Did you make sure you correctly installed and saved your dependencies in the current working directory? Double check `package.json` to see it is.

- Keep your workspace super organized and tidy. Focus on the current task _at hand_ and close _all_ tabs and files that don't pertain to this task.

- Constantly test your code. Don't wait until you've written a bunch of code to run it. WHAT are you trying to achieve, and HOW are you trying to achieve it? You should be console logging all the variables you're creating, and remember, all server-side console logs are outputted in terminal.

####ERRORS/DEBUGGING
- Use Morgan to log all requests coming into the server. Looking at it will also tell you the result of that request. Let's say I visit `localhost:3000/pokemon` on the browser and on terminal I see:

  - Example 1: `GET /pokemon 200`. This means the server received a GET request to the `/pokemon` resource, _found_ the GET request in our Pokemon controller, executed our code in the route handler function, returned a response with data and a status of 200 which means everything went fine -- deep inhale -- and the response was sent with success.

  - Example 2: `GET /pokemon 404`. This means the server received a GET request to the `/pokemon` resource, but couldn't find the resource, so it sends a response as a 404 error.

- Test your routes with Postman or cURL. They both allow you to test routes without the need of building views to visualize the data. Instead these tools talk to the server directly. Postman has a very user-friendly GUI, and cURL may have weird syntax, but cURL makes you look cool.

- "CANNOT FIND" means "based on the info/path you gave me, no such file exists". Check how you set your relative paths. Check for typos. Capitalization, extra spaces and extra characters can throw errors.

</details>

### Commits

- Let's get back into the good habit of committing our work at checkpoints in our work. After successfully coding a route, `git add`, and `git commit` with a message with which route you just completed. Wanna add more? Yea! The more, the merrier.

### Reach Goals
- On `index.hbs` display the total number of Pokemon. This number will change as you delete Pokemon.
- Make the app look nicer than just a plain html list. Use express.static('public') and integrate your css skills. Submit a screenshot of your design!
- Add a new and update route.

### Super reach goals
- Use your design skills and make your app responsive.
- Add a `/random` resource so when a user hits `localhost:3000/random`, they see a show page of a Pokemon in randomized order. Add a link to this random page on the index page.
  - super bonus: Create a button called "randomize". Clicking this button will randomize the order of Pokemon with each click.
- Add some fun jQuery animations when you click on a Pokemon. All client-side javascript files will live in the `public` directory.


## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
