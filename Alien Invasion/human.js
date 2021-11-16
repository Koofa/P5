function updatehuman(human) {
    //physics
    if ((Math.abs(human.x - playerpos.x) + Math.abs(human.y - playerpos.y)) < 30) {
        if ((human.vely - playervel.y) + Math.abs(human.velr - playervel.r) + Math.abs(human.velx - playervel.x) > 2)
            human.hp -= (Math.abs((human.vely - playervel.y) + Math.abs(human.velr - playervel.r) + Math.abs(human.velx - playervel.x)) / 40)
        human.velx += -(human.velx - playervel.x) / 4;
        human.vely += -(human.vely - playervel.y) / 4;
        human.velr += -(human.velr - playervel.r) / 4;
        if (mouseIsPressed && mouseButton === RIGHT) {
            human.hp -= 10
        }
    }
    human.vely += 0.1;
    human.velr *= 0.99;

    if (mouseIsPressed) {
        if (mouseButton === CENTER && human.y > playerpos.y && Math.abs(human.x - playerpos.x) < 2) {
            human.hp -= 10
        }
        if (mouseButton === RIGHT) {
            if (Math.abs(human.x - playerpos.x) < 30 && human.y > playerpos.y) {
                human.vely += (playervel.y / 4) - 0.8;
                human.velx += (playerpos.x - human.x) / 5;
                human.vely *= 0.8;
                human.velx *= 0.8;
                human.velr += (playervel.x / 10) + Math.random() * 2 - 1;
            }
        }
    }

    human.x += human.velx;
    human.y += human.vely;
    human.r += human.velr;

    //movement
    if (human.y > 520) {
        if (Math.abs(human.vely) + Math.abs(human.velr) + (Math.abs(human.velx) / 5) > 5) {
            human.hp -= ((Math.abs(human.vely) * 3) + Math.abs(human.velr) + (Math.abs(human.velx / 10))) / 2
        }
        if (human.hp > 0.7 && human.r > -2 && human.r < 2) {
            human.velx *= 0.9;
        } else {
            human.velx *= 0.85;
        }
        human.velr *= 0.8;

        human.y = 520;
        human.vely = -human.vely / 2;
    }
    if (human.hp > 0.7 && human.y >= 520) {
        if (human.r > -2 && human.r < 2) {
            if (discovered) {
                human.velx += (human.leftlane ? 0.2 : -0.2);
            } else {
                human.velx += (human.leftlane ? 0.05 : -0.05);
            }

        }
        if (Math.abs(human.vely) < 1) {
            human.r *= 0.97;
        }
    }
    projectiles.forEach(projectile => {
        if (Math.abs(human.x - projectile.x) + Math.abs(human.y - projectile.y) < 50) {
            human.hp += -5;
        }
    });
    //death
    if (human.hp <= 0) {
        score += 0.5;
        explosion(human.x, human.y, 1, 1, { r: 255, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, human.velx, human.vely);
    }
}
function drawhuman() {
    for (const human of humans) {
        noStroke()
        //shadow
        //human
        translate(human.x - getcamx(), human.y - getcamy())
        rotate(human.r * 0.01745329252)
        colorMode(HSB)
        fill(human.hue, 90, 60)
        triangle(-6, 6, 0, -4, 6, 6)
        fill("#CC7F63")
        circle(0, -6, 6)
        resetMatrix();
    }

}