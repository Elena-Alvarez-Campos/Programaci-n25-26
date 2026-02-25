public class cafe {
    //Atributos
    private String nombre;
    private int gCafe;
    private int gLeche;
    private int gCacao;
    private int gCanela;
    private int precio;
    //constructor
    public cafe(String nombre, int gCafe, int gLeche, int gCacao, int gCanela, int precio){
        this.nombre=nombre;
        this.gCafe=gCafe;
        this.gLeche=gLeche;
        this.gCacao=gCacao;
        this.gCanela=gCanela;
        this.precio=precio;
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
    public void setgCanela(int gCanela){
        this.gCanela=gCanela;
    }
    public void setPrecio(int precio){
        this.precio=precio;
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
    public int getgCanela(){
        return gCanela;
    }
    public int getPrecio(){
        return precio;
    }
}
