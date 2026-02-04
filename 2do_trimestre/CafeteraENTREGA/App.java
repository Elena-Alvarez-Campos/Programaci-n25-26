import java.util.ArrayList;

import javax.swing.JOptionPane;

public class App{
    public static void main(String[]args) throws Exception{
        cafe cafe1=new cafe("Solo",4,0,0);
        cafe cafe2=new cafe("Con Leche",4,8,0);
        ArrayList<cafe> listaCafes=new ArrayList<cafe>();
        listaCafes.add(cafe1);
        maquina maquina1=new maquina(listaCafes);
        maquina1.cafes.add(cafe2);
        System.out.println(maquina1.getCafes());
        //Menú
        
        boolean programa=true;
        int opcion=0;
        while(programa==true){
            String menu=JOptionPane.showInputDialog("     Menu     \n"+
            "********************\n"+
            "1.Pedir un café\n"+
            "2.Rellenar máquina \n"+
            "3.Crear nuevo café\n"+
            "4.Salir\n"+
            "\n Selecciona una opción");
            opcion=Integer.parseInt(menu);
            switch (opcion) {
                case 1:
                    System.out.println(maquina1.pedirCafe());
                    //programa=false;
                    break;
                case 2:
                    maquina1.rellenaMaquina();
                    System.out.println(maquina1);
                    break;
                case 3:
                    maquina1.cafes.add(maquina1.nuevoCafe());
                    System.out.println(maquina1.cafes);
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
