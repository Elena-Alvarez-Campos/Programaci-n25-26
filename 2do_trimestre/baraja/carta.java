import java.util.Random;
import javax.swing.JOptionPane;
public class carta {
    //atributo
    private int numero;
    private String palo;

    //constante
    public static final String[] Palos={"espadas","copas","oros","bastos"};
    public static final int Limite_carta_palo=12;
    
    //constructor
    public carta(){
        this.numero=0;
        this.palo="";
    }
    //seter
    public void setPalo(String palo){
        this.palo=palo;
    }
    public void setNumero(int numero){
        this.numero=numero;
    }
    //getter
    public String getPalo(){
        return palo;
    }
    public int getNumero(){
        return numero;
    }
    //Integrar en la baraja (no recomendado)
    //Método para que se añadan nuevas cartas
    public String[] cartaNueva(){
        String[] baraja = new String[40];
        int contadorPalos=0;
        int contadorNum=0;
        int numCarta=1;
        for(int i=0; i<40; i++){
            baraja[i]=Palos[contadorPalos];
            contadorPalos++;
            if(contadorPalos>=4){
                contadorPalos=0;
            }
        }
        for(int i=0; i<40; i++){
            baraja[i]=numCarta+baraja[i];
            contadorNum++;
            if(contadorNum>=4 && numCarta!=7){
                numCarta++;
                contadorNum=0;
            }
            if(contadorNum>=4 && numCarta==7){
                numCarta+=3;
                contadorNum=0;
            }
            
        }
        return baraja;
        
    }
    //barajar: cambia de posición todas las cartas aleatoriamente
    public void barajar(){
        int[] nuevoOrden = new int[40];
        Random numAleatorio= new Random();

        


    }
}
