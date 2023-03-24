function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // // https://p5js.org/reference/#/p5/circle
    // fill("teal")
    // circle(300, 200, 200); // x, y, diameter

    //  // https://p5js.org/reference/#/p5/circle
    //  fill("teal")
    //  circle(700, 200, 400); // x, y, diameter

    //     // https://p5js.org/reference/#/p5/circle
    //     fill("red")
    //     circle(600, 100, 100); // x, y, diameter
    //       // https://p5js.org/reference/#/p5/circle
    //       fill("red")
    //       circle(800, 100, 100); // x, y, diameter
    //         // https://p5js.org/reference/#/p5/circle
    //         fill("green")
    //         circle(800, 100, 50); // x, y, diameter
    //           // https://p5js.org/reference/#/p5/circle
    //       fill("blue")
    //       circle(600, 100, 50); // x, y, diameter
    //       https://p5js.org/reference/#/p5/ellipse
    //       fill('red');
    //       ellipse(700, 200, 60, 100);


    // // https://p5js.org/reference/#/p5/rect
    // fill('hotpink')
    // rect(600, 300, 200, 55);
    

    // // https://p5js.org/reference/#/p5/rect
    // fill('hotpink')
    // rect(30, 20, 55, 55);

    // // add your drawing here:
    // // https://p5js.org/reference/#/p5/point
    // // point(110, 20);

    // // https://p5js.org/reference/#/p5/text
    // // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawCreature();
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature() {
 
 fill("teal")
 circle(300, 200, 200); // x, y, diameter

  
  fill("teal")
  circle(700, 200, 400); // x, y, diameter

     fill("red")
     circle(600, 100, 100); // x, y, diameter
       
    fill("red")
    circle(800, 100, 100); // x, y, diameter
        
     fill("green")
     circle(800, 100, 50); // x, y, diameter
       
       fill("blue")
       circle(600, 100, 50); // x, y, diameter
      
       fill('red');
       ellipse(700, 200, 60, 100);


 // https://p5js.org/reference/#/p5/rect
 fill('hotpink')
 rect(600, 300, 200, 55);

}