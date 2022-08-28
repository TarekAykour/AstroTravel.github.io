// solarsystem
const planets = document.querySelectorAll(".outline");
const planetImages = document.querySelectorAll(".outline img");
const perihelions = document.querySelectorAll(".perihelion");
const diameters = document.querySelectorAll(".diameter");
const data = "{{ solarplanets }}";
const sunDiameter = document.querySelector(".sun-diameter")
const sunImage = document.querySelector(".sun-img");


//sun
sunImage.style.width = `${parseFloat(sunDiameter.innerText) / 50000}%`;

// loop through planet images
for(let i =0; i < planetImages.length; i++){
    for(let j =0; j < diameters.length; j++){
        // check if name of diamater match planet name
        if(planetImages[i].name == diameters[j].getAttribute('value')){
            // set width of planetIMAGE
            planetImages[i].style.width = `${parseFloat(diameters[j].innerText) / 8000 }%`;
            if(
                planetImages[i].name == 'Mercury' ||
                planetImages[i].name == 'Venus' ||
                planetImages[i].name == 'Earth' ||
                planetImages[i].name == 'Mars'
                ){
                    planetImages[i].style.width = `${parseFloat(diameters[j].innerText) / 1500 }%`;
                }
        }
    }
}


//distance from the sun
//loop thorugh the planet orbits
for(let i =0; i < planets.length; i++){
    //loop through the perihelion
    for (let j= 0; j < perihelions.length; j++){
        if(planets[i].getAttribute('value') == perihelions[j].getAttribute('value')){
            //set scale
            let scale = (parseFloat(perihelions[j].innerText) / (window.innerWidth + window.innerHeight) / 2)  / 500    ;

            //width, height of orbit
            planets[i].style.height = `${50+ ((scale + (window.innerHeight/2)) ) /  25 }%`;
            planets[i].style.width = `${ 50+ ((scale + (window.innerWidth /2) ) ) / 25  }%`;


            if(planets[i].style.height > 100){
                planets[i].style.height = '100%';
            }
            else if(planets[i].style.width > 100){
                planets[i].style.width = '100%';
            }
            
            
              if(
                planets[i].getAttribute('value') == 'Mercury' ||
                planets[i].getAttribute('value') == 'Venus' ||
                planets[i].getAttribute('value') == 'Earth' ||
                planets[i].getAttribute('value') == 'Mars'
                ){
                    planets[i].style.height = `${25+ ((scale + (window.innerHeight/2)) ) /  50}%`;
                    planets[i].style.width = `${50+ ((scale + (window.innerWidth/2)) ) /  50}%`;


                }
            if(planets[i].getAttribute('value') == 'Saturn'){
                planets[i].style.height = `${25+ ((scale + (window.innerHeight/2)) ) /  35}%`;
                planets[i].style.width = `${25+ ((scale + (window.innerWidth/2)) ) /  35}%`;
            }
            if(planets[i].getAttribute('value') == 'Jupiter'){
                planets[i].style.height = `${25+ ((scale + (window.innerHeight/2)) ) /  20}%`;
                planets[i].style.width = `${25+ ((scale + (window.innerWidth/2)) ) /  20}%`;
            }
          
        }
    }
}

 // selecting Mercury, Venus, Earth and Mars
