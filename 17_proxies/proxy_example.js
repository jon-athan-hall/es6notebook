/**
 * Proxies can override an object's usual methods.
 */
const game = {
  name: 'Agricola',
  rating: 8
};

/**
 * Create a handler that consists of one or more traps. Each trap overrides
 * a particular method and does something custom instead.
 */
const gameHandler = {
  get(target, name) {
    console.log('Someone is asking for...', target, name);
    return 'Denied.';
  },
  set(target, name, value) {
    return target[name] = value + ' the Board Game';
  }
}

/**
 * Create a proxy for the object with two parameters. The first is the 
 * target object to proxy and the second parameter is the handler.
 */
const gameProxy = new Proxy(game, gameHandler);

gameProxy.name = 'The Castles of Burgundy';
