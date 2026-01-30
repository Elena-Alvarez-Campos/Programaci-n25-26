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
    //Integrar en la baraja (no recomendado)
    //Método para que se añadan nuevas cartas
    public String cartaNueva(){
        String paloActual="";
        int carta_actual=0;
        String[] baraja = new String[40];
        for(int x=0; x<4; x++){
            paloActual=Palos[x];
            for(int y=0; y<Limite_carta_palo; y++){
                if(y==8||y==9){
                    continue;
                }
                baraja[i+y]=(y+1)+paloActual;
            }

        }
        return baraja[11];
        
    }

    public static void main(String[]args) throws Exception{
        carta carta1=new carta(2, "oros");
        System.out.println(carta1.cartaNueva());
    }
    
}
