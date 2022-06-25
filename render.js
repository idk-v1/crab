function render() {
    //Clears Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.save();

    //Translate Context Diagonally and to Player, then Scale to 2:1, then Rotate 45deg
    ctx.translate(x * Math.sin(47.125) + 390 * (cnv.width / 750), y * Math.tan(47.125) + 405 * (cnv.height / 750));
    ctx.scale(2 * (cnv.width / 1000), 1 * (cnv.height / 1000));
    ctx.rotate(45 * Math.PI / 180);

    //Loop World Array and Draw Image
    for (let i = 0; i < world1.length; i++) {
        switch(world1[i]) {

            //WATER
            case 1: ctx.drawImage(water1, 0, alt / 2, 32, 32, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 96);
                break;
            case 2: ctx.drawImage(water2, alt / 2, 0, 32, 32, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 96, 48);
                break;
            case 3: ctx.drawImage(water3, 0, 32 - alt / 2, 32, 32, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 96);
                break;
            case 4: ctx.drawImage(water4, 32 - alt / 2, 0, 32, 32, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 96, 48);
                break;
            case 5: ctx.drawImage(water5, 0, 0, 32, 32, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;

            //SAND
            case 6: ctx.drawImage(sand1, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
            case 7: ctx.drawImage(sand2, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
            case 8: ctx.drawImage(sand3, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
            case 9: ctx.drawImage(sand4, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
            case 10: ctx.drawImage((i % 5 == 3 ? sand4 : i % 5 == 2 ? sand3 : i % 5 == 1 ? sand2 : sand1), (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;

            //MOSS
            case 11: ctx.drawImage(moss1, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
            case 12: ctx.drawImage(moss2, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
            case 13: ctx.drawImage(moss3, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
            case 14: ctx.drawImage(moss4, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
            case 15: ctx.drawImage((i % 5 == 3 ? moss4 : i % 5 == 2 ? moss3 : i % 5 == 1 ? moss2 : moss1), (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;

            //GRASS
            case 16: ctx.drawImage(grass1, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
                
            //DIRT
            case 21: ctx.drawImage(dirt1, (i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;

            //VOID
            default: ctx.clearRect((i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
                break;
        }
            //Draw Grid Overlay
            ctx.strokeStyle = "#00000050";
            ctx.strokeRect((i % world1w) * 48 + x, (Math.floor(i / world1w)) * 48 + y, 48, 48);
    }

    //Draws Radial Gradient; Center Clear
    let grad = ctx.createRadialGradient(0, 0, cnv.width * (750 / cnv.height) / 10, 0, 0, cnv.width * (750 / cnv.height) * 1.625);
    grad.addColorStop(0, "#22223300");
    grad.addColorStop(0.125, "rgba(34, 34, 51," + ((time >= 5000 ? (time - 5000) : (5000 - time)) / 37.5 / 150) + ")");
    grad.addColorStop(0.25, "rgba(34, 34, 51," + ((time >= 5000 ? (time - 5000) : (5000 - time)) / 37.5 / 150 + 0.2) + ")");
    grad.addColorStop(0.375, "#222233ff");
    ctx.fillStyle = grad;
    ctx.fillRect(-world1w * 48, -world1h * 48, world1w * 48 * 2, world1h * 48 * 2);

    ctx.restore();
    ctx.save();

    //Draws Shell to Center and Crab if NOT Hidden
    ctx.translate(cnv.width / 2, cnv.height / 2);
    ctx.drawImage(shell1, 0, 0, 32 * (cnv.width / 750), 32 * (cnv.height / 750));
    if (!hidden) ctx.drawImage(crab1, 0, 0, 32 * (cnv.width / 750), 32 * (cnv.height / 750));
    ctx.restore();

    //Day-Night Overlay; From 0 to 10,000 - Blue and Dark; 5,000 Mid - Yellow and Clear
    ctx.fillStyle = `rgba(
    ${((time >= 5000 ? 5000 - (time - 5000) : 5000 - (5000 - time)) / 37.5)},
    ${((time >= 5000 ? 5000 - (time - 5000) : 5000 - (5000 - time)) / 37.5)}, 
    ${((time >= 5000 ? (time - 5000) : (5000 - time)) / 37.5 / 2)}, 
    ${((time >= 5000 ? (time - 5000) : (5000 - time)) / 20000 + 0.125)}
    )`;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    //Draws Debug Screen if Capslock is ENABLED
    document.getElementById('pos').style.fontSize = `${Math.floor(cnv.width / 50)}px`;
    if (caps) {
    document.getElementById('pos').innerHTML = `
    Position: ${(-x).toFixed(1)}x | ${Math.round(-y).toFixed(1)}y <br>
    Speed: ${((-xv)).toFixed(1)}x | ${((-yv)).toFixed(1)}y <br>
    Block ID: ${world1[Math.round((Math.floor(-x / 48)) + (Math.floor(-y / 48)) * world1w)]} <br>
    Array: ${Math.round((Math.floor(-x / 48)) + (Math.floor(-y / 48)) * world1w)} / ${world1.length - 1} | ${world1w}w ${world1h}h <br>
    Canvas Size: ${cnv.width} x ${cnv.height} <br>
    Time: ${time} / 10000upd <br> 
    Overlay: 
    ${((time >= 5000 ? 5000 - (time - 5000) : 5000 - (5000 - time)) / 37.5).toFixed(1)}r |
    ${((time >= 5000 ? 5000 - (time - 5000) : 5000 - (5000 - time)) / 37.5).toFixed(1)}g |
    ${((time >= 5000 ? (time - 5000) : (5000 - time)) / 37.5 / 2).toFixed(1)}b |
    ${(((time >= 5000 ? (time - 5000) : (5000 - time)) / 20000 + 0.125) * 100).toFixed(1)}a <br>
    <span style="color: ${down ? '#00ff00' : '#ff0000'}">down</span>
    <span style="color: ${left ? '#00ff00' : '#ff0000'}">left</span>
    <span style="color: ${right ? '#00ff00' : '#ff0000'}">right</span>
    <span style="color: ${up ? '#00ff00' : '#ff0000'}">up</span>
    <span style="color: ${inWater ? '#00ff00' : '#ff0000'}">inWater</span>
    <span style="color: ${touch ? '#00ff00' : '#ff0000'}">touch</span>
    <span style="color: ${hidden ? '#00ff00' : '#ff0000'}">hidden</span>
    <br><span style="font-size: ${Math.floor(cnv.width / 25)}px">FPS: ${(1000 / dt2).toFixed(3)}</span>
    `;
    } else document.getElementById('pos').innerHTML = "";
}