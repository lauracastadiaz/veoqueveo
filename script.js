

function recomendar(genero){
    let elementoEdad = document.getElementById("edad");
    let edad = elementoEdad.value;
    
    let elementoRecomendacion = document.getElementById("recomendacion");
    
    switch(genero){
        case 'comedia':
            if (edad<12) {
                // elementoRecomendacion.textContent = "Elli y el equipo de monstruos"
                elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/soloencasa.jpeg> <p>Solo en Casa</p>';
            } else{
                if(edad<18){
                    // elementoRecomendacion.textContent = "Yo no soy esa"
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/voyapasarmelobien.jpg> <p>Voy A Pasármelo Bien</p>';
                } else {
                    // elementoRecomendacion.textContent = "Elli y el equipo de monstruos, Yo no soy esa, Venom: El último Baile";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/Ocho_apellidos_marroquais.jpg> <p>Ocho Apellidos Marroquíes</p>';
                }
            }
        break;
        case 'terror':
            if (edad<12) {
                elementoRecomendacion.textContent = "No te recomiendo ver terror aún";
            } else{
                if(edad<16){
                    // elementoRecomendacion.textContent = "Terrifier 3"
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/m3gan.jpg> <p>M3gan</p>';
                } else {
                    // elementoRecomendacion.textContent = "Terrifier 3, Smile 2, La Sustancia"
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/expediente-warren.jpg > <p>Expediente Warren</p>';
                }
            }
        break;
        case 'animacion':
            if (edad<12) {
                // elementoRecomendacion.textContent = "Robot Salvaje";
                elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/canta.jpeg> <p>¡Canta!</p>';
            } else{
                if(edad<16){
                    // elementoRecomendacion.textContent = "Robot Salvaje, Elli y el equipo de monstruos";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/robot_salvaje.jpg > <p>Robot Salvaje</p>';
                } else {
                    // elementoRecomendacion.textContent = "Robot Salvaje, Elli y el equipo de monstruos";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/elemental.jpg > <p>Elemental</p>';
                }
            }
        break;
        case 'drama':
            if (edad<12) {
                // elementoRecomendacion.textContent = "Anora"
                elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/wonder.jpeg > <p>Wonder</p>';
            } else{
                if(edad<16){
                    // elementoRecomendacion.textContent = "Escape, La Infiltrada";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/oneday.jpg > <p>One Day</p>';
                } else {
                    // elementoRecomendacion.textContent = "Jurado Nº2, La Infiltrada";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/marrowbone.jpg > <p>El Secreto de Marrowbone</p>';
                }
            }
        break;
        case 'fantasia':
            if (edad<12) {
                // elementoRecomendacion.textContent = "Robot Salvaje, Elli y el equipo de monstruos";
                elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/harrypotter.jpg > <p>Harry Potter y La Piedra Filosofal</p>';
            } else{
                if(edad<16){
                    // elementoRecomendacion.textContent = "Venom: El Último Baile";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/divergente.jpg > <p>Divergente</p>';
                } else {
                    // elementoRecomendacion.textContent = "Venom: El Último Baile";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/juegosdelhambre.jpg > <p> Los Juegos del Hambre</p>';
                }
            }
        break;
        case 'musical':
            if (edad<12) {
                // elementoRecomendacion.textContent = "Robot Salvaje, Elli y el equipo de monstruos";
                elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/camprock.jpg > <p>Camp Rock</p>';
            } else{
                if(edad<16){
                    // elementoRecomendacion.textContent = "Venom: El Último Baile";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/hocuspocus.jpeg > <p>Hocus Pocus 2</p>';
                } else {
                    // elementoRecomendacion.textContent = "Venom: El Último Baile";
                    elementoRecomendacion.innerHTML = '<img width="300px" height="400px" src=img/prom.jpg > <p> PROM</p>';
                }
            }
        break;
    }


}