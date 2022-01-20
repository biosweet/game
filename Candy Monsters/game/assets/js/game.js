document.addEventListener("DOMContentLoaded" ,function () {
    var candygirlPosition = {
        top: 0,
        left:0
    }
    var monsterPosition = {
        top: 0,
        left: 0
    }
    var isMovingRight = false;
    var isMovingLeft = false;
    var speed = 10;
    var monsterMovingright = false;

    function candyGirlMove() {

      if (isMovingRight && candygirlPosition.left < 1100) {
        candygirlPosition.left += speed; 
          }

          if (isMovingLeft && candygirlPosition.left >= 0) {
            candygirlPosition.left -= speed;

          }
          var mycandygirl = document.getElementById('candyGirl');
           mycandygirl.style.left = candygirlPosition.left + 'px';

    }
    function monsterMove() {

       if (monsterPosition.left == 1000) {
        monsterMovingright = false;
        }
        if (monsterPosition.left == 0) {
            monsterMovingright = true;
        }
        if (monsterMovingright == true) {
            monsterPosition.left += speed;
        } else {
            monsterPosition.left -= speed;
        }
        var mymonster = document.getElementById("monster");
        mymonster.style.left = monsterPosition.left + 'px';
    }

    function gameLoop () {
        monsterMove();
        candyGirlMove();
        shooting();
        requestAnimationFrame(gameLoop);
        count();


    }

    function createBullet() {
        if(score()){
            
            var girlshoot = document.getElementById('candyGirl');
            var eternal = document.getElementById('bul');

            var newDiv = document.createElement("div");
            newDiv.classList.add('bullet');
            eternal.appendChild(newDiv);
            newDiv.style.left = girlshoot.style.left;
            newDiv.style.bottom = "30px"; 
        }
    }
    function shooting () {
        var mooving = document.getElementsByClassName('bullet');
        for (var i = 0; i < mooving.length; i++) {
            
          }
    }

requestAnimationFrame(gameLoop);


    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 39) {
            isMovingRight = true;
        }
        if (e.keyCode == 37) {
            isMovingLeft = true;
        }
        if (e.keyCode == 32) {
            createBullet();
        }
    }, false);
    
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == 39) {
            isMovingRight = false;
        }
        if (e.keyCode == 37) {
            isMovingLeft = false;
        }
    }, false);
},false);
