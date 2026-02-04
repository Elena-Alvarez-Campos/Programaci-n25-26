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
    //Setter cafes
    public void setCafes(ArrayList<cafe> cafes){
        this.cafes=cafes;
    }
    //getter
    public ArrayList<cafe> getCafes(){
        return cafes;
    }
    @Override
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
        for(int i=1; i<=this.cafes.size();i++){
            listaCafes+=i+"."+this.cafes.get(i-1)+"\n";
        }
        boolean programa=true;
        while(programa==true){
            String menu=JOptionPane.showInputDialog(listaCafes);
            int opcion=Integer.parseInt(menu)-1;
            if(opcion>=this.cafes.size()||opcion<0){
                JOptionPane.showMessageDialog(null, "No es una opción compatible");
            }
            else{
                this.cafes.get(opcion);
            }
        }
        return listaCafes;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////// 
    //2.Rellenar máqina
    //Preguntar que rellenar
    //Cuantos g/ml se rellenarán
    //NO pasar de 1kg/1l
    public void rellenaMaquina(){
        int opcion=0;
        int recarga=0;
        boolean fin=true;
        boolean programa=true;
        while(programa==true){
        String menu=JOptionPane.showInputDialog("     ¿Que quieres llenar?     \n"+
            "********************\n"+
            "1.Vasos\n"+
            "2.Café\n"+
            "3.Leche\n"+
            "4.Cacao\n"+
            "5.Agua\n"+
            "\n Selecciona una opción");
            opcion=Integer.parseInt(menu);
            switch (opcion) {
                case 1:
                    while(fin==true){
                        String texto=JOptionPane.showInputDialog("¿Cuantos vasos quieres añadir?\n"+"Max total:50\n"+"Vasos actualmente:"+this.vasos);
                        recarga=Integer.parseInt(texto);
                        if(recarga+this.vasos<=50 && recarga>0){
                            this.vasos=this.vasos+recarga;
                            JOptionPane.showMessageDialog(null, "Se han recargado correctamente");
                            fin=false;
                            programa=false;
                        }
                        else if(recarga==0){
                            JOptionPane.showMessageDialog(null, "No se ha recargado");
                            fin=false;
                            programa=false;
                        }
                        else{
                            JOptionPane.showMessageDialog(null, "No se puede recargar esa cantidad");
                        }
                    }
                    break;
                case 2:
                    String texto=JOptionPane.showInputDialog("¿Cuantos gramos quieres añadir?\n"+"Max total:1kg\n"+"Vasos actualmente:"+this.gCafe+"g");
                        recarga=Integer.parseInt(texto);
                        if(recarga+this.gCafe<=1000 && recarga>0){
                            this.gCafe=this.gCafe+recarga;
                            JOptionPane.showMessageDialog(null, "Se han recargado correctamente");
                            fin=false;
                            programa=false;
                        }
                        else if(recarga==0){
                            JOptionPane.showMessageDialog(null, "No se ha recargado");
                            fin=false;
                            programa=false;
                        }
                        else{
                            JOptionPane.showMessageDialog(null, "No se puede recargar esa cantidad");
                        }
                    break;
                case 3:
                    String texto1=JOptionPane.showInputDialog("¿Cuantos gramos quieres añadir?\n"+"Max total:1kg\n"+"Vasos actualmente:"+this.gLeche+"g");
                        recarga=Integer.parseInt(texto1);
                        if(recarga+this.gLeche<=1000 && recarga>0){
                            this.gLeche=this.gLeche+recarga;
                            JOptionPane.showMessageDialog(null, "Se han recargado correctamente");
                            fin=false;
                            programa=false;
                        }
                        else if(recarga==0){
                            JOptionPane.showMessageDialog(null, "No se ha recargado");
                            fin=false;
                            programa=false;
                        }
                        else{
                            JOptionPane.showMessageDialog(null, "No se puede recargar esa cantidad");
                        }
                    break;
                case 4:
                    String texto2=JOptionPane.showInputDialog("¿Cuantos gramos quieres añadir?\n"+"Max total:1kg\n"+"Vasos actualmente:"+this.gCacao+"g");
                        recarga=Integer.parseInt(texto2);
                        if(recarga+this.gCacao<=1000 && recarga>0){
                            this.gCacao=this.gCacao+recarga;
                            JOptionPane.showMessageDialog(null, "Se han recargado correctamente");
                            fin=false;
                            programa=false;
                        }
                        else if(recarga==0){
                            JOptionPane.showMessageDialog(null, "No se ha recargado");
                            fin=false;
                            programa=false;
                        }
                        else{
                            JOptionPane.showMessageDialog(null, "No se puede recargar esa cantidad");
                        }
                    break;
                case 5:
                    String texto3=JOptionPane.showInputDialog("¿Cuantos mililitros quieres añadir?\n"+"Max total:1L\n"+"Vasos actualmente:"+this.mlAgua+"ml");
                        recarga=Integer.parseInt(texto3);
                        if(recarga+this.mlAgua<=1000 && recarga>0){
                            this.mlAgua=this.mlAgua+recarga;
                            JOptionPane.showMessageDialog(null, "Se han recargado correctamente");
                            fin=false;
                            programa=false;
                        }
                        else if(recarga==0){
                            JOptionPane.showMessageDialog(null, "No se ha recargado");
                            fin=false;
                            programa=false;
                        }
                        else{
                            JOptionPane.showMessageDialog(null, "No se puede recargar esa cantidad");
                        }
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Escoge una opción compatible");
                    
                    break;
            }
        }
    }


    //////////////////////////////////////////////////////////////////////////////////////////////
    //3. NUevo café
    public cafe nuevoCafe(){
        int cantidadNecesariaCafe=0;
        int cantidadNecesariaCacao=0;
        int cantidadNecesariaLeche=0;
        String nombreCafe="";
        boolean adecuado=false;
        nombreCafe=JOptionPane.showInputDialog("Introduce el nombre del nuevo café");

        while(adecuado==false){
            String texto=JOptionPane.showInputDialog("Introduce cuantos gramos de café se necesitan");
            cantidadNecesariaCafe=Integer.parseInt(texto);
            if(cantidadNecesariaCafe>=0){
                adecuado=true;
            }
            else{
                JOptionPane.showMessageDialog(null, "Escoge una opción compatible");    
            }
        }
        adecuado=false;
        while(adecuado==false){
            String texto=JOptionPane.showInputDialog("Introduce cuantos gramos de cacao se necesitan");
            cantidadNecesariaCacao=Integer.parseInt(texto);
            if(cantidadNecesariaCacao>=0){
                adecuado=true;
            }
            else{
                JOptionPane.showMessageDialog(null, "Escoge una opción compatible");    
            }
        }
        adecuado=false;
        while(adecuado==false){
            String texto=JOptionPane.showInputDialog("Introduce cuantos gramos de leche se necesitan");
            cantidadNecesariaLeche=Integer.parseInt(texto);
            if(cantidadNecesariaLeche>=0){
                adecuado=true;
            }
            else{
                JOptionPane.showMessageDialog(null, "Escoge una opción compatible");    
            }
        }
        cafe CafeNuevo=new cafe(nombreCafe, cantidadNecesariaCafe, cantidadNecesariaLeche, cantidadNecesariaCacao);
        return CafeNuevo;
        
    }

}
