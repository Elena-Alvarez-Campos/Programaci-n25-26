import javax.swing.JOptionPane;

public class App{
    public static void main(String[]args) throws Exception{

        boolean programa=true;
        int opcion=0;
        while(programa==true){
            String menu=JOptionPane.showInputDialog("     Menu     \n"+
            "********************\n"+
            "1.Pedir un café\n"+
            "2.Rellenar máquina\n"+
            "3.Crear nuevo café\n"+
            "4.Salir\n"+
            "\n Selecciona una opción");
            opcion=Integer.parseInt(menu);
            switch (opcion) {
                case 1:
                    
                    break;
                case 2:
                    
                    break;
                case 3:
                    
                    break;
                case 4:
                    programa=false;
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Escoge una opción compatible");
                    break;
            }
            
        }
    }

}
