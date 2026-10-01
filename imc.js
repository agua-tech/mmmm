let  vectorbj =[];

let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let imc = document.getElementById("imc");

function calcular_imc(){
     let pesoNumero = Number(peso.value);
     let alturaNumero = Number(altura.value);

     if (!Number.isFinite(pesoNumero) || pesoNumero <= 0) {
         Swal.fire({
             icon: "error",
             title: "Revisa el peso",
             text: "Ingresa un peso mayor que 0 kg."
         });
         return;
     }

     if (!Number.isFinite(alturaNumero) || alturaNumero <= 0) {
         Swal.fire({
             icon: "error",
             title: "Revisa la altura",
             text: "Ingresa una altura mayor que 0 metros."
         });
         return;
     }

     if (alturaNumero < 0.5 || alturaNumero > 2.8) {
         Swal.fire({
             icon: "warning",
             title: "Revisa las unidades",
             text: "Ingresa la altura en metros entre 0.5 y 2.5. Por ejemplo: 1.70, no 170."
         });
         return;
     }

     let resultado = pesoNumero / (alturaNumero * alturaNumero);
     let clasificacion;

     if (resultado < 18.5) {
         clasificacion = "Bajo peso";
     } else if (resultado < 25) {
         clasificacion = "Peso normal";
     } else if (resultado < 30) {
         clasificacion = "Sobrepeso";
     } else {
         clasificacion = "Obesidad";
     }

    //  imc.textContent = `Tu IMC es: ${resultado.toFixed(2)} (${clasificacion})`;
      
      let registro = {
    peso: pesoNumero,
    altura: alturaNumero,
    imc: resultado,
    clasificacion: clasificacion
};
vectorbj.push(registro);

let tabla = document.getElementById("tablaIMC");
tabla.innerHTML += `<tr>
    <td>${registro.peso}</td>
    <td>${registro.altura}</td>
    <td>${registro.imc.toFixed(2)}</td>
    <td>${registro.clasificacion}</td>
</tr>`;

    return resultado;
}