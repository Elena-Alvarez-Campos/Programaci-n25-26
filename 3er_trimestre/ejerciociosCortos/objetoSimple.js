//readline
const readline=require('node:readline/promises')
const {stdin:input, stdout:output}=require('node:process')
const {error}=require('node:console');
const rl=readline.createInterface({input,output});

class ObjetoSimple {
    constructor(num,txt) {
        
        this.num=num;
        this.txt=txt;
        this.canitidadObjetos=[]
    }
    iniciar(numero) {
        while (this.canitidadObjetos[numero]!=undefined) {
            numero=Math.floor(Math.random()*9)
        }
        this.canitidadObjetos[numero]=new ObjetoSimple(numero,'nuevo')
    }
    ordenar(orden){
        let grupo=[]
        for(let cadaobjeto of this.canitidadObjetos){
            if(cadaobjeto==undefined){
                continue
            }else{
                grupo.push(cadaobjeto)
            }
        }
        if(orden==false){
            let grupoReverso=[]
            for (let i = grupo.length-1; i>=0; i--) {
                grupoReverso.push(grupo[i])
                
            }
            console.log(grupoReverso)
        }else{
            console.log(grupo)
        }
    }
    elementoCentral(){
        //if(this.canitidadObjetos%2==0){
            this.canitidadObjetos=[]
        //}
    }
}
let objeto= new ObjetoSimple()
async function menuSimple() {
    let menu=true
    while (menu==true) {
        let respuesta=await rl.question('Menú simple*******************\n'+
            '1.Crear objetos\n'+
            '2.Ordenar\n'+
            '3.Eliminar objeto central\n'
        )
        try {
            if (isNaN(respuesta)) {
                throw new Error("Valor incompatible");
                
            }
            let opcion=parseInt(respuesta)
            switch (opcion) {
                case 1:
                    let num=Math.floor(Math.random()*50)
                    console.log(num)
                    objeto.iniciar(num)
                    console.log('Creado')
                    break;
                case 2:
                    try {
                        let respuesta=await rl.question('1.Ascendente\n2.Descendente')
                        if (isNaN(respuesta)) {
                            throw new Error("Valor incorrecto\nVolviendo al menú sencillo");
                        }
                        opcion=parseInt(respuesta)
                        opcion==1 ? objeto.ordenar(true) : objeto.ordenar(false)
                    } catch (error) {
                        console.error(error.message)
                    }
                    break;
                case 3:
                    objeto.elementoCentral()
                    break;
                case 4:
                    menu=false
                    break;
                default:
                    throw new Error("Valor incompatible");
                    break;
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    rl.close()
}
menuSimple()