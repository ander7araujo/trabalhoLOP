	var Xn,Yn,posx, posx,lugX,lugY,tiro;
	var tiro,rocha= true;
	var Hit= false;
	//efeitos
	var imgC,imgt,imgr,imb,imv,imh=[]
	//outros
	var img1,img2,img3,img4,img5img6,img7,img8;
	var img,im1,im2= [];
	//Niveis
	var imgV,imgz,imgL,imge,imgF,imgo;
	//sons so jogo
	var song,songx,songy,songZ;
	//outros
	var posx,posy, ax,ay, bx,by, cx,cy,dx,dy, x1,y1, x2,y2;
	x=0
	y=0
	var vidas=5
	var ponto=0
	var inimigo=0
	var faze=1

function preload() {
//Naves	
	img = loadImage("Animações/Nave do Heroi/nave 04.png");
	im1= loadImage("Animações/Nave do Heroi/neve 02.png");
	im2= loadImage("Animações/Nave do Heroi/nave 05.png");
	img1= loadImage("Animações/Nave do Inimigo/spacestation 01.png");
	img2= loadImage("Animações/Nave do Inimigo/spacestation 02.png");
	img4= loadImage("Animações/Nave do Inimigo/spacestation 03.png");
	img3= loadImage("Animações/Nave do Inimigo/Naveimig.png");
	img5= loadImage("Animações/Nave do Inimigo/Naveimig 2.png");
	img6= loadImage("Animações/Nave do Inimigo/Naveimig 3.png");
	img7= loadImage("Animações/Nave do Inimigo/Naveimig 4.png");
	img8= loadImage("Animações/Nave do Inimigo/Naveimig 5.png");
//Espaço Nivei 01
	imgV= loadImage("Animações/Espaço/espaço 01.png");
	imgz= loadImage("Animações/Espaço/estrelas 01.png");
//Espaço Nivei 02
	imgL= loadImage("Animações/Espaço/espaço 04.png");
	imge= loadImage("Animações/Espaço/estrelas 02.png");
//Espaço Nivei 03
	imgF= loadImage("Animações/Espaço/espaço 05.png");
	imgo= loadImage("Animações/Espaço/estrelas 04.png");
//Efeitos
	imgt= loadImage("Animações/Tiro/tiro 02.png");
	imgC= loadImage("Animações/Explosao/explosao 5.png")
	imgr= loadImage("Animações/gamerover.png")
	imb= loadImage("Animações/bonus 1.png")
	imv= loadImage("Animações/bonus 2.png")
	imh= loadImage("Animações/ganhou.png")
}
function setup(){
		createCanvas(800,600);
		frameRate(90);
		Xn=400
		Yn=500
		//Inimigo
		posx=200
		posy=1
		ax=700
		ay=-40
		bx=400
		by=-90
		cx=0
		cy=0
		//Rochas
		lugX=0
		lugY=-2000
		//tiro
		y=800
		x=-90	
}

