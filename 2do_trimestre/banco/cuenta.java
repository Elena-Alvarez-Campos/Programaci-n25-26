import java.util.Random;



//Clase cuenta
//Atributos
public class cuenta{
    
    Random numAleatorio= new Random();
    private String titular;
    private double cantidad;
    private long numeroDeCuenta;


public cuenta(String titular){
    this.titular=titular;
    this.cantidad=0;
    this.numeroDeCuenta=Math.abs(numAleatorio.nextLong());
}
public cuenta(String titular, double cantidad){
    this.titular=titular;
    this.cantidad=cantidad;
    this.numeroDeCuenta=Math.abs(numAleatorio.nextLong());
}
//Setters y getters
/**
 * setter de titular
 * @param {String} titular
 */
public void setTitular(String titular){
    this.titular=titular;
}
/**
 * Setter de cantidad
 * @param {double} cantidad
 */
public void setCantidad(double cantidad){
    this.cantidad=cantidad;
}
/**
 * Setter de cantidad
 * @param {long} numeroDeCuenta
 */
public void setNumeroDeCuenta(long numeroDeCuenta){
    this.numeroDeCuenta=numeroDeCuenta;
}
/**
 * Getter de titular
 * @return String
 */
public String getTitular(){
    return titular;
}
/**
 * Getter de cantidad
 * @return double
 */
public double getCantidad(){
    return cantidad;
}
/**
 * Getter de num
 * @return long
 */
public double getNumeroDeCuenta(){
    return numeroDeCuenta;
}

//Devolver estado del objeto
@Override
public String toString(){
    return "EL titular "+titular+" tiene una cantidad de "+cantidad+" euros en su cuenta y su numero de cuenta es "+numeroDeCuenta;
}
/**
 * método  ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad
 * introducida es negativa, no se hará nada.
 * @param {double} ingreso
 */

public void ingresar(double cantidad){
    if(cantidad>0){
        this.cantidad+=cantidad;
    }
}
    
public void retirar(double cantidad){
    if(this.cantidad-cantidad<0){
        this.cantidad=0;
    }else{
        this.cantidad-=cantidad;
    }
}
/*Se creará un método (RealizarTransferenciaEntreCuentas) para
permitir realizar transferencias de dinero de una cuenta a otra.
Para probar la correcta creación del método se realizará una transferencia
desde la cuenta_1 a la cuenta_2. Se mostrarán todos los datos de ambas
cuentas cuenta_1 y cuenta_2 para comprobar cómo han quedado. */
/**
 * método para realizar transferencias
 * @param {double} cantidad
 * @param {String} recibidor
 */
public static void RealizarTransferenciaEntreCuentas(double importe, cuenta cuenta_1, cuenta cuenta_2){
    cuenta_1.cantidad=cuenta_1.cantidad-importe;
    cuenta_2.cantidad=cuenta_2.cantidad+importe;
    
}


}