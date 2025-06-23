import { Component } from '@angular/core';

@Component({
  selector: 'app-property-in-object',
  templateUrl: './property-in-object.html'
})
export class PropertyInObject {
  readonly pokemons = [
    { name: 'Pikachu', type: 'Electric', level: 25, abilities: [ {
      name: 'Thunderbolt',
      power: 90,
      accuracy: 100
    }, {
      name: 'Quick Attack',
      power: 40,
      accuracy: 100
    },
    {
      name: 'Thunder Wave',
      power: 0,
      accuracy: 100,
      statusEffect: {
        id: 1,
        name: 'Paralyze'
      }
    },
    ] },
    { name: 'Charmander', type: 'Fire', level: 16, abilities: [ {
      name: 'Flamethrower',
      power: 90,
      accuracy: 100
    }, {
      name: 'Scratch',
      power: 40,
      accuracy: 100
    },
    {
      name: 'Growl',
      power: 0,
      accuracy: 100,
      statusEffect: {
        id: 2,
        name: 'Lower Attack'
      }
    },
    ] },
    { name: 'Bulbasaur', type: 'Grass/Poison', level: 12, abilities: [ {
      name: 'Vine Whip',
      power: 45,
      accuracy: 100
    }, {
      name: 'Tackle',
      power: 40,
      accuracy: 100
    },
    {
      name: 'Leech Seed',
      power: 0,
      accuracy: 90,
      statusEffect: {
        id: 3,
        name: 'Drain HP'
      }
    },
    ] },
    { name: 'Squirtle', type: 'Water', level: 10,
      abilities: [ {
      name: 'Water Gun',
      power: 40,
      accuracy: 100
    }, {
      name: 'Tackle',
      power: 40,
      accuracy: 100
    }
    ] },
  ];
}
