song1 = "";
song2 = "";
scoreLeftWrist = 0;

function preload()
{
    song1 = loadSound("rickroll.mp3");
    song2 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)

    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
        
        console.log("Left wrist X : " + leftWristX + ", Left wrist Y : " + leftWristY);
        console.log("Right wrist X : " + rightWristX + ", Right wrist Y : " + rightWristY);
    }
}

function modelLoaded()
{
    console.log('PoseNet working status is affirmative');
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}