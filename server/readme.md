Se utilizó la base de datos MongoDB a través del uso de express, dotenv, cors. También se utilizó mogoose para conectarse con Atlas y bcrypt para los usuarios (funcionalidad que no se llegó a implementar).

Existen dos rutas, la de sesiones ('/session) que está en desarrollo y '/api/products' que está en uso. En ella, los ENDPOINTS disponibles son:

GET : /api/products => devuelve todos los productos
GET : /api/categories => devuelve todas las categorías (al implementarse el front anterior, se vio necesario implementar esta funcionalidad)
GET : /api/products/ID (id) => devuelve todos los campos de un producto específico por ID.

POST : /api/products (body: product) => crea un nuevo producto

PUT : /api/products/edit/ID (body: {id, product}) => permite modificar uno o todos los campos de un producto existente

DELETE : /api/products/ID (id) => elimina el producto cuyo ID coincida



