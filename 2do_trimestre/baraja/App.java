import javax.swing.JOptionPane;

public class App {
    public static void main(String[]args) throws Exception{
        carta carta1=new carta();
        carta1.cartaNueva();
        baraja baraja1=new baraja(carta1.cartaNueva());

        boolean programa=true;
        int opcion=0;
        while(programa==true){
            String menu=JOptionPane.showInputDialog("     Menu     \n"+
                "********************\n"+
                "1.Barajar (no disponible)\n"+
                "2.Siguiente carta\n"+
                "3.Cartas disponibles\n"+
                "4.Dar cartas(no disponible)\n"+
                "5.Cartas que salieron(no disponible)\n"+
                "6.Cartas que no salieron(no disponible)\n"+
                "7.Salir\n"+
                "\n Selecciona una opcion");
                opcion=Integer.parseInt(menu);
                switch (opcion) {
                    case 1:
                        programa=false;
                        
                        break;
                
                    case 2:
                        System.out.println(baraja1.siguienteCarta());
                        break;
                    case 3:
                        System.out.println(baraja1.cartasDisponibles());
                        break;
                    case 4:
                        String texto=JOptionPane.showInputDialog("¿Cuantas cartas quieres dar?");
                        int cartasDar=Integer.parseInt(texto);
                        baraja1.darCartas(cartasDar);
                        break;
                    case 5:
                        programa=false;
                        
                        break;
                    case 6:
                        programa=false;
                        
                        break;
                    case 7:
                        programa=false;
                        break;
                    default:
                        System.out.println("Escribe un número de la lista");
                        break;
                }
        }

    }
}
