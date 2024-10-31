const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');

const handleClick = async()=> {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    
    adviceId.innerHTML = data.slip.id;
    adviceText.innerHTML = data.slip.advice;
}