const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLght = (event) => {
    stopAutomatic();
    turnON[event.target.id]();

}
const nextIndex = () => {
    if(colorIndex < 2){
        colorIndex++
    }else {
        colorIndex = 0;
    }
}

const changecolor = () => {
    const colors =['red','yellow','green']
    const color = colors[colorIndex];
    turnON[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnON = {
    'red': ()=> img.src = 'vermelho.png',
    'yellow': ()=> img.src = 'amarelo.png',
    'green': () => img.src = 'verde.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000)
}

buttons.addEventListener('click', trafficLght);