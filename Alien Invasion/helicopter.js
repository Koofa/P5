function updatehelicopter() {
    helicopterSound.setVolume(0)
    for (const heli of helicopters) {
        if (!heli.type == "AAA")
            helicopterSound.setVolume(0.1)
        //physics 1
        if (heli.hp > 14) {
            heli.velx *= 0.97
            heli.vely *= 0.97
            heli.velr *= 0.9
            heli.r *= 0.9
            if (heli.type == "AAA") {

            } else {
                heli.r += heli.velx / 2
            }
        } else {
            heli.velx *= 0.99
            heli.vely *= 0.99
            heli.velr *= 0.99
        }
        heli.x += heli.velx
        heli.y += heli.vely
        heli.r += heli.velr

        let positions = { x: playerpos.x - heli.x, y: playerpos.y - heli.y }
        let distance = getlength(positions) + 1
        distance *= distance
        heli.velx += (heli.x - playerpos.x) / distance * 8 * magnet
        heli.vely += (heli.y - playerpos.y) / distance * 8 * magnet

        //shooting
        if (discovered && heli.hp > 7 && heli.type == "police" && Math.random() > 0.99 && Math.abs(heli.x - playerpos.x) < 1000) {
            pickrandom(gunshotSound).play(0, 1.4, 0.05 * volume)
            bullets.push({
                x: heli.x,
                y: heli.y,
                size: 5,
                velx: 4 * (Math.random() * 0.1 - 0.05 + -(heli.x - playerpos.x) / Math.sqrt((Math.abs(heli.x - playerpos.x) * Math.abs(heli.x - playerpos.x)) + (Math.abs(heli.y - playerpos.y) * Math.abs(heli.y - playerpos.y)))),
                vely: 4 * (Math.random() * 0.1 - 0.05 + -(heli.y - playerpos.y) / Math.sqrt((Math.abs(heli.x - playerpos.x) * Math.abs(heli.x - playerpos.x)) + (Math.abs(heli.y - playerpos.y) * Math.abs(heli.y - playerpos.y)))),
                weight: 0,
                color1: { r: 255, g: 255, b: 0 },
                color2: { r: 255, g: 255, b: 255 },
                age: 0,
                damage: 6
            })
        }
        if (discovered && heli.hp > 14 && heli.type == "military" && Math.random() > 0.92 && Math.sin(tijd / 200) > 0.5 && Math.abs(heli.x - playerpos.x) < 1000) {
            pickrandom(gunshotSound).play(0, 1.4, 0.05 * volume)
            bullets.push({
                x: heli.x,
                y: heli.y,
                size: 5,
                velx: 4 * (Math.random() * 0.1 - 0.05 + -(heli.x - playerpos.x) / Math.sqrt((Math.abs(heli.x - playerpos.x) * Math.abs(heli.x - playerpos.x)) + (Math.abs(heli.y - playerpos.y) * Math.abs(heli.y - playerpos.y)))),
                vely: 4 * (Math.random() * 0.1 - 0.05 + -(heli.y - playerpos.y) / Math.sqrt((Math.abs(heli.x - playerpos.x) * Math.abs(heli.x - playerpos.x)) + (Math.abs(heli.y - playerpos.y) * Math.abs(heli.y - playerpos.y)))),
                weight: 0,
                color1: { r: 255, g: 255, b: 0 },
                color2: { r: 255, g: 255, b: 255 },
                age: 0,
                damage: 6
            })
        }
        if (discovered && heli.hp > 14 && heli.type == "AAA" && Math.random() > 0.92 && Math.sin(tijd / 200) > 0.5 && Math.abs(heli.x - playerpos.x) < 1000) {
            pickrandom(AAAgunshotSound).play(0, 1, 0.04 * volume)
            bullets.push({
                x: heli.x,
                y: heli.y,
                size: 5,
                velx: 12 * (Math.random() * 0.1 - 0.05 + -(heli.x - playerpos.x) / Math.sqrt((Math.abs(heli.x - playerpos.x) * Math.abs(heli.x - playerpos.x)) + (Math.abs(heli.y - playerpos.y) * Math.abs(heli.y - playerpos.y)))),
                vely: 12 * (Math.random() * 0.1 - 0.05 + -(heli.y - playerpos.y) / Math.sqrt((Math.abs(heli.x - playerpos.x) * Math.abs(heli.x - playerpos.x)) + (Math.abs(heli.y - playerpos.y) * Math.abs(heli.y - playerpos.y)))),
                weight: 0,
                color1: { r: 136, g: 242, b: 70 },
                color2: { r: 255, g: 255, b: 255 },
                age: 0,
                trail: true,
                damage: 13
            })
        }
        //movement
        if (discovered) {
            if (heli.hp > 14) {
                if ((Math.abs(heli.x - playerpos.x) + Math.abs(heli.y - playerpos.y)) < 100) {
                    if (playerpos.x < heli.x) {
                        heli.velx += Math.random() * 0.15 + 0.15 * heli.speed;
                    } else {
                        heli.velx += Math.random() * -0.15 - 0.15 * heli.speed;
                    }
                    if (playerpos.y < heli.y) {
                        heli.vely += Math.random() * 0.15 + 0.15 * heli.speed;
                    } else {
                        heli.vely += Math.random() * -0.15 - 0.15 * heli.speed;
                    }
                }

                if
                    (Math.abs(heli.x - playerpos.x) > 305) {
                    if (playerpos.x < heli.x) {
                        heli.velx += Math.random() * -0.15 - 0.15 * heli.speed;
                    } else {
                        heli.velx += Math.random() * 0.15 + 0.15 * heli.speed;
                    }
                }
                if (Math.abs(heli.y - playerpos.y) > 205) {
                    if (playerpos.y < heli.y) {
                        heli.vely += Math.random() * -0.15 - 0.15 * heli.speed;
                    } else {
                        heli.vely += Math.random() * 0.15 + 0.15 * heli.speed;
                    }
                }
            }
        } else {
            if (heli.hp > 14) {
                heli.velx += (heli.left ? 0.1 : -0.1)
            }
        }

        if (heli.hp <= 14) {
            heli.rotorspeed += 1
            heli.vely += 0.2;
        }
        if (heli.hp > 14) {
            heli.rotorspeed = 0
            if (heli.y < 416) {
                if (!heli.type == "AAA") {
                    if (Math.sin(tijd / 200) > 0) {
                        if (Math.random() > 0.9)
                            heli.vely -= 0.3
                        heli.vely -= 0.1
                    } else {
                        if (Math.random() > 0.9)
                            heli.vely -= -0.3
                        heli.vely -= -0.1
                    }
                }
            } else {
                heli.vely -= 0.1
            }
        }

        //physics 2
        if (mouseIsPressed && health > 0) {
            if (mouseButton === CENTER && heli.y > playerpos.y) {
                if (Math.abs(heli.x - playerpos.x) < 56) {
                    if (heli.type == "police")
                        heli.hp -= 3
                    if (heli.type == "military")
                        heli.hp -= 2
                }
                if (Math.abs(heli.x - playerpos.x) < 25) {
                    if (heli.type == "AAA")
                        heli.hp -= 3
                }
            }
            if (mouseButton === RIGHT && heli.y > playerpos.y) {
                if (Math.abs(heli.x - playerpos.x) < 56) {
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
                heli.hp -= (Math.abs(heli.vely) * 3) + Math.abs(heli.velr) + (Math.abs(heli.velx))
            }
            heli.y = 544
            heli.vely = -heli.vely / 4;
        }

        projectiles.forEach(projectile => {
            if (Math.abs(heli.x - projectile.x) + Math.abs(heli.y - projectile.y) < 56) {
                heli.hp += -5;
                projectile.expired = true;
            }
        });

        //death
        if (heli.hp <= 0) {
            if (heli.type == "police") {
                score += 3;
                explosion(heli.x, heli.y, 14, 10, { r: 255, g: 120, b: 30 }, { r: 51, g: 51, b: 51 }, heli.velx, heli.vely);
            }
            if (heli.type == "military") {
                score += 4;
                explosion(heli.x, heli.y, 14, 10, { r: 255, g: 120, b: 30 }, { r: 51, g: 51, b: 51 }, heli.velx, heli.vely);
            }
            if (heli.type == "AAA") {
                score += 8;
                explosion(heli.x, heli.y, 6, 3, { r: 136, g: 242, b: 70 }, { r: 255, g: 255, b: 70 }, heli.velx, heli.vely);
            }
        }
    }
    helicopters = helicopters.filter(heli => heli.hp > 0 && heli.x < 2035 && heli.x > -1301);
}

function drawhelicopter() {
    for (const heli of helicopters) {
        //shadow
        fill("rgba(0,0,0,0.1)");
        if (heli.type == "AAA") {
            ellipse(heli.x - getcamx(), 544 - getcamy(), 25, 10);
        } else {
            ellipse(heli.x - getcamx(), 544 - getcamy(), 75, 10);
        }
        //helicopter
        translate(heli.x - getcamx(), heli.y - getcamy())
        rotate(heli.r * 0.01745329252)
        if (!heli.left && !heli.type == "AAA") {
            scale(-0.7, 0.7)
        } else {
            scale(0.7, 0.7)
        }
        if (!heli.left && heli.type == "AAA") {
            scale(-1, 1)
        } else {
            scale(1, 1)
        }
        colorMode(RGB);
        if (heli.type == "military") {
            if (heli.hp < 14) {
                stroke("#21280D")
            } else {
                stroke("#323D14")
            }
            strokeWeight(2)
            rect(3, 20, 23, 9)
            line(-17, 28, 41, 28)
            strokeWeight(2)
            rect(-4, -16, 6, 9)
            if (heli.hp < 14) {
                fill("#39421B")
                stroke("#39421B")
            } else {
                fill("#47561C")
                stroke("#47561C")
            }
            quad(-11, 10, -27, 2, -21, -11, 43, 13)
            quad(-11, 10, -2, 20, 30, 20, 43, 13)
            quad(-21, -11, 18, -10, 40, 6, 43, 13)
            rect(-84, 2, 64, 5)
            noStroke()
            fill("rgba(96,96,96,0.5)");
            if (Math.sin(tijd / (10 + heli.rotorspeed)) > 0) {
                circle(-81, 1, 21)
                stroke("rgba(96,96,96,0.5)")
                strokeWeight(2)
                line(-52, -14, 51, -14)
                noStroke();
            }
            resetMatrix()
        }

        if (heli.type == "police") {
            if (heli.hp < 14) {
                stroke("#070707")
            } else {
                stroke("#070707")
            }
            strokeWeight(1)
            rect(-7, 15, 23, 4)
            line(-24, 19, 32, 19)
            noStroke()

            if (heli.hp < 14) {
                fill("#070707")
            } else {
                fill("#161616")
            }
            quad(-10, 15, -20, 9, -27, -5, -19, -13)
            quad(6, -13, 22, -9, 34, 5, 24, 15)
            rect(-76, -6, 54, 5)
            rect(-6, -15, 5, 6)

            if (heli.hp < 14) {
                fill("#898989")
            } else {
                fill("#D3D3D3")
            }

            quad(-10, 15, -19, -13, 6, -13, 24, 15)
            fill("rgba(96,96,96,0.5)");
            if (Math.sin(tijd / (10 + heli.rotorspeed)) > 0) {
                circle(-73, -4, 17)
                stroke("rgba(96,96,96,0.5)")
                strokeWeight(2)
                line(-54, -16, 46, -16)
                noStroke();
            }
            resetMatrix();
        }

        if (heli.type == "AAA") {
            if (heli.hp < 14) {
                fill("#E5C649")
            } else {
                fill("#E5C649")
            }
            circle(0, 0, 34)
            if (heli.hp < 14) {
                fill("#BCA134")
            } else {
                fill("#D3B53B")
            }
            circle(0, 0, 23)
            strokeWeight(6)
            if (heli.hp < 14) {
                stroke("#967F24")
            } else {
                stroke("#BCA02D")
            }
            if (discovered) {
                let direction = { x: heli.x - playerpos.x, y: -(heli.y - playerpos.y) }
                if (heli.left) {
                    direction.x *= -1
                }
                let length = getlength(direction)
                line(0, 0, direction.x / length * 15, direction.y / length * 15)
            } else {
                line(0, 0, 15, 0)
            }
            noStroke()
            resetMatrix();
        }

    }
}