let isButtonDisabled = false;

function rollDice() {
    
    if (isButtonDisabled) {
        return;
    }

   
    isButtonDisabled = true;

    const diceElement = document.getElementById('dice');
    const resultElement = document.getElementById('result');

    
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    
    gsap.to(diceElement, { x: -40, rotation: -400, duration: 0.05, repeat: 5, yoyo: true, ease: 'power2.inOut', onComplete: function () {
        
        diceElement.src = `assets/image/dice_000${randomNumber}.png`;

        
        gsap.to(diceElement, { rotation: 400, duration: 0.5, ease: 'power2.inOut', onComplete: function () {
            gsap.set(diceElement, { x: 0, rotation: 0 });

            
            setTimeout(function () {
                resultElement.textContent = `You rolled a ${randomNumber}!`;

                
                setTimeout(function () {
                    isButtonDisabled = false;
                }, 1000); 
            }, 200); 
        } });
    } });
}
