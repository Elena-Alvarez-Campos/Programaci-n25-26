import java.util.Random;

public class contrasenha{
    //Atributos
    private double longitud;
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
    public contrasenha(double longitud){
        Random numAleatorio= new Random();
        this.longitud=longitud;
        this.contrasenha="";
        for(int i=0; i<longitud; i++){
            int tipo=numAleatorio.nextInt(9);
            if(tipo==1 || tipo==6){//minúsculas
                contrasenha += (char)(numAleatorio.nextInt(27)+97);
            }else if(tipo==2 || tipo==5){//mayúsculas
                contrasenha += (char)(numAleatorio.nextInt(27)+65);
            }else if(tipo==3 || tipo==4 || tipo==7 || tipo==8){//números
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
    public void setLongitud(double longitud){
        this.longitud=longitud;
    }
    //Getters
    //contraseña
    public String getContrasenha(){
        return contrasenha;
    }
    //longitud
    public double getLongitud(){
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
        double may=0;//mayúsculas
        double min=0;//minúsculas
        double esp=0;//especiales
        double num=0;//números
        double elemento=0;
        for(int i=0; i<contrasenha.length(); i++){
            /*contrasenha += (char)(numAleatorio.nextInt(123)+97);*/
            elemento=(int)(contrasenha.charAt(i));
        
            if(97<=elemento && elemento<123){
                min++;
            }else if(65<=elemento && elemento<91){
                may++;
            }else if(elemento<=48 && elemento<57){
                num++;
            }else{
                esp++;
            }
        }
        if(may>=2 && min>=2 && num>=5 && esp>0){
            return true;
        }
        else{
            return false;
        }
    }

    /*generarContrasenha():  genera la contraseña del objeto con la longitud que
    tenga. */

    /*modificarContrasenha(): para cambiar una contraseña que ya exista. Este
    método pedirá por teclado un String que contenga la nueva contraseña. */

    /*Método get para contraseña y longitud. */

    /*Método set para longitud */
}