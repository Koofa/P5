function updatehelicopter() {
    for (const heli of helicopters) {
        //physics 1
        if (heli.hp > 7) {
            heli.velx *= 0.97
            heli.vely *= 0.97
            heli.velr *= 0.9
            heli.r *= 0.9
            heli.r += heli.velx / 2
        } else {
            heli.velx *= 0.99
            heli.vely *= 0.99
            heli.velr *= 0.99
        }
        heli.x += heli.velx
        heli.y += heli.vely
        heli.r += heli.velr

        //movement
        if (discovered && heli.hp > 7) {
            if ((Math.abs(heli.x - playerpos.x) + Math.abs(heli.y - playerpos.y)) < 100) {
                if (playerpos.x < heli.x) {
                    heli.velx += Math.random() * 0.15 + 0.15;
                } else {
                    heli.velx += Math.random() * -0.15 - 0.15;
                }
                if (playerpos.y < heli.y) {
                    heli.vely += Math.random() * 0.15 + 0.15;
                } else {
                    heli.vely += Math.random() * -0.15 - 0.15;
                }
            }

            if
                (Math.abs(heli.x - playerpos.x) > 305) {
                if (playerpos.x < heli.x) {
                    heli.velx += Math.random() * -0.15 - 0.15;
                } else {
                    heli.velx += Math.random() * 0.15 + 0.15;
                }
            }
            if (Math.abs(heli.y - playerpos.y) > 205) {
                if (playerpos.y < heli.y) {
                    heli.vely += Math.random() * -0.15 - 0.15;
                } else {
                    heli.vely += Math.random() * 0.15 + 0.15;
                }
            }
        }else{
            heli.velx += (heli.left ? 0.1 : -0.1)
        }

        if (heli.hp <= 7) {
            heli.vely += 0.2;
        }
        if (heli.hp > 7) {
            if (heli.y < 416) {
                if (Math.sin(tijd / 200) > 0) {
                    if (Math.random() > 0.9)
                        heli.vely -= 0.3
                    heli.vely -= 0.1
                } else {
                    if (Math.random() > 0.9)
                        heli.vely -= -0.3
                    heli.vely -= -0.1
                }
            } else {
                heli.vely -= 0.1
            }
        }

        //physics 2
        if (mouseIsPressed) {
            if (mouseButton === CENTER && heli.y > playerpos.y) {
                if (Math.abs(heli.x - playerpos.x) < 70)
                    heli.hp -= 3
            }
            if (mouseButton === RIGHT && heli.y > playerpos.y) {
                if (Math.abs(heli.x - playerpos.x) < 70) {
                    heli.vely += (playervel.y / 7) - 0.2;
                    heli.velx += (playerpos.x - heli.x) / 20;
                    heli.vely *= 0.85;
                    heli.velx *= 0.85;
                    heli.velr += (playervel.x / 80);
                }
            }
        }
        if (heli.y > 544) {
            if (Math.abs(heli.vely) > 2) {
                heli.hp -= ((Math.abs(heli.vely) * 3) + Math.abs(heli.velr) + (Math.abs(heli.velx))) / 2
            }
            heli.y = 544
            heli.vely = 0
        }

        projectiles.forEach(projectile => {
            if (Math.abs(heli.x - projectile.x) + Math.abs(heli.y - projectile.y) < 70) {
                heli.hp += -5;
                projectile.expired = true;
            }
        });

        //death
        if (heli.hp <= 0) {
            explosion(heli.x, heli.y, 11, 8, { r: 255, g: 120, b: 30 }, { r: 51, g: 51, b: 51 }, heli.velx, heli.vely);
        }
    }
    helicopters = helicopters.filter(heli => heli.hp > 0 && heli.x < 2035 && heli.x > -1301);
}

function drawhelicopter() {
    for (const heli of helicopters) {
        //shadow
        fill("rgba(0,0,0,0.1)");
        ellipse(heli.x - getcamx(), 544 - getcamy(), 75, 10);
        //helicopter
        translate(heli.x - getcamx(), heli.y - getcamy())
        rotate(heli.r * 0.01745329252)
        if (!heli.left) {
            scale(-1, 1)
        }
        colorMode(RGB);

        if (heli.hp < 7) {
            stroke("#070707")
        } else {
            stroke("#070707")
        }
        strokeWeight(1)
        rect(-7, 15, 23, 4)
        line(-24, 19, 32, 19)
        noStroke()

        if (heli.hp < 7) {
            fill("#070707")
        } else {
            fill("#161616")
        }
        quad(-10, 15, -20, 9, -27, -5, -19, -13)
        quad(6, -13, 22, -9, 34, 5, 24, 15)
        rect(-76, -6, 54, 5)
        rect(-6, -15, 5, 6)

        if (heli.hp < 7) {
            fill("#898989")
        } else {
            fill("#D3D3D3")
        }
        
        quad(-10, 15, -19, -13, 6, -13, 24, 15)
        fill("rgba(96,96,96,0.5)");
        if (Math.sin(tijd / 10) > 0) {
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