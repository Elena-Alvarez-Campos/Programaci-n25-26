public class cafe {
    //Atributos
    private String nombre;
    private int gCafe;
    private int gLeche;
    private int gCacao;
    //constructor
    public cafe(String nombre, int gCafe, int gLeche, int gCacao){
        this.nombre=nombre;
        this.gCafe=gCafe;
        this.gLeche=gLeche;
        this.gCacao=gCacao;
    }
    
    @Override
    public String toString(){
        return "EL nombre es "+nombre;
    }


}
