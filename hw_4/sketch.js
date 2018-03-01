function setup(){
//created a 500 by 500 pixel canvas to draw on
  createCanvas(500,500);
//I chose a light gray as my background using RGB
background(220, 220, 220)

}
//This is the start of my draw function
function draw(){
//Using push to create a master sandbox
push()
//Translating 250, 250 to center of grid
translate(250, 250)
//now using a green for my main shape
  fill(0,128,0);
//chose not to use strokes in this drawing
  noStroke();
//this is the head of my monster
  rect(-100, -150, 200, 300, 50);
//these triangles are the eyebrows, they were added on later but for trouble shooting i have decided to put them in "master sandbox"

fill(0)

  triangle(-80, -80, -75, -100, -20, -80)

  triangle(80, -80, 75, -100, 20, -80)
//These are the famous bolts on Frakensteins monster
fill(100)
//first part of left bolt, sticking out of head
  rect(-120, -60, 20, 20)
//first part of right bolt, sticking out of head
  rect(100, -60, 20, 20)
//end of left bolt
  rect(-125, -70, 10, 40)
//end of right bolt
  rect(115, -70, 10, 40)
//text of drawing
  text('Frankensteins Monster', -60, -200)
//start of sandbox inside master sandbox
    push()
//This translation made my project very difficult to follow
    translate(0, 0)
//A white color for eyes, teeth
    fill(264)
//Left eyeball
    ellipse(-50, -50, 50, 50)
//Right eyeball
    ellipse(50, -50, 50, 50)
//end of second sandbox
    pop()
//start of third sandbox
    push()
//black color for pupil
    fill(0)
//left pupil
    ellipse(-50, -50, 10, 10)
//right pupil
    ellipse(50, -50, 10, 10)
//end of third sandbox
    pop()
//start of fourth sandbox (mouth)
    push()
//Red color for mouth
    fill(255, 0, 0)
//rectangle shape for mouth
    rect(-75, 25, 150, 50, 50)
//end of mouth design
    pop()
//start of teeth sandbox
    push()
//white color for teeth
    fill(264)
//left tooth placement and shape
    rect(-50, 25, 25, 25)
//middle tooth placement and shape
    rect(-12.5, 50, 25, 25)
//right tooth placement and shape
    rect(25, 25, 25, 25)
//end of sandbox
    pop()
//end of Master Sandbox
  pop()
}