function draw(){
	//Nivel 01:
	if(ponto<=1000){
		faze=1
		frameRate(90);
		background(0);
		image(imgV,random(1),random(2));
	//dados do jogo
		fill(800,90,0)
		textSize(19);
		text("Nivel: "+faze+"  Pontuação: "+ponto +"  Vidas: "+vidas+"  Inimigo destruidos: "+inimigo, 10, 20);
	//movimentação da Nave
		if(keyIsDown(LEFT_ARROW)&& Xn>=0||Xn<0 && Xn<=800||Xn>740)
			Xn-=8;
		if(keyIsDown(RIGHT_ARROW)&& Xn>=0||Xn<0&& Xn<=800||Xn>740)
			Xn+=8;
		if(keyIsDown(UP_ARROW)&& Yn>=0||Yn<30 && Yn<=600||Yn>520)
			Yn-=8;
		if(keyIsDown(DOWN_ARROW)&& Yn>=0||Yn<30 && Yn<=600||Yn>520)
			Yn+=8;
		image(img,Xn,Yn);
	//Inimigo 01
		image(img1,posx,posy)
		if(posx>0&&posx<800){
			posx=posx
		}
		if(posy>-801&&posy<600){
			posy=posy+9
		}
		else{posy=-800
		posx=random(0,400);}
	//Inimigo 02
		image(img2,bx,by)
		if(bx>0&&bx<800){
			bx=bx
		}
		if(by>-201&&by<600){
			by=by+9
		}
		else{by=-200
		bx=random(0,750);}
	//inimigo 03
		image(img3,ax,ay)
		if(ax>0&&ax<800){
			ax=ax
		}
		if(ay>-401&&ay<600){
			ay=ay+11
		}
		else{ay=-400
		ax=random(0,500);}	
	//Tiro
	if(keyIsDown(UP_ARROW)&& y>=0||y<30 && y<=600||y>520)
			y-=20;
		if(keyIsDown(DOWN_ARROW)&& y>=0||y<30 && y<=600||y>520)
			y+=8;
		if(!tiro){
			y-=20
		}
		if(y<0){
			tiro=true;
			y=Yn
			x=-80
		}
		if(keyIsDown(CONTROL)&&tiro){
			y-=15
			tiro=false
			x=Xn+32
		}
		image(imgt,x,y)
	//Colisão
		var d = int(dist(x, y, posx, posy))
		var e= int(dist(x, y, ax, ay))
		var f= int(dist(x, y, bx, by))
		if (dist(x, y, posx+20, posy)<=35 || dist(x, y, ax+20, ay)<=35 || dist(x, y, bx+20, by)<=35){
			if(dist(x, y, posx+20, posy)<=35 ){
				frameRate(10);
				image(imgC,posx,posy)
				posy=-90
				posx=random(300)
				y=-5
				ponto=ponto+10
				inimigo++
			}
			if(dist(x, y, ax+20, ay)<=35){
				frameRate(10);
				image(imgC,ax,ay)
				ay=-90
				ax=random(100)
				y=-5
				ponto=ponto+20
				inimigo++ 
			}
			if(dist(x, y, bx+20, by)<=35){
				frameRate(10);
				image(imgC,bx,by)
				by=-90
				bx=random(100)
				y=-5
				ponto=ponto+10
				inimigo++ 
			}
		}
		//colisao naves
		var d = int(dist(x, y, posx, posy))
		var e= int(dist(x, y, ax, ay))
		var f= int(dist(x, y, bx, by))
		if(dist(Xn, Yn, posx+20, posy)<=35 || dist(Xn, Yn, ax+20, ay)<=35 || dist(Xn, Yn, bx+20, by)<=35){
			if(dist(Xn, Yn, posx+20, posy)<=35 ){
				frameRate(10);
				image(imgC,posx,posy)
				posy=-90
				posx=random(100)
				Xn=400
				Yn=500
				vidas-- 
			}
			if(dist(Xn, Yn, ax+20, ay)<=35){
				frameRate(10);
				image(imgC,ax,ay)
				ay=-90
				ax=random(100)
				Xn=400
				Yn=500
				vidas-- 
			}
			if(dist(Xn, Yn, bx+30, by)<=35){
				frameRate(10);
				image(imgC,bx,by)
				by=-90
				bx=random(100)
				Xn=400
				Yn=500
				vidas--
			}
		}
		//Efeitos
		if(ponto>200&&ponto<250||ponto>400&&ponto<480||ponto>800&&ponto<950){
			if(x2>0&&x2<800){
			x2=x2
			}
			if(y2>-210&&y2<600){
			y2=y2+5
			}
			else{y2=-200
			x2=random(600,100);}
			image(imv,x2,y2);
			var d = int(dist(Xn, Yn, x2, y2))
			if(dist(Xn, Yn, x2+20, y2)<=35){
				vidas=vidas+1
				y2=-200
				x2=random(500);
			}
		}
		if(vidas<=1){
			if(x1>0&&x1<800){
			x1=x1
			}
			if(y1>-7&&y1<600){
			y1=y1+5
			}
			else{y1=-6
			x1=random(20,300);}
			image(imb,x1,y1);
			var d = int(dist(Xn, Yn, x1, y1))
			if(dist(Xn, Yn, x1+35, y1)<=40){
				vidas=vidas+2
				y1=0
				x1=random(500)
			}
		}
		if (vidas<0){
			image(imgr,0,0);
			image(imgz,lugX,lugY);
		if(lugX>100&&lugX<700){
			lugX=lugX}
			
		if(lugY>-3001&&lugY<600){
			lugY=lugY+5}
			
		else{lugY=-3000
			lugX=0;}
		}
		//espaço
		image(imgz,lugX,lugY);
		if(lugX>100&&lugX<700){
			lugX=lugX}
			
		if(lugY>-3001&&lugY<600){
			lugY=lugY+5}
			
		else{lugY=-3000
			lugX=random(10,700);}
	}
		if (ponto>=1000&&ponto<1500){
			image(img,Xn,Yn);
			if(Yn>-90&&Yn<700){
			Yn=Yn-30
			}
			if(Yn<-30&&Yn>-100){
			image(imh,-20,0);}
			if(keyIsDown(ENTER)){ponto=ponto+500}
		}
	

	//Nivel 02:-------------------------------------------------------------------------------------
	
	if(ponto>=1500&&ponto<2000){
		faze=2
		frameRate(90);
		background(0);
		image(imgL,random(1),random(2));
	//dados do jogo
		fill(800,90,0)
		textSize(19);
		text("Nivel: "+faze+"  Pontuação: "+ponto +"  Vidas: "+vidas+"  Inimigo destruidos: "+inimigo, 10, 20);
	//movimentação da Nave
		if(keyIsDown(LEFT_ARROW)&& Xn>=0||Xn<0 && Xn<=800||Xn>740)
			Xn-=8;
		if(keyIsDown(RIGHT_ARROW)&& Xn>=0||Xn<0&& Xn<=800||Xn>740)
			Xn+=8;
		if(keyIsDown(UP_ARROW)&& Yn>=0||Yn<30 && Yn<=600||Yn>520)
			Yn-=8;
		if(keyIsDown(DOWN_ARROW)&& Yn>=0||Yn<30 && Yn<=600||Yn>520)
			Yn+=8;
		image(im1,Xn,Yn);
	//Inimigo 01
		image(img1,posx,posy)
		if(posx>0&&posx<800){
			posx=posx
		}
		if(posy>-801&&posy<600){
			posy=posy+11
		}
		else{posy=-800
		posx=random(0,400);}
	//Inimigo 02
		image(img2,bx,by)
		if(bx>0&&bx<800){
			bx=bx
		}
		if(by>-201&&by<600){
			by=by+11
		}
		else{by=-200
		bx=random(0,750);}
	//inimigo 03
		image(img3,ax,ay)
		if(ax>0&&ax<800){
			ax=ax
		}
		if(ay>-401&&ay<600){
			ay=ay+12
		}
		else{ay=-400
		ax=random(0,500);}
	//inimigo 04
		image(img5,cx,cy)
		if(cx>0&&cx<800){
			cx=cx
		}
		if(cy>-601&&cy<600){
			cy=cy+14
		}
		else{cy=-600
		cx=random(700);}
	//Tiro
	if(keyIsDown(UP_ARROW)&& y>=0||y<30 && y<=600||y>520)
			y-=20;
		if(keyIsDown(DOWN_ARROW)&& y>=0||y<30 && y<=600||y>520)
			y+=8;
		if(!tiro){
			y-=20
		}
		if(y<0){
			tiro=true;
			y=Yn
			x=-80
		}
		if(keyIsDown(CONTROL)&&tiro){
			y-=15
			tiro=false
			x=Xn+32
		}
		image(imgt,x,y)
	//Colisão
		var d = int(dist(x, y, posx, posy))
		var e= int(dist(x, y, ax, ay))
		var f= int(dist(x, y, bx, by))
		var a= int(dist(x, y, cx, cy))
		if (dist(x, y, posx+25, posy)<=35 || dist(x, y, ax+25, ay)<=35 || dist(x, y, bx+25, by)<=35||dist(x, y, cx+25, cy)<=35){
			if(dist(x, y, posx+25, posy)<=35 ){
				frameRate(10);
				image(imgC,posx,posy)
				posy=-90
				posx=random(300)
				y=-5
				ponto=ponto+10
				inimigo++
			}
			if(dist(x, y, ax+25, ay)<=35){
				frameRate(10);
				image(imgC,ax,ay)
				ay=-90
				ax=random(100)
				y=-5
				ponto=ponto+15
				inimigo++ 
			}
			if(dist(x, y, bx+25, by)<=35){
				frameRate(10);
				image(imgC,bx,by)
				by=-90
				bx=random(100)
				y=-5
				ponto=ponto+10
				inimigo++ 
			}
			if(dist(x, y, cx+25, cy)<=35){
				frameRate(10);
				image(imgC,cx,cy)
				cy=-120
				cx=random(400)
				y=-5
				ponto=ponto+15
				inimigo++ 
			}
		}
		//colisao naves
		var d = int(dist(x, y, posx, posy))
		var e= int(dist(x, y, ax, ay))
		var f= int(dist(x, y, bx, by))
		var a= int(dist(x, y, cx, cy))
		if(dist(Xn, Yn, posx+30, posy)<=35 || dist(Xn, Yn, ax+30, ay)<=35 || dist(Xn, Yn, bx+30, by)<=35||dist(x, y, cx+30, cy)<=35){
			if(dist(Xn, Yn, posx+30, posy)<=35 ){
				frameRate(10);
				image(imgC,posx,posy)
				posy=-90
				posx=random(100)
				Xn=400
				Yn=500
				vidas-- 
			}
			if(dist(Xn, Yn, ax+30, ay)<=35){
				frameRate(10);
				image(imgC,ax,ay)
				ay=-90
				ax=random(100)
				Xn=400
				Yn=500
				vidas-- 
			}
			if(dist(Xn, Yn, bx+30, by)<=35){
				frameRate(10);
				image(imgC,bx,by)
				by=-100
				bx=random(100)
				Xn=400
				Yn=500
				vidas--
			}
			if(dist(Xn, Yn, cx+30, cy)<=35){
				frameRate(10);
				image(imgC,cx,cy)
				cy=-200
				cx=random(300)
				Xn=400
				Yn=500
				vidas--
			}
		}
		//Efeitos
		if(ponto>1200&&ponto<1250||ponto>1400&&ponto<1480||ponto>1800&&ponto<1950){
			if(x2>0&&x2<800){
			x2=x2
			}
			if(y2>-210&&y2<600){
			y2=y2+5
			}
			else{y2=-200
			x2=random(600,100);}
			image(imv,x2,y2);
			var d = int(dist(Xn, Yn, x2, y2))
			if(dist(Xn, Yn, x2+20, y2)<=35){
				vidas=vidas+1
				y2=-200
				x2=random(500);
			}
		}
		if(vidas<=1){
			if(x1>0&&x1<800){
				x1=x1
			}
			if(y1>-7&&y1<600){
			y1=y1+5
			}
			else{y1=-6
			x1=random(20,300);}
			image(imb,x1,y1);
			var d = int(dist(Xn, Yn, x1, y1))
			if(dist(Xn, Yn, x1+35, y1)<=35){
				vidas=vidas+2
				y1=0
				x1=random(500)
			}
		}
		if (vidas<0){
			image(imgr,0,0);
			image(imgz,lugX,lugY);
		if(lugX>100&&lugX<700){
			lugX=lugX}
			
		if(lugY>-3001&&lugY<600){
			lugY=lugY+5}
			
		else{lugY=-3000
			lugX=0;}
		}
		//espaço
		image(imge,lugX,lugY);
		if(lugX>100&&lugX<700){
			lugX=lugX}
			
		if(lugY>-3001&&lugY<600){
			lugY=lugY+5}
			
		else{lugY=-3000
			lugX=random(10,700);}
	}
		if(ponto==2000){
			image(img,Xn,Yn);
			if(Yn>-90&&Yn<700){
			Yn=Yn-30
			}
			if(Yn<-30){
			image(imh,-20,0);}
		}
	//Nivel 03:
 }	
