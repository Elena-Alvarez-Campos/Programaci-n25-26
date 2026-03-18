public class producto {
    //Atributos
    private String nombre;
    private int cantidad;
    private double precio;
    //Constructor
    public producto(String nombre,int cantidad, double precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    //setters
    public void setNombre(String nombre){
        this.nombre=nombre;
    }
    public void setCantidad(int cantidad){
        this.cantidad=cantidad;
    }
    public void setPrecio(double precio){
        this.precio=precio;
    }
    //getters
    public String getNombre(){
        return nombre;
    }
    public int getCantidad(){
        return cantidad;
    }
    public double getPrecio(){
        return precio;
    }
    @Override
    public String toString(){
        return nombre;
    }
    
}
