function convertidorCelsius() {
    let c;
     c = prompt("Ingrese la temperatura en grados Celsius:");
     if(isNaN(c)){
        convertidorCelsius()
        return;
     }

    const f = (c * 1.8) + 32;
    const k = parseFloat(c)+ 273.15;
    document.getElementById('resultadoFahrenheit').innerHTML = `${c}°C equivale a  ${f}°F`;
    document.getElementById('resultadoKelvin').innerHTML = `${c}°C equivale a ${k}K`;
  }
  window.onload = convertidorCelsius;