let gurbani = [
    `O dear friend, know this in your mind.
    The world is entangled in its own pleasures; 
    no one is for anyone else. Ang: 634`,
    
    `Why, O Siblings of Destiny, do you strut around, 
    all puffed up with pride? Have you forgotten those days, 
    when you were hanging, face down, for ten months? Ang: 634`,
    
    `I am a sacrifice to Your Name, O True Lord.
    The One Lord is the Cause of causes; there is 
    no other at all. Ang: 634`,
    
    `O mind, contemplate the Sanctuary of God.
    Meditating on Him in remembrance, Ganika the 
    prostitute was saved; enshrine His Praises 
    within your heart. Ang: 634`,
    
    `O dear friend, know this in your mind.
    The world is entangled in its own pleasures;
     no one is for anyone else. Ang: 634`,

]

function displayBaani (){
let index = Math.floor(Math.random() * gurbani.length);

let baani = `<div class="card">
<img src="./icons/favicon.png">
<p>${gurbani[index]}</p>
<img src="./icons/favicon.png">
</div>
`;

let div = document.querySelector('#baani');
div.innerHTML = baani;
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', displayBaani); 
