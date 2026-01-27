public class App {
    public static void main(String[] args) {
        //1. crear una instancia de la clase bolígrafo
        boligrafo boli=new boligrafo("bic", "azul","recargable","giro");
        //2. imprimir por pantalla todas las propiedades de boli
        System.out.println(boli.getTinta());
        System.out.println(boli.getModelo());
        System.out.println(boli.getColor());
        System.out.println(boli.getMarca());
        System.out.println(boli.getPunta());
        System.out.println(boli.getVida());
        System.out.println(boli.getMecanismo());
        System.out.println(boli.getMaterial());
        //3. Asignar el modelo clásico al boli
        boli.setModelo("clasico");
        //4.volvemos a sacar por pantalla el modelo de boli
        System.out.println(boli.getModelo());
        //5.comprobamos si el boli tiena tinta
        System.out.println(boli.tieneTinta());
        //6.Gastamos 60u de tinta de boli
        boli.gastaTinta(60);
        //7.Comprobamos si queda tinta y cuanta queda
        System.out.println(boli.tieneTinta());
        System.out.println(boli.getTinta());
        //8.Gastar toda la tinta y devolver si tiene tinta
        boli.gastaTinta(40);
        System.out.println(boli.tieneTinta());
        //Recargar la tinta
        boli.recargaTinta(60);
        System.out.println(boli.getTinta());
        System.out.println(boli.tieneTinta());
        //Escribir carta y ver cuanta tinta le queda
        boli.escribir("Hola buenos dias"); //12 caracteres
        System.out.println(boli.getTinta());
        //Mecanismo de apretura
        System.out.println(boli.mecanismoApertura());
    
        boligrafo boli2=new boligrafo("bic", "negro","desechable","tapa");
        
        //8.Gastar tinta y devolver si tiene tinta
        boli2.gastaTinta(40);
        System.out.println(boli2.tieneTinta());
        //Recargar la tinta
        boli2.recargaTinta(60);
        System.out.println(boli2.getTinta());
        System.out.println(boli2.tieneTinta());
        //Escribir carta y ver cuanta tinta le queda
        boli2.escribir("Hola buenos dias"); //12 caracteres
        System.out.println(boli2.getTinta());
        //Mecanismo de apretura
        System.out.println(boli2.mecanismoApertura());
        System.out.println(boli2.toString());
    }
}