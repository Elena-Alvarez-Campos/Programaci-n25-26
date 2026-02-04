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
        return nombre;
    }
    //Setters
    public void setNombre(String nombre){
        this.nombre=nombre;
    }
    public void setgCafe(int gCafe){
        this.gCafe=gCafe;
    }
    public void setgLeche(int gLeche){
        this.gLeche=gLeche;
    }
    public void setgCacao(int gCacao){
        this.gCacao=gCacao;
    }
    //Getters

    public String getNombre(){
        return nombre;
    }
    public int getgCafe(){
        return gCafe;
    }
    public int getgLeche(){
        return gLeche;
    }
    public int getgCacao(){
        return gCacao;
    }

}
