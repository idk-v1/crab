function setup() {
    //Removes MM Elements
    mnucrab.remove();
    mnucracks.remove();
    mnushell.remove();
    mnusign.remove();
    document.getElementById('title').remove();
    document.getElementById('strt').remove();
    document.getElementById('bttntxt').remove();
    mm = false;

    //Adds Event Listeners
    document.addEventListener('keydown', function(event) {
    if (event.key == "a" || event.key == "A") {left = true; touch = false;}
    if (event.key == "d" || event.key == "D") {right = true; touch = false;}
    if (event.key == "w" || event.key == "W") {up = true; touch = false;}
    if (event.key == "s" || event.key == "S") {down = true; touch = false;}
    if (event.key == "Shift") {shift = true; hidden = true; touch = false;}
    if (event.key == "Enter") enter = true;
    if (event.getModifierState("CapsLock")) {caps = true; touch = false;}
    });
    document.addEventListener('keyup', function(event) {
    if (event.key == "a" || event.key == "A") left = false;
    if (event.key == "d" || event.key == "D") right = false;
    if (event.key == "w" || event.key == "W") up = false;
    if (event.key == "s" || event.key == "S") down = false;
    if (event.key == "Shift") {shift = false; hidden = false;}
    if (event.key == "Enter") enter = false;
    if (event.key == "Escape") play = !play;
    if (!event.getModifierState("CapsLock")) {caps = false;}
    });
    document.addEventListener('touchstart', function(event) {
        touch = true;
    });
    rc.addEventListener('touchstart', function(event) {right = true});
    lc.addEventListener('touchstart', function(event) {left = true});
    uc.addEventListener('touchstart', function(event) {up = true});
    dc.addEventListener('touchstart', function(event) {down = true}); 
    hc.addEventListener('touchstart', function(event) {hidden = !hidden}); 
    rc.addEventListener('touchend', function(event) {right = false});
    lc.addEventListener('touchend', function(event) {left = false});
    uc.addEventListener('touchend', function(event) {up = false});
    dc.addEventListener('touchend', function(event) {down = false});  
    hc.addEventListener('touchend', function(event) {});      
}