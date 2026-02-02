import java.util.Random;

public class baraja{
    
    //atributos
    private String[] cartas;
    private int posicion;
    //private int posicion_siguiente;

    //constante
    public static final int num_cartas=40;
    public static final String[] Palos={"espadas","copas","oros","bastos"};
    public static final int Limite_carta_palo=12;
    
    //constructor
    public baraja(String[] cartas){
        this.cartas=cartas;
        this.posicion=0;
    }
    //setters
    public void setCartas(String[] cartas){
        this.cartas=cartas;
    }
    public void setPosicion(int posicion){
        this.posicion=posicion;
    }
    //getters
    public String[] getCartas(){
        return cartas;
    }
    public int posicion(){
        return posicion;
    }
    
    //barajar: cambia de posición todas las cartas aleatoriamente
    public void barajar(){
        /*
        int[] nuevoOrden = new int[40];
        Random numAleatorio= new Random();
        boolean terminar=false;
        while (terminar==false) {
            
            numAleatorio.nextInt(40);
            
        }
        */
    }
    /*siguienteCarta: devuelve la siguiente carta que está en la baraja, cuando no haya más
    o se haya llegado al final, se indica al usuario que no hay más cartas. */
    public String siguienteCarta(){
        if (this.posicion==0){
            this.posicion++;
            return this.cartas[0];
        }
        else if(this.posicion>=40){
            return "No hay más cartas";
        }
        else{
            this.posicion++;
            return this.cartas[this.posicion];
        }
    }
    /*cartasDisponibles: indica el número de cartas que aún puede repartir */
    public int cartasDisponibles(){
        return num_cartas-posicion;
    }

}


    