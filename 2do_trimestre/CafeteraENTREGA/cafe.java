public class cafe {
    //Atributos
    private String nombre;
    private int gCafe;
    private int gLeche;
    private int gCacao;
    private int gAzucar;
    //constructor
    public cafe(String nombre, int gCafe, int gLeche, int gCacao, int gAzucar){
        this.nombre=nombre;
        this.gCafe=gCafe;
        this.gLeche=gLeche;
        this.gCacao=gCacao;
        this.gAzucar=gAzucar;
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
    public void setgAzucar(int gAzucar){
        this.gAzucar=gAzucar;
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
    public int getgAzucar(){
        return gAzucar;
    }

}
