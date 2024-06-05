let mouseX, mouseY;

// 마우스 따라다니는 텍스트 설정 / group
document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  
    const group = document.getElementById("group");
    group.style.left = mouseX - (200 / 2) + "px";
    group.style.top = mouseY - (200 / 2) + "px";


  // 당신의 말을 이해한다
  var text1 = document.getElementById("text1");
  text1.style.left = mouseX - 500 + "px";
  text1.style.top = mouseY  + "px";

  // 긍적적
  const text2 = document.getElementById("text2");
  text2.style.left = mouseX - 100 + "px";
  text2.style.top = mouseY -100 + "px";

  // 진짜 괜찮아
  const text3 = document.getElementById("text3");
  text3.style.left = mouseX + 100 + "px";
  text3.style.top = mouseY - 140 + "px";

  // 좋게 넘기기 위함
  const text4 = document.getElementById("text4");
  text4.style.left = mouseX + "px";
  text4.style.top = mouseY + 100 + "px";
});


// movingText1
let x1 = Math.random() * (window.innerWidth - 500);
let y1 = Math.random() * (window.innerHeight - 500);
let velx1 = -5;
let vely1 = -5;

const movingText1 = document.querySelector("#movingText1");
movingText1.style.left = x1 + "px";
movingText1.style.top = y1 + "px";

// movingText2
let x2 = Math.random() * (window.innerWidth - 500);
let y2 = Math.random() * (window.innerHeight - 500);
let velx2 = -5;
let vely2 = -5;

const movingText2 = document.querySelector("#movingText2");
movingText2.style.left = x2 + "px";
movingText2.style.top = y2 + "px";

// movingText3
let x3 = Math.random() * (window.innerWidth - 500);
let y3 = Math.random() * (window.innerHeight - 500);
let velx3 = -3;
let vely3 = -3;

const movingText3 = document.querySelector("#movingText3");
movingText3.style.left = x3 + "px";
movingText3.style.top = y3 + "px";

// movingText4
let x4 = Math.random() * (window.innerWidth - 500);
let y4 = Math.random() * (window.innerHeight - 500);
let velx4 = -4;
let vely4 = -4;

const movingText4 = document.querySelector("#movingText4");
movingText4.style.left = x4 + "px";
movingText4.style.top = y4 + "px";

// movingText5
let x5 = Math.random() * (window.innerWidth - 500);
let y5 = Math.random() * (window.innerHeight - 500);
let velx5 = -5;
let vely5 = -5;

const movingText5 = document.querySelector("#movingText5");
movingText5.style.left = x5 + "px";
movingText5.style.top = y5 + "px";

// movingText6
let x6 = Math.random() * (window.innerWidth - 500);
let y6 = Math.random() * (window.innerHeight - 500);
let velx6 = -6;
let vely6 = -6;

const movingText6 = document.querySelector("#movingText6");
movingText6.style.left = x6 + "px";
movingText6.style.top = y6 + "px";

// movingText7
let x7 = Math.random() * (window.innerWidth - 500);
let y7 = Math.random() * (window.innerHeight - 500);
let velx7 = -7;
let vely7 = -7;

const movingText7 = document.querySelector("#movingText7");
movingText7.style.left = x7 + "px";
movingText7.style.top = y7 + "px";

// movingText8
let x8 = Math.random() * (window.innerWidth - 500);
let y8 = Math.random() * (window.innerHeight - 500);
let velx8 = -8;
let vely8 = -8;

const movingText8 = document.querySelector("#movingText8");
movingText8.style.left = x8 + "px";
movingText8.style.top = y8 + "px";

// movingText9
let x9 = Math.random() * (window.innerWidth - 500);
let y9 = Math.random() * (window.innerHeight - 500);
let velx9 = -9;
let vely9 = -9;

const movingText9 = document.querySelector("#movingText9");
movingText9.style.left = x9 + "px";
movingText9.style.top = y9 + "px";

// movingText10
let x10 = Math.random() * (window.innerWidth - 500);
let y10 = Math.random() * (window.innerHeight - 500);
let velx10 = -8;
let vely10 = -8;

const movingText10 = document.querySelector("#movingText10");
movingText10.style.left = x10 + "px";
movingText10.style.top = y10 + "px";

// movingText11
let x11 = Math.random() * (window.innerWidth - 500);
let y11 = Math.random() * (window.innerHeight - 500);
let velx11 = -7;
let vely11 = -7;

const movingText11 = document.querySelector("#movingText11");
movingText11.style.left = x11 + "px";
movingText11.style.top = y11 + "px";

// movingText12
let x12 = Math.random() * (window.innerWidth - 500);
let y12 = Math.random() * (window.innerHeight - 500);
let velx12 = -6;
let vely12 = -6;

