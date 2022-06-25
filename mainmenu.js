function mmUpdate() {
    //Makes MM Crab walk off screen
    if (menucrab >= 15) {
        craban++;
        if (craban >= 20) {craban = 0; mnucrab.src = "textures/crab1.png";}
        else if (craban >= 15) {mnucrab.src = "textures/crab1w1mm.png";}
        else if (craban >= 10) {mnucrab.src = "textures/crab1w2mm.png";}
        else if (craban >= 5) {mnucrab.src = "textures/crab1w3mm.png";}
        mnucrabpos++;
        mnucrab.style.left = `${45 - mnucrabpos / 7.5}%`;
        mnusign.style.left = `${45 - mnucrabpos / 7.5}%`;
    }
}

function mmRender() {
    //If in MM, Color Canvas
    if (mm) {
        ctx.fillStyle = '#1f1f38';
        ctx.fillRect(0, 0, cnv.width, cnv.height);
    }
}