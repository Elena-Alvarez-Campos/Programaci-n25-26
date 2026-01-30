import java.util.Random;

import javax.swing.JOptionPane;

public class contrasenha{
    //Atributos
    private int longitud;
    private String contrasenha;

    //constructores
    public contrasenha(){
        Random numAleatorio= new Random();
        this.contrasenha="";
        this.longitud=8;
        for(int i=0; i<longitud; i++){
            int tipo=numAleatorio.nextInt(7);
            if(tipo==1 || tipo==6){//minúsculas
                contrasenha += (char)(numAleatorio.nextInt(27)+97);
            }else if(tipo==2 || tipo==5){//mayúsculas
                contrasenha += (char)(numAleatorio.nextInt(27)+65);
            }else if(tipo==3 || tipo==4){//números
                contrasenha += numAleatorio.nextInt(10);
            }else{//símbolos
                tipo=numAleatorio.nextInt(4);
                switch (tipo) {
                    case 1://barra /
                        contrasenha+=(char)(47);
                        break;
                    case 2://guión bajo _
                        contrasenha+=(char)(95);
                        break;
                    case 3://Dólar $
                        contrasenha+=(char)(36);
                        break;
                    default://guión medio -
                        contrasenha+=(char)(45);
                        break;
                }
            }
        }
        //this.numeroDeCuenta=Math.abs(numAleatorio.nextLong());
    }
    public contrasenha(int longitud){
        Random numAleatorio= new Random();
        this.longitud=longitud;
        this.contrasenha="";
        for(int i=0; i<longitud; i++){
            int tipo=numAleatorio.nextInt(10);
            if(tipo==1 || tipo==6){//minúsculas
                contrasenha += (char)(numAleatorio.nextInt(27)+97);
            }else if(tipo==2 || tipo==5){//mayúsculas
                contrasenha += (char)(numAleatorio.nextInt(27)+65);
            }else if(tipo==3 || tipo==4 || tipo==7 || tipo==8 || tipo==9){//números
                contrasenha += numAleatorio.nextInt(10);
            }else{//símbolos
                tipo=numAleatorio.nextInt(4);
                switch (tipo) {
                    case 1://barra /
                        contrasenha+=(char)(47);
                        break;
                    case 2://guión bajo _
                        contrasenha+=(char)(95);
                        break;
                    case 3://Dólar $
                        contrasenha+=(char)(36);
                        break;
                    default://guión medio -
                        contrasenha+=(char)(45);
                        break;
                }
            }
        }
    }
    //Setters 
    //contraseña
    public void setContrasenha(String contrasenha){
        this.contrasenha=contrasenha;
    }
    //longitud
    public void setLongitud(int longitud){
        this.longitud=longitud;
    }
    //Getters
    //contraseña
    public String getContrasenha(){
        return contrasenha;
    }
    //longitud
    public int getLongitud(){
        return longitud;
    }
    @Override
    public String toString(){
        return "La contraseña de longitud "+longitud+" es "+contrasenha;
    }

    /**esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe
     * tener mas de 2 mayúsculas, mas de 2 minúsculas, mas de 5 números y al
     * menos dos de los caracteres especiales antes indicados. 
     * @return {boolean}
     */
    public boolean esFuerte(){
        //StringBuilder contrasenhaBuilder=new StringBuilder(this.contrasenha);
        int may=0;//mayúsculas
        int min=0;//minúsculas
        int esp=0;//especiales
        int num=0;//números
        int elemento=0;
        for(int i=0; i<contrasenha.length(); i++){
            /*contrasenha += (char)(numAleatorio.nextInt(123)+97);*/
            elemento=(int)(contrasenha.charAt(i));
            if(97<=elemento && elemento<123){
                min=min+1;
            }else if(65<=elemento && elemento<91){
                may=may+1;
            }else if(elemento==47 || elemento==95 || elemento==36 || elemento==45){
                esp=esp+1;
            }else{
                num=num+1;
            }
        }
        if(may>1 && min>1 && num>4 && esp>1){
            return true;
        }
        else{
            return false;
        }
    }
    //IMPORTANTE REVISAR EL MÉTODO ESFUERTE() PORQUE VAN MAL LOS NÚMEROS

    /*generarContrasenha():  genera la contraseña del objeto con la longitud que
    tenga. */

    /*modificarContrasenha(): para cambiar una contraseña que ya exista. Este
    método pedirá por teclado un String que contenga la nueva contraseña. */
    public String modificarContrasenha(){
        String NuevaContrasenha=JOptionPane.showInputDialog("Introduce una nueva contraseña");
        while(NuevaContrasenha.length()<11){
            NuevaContrasenha=JOptionPane.showInputDialog("Introduce una nueva contraseña con más de 6 chr");
        }
        this.contrasenha=NuevaContrasenha;
        this.longitud=NuevaContrasenha.length();
        return this.contrasenha;

    }
    //Crear clase ejecutable
    //TAmaño que se indica por teclado
    //BUcle crea objeto por cada posición del arry
    //Longitud contraseña antes del bucle
    //Array booleano almacena si contraseña esFuerte()
    //Mostrar contraseña y si no es fuerte usar bucle anteriror
    public String modificarContrasenhaAleatoria(){
        
        Random numAleatorio= new Random();
        this.contrasenha="";
        for(int i=0; i<this.longitud; i++){
            int tipo=numAleatorio.nextInt(10);
            if(tipo==1 || tipo==6){//minúsculas
                contrasenha += (char)(numAleatorio.nextInt(27)+97);
            }else if(tipo==2 || tipo==5){//mayúsculas
                contrasenha += (char)(numAleatorio.nextInt(27)+65);
            }else if(tipo==3 || tipo==4 || tipo==7 || tipo==8 || tipo==9){//números
                contrasenha += numAleatorio.nextInt(10);
            }else{//símbolos
                tipo=numAleatorio.nextInt(4);
                switch (tipo) {
                    case 1://barra /
                        contrasenha+=(char)(47);
                        break;
                    case 2://guión bajo _
                        contrasenha+=(char)(95);
                        break;
                    case 3://Dólar $
                        contrasenha+=(char)(36);
                        break;
                    default://guión medio -
                        contrasenha+=(char)(45);
                        break;
                }
            }
        }
        return this.contrasenha;
    }
       
}