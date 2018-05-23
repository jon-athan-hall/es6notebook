/**
 * Classes can be extended, in typical OOP fashion.
 */
class Player {
  constructor(name) {
    this.name = name;
    this.turnCount = 0;
  }

  takeTurn() {
    console.log(`${this.name} is starting their turn.`);
    return this.name;
  }

  passTurn() {
    this.turnCount += 1;
    return this.turnCount;
  }
}

/**
 * Create a more specific class that inherits the Player class,
 * but also does more. The this keyword does not exist until the
 * superclass is created in the constructor.
 */
class GameMaster extends Player {
  constructor(name, game) {
    super(name);
    this.game = game;
  }

  explainGame() {
    console.log(`Now this is how you play ${this.game}.`);
    return this.game;
  }
}

/**
 * Built-in classes can be extended too.
 */
class GameCollection extends Array {
  constructor(name, ...items) {
    super(...items); // Spread into the array.
    this.name = name;
  }

  add(game) {
    this.push(game);
  }

  topRated(limit = 10) {
    return this.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, limit);
  }
}

/**
 * Now here is the declaration of the new class.
 */
const myShelf = new GameCollection('Jonathan\'s Shelf',
  { name: 'The Castles of Burgundy', rating: 10 },
  { name: 'Dominion', rating: 9 },
  { name: 'Clank! In! Space!', rating: 9.6 },
  { name: 'Ticket to Ride', rating: 8 }
);

