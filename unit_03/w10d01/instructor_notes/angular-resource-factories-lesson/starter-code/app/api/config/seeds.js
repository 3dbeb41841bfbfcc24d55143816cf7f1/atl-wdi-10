var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost:27017/may-the-force', function() {
  // Load Mongoose models 
  seeder.loadModels(['./models/Character.js']);
  seeder.loadModels(['./models/Episode.js']);
  // Clear specified collections 
  seeder.clearModels(['Character', 'Episode'], function() {
    // Callback to populate DB once collections have been cleared 
    seeder.populateModels(data);
  });
});

// Data array containing seed data - documents organized by Model 
var data = [
  { 
    'model': 'Character',
    'documents': [
      {
        'name': 'Anakin Skywalker',
        'lightsaber': 'Blue'
      },
      {
        'name': 'Luke Skywalker',
        'lightsaber': 'Blue'
      },
      {
        'name': 'Lowbacca',
        'lightsaber': 'Bronze'
      },
      {
        'name': 'Qui-Gon Jinn',
        'lightsaber': 'Green'
      },
      {
        'name': 'Yoda',
        'lightsaber': 'Green'
      },
      {
        'name': 'Yoshi Raph-Elan',
        'lightsaber': 'Orange'
      },
      {
        'name': 'Mace Windu',
        'lightsaber': 'Purple'
      },
      {
        'name': 'Count Dooku',
        'lightsaber': 'Red'
      },
      {
        'name': 'Darth Maul',
        'lightsaber': 'Red'
      },
      {
        'name': 'Darth Vader',
        'lightsaber': 'Red'
      },
      {
        'name': 'Sa Cuis',
        'lightsaber': 'White'
      }
    ]
  },
  {
    'model': 'Episode',
    'documents': [
      {
        'name': 'Star Wars',
        'release_date': 'May 25, 1977',
        'director': 'George Lucas',
        'studio': '20th Century Fox',
      },
      {
        'name': 'The Empire Strikes Back',
        'release_date': 'May 21, 1980',
        'director': 'Irvin Kershner',
        'studio': '20th Century Fox',
      },
      {
        'name': 'Return of the Jedi',
        'release_date': 'May 25, 1983',
        'director': 'Richard Marquand',
        'studio': '20th Century Fox',
      },
      {
        'name': 'Star Wars Episode I: The Phantom Menace',
        'release_date': 'May 19, 1999',
        'director': 'George Lucas',
        'studio': '20th Century Fox',
      },
      {
        'name': 'Star Wars Episode II: Attack of the Clones',
        'release_date': 'May 16, 2002',
        'director': 'George Lucas',
        'studio': '20th Century Fox',
      },
      {
        'name': 'Star Wars Episode III: Revenge of the Sith',
        'release_date': 'May 19, 2005',
        'director': 'George Lucas',
        'studio': '20th Century Fox',
      },
      {
        'name': 'Star Wars: The Clone Wars',
        'release_date': 'August 15, 2008',
        'director': 'Dave Filoni',
        'studio': 'Warner Bros.',
      },
      {
        'name': 'Star Wars: The Force Awakens',
        'release_date': 'December 18, 2015',
        'director': 'J. J. Abrams',
        'studio': 'Walt Disney Pictures',
      },
      {
        'name': 'Star Wars Episode VIII',
        'release_date': 'May 26, 2017',
        'director': 'Rian Johnson',
        'studio': 'Walt Disney Pictures',
      },
    ]
  }
];  
