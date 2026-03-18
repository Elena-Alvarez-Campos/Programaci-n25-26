import java.util.ArrayList;

import javax.swing.JOptionPane;

public class App {
    public static void main(String[] args) {
        producto agua =new producto("Agua", 5, 1);
        producto cocaCola =new producto("Coca-cola", 5, 2);
        producto cocaColaZero =new producto("Coca-cola Zero", 5, 2);
        producto naranja =new producto("Zumo de naranja", 5, 1.5);
        producto limon =new producto("Zumo de limon", 5, 1.5);
        producto nestea =new producto("Nestea", 5, 2);
        producto aquarius =new producto("Aquarius", 5, 2);
        producto sprite =new producto("Sprite", 5, 1.5);

        ArrayList<producto> listaProductos=new ArrayList<producto>();
        listaProductos.add(agua);
        listaProductos.add(cocaCola);
        listaProductos.add(cocaColaZero);
        listaProductos.add(naranja);
        listaProductos.add(limon);
        listaProductos.add(nestea);
        listaProductos.add(aquarius);
        listaProductos.add(sprite);
        maquina maquina1 =new maquina(listaProductos, 0, 10, 10, 10, 10);
        
        boolean programa=true;
        
            
        try{
            while(programa==true){
                String texto=JOptionPane.showInputDialog("Menú***************\n"+
                "1.Pedir una bebida\n"+
                "2.Salir"
            );
            int opcion=Integer.parseInt(texto);
                switch (opcion) {
                    case 1:
                        maquina1.pedirBebida();
                        System.out.print(maquina1);
                    break;
                case 2:
                    programa=false;
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Elige una opción correcta");
                    break;
                }

            }
        }catch(Exception e){
            JOptionPane.showMessageDialog(null, "Opción incompatible");
        }
    }
    
}
