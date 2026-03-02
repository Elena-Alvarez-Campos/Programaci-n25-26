import java.util.ArrayList;

import javax.swing.JOptionPane;

public class App{
    public static void main(String[]args) throws Exception{
        //cafés ejemplo
        cafe cafe1=new cafe("Solo",4,0,0,0,3);
        cafe cafe2=new cafe("Con Leche",4,8,0,0,4);
        cafe cafe3=new cafe("Café con canela", 5, 3, 0, 2,5);
        //crear un array en el que se van a meter los cafés
        ArrayList<cafe> listaCafes=new ArrayList<cafe>();
        //Añadir el café a la lista
        listaCafes.add(cafe1);
        //Determinar que la máquina e incorporar la lista de cafés por defecto
        maquina maquina1=new maquina(listaCafes);
        //Otra forma de añadir cafés a esta lista es añadiéndolo a la máquina después
        maquina1.cafes.add(cafe2);
        //NUEVO CAFÉ CON CANELA
        maquina1.cafes.add(cafe3);

        //Menú
        boolean programa=true;
        int opcion=0;
        int cafesHoy=0;
        int aguaActual=0;//Para comprobar que se hacen cafés
        int precioTotal=0;
        while(programa==true){
            if(cafesHoy>10){
                JOptionPane.showMessageDialog(null, "Ya no se pueden pedir más cafés");
            }
            else{}
            String menu=JOptionPane.showInputDialog("     Menu     \n"+
            "********************\n"+
            "1.Pedir un café\n"+
            "2.Rellenar máquina \n"+
            "3.Crear nuevo café\n"+
            "4.Salir\n"+
            "\n Selecciona una opción");
            try{//Seguir con el programa si el carácter que el ususario ha escrito es un número
                opcion=Integer.parseInt(menu);
                switch (opcion) {
                    case 1:
                        if(cafesHoy>=10){
                            JOptionPane.showMessageDialog(null, "Ya no se pueden pedir más cafés");
                        }
                        else{
                            aguaActual=maquina1.getMlAgua();
                            precioTotal+=maquina1.pedirCafe();
                            if(aguaActual!=maquina1.getMlAgua()){//Para que se haga un café se necesita agua
                                cafesHoy++;
                                //System.out.println(maquina1); //Imprime los ingredientes que hay en la máquina
                            }
                            
                        }
                        break;
                    case 2:
                        maquina1.rellenaMaquina();
                        //System.out.println(maquina1); //Ingredientes máqina
                        break;
                    case 3:
                        maquina1.cafes.add(maquina1.nuevoCafe());//se añade el café nuevo a la lista
                        //System.out.println(maquina1.cafes); //Imprime los cafés que hay en la máquina
                        break;
                    case 4:
                        programa=false;
                        break;
                    default:
                        JOptionPane.showMessageDialog(null, "Escoge una opción compatible");
                        break;
                }
              //Detectar otros elementos que no son números e imprimri un mensaje de error
            } catch (Exception e) {
               JOptionPane.showMessageDialog(null, "Escoge una opción compatible");
            }
            
            
        }
        JOptionPane.showMessageDialog(null, "Precio total: "+precioTotal+"€");
    }

}
