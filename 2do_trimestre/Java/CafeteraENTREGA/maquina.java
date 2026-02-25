import java.util.ArrayList;

import javax.swing.JOptionPane;

public class maquina {
    //Atributos
    private String numeroSerie;
    public ArrayList<cafe> cafes;
    private int vasos;
    private int gCafe;
    private int gLeche;
    private int gCacao;
    private int mlAgua;
    //Constructor
    public maquina(ArrayList<cafe> cafes){
        this.numeroSerie="5816A";
        this.cafes=cafes;
        this.vasos=0;
        this.gCafe=0;
        this.gLeche=0;
        this.gCacao=0;
        this.mlAgua=0;
    }
    //Setters
    public void setCafes(ArrayList<cafe> cafes){
        this.cafes=cafes;
    }
    public void setNumSerie(String numeroSerie){
        this.numeroSerie=numeroSerie;
    }
    //getters
    public ArrayList<cafe> getCafes(){
        return cafes;
    }
    public String getNumSerie(){
        return numeroSerie;
    }
    @Override//Se usa para comprobar que la máquina está recargada correctamente
    public String toString(){
        return"Vasos:"+vasos+" Café:"+gCafe+ " Leche:"+gLeche+" Cacao:"+gCacao+" Agua:"+mlAgua;
    }
    //1.Pedir café
    //Mostrar cafés lista (seleccionar 1)
    //Comprobar hay cantidad ingredientes para cafes(ml agua=suma gramos todo)
    //Tener mínimo 1 vaso
    //Restar unidades a la máquina
    
