const fs = require('fs');

const usuarios = {};

usuarios.usuario1 = {}
usuarios.usuario1.nombre = 'Adrian';
usuarios.usuario1.apellido = 'Calo';
usuarios.usuario1.edad = 33
usuarios.usuario1.profesion = 'Policia'

usuarios.usuario2 = {}
usuarios.usuario2.nombre = 'Tomas';
usuarios.usuario2.apellido = 'Cardenas';
usuarios.usuario2.edad = 27
usuarios.usuario2.profesion = 'Comerciante'

usuarios.usuario3 = {}
usuarios.usuario3.nombre = 'Gaston';
usuarios.usuario3.apellido = 'Fauret';
usuarios.usuario3.edad = 36
usuarios.usuario3.profesion = 'Empleado'

usuarios.usuario4 = {}
usuarios.usuario4.nombre = 'Milagros';
usuarios.usuario4.apellido = 'Aguilar';
usuarios.usuario4.edad = 26
usuarios.usuario4.profesion = 'Empleada'

function toJson(usuarios) {
    const data = JSON.stringify(usuarios);
    fs.writeFileSync('./tipos.json', data)
    console.log(`Archivos Añadidos Exitosamente!`);
}

toJson(usuarios);



