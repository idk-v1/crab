function update() {
    //Hides Controls if Key Detected
    if (touch) {
        rc.style.display = "block"; lc.style.display = "block"; uc.style.display = "block"; dc.style.display = "block"; hc.style.display = "block";} 
    else {
        rc.style.display = "none"; lc.style.display = "none"; uc.style.display = "none"; dc.style.display = "none"; hc.style.display = "none";}

    //Resizes Canvas to Square
    cnv.width = window.innerHeight;
    cnv.height = window.innerHeight;

    //Blurs Screen on Pause
    if (!play) {cnv.style.filter = "blur(10px)";}
    else {cnv.style.filter = "blur(0px)";}

    //Game Update Loop
    if (play) {

        //Day-Night Cycle
        time++;
        if (time >= 10000) time = 0;

        //Detects if in Water
        if (cblock(1) || cblock(2) || cblock(3) || cblock(4) || cblock(5)) inWater = true; else inWater = false;

        //FIX LATER: Decomplicate collision checks
        //Collision Checks
        if (left && -x > 0 && world1[Math.round((Math.ceil((-x - 13) / 48)) + (Math.floor(-y / 48)) * world1w) - 1] != 0) {
            xv += 10 * (hidden ? 0 : 1);
        }
        if (right && -x < world1w * 48 - 13 && world1[Math.round((Math.floor((-x + 13) / 48)) + (Math.floor(-y / 48)) * world1w)] != 0) {
            xv += -10 * (hidden ? 0 : 1);
        }
        if (up && -y > 0 && world1[Math.round((Math.floor(-x / 48)) + (Math.floor((-y - 13) / 48)) * world1w)] != 0) {
            yv += 10 * (hidden ? 0 : 1);
        }
        if (down && -y < world1h * 48 - 13 && world1[Math.round((Math.floor(-x / 48)) + (Math.ceil((-y + 13) / 48)) * world1w) - world1w] != 0) {
            yv += -10 * (hidden ? 0 : 1);
        }

        //Return Player to Map
        if (-x < 0) x = 0;
        if (-x > world1w * 48) x = -world1w * 48;
        if (-y < 0) y = 0;
        if (-y > world1h * 48) y = -world1h * 48;

        //Move Player
        xv = Math.round(xv + 2 * ((cblock(2) ? 2 : 0) - (cblock(4) ? 2 : 0))) / (inWater ? 2 : 1);
        yv = Math.round(yv + 2 * ((cblock(1) ? 2 : 0) - (cblock(3) ? 2 : 0))) / (inWater ? 2 : 1);
        y += Math.round(yv / 2);
        x += Math.round(xv / 2);
        xv /= 10;
        yv /= 10;
    }
}