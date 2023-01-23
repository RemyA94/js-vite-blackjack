import _ from 'underscore';
import {crearDeck, valorCarta, pedirCarta, turnoComputadora, crearCartaHtml} from './usecases'
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let   deck       = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador   = 0,
  puntosComputadora = 0;

// Referencias del HTML
export const btnPedir             = document.querySelector('#btnPedir');
export const btnDetener           = document.querySelector('#btnDetener');
export const btnNuevo             = document.querySelector('#btnNuevo');
export const divCartasJugador     = document.querySelector('#jugador-cartas');
export const divCartasComputadora = document.querySelector('#computadora-cartas');
export const puntosHTML           = document.querySelectorAll('small');

deck = crearDeck(tipos, especiales);




// Eventos
btnPedir.addEventListener('click', () => {

  const carta = pedirCarta(deck);

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  const imgCarta = crearCartaHtml(carta);
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck);

  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck);
  }

});


btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador, deck);
});

btnNuevo.addEventListener('click', () => {

  console.clear();
  deck = [];
  deck = crearDeck(tipos, especiales);

  puntosJugador = 0;
  puntosComputadora = 0;

  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';

  btnPedir.disabled = false;
  btnDetener.disabled = false;

});
