const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{
   
   
    conexion.query('SELECT * FROM Productos' , (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    })
});

//RUTEO PARA CREAR NUEVOS PRODUCTOS
router.get('/create', (req, res) => {
    res.render('create');
});

//RUTEO PARA EDITAR PRODUCTOS
router.get('/edit/:ID', (req, res) => {
    const ID = req.params.ID;
    conexion.query('SELECT * FROM Productos WHERE ID = ?',[ID], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit.ejs', {Productos:results[0]});
        }

    })
})

//RUTEO PARA ELIMINAR PRODUCTOS
router.get('/delete/:ID', (req, res) => {
    const ID = req.params.ID;
    conexion.query('DELETE FROM Productos WHERE ID = ?', [ID], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
});

const crud = require('./controllers/crud');

const { Router } = require('express');

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;
