
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

        cuenta.RealizarTransferenciaEntreCuentas(50, cuenta_1, cuenta_2);

        System.out.println(cuenta_1);
        System.out.println(cuenta_2);

        boolean programa=true;
        int opcion=0;
        while(programa==true){

            String menu=JOptionPane.showInputDialog("   Menu   \n"+
                "****************\n"+
                "1. Ingresar \n"+
                "2.retirar \n"+
                "3.Transferencia \n"+
                "4.Salir \n"+
                "\n Selecciona una opcion");
                opcion=Integer.parseInt(menu);
                switch (opcion) {
                    case 1:
                        cuenta_1.ingresar(90);
                        cuenta_2.ingresar(30);
                        break;
                    case 2:
                        cuenta_1.retirar(30);
                        cuenta_2.retirar(30);
                        break;
                    case 3:
                        cuenta.RealizarTransferenciaEntreCuentas(50, cuenta_1, cuenta_2);
                        break;
                    case 4:
                        programa=false;
                        break;
                    default:
                        System.out.println("numero incorrecto");
                        break;
                }
        }
    }
}