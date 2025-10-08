let button = document.getElementById ('button')
let form = document.getElementById ('form')
let message = document.getElementById ('message')
let link = document.getElementById ('link')

const secretNumber = Math.floor(Math.random() * 50);
let attempts = 5 ;

button.onclick = function(){
    const input = document.getElementById("input");
    if(input.value != ""){

        if(input.value < secretNumber){
            message.innerText = 'Le nombre est plus grand que' + input.value + '';
            message.style.color ="#1d1c1cff"
        }else if (input.value > secretNumber) {
             message.innerText = 'Le nombre est plus petit que' + input.value + '';
             message.style.color ="#131313ff"
        }

        if (attempts == 0){
            message.innerText = 'Vous avez perdu, il fallait écrire' + secretNumber + '!';
            message.style.color = "red";
            form.style.display = "none";
            link.style.display = "flex";
        }
        attempts--;

        if(input.value == secretNumber){
            message.innerText = 'Félicitations, vous avez trouvé le nombre mystère' + secretNumber + '!'
            message.style.color = "green";
            form.style.display = "none";
            link.style.display = "flex";
        }

      }else{
        message.innerText = "Veuillez insérer un nombre compris entre 1 et 50";
        message.style.color = "red";
      }
}