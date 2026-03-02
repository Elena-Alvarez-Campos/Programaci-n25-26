import javax.swing.JOptionPane;
public class App {

    public static void main(String[]args) throws Exception{
        /*
        contrasenha contrasenha_1=new contrasenha();
        contrasenha contrasenha_2=new contrasenha(20);
        
        System.out.println(contrasenha_1.esFuerte());
        System.out.println(contrasenha_2.esFuerte());

        System.out.println(contrasenha_1.modificarContrasenha());
        System.out.println(contrasenha_1.getContrasenha());
        System.out.println(contrasenha_1.esFuerte());*/
        //Crear clase ejecutable
        //TAmaño que se indica por teclado
        //BUcle crea objeto por cada posición del arry
        //Longitud contraseña antes del bucle
        //Array booleano almacena si contraseña esFuerte()
        //Mostrar contraseña y si no es fuerte usar bucle anteriror
        

        String longitudPideTeclado=JOptionPane.showInputDialog("Intoduce la longitud de la contraseña");
        while(Integer.parseInt(longitudPideTeclado)<11){
            longitudPideTeclado=JOptionPane.showInputDialog("Tiene que ser mayor de 11");
        }
        contrasenha contrasenha_3=new contrasenha(Integer.parseInt(longitudPideTeclado));
        System.out.println(contrasenha_3.getLongitud());
        while (contrasenha_3.esFuerte()==false) {
            contrasenha_3.generarContrasenha();
            //System.out.println(contrasenha_3.esFuerte());
        }
        System.out.println(contrasenha_3.getContrasenha());

        
    
    }
}