const movingText12 = document.querySelector("#movingText12");
movingText12.style.left = x12 + "px";
movingText12.style.top = y12 + "px";

// movingText13
let x13 = Math.random() * (window.innerWidth - 500);
let y13 = Math.random() * (window.innerHeight - 500);
let velx13 = -5;
let vely13 = -5;

const movingText13 = document.querySelector("#movingText13");
movingText13.style.left = x13 + "px";
movingText13.style.top = y13 + "px";

// movingText14
let x14 = Math.random() * (window.innerWidth - 500);
let y14 = Math.random() * (window.innerHeight - 500);
let velx14 = -4;
let vely14 = -4;

const movingText14 = document.querySelector("#movingText14");
movingText14.style.left = x14 + "px";
movingText14.style.top = y14 + "px";


// 애니메이션 루프

let isMovingText1Entered = false;
let isMovingText2Entered = false;
let isMovingText3Entered = false;
let isMovingText4Entered = false;
let isMovingText5Entered = false;
let isMovingText6Entered = false;
let isMovingText7Entered = false;
let isMovingText8Entered = false;
let isMovingText9Entered = false;
let isMovingText10Entered = false;
let isMovingText11Entered = false;
let isMovingText12Entered = false;
let isMovingText13Entered = false;
let isMovingText14Entered = false;

