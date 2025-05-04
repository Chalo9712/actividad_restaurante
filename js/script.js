// Buscar Restaurantes

const restaurantes = [
  {
    nombre: "Restaurante El Buen Sabor",
    descripcion:
      "Disfruta de la mejor comida tradicional en un ambiente familiar.",
    direccion: "Calle 123, Zona Norte, Ciudad.",
    imagen:
      "https://img.freepik.com/foto-gratis/plato-brasileno-sabroso-alto-angulo-naranja_23-2148875285.jpg?ga=GA1.1.47313963.1746150490&semt=ais_hybrid&w=740",
  },
  {
    nombre: "Sabor del Mar",
    descripcion: "Especialidad en mariscos frescos y platos a la parrilla.",
    direccion: "Avenida 45, Frente al mar, Ciudad.",
    imagen:
      "https://img.freepik.com/foto-gratis/desayuno-flotante-increible-villa-hotel-piscina-azul_343596-1029.jpg?ga=GA1.1.47313963.1746150490&semt=ais_hybrid&w=740",
  },
  {
    nombre: "La Casa de la Pizza",
    descripcion:
      "Las mejores pizzas artesanales en la ciudad, con una variedad única.",
    direccion: "Calle 56, Zona Sur, Ciudad.",
    imagen:
      "https://img.freepik.com/foto-gratis/deliciosa-pizza-interior_23-2151231348.jpg?ga=GA1.1.47313963.1746150490&semt=ais_hybrid&w=740",
  },
  {
    nombre: "Tacos la gran Esquina",
    descripcion: "Tacos frescos con los mejores ingredientes mexicanos.",
    direccion: "Calle 78, Zona Centro, Ciudad.",
    imagen:
      "https://img.freepik.com/fotos-premium/imagen-recortada-hombre-preparando-comida_1048944-20754252.jpg?ga=GA1.1.47313963.1746150490&semt=ais_hybrid&w=740",
  },
  {
    nombre: "La Parrillada Argentina",
    descripcion: "Carnes asadas al estilo argentino con un toque especial.",
    direccion: "Calle 12, Zona Norte, Ciudad.",
    imagen:
      "https://img.freepik.com/foto-gratis/filetes-carne-cocidos-llamas-parrilla_114579-1981.jpg?ga=GA1.1.47313963.1746150490&semt=ais_hybrid&w=740",
  },
  {
    nombre: "Mundo gourmet",
    descripcion: "Comida gourmet con una experiencia única de sabores.",
    direccion: "Calle 99, Zona Este, Ciudad.",
    imagen:
      "https://img.freepik.com/foto-gratis/pastel-pescado-coreano-sopa-verduras-mesa_1150-42978.jpg?ga=GA1.1.47313963.1746150490&semt=ais_hybrid&w=740",
  },
];

function buscar() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  const filtrados = restaurantes.filter((r) =>
    r.nombre.toLowerCase().includes(input)
  );

  if (filtrados.length === 0) {
    resultados.innerHTML =
      "<p class='col-span-3 text-center text-gray-600'>No se encontraron restaurantes.</p>";
    return;
  }

  filtrados.forEach((r) => {
    resultados.innerHTML += `
          <div class="bg-white rounded shadow-md overflow-hidden">
            <img src="${r.imagen}" alt="${r.nombre}" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="text-lg font-bold mb-2">${r.nombre}</h2>
              <p class="text-sm mb-2">${r.descripcion}</p>
              <p class="text-sm font-semibold"><strong>Dirección:</strong> ${r.direccion}</p>
            </div>
          </div>
        `;
  });
}

// Crear Nuevo Restaurante

document
  .getElementById("restaurantForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const direccion = document.getElementById("direccion").value;
    const imagen = document.getElementById("imagen").value;

    const nuevoRestaurante = {
      nombre,
      descripcion,
      direccion,
      imagen,
    };

    // Guardar en localStorage
    const restaurantes = JSON.parse(localStorage.getItem("restaurantes")) || [];
    restaurantes.push(nuevoRestaurante);
    localStorage.setItem("restaurantes", JSON.stringify(restaurantes));

    alert("Restaurante creado exitosamente");
    this.reset();
  });
