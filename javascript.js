// ============================================================
// PRODUCTOS — Edita esta lista con tus productos reales
// Para agregar foto: escribe la ruta en "foto", ej: "foto.jpg"
// ============================================================

// Jabon
const productos = [
    { categoria: "Cuidado para la ropa", nombre: "Jabon para ropa de color", foto: "JabonBB.png" },
    { categoria: "Limpieza General",   nombre: "Jabon Liquido de cuaba",    foto: "AA.png" }, 
    { categoria: "Cuidado para la cocina",   nombre: "Jabon de fregar",  foto: "Verde.png" },
    { categoria:"Cuidado para la ropa", nombre: "Jabon para ropa fina o de color", foto: "JabonAzul.png" },

// Desinfección
    { categoria: "Desinfección",  nombre: "Desinfectante Floral", foto: "Floral.png" },
    { categoria: "Desinfección",    nombre: "Desinfectante Brisa marina", foto: "BrisaM.png" },
    { categoria: "Desinfección",    nombre: "Desinfectante Aroma Bebe", foto: "BEBE.png" },
    { categoria: "Desinfección",   nombre: "Desinfectante Lavanda",  foto: "Lavanda.png" },

    { categoria: "Cuidado Personal",   nombre: "Linea Capilar Profesional Coco y Ajo + Células Madre",  foto: "LineaCocoAjo.png" },
    { categoria: "Cuidado Personal",   nombre: " Linea Capilar Suri Natural: Cola de Caballo y Aguacate",  foto: "LineaAguacate.png" },
    { categoria: "Cuidado Personal",   nombre: "Shampoo de coco",  foto: "Beige.png" },
    { categoria: "Cuidado Personal",   nombre: "Acondicionador de coco",  foto: "Conditioner.png" },


    { categoria: "Desinfección",  nombre: "Alcohol isopropílico",  foto: "D.png" },
    { categoria: "Cuidado para la cocina",   nombre: "Desgrasante",foto: "C.png" },
    { categoria: "Desinfección",      nombre: "Blanqueador",    foto: "i.png" },
    { categoria: "Desinfección",      nombre: "Cloro",foto: "S.png" },

    { categoria: "Cuidado para la ropa",  nombre: "Suavizante Aroma Primavera",  foto: "B.png" },
    { categoria: "Limpieza para vehiculos",   nombre: "Brillantador de llantas", foto: "G.png" },
    { categoria: "Cuidado para la cocina", nombre: "Jabon de fregar en pasta", foto: "P.jpeg" },
    { categoria: "Limpieza para vehiculos",       nombre: "Car wash Shampoo",   foto: "F.png" },
    
      
    { categoria: "Limpieza General",  nombre: "Limpia Cristales",           foto: "LimpiaCristalesCrema.png" },
    { categoria: "Cuidado Personal",       nombre: "Balsamo Dinamita",    foto: "Balsamo.png" },
    { categoria: "Cuidado Personal",   nombre: "Mentol Ice Cold",  foto: "Ice.png" },
    { categoria: "Cuidado Personal",       nombre: "Friccion Mentol",   foto: "Ment.png" },

    { categoria: "Perfumería y Cosmética",   nombre: "Agua de Florida",  foto: "Florida.png" },
    { categoria: "Cuidado Personal",       nombre: "Shampoo Profesional",   foto: "ShampooProfecional.jpeg" },
    { categoria: "Cuidado Personal",   nombre: "Jabon Intimo",  foto: "JabonInt.png" },
    { categoria: "Cuidado Personal",       nombre: "Shampoo de Aguacate",   foto: "ShampooAguacate.jpeg" },

    { categoria: "Cuidado Personal",   nombre: "Tratamiento CHOCOLATE y MACADAMIA",  foto: "TratamientoCHOCOLATE_yMACADAMIA.jpeg" },
    { categoria: "Cuidado Personal",   nombre: "Tratamiento CELULAS MADRE de ARGAN",  foto: "TratamientoCELULAS_MADREdeARGAN.jpeg" },
    { categoria: "Cuidado Personal",       nombre: "Tratamiento Capilar Canela",   foto: "tratamientoCanela.jpeg" },
    { categoria: "Cuidado Personal",   nombre: "Tratamiento Cola de Caballo y Aguacate",  foto: "TratamientoColadeCaballo_yAguacate.jpeg" },

    { categoria: "Cuidado Personal",   nombre: "ALCOHOLADO",  foto: "Alcoholado.jpeg" },
    { categoria: "Cuidado Personal",   nombre: "Jalea",  foto: "Jalea.jpeg" },
    { categoria: "Ambientación",   nombre: "Ambientador",  foto: "Ambientador.jpeg" },
];

