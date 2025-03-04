let words: string[] = [
    'gato', 'perro', 'elefante', 'jirafa', 'leon', 'tigre', 'ballena', 'coche', 'arbol', 'flor',
    'montana', 'rio', 'ciudad', 'ordenador', 'telefono', 'cielo', 'estrella', 'luna', 'sol', 'acantilado',
    'playa', 'viento', 'nube', 'mundo', 'puente', 'lago', 'valle', 'floristeria', 'piedra', 'agua',
    'rojo', 'azul', 'verde', 'amarillo', 'blanco', 'negro', 'morado', 'rosa', 'naranja', 'madera',
    'luz', 'oscuro', 'tierra', 'campo', 'zorro', 'ciervo', 'mono', 'delfin', 'cangrejo', 'dinosaurio',
    'cosmos', 'galaxia', 'universo', 'relampago', 'terremoto'
];


export function getRandomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);

    // Devolver la palabra aleatoria en mayúsculas
    return words[randomIndex].toUpperCase();
}
