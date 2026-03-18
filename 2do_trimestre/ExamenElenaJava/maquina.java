import java.util.ArrayList;
import javax.swing.JOptionPane;

public class maquina {
    //Atributos
    private ArrayList<producto> productos;
    private double totalRecaudado;
    private int monedas10;
    private int monedas20;
    private int monedas50;
    private int monedas1;
    //Constructor
    public maquina(ArrayList<producto> productos, double totalRecaudado, int monedas10, int monedas20, int monedas50, int monedas1){
        this.productos=productos;
        this.totalRecaudado=totalRecaudado;
        this.monedas10=monedas10;
        this.monedas20=monedas20;
        this.monedas50=monedas50;
        this.monedas1=monedas1;
    }
    //Setters
    public void setProductos(ArrayList<producto> productos){
        this.productos=productos;
    }
    //Getters
    public ArrayList<producto> getProductos(){
        return productos;
    }
    //Métodos
    @Override
    public String toString(){
        return"Monesdas 1€: "+monedas1+" monedas 0.5: "+monedas50+" monedas 0.2: "+monedas20+" monedas 0.1: "+monedas10+" Dinero recaudado: "+totalRecaudado;
    }

    public void pedirBebida(){
        
        String listabebidas="     Menu     \n"+"********************\n";//Crea menú
        for(int i=1; i<=this.productos.size();i++){//Recorre todas las bebidas para implantarlas a la lista del menú
            listabebidas+=i+"."+this.productos.get(i-1)+"\n";
        }
        listabebidas+=this.productos.size()+1+"Salir";//Se añade el botón de salir
            boolean menu1=true;//El menú 1 va a ser true y SOLO cambia a false al salir
            while(menu1==true){//Se repite el bucle mientras el menú 1 sea true
                String texto=JOptionPane.showInputDialog(listabebidas);//se muestra la lista de bebidas
                //try{
                    int opcion=Integer.parseInt(texto)-1;//La opción del menú pasa a número entero
                    //Se le resta 1 para que cuadre con su posición en el array
                    if(opcion==this.productos.size()){
                        menu1=false;
                        System.out.println(menu1);
                    }
                    else if(opcion>=0 && opcion<this.productos.size()){//Si la opción es mayor o igual a 0 y menor que lo que mide el array:
                        if(this.productos.get(opcion).getCantidad()<=0){//Se mira si su cantidad es menor o igual a 0
                            //en caso de que sea así, se mostrará un mensdaje y se cerrará la ventana
                            JOptionPane.showMessageDialog(null, "No hay suficientes productos de este tipo");
                            menu1=false;
                        }
                        else{//Si no, la máquina si que tiene de esa bebida
                            //se se quita 1 cantidad al producto
                            this.productos.get(opcion).setCantidad(this.productos.get(opcion).getCantidad()-1);
                            //System.out.println(this.productos.get(opcion).getCantidad());//Comprobación
                            boolean menu2=true;//Se introduce el menú 2 que funcionará IGUAL que el menú 1
                            while (menu2==true) {
                                //try{
                                    String texto2=JOptionPane.showInputDialog("Importe total: "+this.productos.get(opcion).getPrecio()+"€");
                                    //Imprime el importe final
                                    int pagado=Integer.parseInt(texto2);
                                    //Se añade el total recaudado
                                    this.totalRecaudado+=this.productos.get(opcion).getPrecio();
                                    //Se calcula cuanto tiene que devolver
                                    double devolucion=pagado-(this.productos.get(opcion).getPrecio());
                                    
                                    if(devolucion>=0){//Si la devolución es igual a 0 o mayor
                                        JOptionPane.showMessageDialog(null, "Cantidad a devolver: "+ (pagado-this.productos.get(opcion).getPrecio()));
                                        //Monedas
                                        if(devolucion==0){
                                            menu1=false;
                                            menu2=false;  
                                        }
                                        else{
                                            //Se gasta primero las monedas de 1€, luego 0.5,0.2 y 0,1
                                            while(devolucion>=1 && this.monedas1>0){
                                                devolucion-=1;
                                                this.monedas1-=1;
                                            }
                                            while(devolucion>=0.5 && this.monedas50>0){
                                                devolucion-=0.5;
                                                this.monedas50-=1;
                                            }
                                            while(devolucion>=0.2 && this.monedas20>0){
                                                devolucion-=0.2;
                                                this.monedas20-=1;
                                            }
                                            while(devolucion>=0.5 && this.monedas10>0){
                                                devolucion-=0.1;
                                                this.monedas10-=1;
                                            }
                                            //se cierran los menús
                                            menu1=false;
                                            menu2=false;
                                        }
                                    }else{
                                        JOptionPane.showMessageDialog(null, "Cantidad no válida");
                                    }
                                //}catch(Exception e){
                                //    JOptionPane.showMessageDialog(null, "Cantidad no válida");
                                //}
                            }
                        }
                    }
                    else{
                        JOptionPane.showMessageDialog(null, "Opción inválida");
                    }
                //}catch(Exception e){
                //    JOptionPane.showMessageDialog(null, "Opción inválida");
                //}
            }
    }
}
