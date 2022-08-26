const planetArray = [
    {"Name": "Uranus", "Info":"Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​"},
    {"Name": "Neptune", "Info":"Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.NASA's Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system."},
    {"Name": "Saturn", "Info": "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium."},
    {"Name": "Jupiter", "Info":"Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe. Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years."},
    {"Name": "Mars","Info":"Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.NASA currently has two rovers (Curiosity and Perseverance), one lander (InSight), and one helicopter (Ingenuity) exploring the surface of Mars. Perseverance rover – the largest, most advanced rover NASA has sent to another world – touched down on Mars on Feb. 18, 2021, after a 203-day journey traversing 293 million miles (472 million kilometers). The Ingenuity helicopter rode to Mars attached to the belly of Perseverance.Perseverance is one of three spacecraft that arrived at Mars in 2021. The Hope orbiter from the United Arab Emirates arrived on Feb. 9, 2021. China’s Tianwen-1 mission arrived on Feb. 10, 2021, and includes an orbiter, a lander, and a rover. Europe and India also have spacecraft studying Mars from orbit.In May 2021, China became the second nation to ever land successfully on Mars when its Zhurong Mars rover touched down. An international fleet of eight orbiters is studying the Red Planet from above including three NASA orbiters: 2001 Mars Odyssey, Mars Reconnaissance Orbiter, and MAVEN.These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago."},
    {"Name": "Earth","Info":"Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.<br> While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.<br>The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”"},
    {"Name": "Venus","Info":"Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough to melt lead. The surface is a rusty color and it’s peppered with intensely crunched mountains and thousands of large volcanoes. Scientists think it’s possible some volcanoes are still active.Venus has crushing air pressure at its surface – more than 90 times that of Earth – similar to the pressure you'd encounter a mile below the ocean on Earth.Another big difference from Earth – Venus rotates on its axis backward, compared to most of the other planets in the solar system. This means that, on Venus, the Sun rises in the west and sets in the east, opposite to what we experience on Earth. (It’s not the only planet in our solar system with such an oddball rotation – Uranus spins on its side.)Venus was the first planet to be explored by a spacecraft – NASA’s Mariner 2 successfully flew by and scanned the cloud-covered world on Dec. 14, 1962. Since then, numerous spacecraft from the U.S. and other space agencies have explored Venus, including NASA’s Magellan, which mapped the planet's surface with radar. Soviet spacecraft made the most successful landings on the surface of Venus to date, but they didn’t survive long due to the extreme heat and crushing pressure. An American probe, one of NASA's Pioneer Venus Multiprobes, survived for about an hour after impacting the surface in 1978.More recent Venus missions include ESA’s Venus Express (which orbited from 2006 until 2016) and Japan’s Akatsuki Venus Climate Orbiter (orbiting since 2016).NASA’s Parker Solar Probe has made multiple flybys of Venus. On Feb. 9, 2022, NASA announced the spacecraft had captured its first visible light images of the surface of Venus from space during its February 2021 flyby."},
    {"Name": "Mercury","Info":"The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.Because of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset."},
];



const planetModals = document.querySelectorAll(".outline img");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".fa-times");
let planetName = document.querySelector(".planetName");
let distance = document.querySelector(".distance");
let modalImage = document.querySelector(".modalImage");
const gravityPlanets = document.querySelectorAll(".gravity");
const moons = document.querySelectorAll(".moons");
const planetInfo = document.querySelector(".planetInfo");




// set planets color

planetModals.forEach((planet)=> {
    // open modal
    planet.addEventListener("click", ()=> {
    modal.style.display = "grid";

    //set planet innerText
    planetName.innerText = planet.name;
    //set text color
    planetName.style.color = "#333";
    //set image
    modalImage.src = `./static/images/${planet.name}.png`;

    // set link
    document.querySelector(".modal a ").innerText = `Travel to ${planet.name}`;

    //send form through link


    //set gravity of planets
    for(let g =0; g < gravityPlanets.length; g++){
        if(gravityPlanets[g].getAttribute("value") == planet.name){
            document.querySelector(".gravityDisplay").innerText = `Gravity: ${gravityPlanets[g].innerText}`;
        }
    }

    //display amount of moons
    for(let m =0; m < moons.length; m++){
        if(moons[m].getAttribute("value") == planet.name){
            document.querySelector(".moonsDisplay").innerText = `Moons: ${moons[m].innerText}`;
            if(moons[m].innerText == 0){
                document.querySelector(".moonsDisplay").innerText = `No moons on ${planet.name}`;
            }
        }
    }


    //display distance from the sun
    for(let i =0; i < perihelions.length; i++){
        if(perihelions[i].getAttribute("value") == planetName.innerText){
            distance.innerText = `Distance from the sun: ${perihelions[i].innerText} km`;
            document.querySelector(".modal-info").appendChild(distance);
        }
    }


    //more planet info
    for(let planet =0; planet < planetArray.length; planet++){
        if(planetArray[planet].Name == planetName.innerText){
            planetInfo.innerText = planetArray[planet].Info;
        }
    }


    // Background colors

    if (planetName.innerText == "Uranus"){
        modal.style.background = "#66aef2";
    }
    if (planetName.innerText == "Neptune"){
        modal.style.background = "#697cfa";
    }
    if (planetName.innerText == "Saturn"){
        modal.style.background = "#ead6b8";
    }
    if (planetName.innerText == "Jupiter"){
        modal.style.background = "#ffcf40";
    }
    if (planetName.innerText == "Mars"){
        modal.style.background = "#ff7369";
    }
    if (planetName.innerText == "Earth"){
        modal.style.background = "#6b93d6";
    }
    if (planetName.innerText == "Venus"){
        modal.style.background = "#ffe7bf";
    }
    if (planetName.innerText == "Mercury"){
        modal.style.background = "#cfa780";
    }
    })


    // close modal
    closeModal.addEventListener("click", ()=> {
    if(modal.style.display == "grid"){
        modal.style.display = "none";
    }
})

})

