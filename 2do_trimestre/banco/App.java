
import javax.swing.JOptionPane;
public class App {
    public static void main(String[]args) throws Exception{
        //crea cuenta
        String Texto=JOptionPane.showInputDialog("¿Cuentos años tienes?");
        System.out.println(Texto);
        int edad=Integer.parseInt(Texto);
        System.out.println(edad);

        cuenta cuenta_1=new cuenta("pepe");
        cuenta cuenta_2=new cuenta("Pepa", 500);

        cuenta_1.ingresar(200);
        cuenta_1.retirar(20);
        System.out.println(cuenta_1);
        cuenta_2.ingresar(300);
        cuenta_2.retirar(100);
        System.out.println(cuenta_2);

        cuenta.RealizarTransferenciaEntreCuentas(50, cuenta_1, cuenta_2);;

        System.out.println(cuenta_1);
        System.out.println(cuenta_2);
    }
}