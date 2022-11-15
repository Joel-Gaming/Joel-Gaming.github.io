// fireworks
// Joel Penner
// Date

class Particle { 
  constructor(x, y) { 
    this.x = x; 
     this.y = y; 
     this.dx = random(-5, 5); 
     this.dy = random(-5, 5); 
     this.diameter = 5; 
     this.r = 255; 
     this.g = 0; 
     this.b = 0; 
     this.alpha = 255; 
     this.color = color(this.r, this.g, this.b, this.alpha); 
   } 
 
 
   update() { 
     //move 
     this.x += this.dx; 
     this.y += this.dy; 
  
     //making it more transparent 
     this.alpha--; 
     this.color = color(this.r, this.g, this.b, this.alpha); 
   } 
 
   display() { 
     fill(this.color); 
     stroke(this.color); 
     circle(this.x, this.y, this.diameter); 
   } 
 } 
 
 let theFireworks = [];  
 
 function setup() { 
   createCanvas(windowWidth, windowHeight); 
 } 
 
 function draw() { 
   background("black"); 
   for (let i = 0; i < theFireworks.length; i++) { 
     theFireworks[i].update(); 
     theFireworks[i].display(); 
   } 
 }  
 
 function mousePressed() {
   let someParticle;
   for (let i = 0; i < 100; i++) { 
     someParticle = new Particle(mouseX, mouseY); 
     theFireworks.push(someParticle); 
   } 
 } 
