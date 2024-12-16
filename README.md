# E-commerce de Pan

Este proyecto es una tienda de comercio electrónico enfocada en la venta de diferentes tipos de pan, con la posibilidad de realizar suscripciones semanales para recibir entregas recurrentes. El objetivo principal es brindar una experiencia amigable, ágil y moderna para los usuarios.

## Características principales

- Exploración de productos: Los usuarios pueden navegar por una lista de panes disponibles.
- Carrito de compras: Los usuarios pueden seleccionar productos y agregarlos al carrito de compras.
- Suscripción semanal: Los usuarios pueden suscribirse para recibir pan de forma recurrente, con beneficios exclusivos.
- Simulación de pasarela de pago: Se simula el proceso de pago y se muestra un mensaje de confirmación de la compra.

---

## Tecnologías utilizadas

- Vue.js: Framework principal para la interfaz de usuario.
- Vue Router: Para la navegación entre las diferentes vistas de la aplicación.
- Bootstrap: Para el diseño y la estructura visual responsiva.
- JavaScript: Lógica de la aplicación.
- HTML5 y CSS3: Para la estructura y el diseño visual.
- Fetch API: Para la obtención de datos desde archivos JSON.

---

## Instalación y configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/oamperez/ecommerce-pan.git
   cd ecommerce-pan
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la aplicación:
   ```bash
   npm run serve
   ```

4. Acceder a la aplicación:
   Abre tu navegador y ve a [http://localhost:8080](http://localhost:8080)

---

## Estructura del proyecto

```
.
├── public/               # Archivos estáticos
│   ├── data/             # Archivos JSON con datos simulados de productos
├── src/
│   ├── assets/           # Imágenes, fuentes y otros recursos
│   ├── components/       # Componentes reutilizables de Vue
│   ├── router/           # Configuración de Vue Router
│   ├── views/            # Vistas de la aplicación
│   ├── App.vue           # Componente principal
│   └── main.js           # Punto de entrada de la aplicación
├── package.json          # Archivo de configuración de npm
└── README.md             # Documentación del proyecto
```

---

## Arquitectura

El proyecto está estructurado de la siguiente manera:

- Componente principal (`layouts/App.vue`): Contiene la estructura general y el router-view para mostrar vistas dinámicamente.
- Rutas (`router/index.js`): Configuración de rutas para las vistas principales (Inicio, Detalle del Producto, Carrito, Suscripción).
- Componentes:
  - ProductList.vue: Lista de productos disponibles.
- Vistas:
  - Home.vue: Página de inicio con la lista de productos.
  - ProductDetail.vue: Detalle de un producto.
  - Cart.vue: Vista del carrito de compras.
  - Checkout.vue: Para hacer efectivas las compras.
  - Subscription.vue: Vista de la suscripción semanal.

---

## Simulación de pasarela de pago

La aplicación incluye una simulación del proceso de pago que permite a los usuarios completar su compra. Tras realizar el pago, se muestra una notificación de confirmación.

---

## Consideraciones adicionales

- Adaptabilidad móvil: La aplicación está diseñada para ser compatible con dispositivos móviles y de escritorio.
- Interfaz simple y ágil: Se prioriza la experiencia de usuario para facilitar la navegación y el proceso de compra.
- Simulación de datos: Los productos se obtienen de un archivo `products.json`.

Repositorio de GitHub: [Enlace al repositorio](https://github.com/tu-usuario/ecommerce-pan)
