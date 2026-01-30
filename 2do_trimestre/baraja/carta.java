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
    //INtegrar en la baraja (no recomendado)
    //Método para que se añadan nuevas cartas
    public String[] cartaNueva(){
        return ;
    }

    public static void main(String[]args) throws Exception{
        carta carta1=new carta(Limite_carta_palo, null);
    }
    
}
