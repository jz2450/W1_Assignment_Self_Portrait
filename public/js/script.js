var burp;

window.addEventListener('load', function() {
    // image animation
    console.log("loaded");
    let eyes = document.getElementById('eyes');
    let glasses = document.getElementById('glasses');
    burp = document.getElementById('burp');
    console.log(burp);
    // console.log(eyes);
    // console.log(glasses);
    eyes.addEventListener('mouseover', function() {
        // console.log('mouseovered');
        glasses.classList.add('mouseover');
        playBurp();
    });
    eyes.addEventListener('mouseleave', function() {
        // console.log('mouseoff');
        glasses.classList.remove('mouseover');
    })

    // audio
});

function playBurp() {
    console.log("play dat burp");
    burp.play();
}