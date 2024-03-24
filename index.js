var buttoncolors=["red","blue","green","yellow"];
var userClickedPattern=[];
var gamepattern=[];
function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("h1").text("Level-"+level);
    var randomnumber=Math.floor(Math.random()*4);
    var randomchosencolor=buttoncolors[randomnumber];
    gamepattern.push(randomchosencolor);
    $("#"+randomchosencolor).addClass("pressed");
    setTimeout(function(){
    $("#"+randomchosencolor).removeClass("pressed");
},150);
    playSound(randomchosencolor);
}

$(".btn").on("click",function(){
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatepress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});
function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatepress(userChosenColor)
{
    $("#"+userChosenColor).addClass("pressed");
    setTimeout(function(){
    $("#"+userChosenColor).removeClass("pressed");
},150);
}
var level=0;
var started=false;
$(document).on("keypress",function()
{

    if(!started)
    {
        nextSequence();
    
    $("#level-title").text("Level-"+level);
     started=true;
    }
});
function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamepattern[currentLevel])
    {
        console.log("success");
        if(userClickedPattern.length==gamepattern.length)
        {
            setTimeout(function ()
            {
               nextSequence();
            },1000)
        }
    }
    else
    {
        $("body").addClass("game-over");
        setTimeout(function()
        {
           $("body").removeClass("game-over");
        },150)
        console.log("wrong");
        $("h1").text("game over press any key to restart");
        startover();
    }
}
function startover()
{
    level=0;
    started=false;
    gamepattern=[];
}

    


