# altaTienda
*altaTienda* es un ecommerce realizado en React para la Diplomatura en Programador Web Full Stack de la UTN.
El diseño está basado en un [template de Figma](https://www.figma.com/file/E7y4O2RBKOZ1eVyCcyA0FQ/Commerce-One-(Community)?type=design&node-id=402%3A10020&mode=design&t=aBvQ4K1TspJIR8C5-1).

Los paquetes de React que se utilizan en el proyecto son:
    * Axios para la conexión con FakeStoreApi
    * React Bootstrap Icons para los íconos
    * React Router DOM para manejar las rutas
    * React Masonry CSS para acomodar mejor los productos según la altura de cada caja
    * React Sweet Alert para generar modales que den cuenta de las acciones que realiza el usuario

La organización de los componentes fue dividida por páginas en la carpeta "screens" o en la carpeta "components" según la organización visual o funcional. Además se utilizó un componente __ContextProvider__ para

En **screens**:

   * __HomePage__ es la página de inicio, en donde se listan los productos. Allí se pueden mirar todos los productos, buscar escribiendo un término o verlos divididos por categorías.
   * __DetailPage__ es la página donde están los detalles de cada producto, desde allí también se puede definir cuántos productos se quiere comprar y agregarlos al carrito.
   * __Cart__ es la página que muestra los productos que se están por comprar, desde allí se pueden modificar las cantidades, eliminar del carrito los productos o confirmar la compra. El carrito se encuentra fijado en la pantalla para poder verlo todo el tiempo aún si hubiera scroll. En la versión mobile se encuentra sticky, por lo que se fija al bajar y se posiciona sobre el resto de los elementos. Esto permite realizar la compra sin tener que volver al principio.
   * __Contact__ es donde se puede mandar un mail por cualquier consulta.

En **components**:

Dentro de los componentes que agrupan visualmente
* __Header__ contiene y estructura el logo, el componente de búsqueda (__Search__) y el menús (__Menu__) con los links. Se encuentra con un position sticky para que al realizar scroll vertical se fije en la parte superior de la página. El botón para ir al carrito también está conectado al ContextProvider para mostrar cuantos productos hay en el carrito, si hay alguno.

* __Footer__ contiene un grupo de links para consultar más información de la tienda

* __ProductList__ muestra los productos obtenidos de la API
* __Search__ permite buscar dentro de los productos según el título de cada producto.
* __Filter__ permite seleccionar las categorías que se pueden usar para filtrar los productos
* __Counter__ se encarga de agregar o quitar productos del carrito. Es llamado tanto desde el componente __details__ como del carrito y permite, según en qué página se encuentre, modificar las cantidades, eliminar el producto, modificar su situación en el carrito o agregarlo.

Las variables utilizadas en el css fueron extraidas del Figma mencionado al principio. Se mantuvieron los nombres para facilitar cambios en el diseño.
