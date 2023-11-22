package Juegos;

import java.util.Arrays;
import java.util.Scanner;

public class Barcos {
	
	public static void imprimirBoleto(String[] boleto) {
		System.out.println(Arrays.toString(boleto));
		
	}
	
	public static void main(String[] args) {
		
		String boleto[]= new String[10];
		

		int x=0;
		int contador=1;
		int contador2=0;
		for(int i=0; i<boleto.length;i++) {
			x=(int)( 1+Math.random()*2);
			if(x==1) {
				contador++;
				if(contador>5) {
					boleto[i]="A";
				}else {
					boleto[i]="B";
				}
				
			}else{
				contador2++;
				if(contador2>6) {
					boleto[i]="B";
				}else {
					boleto[i]="A";
				}
				
			}
		}
		
		imprimirBoleto(boleto);
		
		int y=0;
		Scanner sn=new Scanner(System.in);
		
		int b=1;
		System.out.println("Tienes 6 intentos");
		for(int i=1; i<7;i++) {
			System.out.println("Intento numero: "+i);
			System.out.println("dame una posicion de 0 a 9");
			
			y=sn.nextInt();
			if(b>=4) {
				System.out.println("Hundido");
				System.out.println("Has ganado");
				boleto[y]="A";
				System.out.println(Arrays.toString(boleto));
			}else {
				if(boleto[y].equals("B")) {
					System.out.println("Barco");
					boleto[y]="A";
					b++;
					
				}else {
					System.out.println("Agua");
				}
			}
			
		}
		if(b<4) {
				System.out.println("El juego ha acabado, Has perdido");
				System.out.println(Arrays.toString(boleto));
			}
	
		sn.close();
	}

	
}
