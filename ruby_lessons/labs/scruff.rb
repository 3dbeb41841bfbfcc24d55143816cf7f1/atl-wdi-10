# Objectives
# 1) Create a method that prints the value for the key "species"
# 2) Create a method that will print the name and rating values in the bear_friend hash
# 3) print the slogan defined in 'scruff'.  If it's not defined, then say "guess there's no slogan here!!"
# 4) Method that puts the key, value pair if the value is "Scruff McGruff"

require 'pry'

@scruff = {
  name: 'Scruff McGruff',
  address: 'Chicago, IL 60652',
  slogan: 'Help take a bite out of crime!',
  species: 'Anthropomorphic animated dog',
  birth_year: 1980,
  communication_mediums: [
    'television',
    'newspaper',
    'billboards',
    'radio'
  ],
  bear_friend: {
    name: 'Smokey the Bear',
    rating: 10
  },
  owner: 'Jack Keil'
}

