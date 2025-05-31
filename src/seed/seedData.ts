
// Importamos la función de connexión a la bbdd
import dbPromise from '../config/db';

// Función para consultas a la bbdd
const init = async () => {
    // Connexión a la bbdd (la primera vez se crea el fichero database.sqlite)
    const db = await dbPromise;

    // Inserts usuarios
    await db.run(`INSERT INTO users (name, email, type) VALUES (?, ?, ?)`, ['Admin User', 'admin@example.com', 'admin']);
    await db.run(`INSERT INTO users (name, email, type) VALUES (?, ?, ?)`, ['Regular User', 'user@example.com', 'user']);
    await db.run(`INSERT INTO users (name, email, type) VALUES (?, ?, ?)`, ['Guest User', 'guest@example.com', 'guest']);


    // Inserts categorías
    await db.run(
        `INSERT INTO categories (name, description, image) VALUES (?, ?, ?)`,
        ['Electrónica', 'Tecnología y dispositivos', 'electronica.jpg']
    );

    await db.run(
        `INSERT INTO categories (name, description, image) VALUES (?, ?, ?)`,
        ['Ropa', 'Ropa para todas las edades', 'ropa.jpg']
    );

    await db.run(
        `INSERT INTO categories (name, description, image) VALUES (?, ?, ?)`,
        ['Hogar', 'Artículos para el hogar', 'hogar.jpg']
    );

    await db.run(
        `INSERT INTO categories (name, description, image) VALUES (?, ?, ?)`,
        ['Deporte', 'Equipamiento deportivo', 'deporte.jpg']
    );

    await db.run(
        `INSERT INTO categories (name, description, image) VALUES (?, ?, ?)`,
        ['Libros', 'Libros y material educativo', 'libros.jpg']
    );


    // Inserts productos

    // Electrónica (cat_id = 1)
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Smartphone', 299.99, 'Teléfono inteligente de última generación', 'smartphone.jpg', 1]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Tablet', 199.99, 'Pantalla de 10 pulgadas', 'tablet.jpg', 1]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Portátil', 799.99, 'Ligero y potente', 'portatil.jpg', 1]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Auriculares', 49.99, 'Cancelación de ruido', 'auriculares.jpg', 1]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Smartwatch', 129.99, 'Reloj inteligente', 'smartwatch.jpg', 1]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Cámara', 249.99, 'Alta resolución', 'camara.jpg', 1]
    );

    // Ropa (cat_id = 2)
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Camiseta', 19.99, 'Algodón 100%', 'camiseta.jpg', 2]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Pantalones', 39.99, 'Jeans clásicos', 'pantalones.jpg', 2]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Chaqueta', 59.99, 'Para invierno', 'chaqueta.jpg', 2]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Vestido', 49.99, 'Diseño elegante', 'vestido.jpg', 2]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Gorra', 14.99, 'Estilo urbano', 'gorra.jpg', 2]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Calcetines', 9.99, 'Pack de 5', 'calcetines.jpg', 2]
    );

    // Hogar (cat_id = 3)
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Cafetera', 89.99, 'Automática', 'cafetera.jpg', 3]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Aspiradora', 129.99, 'Sin cable', 'aspiradora.jpg', 3]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Silla', 45.00, 'Madera maciza', 'silla.jpg', 3]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Mesa', 120.00, 'Diseño moderno', 'mesa.jpg', 3]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Lámpara', 35.00, 'Luz cálida', 'lampara.jpg', 3]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Cortinas', 29.99, 'Tela gruesa', 'cortinas.jpg', 3]
    );

    // Deporte (cat_id = 4)
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Bicicleta', 299.99, 'Montaña', 'bicicleta.jpg', 4]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Balón', 19.99, 'Fútbol profesional', 'balon.jpg', 4]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Zapatillas', 69.99, 'Running', 'zapatillas.jpg', 4]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Pesas', 39.99, '10 kg cada una', 'pesas.jpg', 4]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Esterilla', 24.99, 'Yoga antideslizante', 'esterilla.jpg', 4]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Raqueta', 59.99, 'Tenis profesional', 'raqueta.jpg', 4]
    );

    // Libros (cat_id = 5)
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Novela', 14.99, 'Ficción contemporánea', 'novela.jpg', 5]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Manual de cocina', 29.99, 'Recetas gourmet', 'cocina.jpg', 5]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Enciclopedia', 89.99, 'Volumen completo', 'enciclopedia.jpg', 5]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Libro infantil', 9.99, 'Ilustrado y educativo', 'infantil.jpg', 5]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Libro de arte', 49.99, 'Grandes obras', 'arte.jpg', 5]
    );
    await db.run(
        `INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)`,
        ['Cuaderno', 4.99, 'Tapa dura', 'cuaderno.jpg', 5]
    );



};

init();