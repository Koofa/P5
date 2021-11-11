function updatecar() {
    for (const car of cars) {
        if ((Math.abs(car.x - playerpos.x) + Math.abs(car.y - playerpos.y)) < 30) {
            if ((car.vely - playervel.y) + Math.abs(car.velr - playervel.r) + Math.abs(car.velx - playervel.x) > 10)
                car.hp -= (Math.abs((car.vely - playervel.y) + Math.abs(car.velr - playervel.r) + Math.abs(car.velx - playervel.x)) / 50)
            car.velx += -(car.velx - playervel.x) / 10;
            car.vely += -(car.vely - playervel.y) / 10;
            car.velr += -(car.velr - playervel.r) / 10;
        }
        car.vely += 0.1;
        car.velr *= 0.99;

        if (car.type == "police" && discovered && Math.abs(car.x - playerpos.x) < 1000 && car.hp > 7 && Math.abs(car.vely) < 5 && Math.random() > 0.995) {
            bullets.push({
                x: car.x,
                y: car.y,
                size: 5,
                xvel: 4 * (Math.random() * 0.1 - 0.05 + -(car.x - playerpos.x) / Math.sqrt((Math.abs(car.x - playerpos.x) * Math.abs(car.x - playerpos.x)) + (Math.abs(car.y - playerpos.y) * Math.abs(car.y - playerpos.y)))),
                yvel: 4 * (Math.random() * 0.1 - 0.05 + -(car.y - playerpos.y) / Math.sqrt((Math.abs(car.x - playerpos.x) * Math.abs(car.x - playerpos.x)) + (Math.abs(car.y - playerpos.y) * Math.abs(car.y - playerpos.y)))),
                weight: 0,
                color1: { r: 255, g: 255, b: 0 },
                color2: { r: 255, g: 255, b: 255 },
                damage: 6
            })
        }
        if (car.type == "military" && discovered && Math.abs(car.x - playerpos.x) < 1000 && car.hp > 7 && Math.abs(car.vely) < 5 && Math.random() > 0.92 && Math.sin(tijd / 200) > 0.5) {
            bullets.push({
                x: car.x,
                y: car.y,
                size: 5,
                xvel: 4 * (Math.random() * 0.1 - 0.05 + -(car.x - playerpos.x) / Math.sqrt((Math.abs(car.x - playerpos.x) * Math.abs(car.x - playerpos.x)) + (Math.abs(car.y - playerpos.y) * Math.abs(car.y - playerpos.y)))),
                yvel: 4 * (Math.random() * 0.1 - 0.05 + -(car.y - playerpos.y) / Math.sqrt((Math.abs(car.x - playerpos.x) * Math.abs(car.x - playerpos.x)) + (Math.abs(car.y - playerpos.y) * Math.abs(car.y - playerpos.y)))),
                weight: 0,
                color1: { r: 255, g: 255, b: 0 },
                color2: { r: 255, g: 255, b: 255 },
                damage: 6
            })
        }
        if (car.type == "tank" && discovered && Math.abs(car.x - playerpos.x) < 1000 && car.hp > 7 && Math.abs(car.vely) < 5 && Math.random() > 0.95 && Math.sin(tijd / 100) > 0.9) {
            bullets.push({
                x: car.x,
                y: car.y,
                size: 8,
                xvel: 6 * (Math.random() * 0.1 - 0.05 + -(car.x - playerpos.x) / Math.sqrt((Math.abs(car.x - playerpos.x) * Math.abs(car.x - playerpos.x)) + (Math.abs(car.y - playerpos.y) * Math.abs(car.y - playerpos.y)))),
                yvel: 6 * (Math.random() * 0.1 - 0.05 + -(car.y - playerpos.y) / Math.sqrt((Math.abs(car.x - playerpos.x) * Math.abs(car.x - playerpos.x)) + (Math.abs(car.y - playerpos.y) * Math.abs(car.y - playerpos.y)))),
                weight: 2,
                color1: { r: 255, g: 58, b: 0 },
                color2: { r: 255, g: 255, b: 255 },
                damage: 50
            })
        }

        if (mouseIsPressed) {
            if (mouseButton === CENTER) {
                if (car.y > playerpos.y) {
                    if (Math.abs(car.x - playerpos.x) < 5 && (car.type == "car" || car.type == "police")) {
                        car.hp -= 3
                    }
                    if (Math.abs(car.x - playerpos.x) < 20 && car.type == "truck") {
                        car.hp -= 2
                    }
                    if (Math.abs(car.x - playerpos.x) < 5 && car.type == "military") {
                        car.hp -= 2
                    }
                    if (Math.abs(car.x - playerpos.x) < 20 && car.type == "tank") {
                        car.hp -= 1
                    }

                }
            }

            if (mouseButton === RIGHT) {
                if (Math.abs(car.x - playerpos.x) < 50 && car.y > playerpos.y) {
                    if (car.type == "car" || car.type == "police" || car.type == "military") {
                        car.vely += (playervel.y / 5) - 0.3;
                        car.velx += (playerpos.x - car.x) / 10;
                        car.vely *= 0.8;
                        car.velx *= 0.8;
                        car.velr += (playervel.x / 10) + Math.random() * 2 - 1;
                    }
                    if (car.type == "truck") {
                        car.vely += (playervel.y / 7) - 0.2;
                        car.velx += (playerpos.x - car.x) / 20;
                        car.vely *= 0.85;
                        car.velx *= 0.85;
                        car.velr += (playervel.x / 80);
                    }
                    if (car.type == "tank") {
                        car.vely += (playervel.y / 35) - 0.1;
                        car.velx += (playerpos.x - car.x) / 60;
                        car.vely *= 0.85;
                        car.velx *= 0.85;
                        car.velr += (playervel.x / 160);
                    }

                }
            }
        }

        car.x += car.velx;
        car.y += car.vely;
        car.r += car.velr;

        if (car.y > (car.leftlane ? 544 : 524)) {
            if (Math.abs(car.vely) + Math.abs(car.velr) + (Math.abs(car.velx) / 5) > 5) {
                car.hp -= ((Math.abs(car.vely) * 3) + Math.abs(car.velr) + (Math.abs(car.velx / 10))) / 2
            }
            if (car.hp > 7 && car.r > -2 && car.r < 2) {
                car.velx *= 0.9;
            } else {
                car.velx *= 0.85;
            }
            car.velr *= 0.8;

            car.y = (car.leftlane ? 544 : 524);
            car.vely = -car.vely / 4;
        }

        if (car.hp > 7 && car.y >= (car.leftlane ? 544 : 524)) {
            if (car.r > -2 && car.r < 2) {
                if (discovered && car.type == "police" || car.type == "tank" || car.type == "military") {
                    if (Math.abs(car.x - playerpos.x) > 200 && car.type == "tank") {
                        if (car.x < playerpos.x) {
                            car.velx += 0.2
                        } else {
                            car.velx += -0.2
                        }
                    }
                    if (Math.abs(car.x - playerpos.x) > 50 && car.type == "police") {
                        if (car.x < playerpos.x) {
                            car.velx += 0.4
                        } else {
                            car.velx += -0.4
                        }
                    }
                    if (Math.abs(car.x - playerpos.x) > 50 && car.type == "military") {
                        if (car.x < playerpos.x) {
                            car.velx += 0.5
                        } else {
                            car.velx += -0.5
                        }
                    }

                } else {
                    car.velx += (car.leftlane ? 0.3 : -0.3);
                }
            }
            if (Math.abs(car.vely) < 1) {
                if (car.type == "car") {
                    car.r *= 0.97;
                }
                if (car.type == "police" || car.type == "military") {
                    car.r *= 0.9;
                }
                if (car.type == "truck") {
                    car.r *= 0.99;
                }
                if (car.type == "tank") {
                    car.r *= 0.95;
                }
            }
        }

        projectiles.forEach(projectile => {
            if (Math.abs(car.x - projectile.x) + Math.abs(car.y - projectile.y) < 50) {
                car.hp += -5;
                projectile.expired = true;
            }
        });

        if (car.hp <= 0) {
            if (car.type == "car") {
                score += 1;
                explosion(car.x, car.y, 5, 2, { r: 255, g: 120, b: 30 }, { r: 51, g: 51, b: 51 }, car.velx, car.vely);
            }
            if (car.type == "police") {
                score += 2;
                explosion(car.x, car.y, 5, 2, { r: 255, g: 120, b: 30 }, { r: 51, g: 51, b: 51 }, car.velx, car.vely);
            }
            if (car.type == "military") {
                score += 3;
                explosion(car.x, car.y, 5, 2, { r: 255, g: 120, b: 30 }, { r: 51, g: 51, b: 51 }, car.velx, car.vely);
            }
            if (car.type == "truck") {
                score += 2;
                explosion(car.x, car.y, 10, 4, { r: 255, g: 120, b: 30 }, { r: 51, g: 51, b: 51 }, car.velx, car.vely);
            }
            if (car.type == "tank") {
                explosion(car.x, car.y, 10, 4, { r: 255, g: 120, b: 30 }, { r: 51, g: 51, b: 51 }, car.velx, car.vely);
                score += 6;
            }
        }
    }
    cars = cars.filter(car => car.hp > 0 && car.x < 2035 && car.x > -1301);
}
function drawcar() {
    function drawing(car) {
        //schaduw
        noStroke();
        fill("rgba(0,0,0,0.1)");
        if (car.type == "car" || car.type == "police" || car.type == "military") {
            ellipse(car.x - getcamx(), (car.leftlane ? 544 : 524) + 13 - getcamy(), 25, 10);
        }
        if (car.type == "truck" || car.type == "tank") {
            ellipse(car.x - getcamx(), (car.leftlane ? 544 : 524) + 13 - getcamy(), 75, 10);
        }

        //car
        translate(car.x - getcamx(), car.y - getcamy())
        rotate(car.r * 0.01745329252)
        if (!car.leftlane) {
            scale(-1, 1)
        }

        if (car.type == "car") {
            fill("#161616")
            circle(-9, 12, 8)
            circle(9, 12, 8)

            colorMode(HSB)
            fill(car.hue, 90, 60)
            if (car.hp < 7) {
                fill(car.hue, 90, 40)
            }
            rect(-10, -10, 20, 20)
            rect(-15, 0, 30, 10)
            colorMode(RGB)
        }

        if (car.type == "truck") {
            fill("#161616")
            circle(-21, 12, 8)
            circle(20, 12, 8)
            colorMode(HSB)

            fill(car.hue, 90, 60)
            if (car.hp < 7) {
                fill(car.hue, 90, 40)
            }
            rect(13, -9, 19, 19)

            colorMode(RGB)
            fill("#777777")
            if (car.hp < 7) {
                fill("#636363")
            }
            rect(-29, -14, 42, 23)
        }

        if (car.type == "police") {
            fill("#161616")
            circle(-9, 12, 8)
            circle(9, 12, 8)

            colorMode(RGB);
            fill("#161616")
            if (car.hp < 7) {
                fill("#070707")
            }
            rect(-15, 0, 30, 10)
            fill("#161616")
            if (car.hp < 7) {
                fill("#070707")
            }
            rect(-10, -10, 20, 20)
            fill("#D3D3D3")
            if (car.hp < 7) {
                fill("#898989")
            }
            rect(-8, -9, 16, 18)

            if (discovered && car.hp >= 7) {
                if (Math.sin(tijd / 100) > 0) {
                    fill("#FF003E");
                } else {
                    fill("#0043FF");
                }
            } else {
                fill("#5B5B5B");
            }

            circle(0, -12, 5);
        }

        if (car.type == "military") {
            fill("#161616")
            circle(-9, 12, 8)
            circle(9, 12, 8)

            colorMode(HSB)
            fill("#47561C")
            if (car.hp < 7) {
                fill("#39421B")
            }
            rect(-10, -10, 20, 20)
            rect(-15, 0, 30, 10)
            colorMode(RGB)
        }

        if (car.type == "tank") {
            colorMode(RGB)
            fill("#161616")
            quad(-31, 10, 31, 10, 27, 15, -27, 15)
            fill("#47561C")
            if (car.hp < 7) {
                fill("#39421B")
            }
            quad(-29, -3, 13, -3, 33, 5, -32, 10)
            rect(-32, 5, 65, 5)
            quad(-25, -6, 7, -12, 7, -3, -19, -3)
            rect(-25, -12, 31, 7)

            stroke("#47561C");
            strokeWeight(2);
            let direction = { x: car.x - playerpos.x, y: -(car.y - playerpos.y) }
            if (car.leftlane) {
                direction.x *= -1
            }
            let length = getlength(direction)
            line(4, -9, direction.x / length * 30 + 4, direction.y / length * 30 - 9)
            noStroke();
        }
        resetMatrix();
    }
    for (const car of cars) {
        if (!car.leftlane)
            drawing(car)
    }
    for (const car of cars) {
        if (car.leftlane)
            drawing(car)
    }
}