loop();
function loop() {

    movingText1
    x1 += velx1;
    y1 += vely1;

    if( x1 <= 0 || x1 >= window.innerWidth - 200 ) {
        velx1 = velx1 * (-1);
    }

    if( y1 <= 0 || y1 >= window.innerHeight - 200 ) {
        vely1 = vely1 * (-1);
    }

    movingText1.style.left = x1 + "px";
    movingText1.style.top = y1 + "px";

    const dx1 = (mouseX - (200 / 2)) - x1;
    const dy1 = (mouseY - (200 / 2)) - y1;
    const distance = Math.sqrt((dx1 * dx1) + (dy1 * dy1));

    movingText2
    x2 += velx2;
    y2 += vely2;

    if( x2 <= 0 || x2 >= window.innerWidth - 200 ) {
        velx2 = velx2 * (-1);
    }

    if( y2 <= 0 || y2 >= window.innerHeight - 200 ) {
        vely2 = vely2 * (-1);
    }

    movingText2.style.left = x2 + "px";
    movingText2.style.top = y2 + "px";
    const dx2 = (mouseX - (200 / 2)) - x2;
    const dy2 = (mouseY - (200 / 2)) - y2;
    const distance2 = Math.sqrt((dx2 * dx2) + (dy2 * dy2));

    movingText3
    x3 += velx3;
    y3 += vely3;

    if( x3 <= 0 || x3 >= window.innerWidth - 200 ) {
        velx3 = velx3 * (-1);
    }

    if( y3 <= 0 || y3 >= window.innerHeight - 200 ) {
        vely3 = vely3 * (-1);
    }

    movingText3.style.left = x3 + "px";
    movingText3.style.top = y3 + "px";
    const dx3 = (mouseX - (200 / 2)) - x3;
    const dy3 = (mouseY - (200 / 2)) - y3;
    const distance3 = Math.sqrt((dx3 * dx3) + (dy3 * dy3));

    movingText4
    x4 += velx4;
    y4 += vely4;

    if( x4 <= 0 || x4 >= window.innerWidth - 200 ) {
        velx4 = velx4 * (-1);
    }

    if( y4 <= 0 || y4 >= window.innerHeight - 200 ) {
        vely4 = vely4 * (-1);
    }

    movingText4.style.left = x4 + "px";
    movingText4.style.top = y4 + "px";
    const dx4 = (mouseX - (200 / 2)) - x4;
    const dy4 = (mouseY - (200 / 2)) - y4;
    const distance4 = Math.sqrt((dx4 * dx4) + (dy4 * dy4));

    movingText5
    x5 += velx5;
    y5 += vely5;

    if( x5 <= 0 || x5 >= window.innerWidth - 200 ) {
        velx5 = velx5 * (-1);
    }

    if( y5 <= 0 || y5 >= window.innerHeight - 200 ) {
        vely5 = vely5 * (-1);
    }

    movingText5.style.left = x5 + "px";
    movingText5.style.top = y5 + "px";
    const dx5 = (mouseX - (200 / 2)) - x5;
    const dy5 = (mouseY - (200 / 2)) - y5;
    const distance5 = Math.sqrt((dx5 * dx5) + (dy5 * dy5));

    movingText6
    x6 += velx6;
    y6 += vely6;

    if( x6 <= 0 || x6 >= window.innerWidth - 200 ) {
        velx6 = velx6 * (-1);
    }

    if( y6 <= 0 || y6 >= window.innerHeight - 200 ) {
        vely6 = vely6 * (-1);
    }

    movingText6.style.left = x6 + "px";
    movingText6.style.top = y6 + "px";
    const dx6 = (mouseX - (200 / 2)) - x6;
    const dy6 = (mouseY - (200 / 2)) - y6;
    const distance6 = Math.sqrt((dx6 * dx6) + (dy6 * dy6));

    movingText7
    x7 += velx7;
    y7 += vely7;

    if( x7 <= 0 || x7 >= window.innerWidth - 200 ) {
        velx7 = velx7 * (-1);
    }

    if( y7 <= 0 || y7 >= window.innerHeight - 200 ) {
        vely7 = vely7 * (-1);
    }

    movingText7.style.left = x7 + "px";
    movingText7.style.top = y7 + "px";
    const dx7 = (mouseX - (200 / 2)) - x7;
    const dy7 = (mouseY - (200 / 2)) - y7;
    const distance7 = Math.sqrt((dx7 * dx7) + (dy7 * dy7));

    movingText8
    x8 += velx8;
    y8 += vely8;

    if( x8 <= 0 || x8 >= window.innerWidth - 200 ) {
        velx8 = velx8 * (-1);
    }

    if( y8 <= 0 || y8 >= window.innerHeight - 200 ) {
        vely8 = vely8 * (-1);
    }

    movingText8.style.left = x8 + "px";
    movingText8.style.top = y8 + "px";
    const dx8 = (mouseX - (200 / 2)) - x8;
    const dy8 = (mouseY - (200 / 2)) - y8;
    const distance8 = Math.sqrt((dx8 * dx8) + (dy8 * dy8));

    movingText9
    x9 += velx9;
    y9 += vely9;

    if( x9 <= 0 || x9 >= window.innerWidth - 200 ) {
        velx9 = velx9 * (-1);
    }

    if( y9 <= 0 || y9 >= window.innerHeight - 200 ) {
        vely9 = vely9 * (-1);
    }

    movingText9.style.left = x9 + "px";
    movingText9.style.top = y9 + "px";
    const dx9 = (mouseX - (200 / 2)) - x9;
    const dy9 = (mouseY - (200 / 2)) - y9;
    const distance9 = Math.sqrt((dx9 * dx9) + (dy9 * dy9));

    movingText10
    x10 += velx10;
    y10 += vely10;

    if( x10 <= 0 || x10 >= window.innerWidth - 200 ) {
        velx10 = velx10 * (-1);
    }

    if( y10 <= 0 || y10 >= window.innerHeight - 200 ) {
        vely10 = vely10 * (-1);
    }

    movingText10.style.left = x10 + "px";
    movingText10.style.top = y10 + "px";
    const dx10 = (mouseX - (200 / 2)) - x10;
    const dy10 = (mouseY - (200 / 2)) - y10;
    const distance10 = Math.sqrt((dx10 * dx10) + (dy10 * dy10));

    movingText11
    x11 += velx11;
    y11 += vely11;

    if( x11 <= 0 || x11 >= window.innerWidth - 200 ) {
        velx11 = velx11 * (-1);
    }

    if( y11 <= 0 || y11 >= window.innerHeight - 200 ) {
        vely11 = vely11 * (-1);
    }

    movingText11.style.left = x11 + "px";
    movingText11.style.top = y11 + "px";
    const dx11 = (mouseX - (200 / 2)) - x11;
    const dy11 = (mouseY - (200 / 2)) - y11;
    const distance11 = Math.sqrt((dx11 * dx11) + (dy11 * dy11));

    movingText12
    x12 += velx12;
    y12 += vely12;

    if( x12 <= 0 || x12 >= window.innerWidth - 200 ) {
        velx12 = velx12 * (-1);
    }

    if( y12 <= 0 || y12 >= window.innerHeight - 200 ) {
        vely12 = vely12 * (-1);
    }

    movingText12.style.left = x12 + "px";
    movingText12.style.top = y12 + "px";
    const dx12 = (mouseX - (200 / 2)) - x12;
    const dy12 = (mouseY - (200 / 2)) - y12;
    const distance12 = Math.sqrt((dx12 * dx12) + (dy12 * dy12));

    movingText13
    x13 += velx13;
    y13 += vely13;

    if( x13 <= 0 || x13 >= window.innerWidth - 200 ) {
        velx13 = velx13 * (-1);
    }

    if( y13 <= 0 || y13 >= window.innerHeight - 200 ) {
        vely13 = vely13 * (-1);
    }

    movingText13.style.left = x13 + "px";
    movingText13.style.top = y13 + "px";
    const dx13 = (mouseX - (200 / 2)) - x13;
    const dy13 = (mouseY - (200 / 2)) - y13;
    const distance13 = Math.sqrt((dx13 * dx13) + (dy13 * dy13));

    movingText14
    x14 += velx14;
    y14 += vely14;

    if( x14 <= 0 || x14 >= window.innerWidth - 200 ) {
        velx14 = velx14 * (-1);
    }

    if( y14 <= 0 || y14 >= window.innerHeight - 200 ) {
        vely14 = vely14 * (-1);
    }

    movingText14.style.left = x14 + "px";
    movingText14.style.top = y14 + "px";
    const dx14 = (mouseX - (200 / 2)) - x14;
    const dy14 = (mouseY - (200 / 2)) - y14;
    const distance14 = Math.sqrt((dx14 * dx14) + (dy14 * dy14));


    if( distance <= 300 ) { 
        if( isMovingText1Entered === false ) { 
            velx1 = velx1 * (-1);
            vely1 = vely1 * (-1);

            isMovingText1Entered = true; 

            setTimeout(function() { 
                isMovingText1Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText2Entered === false ) { 
            velx2 = velx2 * (-1);
            vely2 = vely2 * (-1);

            isMovingText2Entered = true; 

            setTimeout(function() { 
                isMovingText2Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText3Entered === false ) { 
            velx3 = velx3 * (-1);
            vely3 = vely3 * (-1);

            isMovingText3Entered = true; 

            setTimeout(function() { 
                isMovingText3Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText4Entered === false ) { 
            velx4 = velx4 * (-1);
            vely4 = vely4 * (-1);

            isMovingText4Entered = true; 

            setTimeout(function() { 
                isMovingText4Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText5Entered === false ) { 
            velx5 = velx5 * (-1);
            vely5 = vely5 * (-1);

            isMovingText5Entered = true; 

            setTimeout(function() { 
                isMovingText5Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText6Entered === false ) { 
            velx6 = velx6 * (-1);
            vely6 = vely6 * (-1);

            isMovingText6Entered = true; 

            setTimeout(function() { 
                isMovingText6Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
        if( isMovingText7Entered === false ) { 
            velx7 = velx7 * (-1);
            vely7 = vely7 * (-1);

            isMovingText7Entered = true; 

            setTimeout(function() { 
                isMovingText7Entered = false;
            }, 1000);
        }
    }

    if( distance <= 300 ) { 
      if( isMovingText8Entered === false ) { 
          velx8 = velx8 * (-1);
          vely8 = vely8 * (-1);

          isMovingText8Entered = true; 

          setTimeout(function() { 
              isMovingText8Entered = false;
          }, 1000);
      }
    }

    if( distance <= 300 ) { 
        if( isMovingText9Entered === false ) { 
            velx9 = velx9 * (-1);
            vely9 = vely9 * (-1);
  
            isMovingText9Entered = true; 
  
            setTimeout(function() { 
                isMovingText9Entered = false;
            }, 1000);
        }
      }

    if( distance <= 300 ) { 
        if( isMovingText10Entered === false ) { 
            velx10 = velx10 * (-1);
            vely10 = vely10 * (-1);
  
            isMovingText10Entered = true; 
  
            setTimeout(function() { 
                isMovingText10Entered = false;
            }, 1000);
        }
      }

    if( distance <= 300 ) { 
        if( isMovingText11Entered === false ) { 
            velx11 = velx11 * (-1);
            vely11 = vely11 * (-1);
  
            isMovingText11Entered = true; 
  
            setTimeout(function() { 
                isMovingText11Entered = false;
            }, 1000);
        }
      }
    
    if( distance <= 300 ) { 
        if( isMovingText12Entered === false ) { 
            velx12 = velx12 * (-1);
            vely12 = vely12 * (-1);
  
            isMovingText12Entered = true; 
  
            setTimeout(function() { 
                isMovingText12Entered = false;
            }, 1000);
        }
      }

    if( distance <= 300 ) { 
        if( isMovingText13Entered === false ) { 
            velx13 = velx13 * (-1);
            vely13 = vely13 * (-1);
  
            isMovingText13Entered = true; 
  
            setTimeout(function() { 
                isMovingText13Entered = false;
            }, 1000);
        }
      }

    if( distance <= 300 ) { 
        if( isMovingText14Entered === false ) { 
            velx14 = velx14 * (-1);
            vely14 = vely14 * (-1);
  
            isMovingText14Entered = true; 
  
            setTimeout(function() { 
                isMovingText14Entered = false;
            }, 1000);
        }
      }
    requestAnimationFrame(loop);
}
