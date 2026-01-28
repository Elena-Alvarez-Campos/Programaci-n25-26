
public class baraja{
    
    //atributos
    private carta cartas[];
    //private int posicion_siguiente;

    //constante
    public static final int num_cartas=40;
    
    public baraja(){
        this.cartas=new carta[num_cartas];

    }
    @Override
    public String toString(){
        return "La baraja es "+cartas;
    }

    //Atributo
    //private String barajaCompleta;
    //Constructor
    /*
    public baraja(){
        this.barajaCompleta="";
        for(int x=0; x<4; x++){
            String palo="";
            switch (x) {
                case 0:
                    palo="espadas";
                    break;
                case 1:
                    palo="bastos";
                    break;
                case 2:
                    palo="oros";
                    break;
                default:
                    palo="copas";
                    break;
            }
            for(int i=1; i<=12; i++){
            if(i==8 || i==9){
                continue;
            }
            else{
                barajaCompleta += (i+palo);
            }
        }
        }
        
    }
    //Setter
    public void setBarajaCompleta(){
        this.barajaCompleta=barajaCompleta;
    }
    //Getter
    public String getBarajaCompleta(){
        return barajaCompleta;
    }

    


    */
}
    