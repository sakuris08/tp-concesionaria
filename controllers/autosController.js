let database = require('../data/database') ;

module.exports = controller = {
    index:function(req,res){
        res.write("Estos son los autos de nuestra concesionaria \n\n") ;
        res.write('     _____     ' + '\n'+ ' ___/__|__|___  '+'\n'+'|      |      `|'+ '\n' + '`(o)------(o)``` ' + '\n'+ '````````````````' + '\n')
        

        database.forEach(concesionaria=>{
         res.write('\n\n') 
         res.write('_  ' + concesionaria.sucursal + '\n')
         res.write('\n\n')
         concesionaria.autos.forEach(auto  =>{
             res.write(auto.marca + ' - ' + auto.modelo + '\n')
                    
            })
            res.write('\n')
        })
    res.end()
  
},
}