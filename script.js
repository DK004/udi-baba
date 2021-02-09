
score = 0;
cross = true;


document.onkeydown = function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38){
        mario = document.querySelector('.mario');
        mario.classList.add('animateMario');
        setTimeout(() => {
            mario.classList.remove('animateMario')
        }, 700);
    }

    if(e.keyCode==39){
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 100 + "px";
    }

    if(e.keyCode==37){
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 100) + "px";
    }
}
//aniDur =  parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
aniDur = 5;
setInterval(() => {
    mario = document.querySelector('.mario');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));
    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
   
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(mx-ox);
    offsetY = Math.abs(my-oy);
    
    
    if(offsetX< 73 && offsetY< 52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        mario.classList.remove('animateMario')
        mario.style.left = (marioX - 90) + "vw";
      
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        
        setTimeout(() => {
            console.log(aniDur)
            newDur = aniDur - 0.2;
            obstacle.style.animatioDuration = newDur + 's'; 
            console.log(newDur)   
            aniDur = newDur;
        }, 500);
       
        
    }

}, 10);


function updateScore(score){
    scoreCon.innerHTML = "Your Score: "+ score
}