let database = require('../data/database') ;

module.exports = controller = {
    index:function(req,res){
        res.write("SUCURSALES DE NUESTRA CONCESIONARIA \n\n") ;
        database.forEach(concesionaria=>{
            res.write(concesionaria.sucursal + '\n')
            res.write(concesionaria.direccion + '\n')
            res.write(concesionaria.telefono + '\n\n')
            
        });
         res.end()   
      },
      sucursal:function(req,res){
          let sucId = req.params.id
          database.forEach(concesionaria=>{
              if(concesionaria.sucursal.toLowerCase() == sucId.toLowerCase()){
                res.write(concesionaria.sucursal + '\n')
                res.write(concesionaria.direccion + '\n')
                res.write(concesionaria.telefono + '\n\n')
                res.write('AUTOS DISPONIBLES EN LA SUCURSAL\n\n')
                concesionaria.autos.forEach(auto=>{
                    res.write(auto.marca + '\n')
                    res.write(auto.modelo + '\n')
                    res.write(auto.anio + '\n\n')
                })
                 
                  res.end('Cantidad de autos disponibles: ' +
                  concesionaria.autos.length)
              }
          })
          res.end('No tenemos sucusales ahi')
      }
      }