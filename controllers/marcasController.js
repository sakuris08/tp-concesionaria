let database = require('../data/database') ;

module.exports = controller = {
    index:function(req,res){
        res.write("Estas son nuestras Marcas\n\n") ;
       // database.forEach(concesionaria=>{
         //   concesionaria.autos.forEach(auto=>{
          //  res.write(auto.marca + '\n')
            
           //  }) 
         //   });




let marcasTodas = []

database.forEach(sucursal => {
    sucursal.autos.forEach(auto =>{
        marcasTodas.push(auto.marca)
    })
})
    
let marcaSinRepetir = marcasTodas.filter((unico, repetido) => marcasTodas.indexOf(unico) === repetido)
marcaSinRepetir.forEach(marcas => {
    res.write('\n' + marcas + '\n')
})

         res.end()  
    

}
}
   