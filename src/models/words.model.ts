export class Words{
     id:number;
     en:string;
     es:string;
}


export class Data{

    constructor(){

            console.log('constructor data')
                       
            /*{'id':1, 'en':'a', 'es':'un', 'es2':'una'},
            {'id':2, 'en':'ability', 'es':'habilidad'},
            {'id':3, 'en':'able', 'es':'poder'},
            {'id':4, 'en':'about', 'es':'sobre'},
            {'id':5, 'en':'above', 'es':'encima'},
            {'id':6, 'en':'accept', 'es':'aceptar'},
            {'id':7, 'en':'according', 'es':'conforme'},
            {'id':8, 'en':'account', 'es':'cuenta'},
            {'id':9, 'en':'across', 'es':'a tracez de'},
            {'id':11, 'en':'act', 'es':'acto'},
            {'id':12, 'en':'action', 'es':'accion'},
            {'id':13, 'en':'activity', 'es':'actividad'},
            {'id':14, 'en':'actually', 'es':'actualmente'},
            {'id':15, 'en':'add', 'es':'agregar', 'es2': 'añadir'},
            {'id':16, 'en':'address', 'es':'direccion'},
            {'id':17, 'en':'administration', 'es':'administracion'},
            {'id':18, 'en':'admit', 'es':'admitir'},
            {'id':19, 'en':'adult', 'es':'adulto'},
            {'id':20, 'en':'affect', 'es':'afectar'}*/
            
        
    }

    leerArchivo(){

        var arregloObj = [];
        var archivoTXT = new XMLHttpRequest();
        archivoTXT.open("GET",'../assets/lista.txt',false)
        archivoTXT.send(null);        
        var txt = archivoTXT.response

        let res = txt.split('\n');

        res.forEach(element => {
            let row = element.substring(0, element.length - 1);
            let dataRow= row.split('\t');

            let variosSigEng = dataRow[1].split('/');

            let posibilidadesEng = []
            variosSigEng.forEach(element =>{

                posibilidadesEng.push(element);
                
            });
            
            
            let variosSig = dataRow[2].split('/');
            
            let posibilidadesEsp = []
            variosSig.forEach(element =>{

                posibilidadesEsp.push(element);
                
            });

            arregloObj.push({'id': dataRow[0],'en': posibilidadesEng, 'es': posibilidadesEsp})

        });

        console.log(arregloObj)
        
        return arregloObj

    }



}
