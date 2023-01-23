import { valorCarta, pedirCarta, crearCartaHtml}         from './';
import {puntosHTML, divCartasComputadora} from '/src/blackjack/index';

/**
 * turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
*/
export const turnoComputadora = (puntosMinimos, deck) => {
    
    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!deck) throw new Error('El deck de cartas es necesario');
    
    let puntosComputadora = 0;
    
    do {
      const carta = pedirCarta(deck);
      puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHTML[1].innerText = puntosComputadora;
  
      const imgCarta = crearCartaHtml(carta);
      divCartasComputadora.append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
  
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
  
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert('Nadie gana :(');
      } else if (puntosMinimos > 21) {
        alert('Computadora gana')
      } else if (puntosComputadora > 21) {
        alert('Jugador Gana');
      } else {
        alert('Computadora Gana')
      }
    }, 100);
  }