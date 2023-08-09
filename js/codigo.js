function calcularPrecio() {
    const opciones = document.getElementById("bebidas").getElementsByTagName("li");
    const seleccion = parseInt(document.getElementById("seleccion").value);
/* &  devuelve true si los dos operandos son true ; de lo contrario, devuelve false */
    if (seleccion >= 1 && seleccion <= opciones.length) {
        const bebidaSeleccionada = opciones[seleccion - 1].textContent;
        const cantidadBebidas = parseInt(document.getElementById("cantidad").value);

        var precio;

        switch (seleccion) {
            case 1:
                precio = 45;
                break;
            case 2:
                precio = 35;
                break;
            case 3:
                precio = 20;
                break;
            case 4:
                precio = 60;
                break;
            case 5:
                precio = 25;
                break;
            default:
                precio = 0;
        }

        const precioTotal = precio * cantidadBebidas;

        document.getElementById("ultimoprecio").textContent = "Eligio: " + bebidaSeleccionada + " y su total a pagar es de: " + precioTotal;
    } else {
        document.getElementById("ultimoprecio").textContent = "Selecciona un número válido (1-5).";
    }
}

var cantidad = document.getElementsByName('imagen').length;
document.getElementById('img').innerHTML = "Cantidad de imagenes: " + cantidad;

const opcionesCheckboxes = document.getElementsByName("tema");
opcionesCheckboxes.forEach(function (opcionCheckbox) {
    opcionCheckbox.addEventListener("change", function () {
        let checkboxesSeleccionados = 0;

        opcionesCheckboxes.forEach(function (opcionCheckbox) {
            if (opcionCheckbox.checked) {
                checkboxesSeleccionados++;
            }
        });
        document.getElementById('Ntema').innerHTML = "Temas seleccionados: " + checkboxesSeleccionados;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById("boton");
    const selectedThemeElement = document.getElementById("nombreTema");
    const themeCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    showButton.addEventListener("click", function () {
        const selectedThemes = [];

        themeCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedThemes.push(checkbox.value);
            }
        });

        if (selectedThemes.length > 0) {
            selectedThemeElement.textContent = selectedThemes.join(", ");
        } else {
            selectedThemeElement.textContent = "Tema seleccionado: Ninguno";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const showButton = document.getElementById("btn");
    const notSelectedThemesElement = document.getElementById("notemas");
    const themeCheckboxes = document.querySelectorAll('.Temas');

    showButton.addEventListener("click", function() {
      const notSelectedThemes = [];

      themeCheckboxes.forEach(function(checkbox) {
        if (!checkbox.checked) {
          notSelectedThemes.push(checkbox.value);
        }
      });

      if (notSelectedThemes.length > 0) {
        notSelectedThemesElement.textContent = "Temas no seleccionados: " + notSelectedThemes.join(", ");
      } else {
        notSelectedThemesElement.textContent = "Todos los temas están seleccionados.";
      }
    });
  });