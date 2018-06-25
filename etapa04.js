	var X=680;
	var Y=540;
	var posX, posY;
	var X1,Y1;
	var tiro=true;
function setup(){
		createCanvas(1360, 600);
		posX=+680;
		posY=+1;
		posX2=+200;
		posY2=+300;
		X1=X;
		Y1=Y;
}
function draw(){
		background(90);
		//movimentação da Nave
		if(keyIsDown(LEFT_ARROW)&& X>=0||X<40 && X<=1360||X>1340)
			X-=4;
		if(keyIsDown(RIGHT_ARROW)&& X>=0||X<40&& X<=1360||X>1340)
			X+=4;
		if(keyIsDown(UP_ARROW)&& Y>=0||Y<40 && Y<=600||Y>560)
			Y-=4;
		if(keyIsDown(DOWN_ARROW)&& Y>=0||Y<40 && Y<=600||Y>560)
			Y+=4;
		//Tiro
		if(!tiro){
			Y1-=12;
		}
		if(Y1<0){
			tiro=true;
			Y1=Y
		}
		if(keyIsDown(CONTROL)&&tiro){
			X1=X;
			Y1-=12;
			tiro=false;
		}
		//Nave
		ellipse(X,Y1,15,30)
		ellipse(X,Y,(30),80);
		rect(X,Y,-40,20);
		rect(X,Y,40,20);
		fill(10,90,0);
		stroke(800,600,90);
		//Inimigo 01
		rect(posX,posY,30,30);
		if(posX>0&&posX<1360){
			posX=posX
		}
		if(posY>0&&posY<600){
			posY=posY+5
		}
		else{posY=1
			posX=random(100,1100);
		}
		//Inimigo 02
			ellipse(posX2,posY2,30,30);
			if(posX2>0&&posX2<1360){
				posX2=posX2
			}
			if(posY2>0&&posY2<600){
				posY2=posY2+5
			}
			else{posY2=1
				posX2=random(0,1360);
			}
		
	}
