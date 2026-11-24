let n;
let n2;
function setup() {
  createCanvas(400, 600);
  n = new Nave(200,200);
  n2 = new Nave(100,100);
}

function draw() {
  background(220);
  n.show();
  n2.show();
  let sentido;
  let sentido2;
  if(key ==='a'){//tecla A
    sentido = "e";
  }
  if(key ==='d'){//tecla D
    sentido = "d";
  }
  if(key ==='ArrowLeft'){//tecla esqueda
    sentido2 = "e";
  }
  if(key ==='ArrowRight'){//tecla direita
    sentido2 = "d";
  }
  n.move(sentido);
  n2.move(sentido2);
}