const POR_PAGINA = 4;
let paginaActual = 0;
const totalPaginas = Math.ceil(productos.length / POR_PAGINA);

// Icono SVG para el placeholder
const icono = `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.5 3C8.12 3 7 4.12 7 5.5V6H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12
             a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v-.5C17 4.12 15.88 3 14.5 3h-5z"/>
</svg>`;

// Función para renderizar la página actual
function renderizarPagina() {
    const inicio = paginaActual * POR_PAGINA;
    const slice = productos.slice(inicio, inicio + POR_PAGINA);
    const catalog = document.getElementById('catalog');

    catalog.innerHTML = slice.map(p => `
        <div class="card">
            ${p.foto

                ? `<img class="card-img" src="${p.foto}" alt="${p.nombre}" onclick="abrirLightbox('${p.foto}', '${p.nombre}')"/>`
                : `<div class="card-img-placeholder">${icono}<span>Foto del producto</span></div>`
            }
            <div class="card-body">
                <p class="card-category">${p.categoria}</p>
                <p class="card-name">${p.nombre}</p>
            </div>
        </div>
    `).join('');

    // Actualizar estado de botones
    document.getElementById('btnPrev').disabled = paginaActual === 0;
    document.getElementById('btnNext').disabled = paginaActual === totalPaginas - 1;
    
    // Actualizar información de página
    document.getElementById('pageInfo').textContent = `Página ${paginaActual + 1} de ${totalPaginas}`;

    // Actualizar dots de paginación
    document.getElementById('dots').innerHTML = Array.from({ length: totalPaginas }, (_, i) =>
        `<div class="dot ${i === paginaActual ? 'active' : ''}"></div>`
    ).join('');
}

// Función para cambiar de página
function cambiarPagina(dir) {
    paginaActual += dir;
    renderizarPagina();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ── BUSCADOR ── Nueva función para buscar productos por nombre o categoría
function buscarProducto() {
  const texto = document.getElementById('searchInput').value.toLowerCase().trim();
  const btnClear = document.getElementById('btnClear');
  const searchResults = document.getElementById('searchResults');

  btnClear.style.display = texto ? 'block' : 'none';

  if (texto === '') {
    paginaActual = 0;
    renderizarPagina();
    searchResults.textContent = '';
    mostrarPaginacion(true);
    return;
  }

  const encontrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto) ||
    p.categoria.toLowerCase().includes(texto)
  );

  mostrarPaginacion(false);
  searchResults.textContent = `${encontrados.length} resultado(s) para "${texto}"`;

  const catalog = document.getElementById('catalog');

  if (encontrados.length === 0) {
    catalog.innerHTML = `
      <div class="no-results">
        <p>🔍</p>
        <p>No se encontró ningún producto.</p>
      </div>`;
    return;
  }

  catalog.innerHTML = encontrados.map(p => `
    <div class="card">
      ${p.foto
        ? `<img class="card-img" src="${p.foto}" alt="${p.nombre}"/>`
        : `<div class="card-img-placeholder">${icono}<span>Foto del producto</span></div>`}
      <div class="card-body">
        <p class="card-category">${p.categoria}</p>
        <p class="card-name">${p.nombre}</p>
      </div>
    </div>
  `).join('');
}

function limpiarBusqueda() {
  document.getElementById('searchInput').value = '';
  buscarProducto();
}

function mostrarPaginacion(visible) {
  document.querySelector('.pagination').style.display = visible ? 'flex' : 'none';
}

// ── FIN BUSCADOR ──

// ── LIGHTBOX ──
function abrirLightbox(foto, nombre) {
  document.getElementById('lightbox-img').src = foto;
  document.getElementById('lightbox-nombre').textContent = nombre;
  document.getElementById('lightbox').classList.add('activo');
  document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
  document.getElementById('lightbox').classList.remove('activo');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') cerrarLightbox();
});
// ── FIN LIGHTBOX ──

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Catálogo Josny Industrial cargado correctamente");
    
    // Asignar eventos a los botones
    document.getElementById('btnPrev').addEventListener('click', function() {
        cambiarPagina(-1);
    });
    
    document.getElementById('btnNext').addEventListener('click', function() {
        cambiarPagina(1);
    });
    
    // Renderizar primera página
    renderizarPagina();
});