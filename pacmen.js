      
      
       const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
    ];
   
    const pacMen = []; // This array holds all the pacmen

    function setToRandom(scale) {
        return {
            x: Math.random() * scale,
            y: Math.random() * scale
        }
    }
    // Factory to make a PacMan at a random position with random velocity
    function makePac() {
        // returns an object with random values scaled {x: 33, y: 21}
        let velocity = setToRandom(10); // {x:?, y:?}
        let position = setToRandom(200);
        let mouthOpen = true;
        // Add image to div id = game
        let game = document.getElementById('game');
        let newimg = document.createElement('img');
        newimg.style.position = 'absolute';
        newimg.src = 'PacMan1.png';
        newimg.width = 126;
        newimg.style.left = position.x;
        newimg.style.top = position.y;
        let game2 = document.getElementById('game');
        let newimg2 = document.createElement('img');
        newimg2.style.position = 'absolute';
        newimg2.src = 'PacMan1.png';
        newimg2.width = 140;
        newimg2.style.left = position.x;
        // set position here 
        newimg2.style.top = position.y;

        let game3 = document.getElementById('game');
        let newimg3 = document.createElement('img');
        newimg3.style.position = 'absolute';
        newimg3.src = 'PacMan1.png';
        newimg3.width = 135;
        newimg3.style.left = position.x;
        // set position here 
        newimg3.style.top = position.y;

        // add new Child image to game
        game.appendChild(newimg);
        game2.appendChild(newimg2);
        game3.appendChild(newimg3);
        // return details in an object
        return {
            position,
            velocity,
            newimg, newimg2, newimg3
        }
    }
        // want to make another PacMan?
        

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        pacMen.forEach((item) => {
            checkCollisions(item)
            item.position.x += item.velocity.x;
            item.position.y += item.velocity.y;

            item.newimg.style.left = item.position.x;
            item.newimg.style.top = item.position.y;
            item.newimg2.style.left = item.position.x;
            item.newimg2.style.top = item.position.y;
            item.newimg3.style.left = item.position.x;
            item.newimg3.style.top = item.position.y;
            let chomp = item.mouthOpen ? 0 : 1;
            item.mouthOpen = !item.mouthOpen;
            let faceDirection = item.velocity.x > 0 ? 0 : 1;
            item.newimg.src = pacArray[faceDirection][chomp];

            let chomp2 = item.mouthOpen ? 0 : 1;
            item.mouthOpen = !item.mouthOpen;
            let faceDirection2 = item.velocity.x > 0 ? 0 : 1;
            item.newimg2.src = pacArray[faceDirection][chomp];

            let chomp3 = item.mouthOpen ? 0 : 1;
            item.mouthOpen = !item.mouthOpen;
            let faceDirection3 = item.velocity.x > 0 ? 0 : 1;
            item.newimg3.src = pacArray[faceDirection][chomp];

        })
        setTimeout(update, 50);
    }

    function checkCollisions(item) {
        if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
        // detect collision with all walls and make pacman bounce
        if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;

        if (item.position.x + item.velocity.x + item.newimg2.width > window.innerWidth || item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
        // detect collision with all walls and make pacman bounce
        if (item.position.y + item.velocity.y + item.newimg2.height > window.innerHeight || item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;

        if (item.position.x + item.velocity.x + item.newimg3.width > window.innerWidth || item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
        // detect collision with all walls and make pacman bounce
        if (item.position.y + item.velocity.y + item.newimg3.height > window.innerHeight || item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
    }
    

    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    
    }