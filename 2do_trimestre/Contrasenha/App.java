import javax.swing.JOptionPane;
public class App {

    public static void main(String[]args) throws Exception{
        contrasenha contrasenha_1=new contrasenha();
        contrasenha contrasenha_2=new contrasenha(20);
        System.out.println(contrasenha_1);
        System.out.println(contrasenha_2);
        
        System.out.println(contrasenha_1.esFuerte());
        System.out.println(contrasenha_2.esFuerte());
    
    
    }
}