function updatehelicopter() {
    for (const heli of helicopters) {
        heli.velx *= 0.99
        heli.vely *= 0.99
        heli.velr *= 0.9
        heli.r *= 0.9
        heli.x += heli.velx
        heli.y += heli.vely
        heli.r += heli.velr
        heli.r += heli.velx

        if (Math.abs(heli.x - playerpos.x) > 305) {
            if (playerpos.x < heli.x) {
                heli.velx += -0.1;
            } else {
                heli.velx += 0.1;
            }
        }
    }
}
function drawhelicopter() {
    for (const heli of helicopters) {
        //schaduwd
        fill("rgba(0,0,0,0.1)");
        ellipse(heli.x - getcamx(), 544 - getcamy(), 75, 10);
        //helicopter
        translate(heli.x - getcamx(), heli.y - getcamy())
        rotate(heli.r * 0.01745329252)
        noStroke();
        colorMode(RGB);
        fill("#D3D3D3")
        quad(-10, 15, -19, -13, 6, -13, 24, 15)
        fill("#161616")
        quad(-10, 15, -20, 9, -27, -5, -19, -13)
        quad(6, -13, 22, -9, 34, 5, 24, 15)
        rect(-76, -6, 54, 5)
        rect(-6, -15, 5, 6)
        fill("rgba(96,96,96,0.5)");
        if (Math.sin(tijd) > 0) {
            circle(-73, -4, 17)
            stroke("rgba(96,96,96,0.5)")
            strokeWeight(2)
            line(-54, -16, 46, -16)
            noStroke();
        } else {

        }
        resetMatrix();
    }
}