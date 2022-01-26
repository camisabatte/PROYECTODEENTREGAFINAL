const conexion = require('../database/db');

//GUARDAR NUEVO PRODUCTO
exports.save = (req, res)=> {
    const Producto = req.body.Producto;
    const Precio = req.body.Precio;
    conexion.query('INSERT INTO Productos SET ?',{Producto:Producto, Precio:Precio}, (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    }); 
};

//EDITAR UN PRODUCTO
exports.update = (req, res) => {
    const ID = req.body.ID;
    const Producto = req.body.Producto;
    const Precio = req.body.Precio;
    conexion.query('UPDATE Productos SET ? WHERE ID = ?', [{Producto:Producto, Precio:Precio}, ID], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
});
};
