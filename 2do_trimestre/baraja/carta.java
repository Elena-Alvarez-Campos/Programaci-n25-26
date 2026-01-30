
public class carta {
    //atributo
    private int numero;
    private String palo;

    //constante
    public static final String[] Palos={"espadas","copas","oros","bastos"};
    public static final int Limite_carta_palo=12;
    
    //constructor
    public carta(int numero, String palo){
        this.numero=numero;
        this.palo=palo;
    }
    

}
