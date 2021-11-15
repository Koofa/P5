function updatehelicopter() {
    for (const heli of helicopters) {
        heli.velx *= 0.9
        heli.vely *= 0.9
        heli.velr *= 0.9
        heli.x += heli.velx
        heli.y += heli.vely
        heli.r += heli.velr
    }
}
function drawhelicopter() {
    for (const heli of helicopters) {
        //schaduw
        ellipse(heli.x - getcamx(), 544 - getcamy(), 75, 10);
        //helicopter
        translate(heli.x - getcamx(), heli.y - getcamy())
        rotate(heli.r * 0.01745329252)
        noStroke();
        colorMode(RGB);
        fill("D3D3D3")
        quad(-10, 15, -19, -13, 6, -13, 24, 15)
        fill("161616")
        quad(-10, 15, -20, 9, -27, -5, -19, -13)
        quad(6, -13, 22, -9, 34, 5, -24, 15)
        resetMatrix();
    }
}