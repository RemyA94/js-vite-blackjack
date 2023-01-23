import _ from 'underscore';
/**
 * 
 * @param {Array<string>} tiposDeCartas ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */

//? Esta función crea un nuevo deck.
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error('Tipos de cartas es obligatorio como un nuevo arreglo de string');
    
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('Tipos de cartas especiales es obligatorio como un nuevo arreglo de string');


  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
}
