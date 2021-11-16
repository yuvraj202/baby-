
img = "";
yuvraj="";
video="";
objects="";



function preload()
{
   song1=loadSound("chinese_music.mp3");
}


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded()
{
  console.log("modelLoaded");
}

function draw() {
  image(video, 0, 0, 380, 380);
  if(yuvraj != "")
  {
    objectDetector.detect(video,gotResult)
  

     for(i=0; i < objects.length; i++)
     {
       document.getElementById("status").innerHTML="Status : Objects Detected";
       document.getElementById("number_of_objects").innerHTML="Number of objects detected are :" +object.length;

       fill('#FF0000');
       percent =floor(objects[i].confidence * 100);
       text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
       noFill();
       stroke("#FF0000");
       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       song1.stop();
     }
    
    }
    else
    {
      song1.play("chinese_music.mp3")
     }

 
}

