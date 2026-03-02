/**
 * Clase bolígrafo
*/
public class boligrafo {
    //atributos
    private String marca;
    private String color;
    private String modelo;
    private double tinta;
    private String punta;
    private String vida;
    private String mecanismo;
    private String material;

/**
 * constructor
 * @param {String} marca
 * @param {String} color
 * @param {String} vida
 * @param {String} mecanismo
 * 
 */    
public boligrafo(String marca,String color,String vida,String mecanismo){
    this.marca=marca;
    this.color=color;
    this.modelo=null;
    this.tinta=100;
    this.punta=null;
    this.vida=vida;
    this.mecanismo=mecanismo;
    this.material=null;

}
/**
 * getters y setters
 */
/**
 * setter de modelo
 * @param {String} modelo
 */
public void setModelo(String modelo){
this.modelo=modelo;
}
/**
 * setter de marca
 * @param {String} marca
 */
public void setMarca(String marca){
this.marca=marca;
}

/**
 * setter de color
 * @param {String} color
 */
public void setColor(String color){
this.color=color;
}

/**
 * setter de tinta
 * @param {double} tinta
 */
public void setTinta(double tinta){
this.tinta=tinta;
}

/**
 * setter de punta
 * @param {String} punta
 */
public void setPunta(String punta){
this.punta=punta;
}

/**
 * setter de vida
 * @param {String} vida
 */
public void setVida(String vida){
this.vida=vida;
}

/**
 * setter de mecanismo
 * @param {String} mecanismo
 */
public void setMecanismo(String mecanismo){
this.mecanismo=mecanismo;
}

/**
 * setter de material
 * @param {String} material
 */
public void setMaterial(String material){
this.material=material;
}

/**
 * getter de tinta 
 * @return double
 */
public double getTinta(){
    return tinta;
}

/**
 * getter de modelo 
 * @return String
 */
public String getModelo(){
    return modelo;
}

/**
 * getter de color 
 * @return String
 */
public String getColor(){
    return color;
}

/**
 * getter de marca 
 * @return String
 */
public String getMarca(){
    return marca;
}

/**
 * getter de punta 
 * @return punta
 */
public String getPunta(){
    return punta;
}
/**
 * getter de vida 
 * @return vida
 */
public String getVida(){
    return vida;
}
/**
 * getter de mecanismo 
 * @return mecanismo
 */
public String getMecanismo(){
    return mecanismo;
}
/**
 * getter de material 
 * @return material
 */
public String getMaterial(){
    return material;
}

/**
 * método normal. gasto de tinta
 * @param {double} cantidad
 */
public void gastaTinta(double cantidad){
    this.tinta=this.tinta-cantidad;
}
/**
 * método normal. compruebe si tiene tinta
 */
public boolean tieneTinta(){
    if(this.tinta>0){
        return true;
    }else{
        return false;
    }
}
/**
 * método que recarga la tinta si el boli es recargable y sin tinta
 * @param {double} recarga
 */
public void recargaTinta(double recarga){
    if(this.tinta<=0 && this.vida=="recargable"){
        this.tinta=this.tinta+recarga;
    }
}
/**
 * método para escribir una carta y restar tinta por caracter
 *@param {String} carta
 */

public void escribir(String carta){
   carta=carta.replace(" ", "");
   int caracteres=carta.length();
   this.tinta=this.tinta-Math.floor(caracteres/10);
}

/**
 * método para un mecanismo de apertura
 */
public String mecanismoApertura(){
    String descripcion="";
    if(this.mecanismo=="tapa"){
        descripcion="Quita la tapa";
    }else if(this.mecanismo=="pulsador"){
        descripcion="Pulsa el boton";
    }else{
        descripcion="Gira la parte inferior del boligrafo";
    }
    return descripcion;
}
}