const res = require('express/lib/response');
const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2Cafetina43736790',
    database: 'productos_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+ error);
        return
    }
        console.log('¡Conectado a la Base de Datos!');
    });


module.exports = conexion;