let database = require('../data/database') ;

module.exports = controller = {
    index:function(req,res){
        res.write("Bienvenidos , aca podran ver nuestras Sucursales\n\n") ;
        res.write('___ __ _ _ __ ___ ' + '\n' +' / __/ _` | '+ '__/ __|' +'\n'+ '| (_| (_| | |'  + '/' +'__ /' + '\n'+ ' /___/__,_|_||___/'+ '\n\n')

        
        database.forEach(concesionaria =>{
            res.write('*'+ concesionaria.sucursal + '\n\n')
            
        })
         res.end()   
      }
}