    public String pedirCafe(){
        String listaCafes="     Menu     \n"+"********************\n";
        //añadir al menú la lista de cafés
        for(int i=1; i<=this.cafes.size();i++){
            listaCafes+=i+"."+this.cafes.get(i-1)+"\n";
        }
        //añadir la salida
        listaCafes+=this.cafes.size()+1+".Salir";
        boolean programa=true;
        while(programa==true){
            String menu=JOptionPane.showInputDialog(listaCafes);
            try{
                //El número de la elección es +1 que la posición del array
                int opcion=Integer.parseInt(menu)-1;
                if(opcion==this.cafes.size()){
                    programa=false;//Salida
                }
                else if(opcion>this.cafes.size()||opcion<0){//si no es un número de la lista
                    JOptionPane.showMessageDialog(null, "No es una opción compatible");
                }
                else{//Si es un número de la lista
                    this.cafes.get(opcion);
                    programa=false;
                    //System.out.println(this.cafes.get(opcion).getNombre()); //Muestra el tipo de café
                    //comprueba vasos
                    if(this.vasos<=0){
                        JOptionPane.showMessageDialog(null, "No hay vasos");
                    }
                    //comprueba café
                    else if(this.gCafe<this.cafes.get(opcion).getgCafe()){
                        JOptionPane.showMessageDialog(null, "No suficientes gramos de café");
                    }
                    //comprueba leche
                    else if(this.gLeche<this.cafes.get(opcion).getgLeche()){
                        JOptionPane.showMessageDialog(null, "No suficientes gramos de leche en polvo");
                    }
                    //comprueba cacao
                    else if(this.gCacao<this.cafes.get(opcion).getgCacao()){
                        JOptionPane.showMessageDialog(null, "No suficientes gramos de cacao");
                    }
                    //comprueba agua
                    else if(this.mlAgua<this.cafes.get(opcion).getgCafe()+this.cafes.get(opcion).getgLeche()+this.cafes.get(opcion).getgCacao()){
                        JOptionPane.showMessageDialog(null, "No hay suficiente agua en la máquina");
                    }
                    //máquina tiene los ingredientes necesarios
                    else{
                        //restar ingredientes gastados
                        this.gCafe-=this.cafes.get(opcion).getgCafe();
                        this.gLeche-=this.cafes.get(opcion).getgLeche();
                        this.gCacao-=this.cafes.get(opcion).getgCacao();
                        this.mlAgua-=this.cafes.get(opcion).getgCafe()+this.cafes.get(opcion).getgLeche()+this.cafes.get(opcion).getgCacao();
                        this.vasos-=1;
                        JOptionPane.showMessageDialog(null, "Café servido");
                    }
                }
            }catch(Exception e){
                JOptionPane.showMessageDialog(null, "No es una opción compatible");
            }
        }
        
        return this.toString();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////// 
    //2.Rellenar máqina
    //Preguntar que rellenar
    //Cuantos g/ml se rellenarán
    //NO pasar de 1kg/1l
    public void rellenaMaquina(){
        int opcion=0;
        int limite=1000;//constante
        boolean programa=true;
        while(programa==true){
        String menu=JOptionPane.showInputDialog("     ¿Que quieres llenar?     \n"+
            "********************\n"+
            "1.Vasos\n"+
            "2.Café\n"+
            "3.Leche\n"+
            "4.Cacao\n"+
            "5.Agua\n"+
            "6.Salir\n"+
            "\n Selecciona una opción");
            try{
            opcion=Integer.parseInt(menu);
            
            boolean fin=true;
            int recarga=0;
            int ingrediente=0;
            switch (opcion) {//determinar que ingrediente es la opción
                case 1:
                    ingrediente=this.vasos;
                    break;
                case 2:
                    ingrediente=this.gCafe;
                    break;
                case 3:
                    ingrediente=this.gLeche;
                    break;
                case 4:
                    ingrediente=this.gCacao;
                    break;
                case 5:
                    ingrediente=this.mlAgua;
                    break;
                case 6://Salida
                    programa=false;
                    fin=false;//No se ejecuta el segundo programa
                    break;
                default://valor incorrecto
                    JOptionPane.showMessageDialog(null, "Escoge una opción compatible");
                    fin=false;
                    break;
            }
            while(fin==true){//Se ejecuta este segundo programa hasta que la opción sea compatible
                        if(ingrediente==limite){
                            JOptionPane.showMessageDialog(null, "Ya no se pueden añadir más");
                            fin=false;
                        }
                        else{
                            try{
                                String texto=JOptionPane.showInputDialog("Solo se pueden añadir números enteros\n"+
                                "¿Cuanto quieres añadir?\n"+
                                "Max total:"+limite+"\n"+
                                "Cantidad actualmente:"+ingrediente);
                                recarga=Integer.parseInt(texto);
                            
                                if(recarga+ingrediente<=limite && recarga>0){
                                    //añadir la recarga proporcionada al ingrediente correspondiente
                                    switch (opcion) {
                                        case 1:
                                            this.vasos=ingrediente+recarga;
                                            break;
                                        case 2:
                                            this.gCafe=ingrediente+recarga;
                                            break;
                                        case 3:
                                            this.gLeche=ingrediente+recarga;
                                            break;
                                        case 4:
                                            this.gCacao=ingrediente+recarga;
                                            break;
                                        case 5:
                                            this.mlAgua=ingrediente+recarga;
                                            break;
                                        default:
                                            break;
                                    }
                                    JOptionPane.showMessageDialog(null, "Se han recargado correctamente");
                                    fin=false;
                                }
                                else if(recarga==0){//Para poder salir sin tener que recargar
                                    JOptionPane.showMessageDialog(null, "No se ha recargado");
                                    fin=false;
                                }
                                else{
                                    JOptionPane.showMessageDialog(null, "No se puede recargar esa cantidad");
                                }
                            } catch(Exception e){
                                JOptionPane.showMessageDialog(null, "Escoge un valor compatible");
                            }
                        }
                        
                    }
                } catch(Exception e){
                    JOptionPane.showMessageDialog(null, "Escoge un valor compatible");
                }
        }
    }


    //////////////////////////////////////////////////////////////////////////////////////////////
    //3. Nuevo café
    public cafe nuevoCafe(){
        //valores del nuevo café
        int cantidadNecesariaCafe=0;
        int cantidadNecesariaCacao=0;
        int cantidadNecesariaLeche=0;
        String nombreCafe="";
        boolean adecuado=false;//comprobar
        nombreCafe=JOptionPane.showInputDialog("Introduce el nombre del nuevo café");
        while(adecuado==false){//para café
            String texto=JOptionPane.showInputDialog("Introduce cuantos gramos de café se necesitan");
            try{
                cantidadNecesariaCafe=Integer.parseInt(texto);
                if(cantidadNecesariaCafe>=0){
                    adecuado=true;
                }
                else{
                    JOptionPane.showMessageDialog(null, "Escoge una opción compatible");    
                }
            }catch(Exception e){
                JOptionPane.showMessageDialog(null, "Escoge una opción compatible");
            }      
        }
        adecuado=false;
        while(adecuado==false){//para cacao
            String texto=JOptionPane.showInputDialog("Introduce cuantos gramos de cacao se necesitan");
            try{
                cantidadNecesariaCacao=Integer.parseInt(texto);
                if(cantidadNecesariaCacao>=0){
                    adecuado=true;
                }
                else{
                    JOptionPane.showMessageDialog(null, "Escoge una opción compatible");    
                }
            }catch(Exception e){
                JOptionPane.showMessageDialog(null, "Escoge una opción compatible");
            } 
        }
        adecuado=false;
        while(adecuado==false){//para leche
            String texto=JOptionPane.showInputDialog("Introduce cuantos gramos de leche se necesitan");
            try{
                cantidadNecesariaLeche=Integer.parseInt(texto);
                if(cantidadNecesariaLeche>=0){
                    adecuado=true;
                    JOptionPane.showMessageDialog(null, "Café añadido");
                }
                else{
                    JOptionPane.showMessageDialog(null, "Escoge una opción compatible");    
                }
            }catch(Exception e){
                JOptionPane.showMessageDialog(null, "Escoge una opción compatible");
            } 
        }
        //determinar el nuevo café
        cafe CafeNuevo=new cafe(nombreCafe, cantidadNecesariaCafe, cantidadNecesariaLeche, cantidadNecesariaCacao);
        return CafeNuevo;//devuelve un café nuevo para meterlo en la lista
        
    }

}
