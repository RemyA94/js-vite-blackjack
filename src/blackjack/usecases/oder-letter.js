/**
 * Obtener el valor de la carta 
 * @param {Array<string>} carta 
 * @returns {Number} retorna el valor de la carta
 */

// pedirCarta();
export const valorCarta = (carta) => {

    const valor = String(carta).substring(0, carta.length - 1);
  
    return (isNaN(valor)) ?
      (valor === 'A') ? 11 : 10
      : valor * 1;
  }