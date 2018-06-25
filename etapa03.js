	var X=680
	var Y=540
	var posX, posY;
function setup(){
		createCanvas(1360, 600);
		posX=+680;
		posY=+5;
		posX2=+200;
		posY2=+8
}

function draw(){
		background(90);
		if(keyIsDown(LEFT_ARROW)&& X>=20||X<20 && X<=1340||X>1340)
			X-=4;
		if(keyIsDown(RIGHT_ARROW)&& X>=20||X<20 && X<=1340||X>1340)
			X+=4;
		if(keyIsDown(UP_ARROW)&& Y>=20||Y<20 && Y<=580||Y>580)
			Y-=4;
		if(keyIsDown(DOWN_ARROW)&& Y>=20||Y<20 && Y<=580||Y>580)
			Y+=4;
		ellipse(X,Y,(30),80);
		rect(X,Y,-40,20);
		rect(X,Y,40,20);
		fill(10,90,0);
		stroke(800,600,90);
		rect(posX,posY,20,20);
		if(posX>0&&posX<1360){
			posX=posX
		}
		else{posX=random(0,1)}
		if(posY>0&&posY<600){
			posY=posY+6
		}
		else{posY=1
			posX=random(200,1000);
		}
		ellipse(posX2,posY2,20,20);
		if(posX2>0&&posX2<1360){
			posX2=posX2
		}
		else{posX2=random(0,1)}
		if(posY2>0&&posY2<600){
			posY2=posY2+8
		}
		else{posY2=1
			posX2=random(0,1360);
		}
	}
