function spawning() {
    if (Math.random() > 0.97) {
        let left = Math.random() > 0.5
        if (score > 250 && Math.random() > 0.5 && score < 1500) {
            spawnPolice(left)
            if (Math.random() > 0.9 && score > 350) {
                spawnHelipolice(left)
            }
            if (Math.random() > 0.8 && score > 700) {
                spawnTank(left)
            }
            if (Math.random() > 0.5 && score > 500) {
                spawnMilitary(left)
            }
            if (Math.random() > 0.9) {
                spawnHelimilitary(left)
            }
        } else {
            if (score < 2500) {
                if (Math.random() > 0.9 && score >= 1500) {
                    spawnTank(left)
                }
                if (Math.random() > 0.5 && score >= 1500) {
                    spawnMilitary(left)
                }
                if (Math.random() > 0.9 && score >= 1500) {
                    spawnHelimilitary(left)
                }
                if (Math.random() > 0.95 && score >= 1500) {
                    spawnAAAcar(left)
                }
                if (Math.random() > 0.99 && score >= 1700) {
                    spawnAAAtank(left)
                }
                if (Math.random() > 0.99 && score >= 2000) {
                    spawnHeliAAA(left)
                }
            } else {
                if (Math.random() > 0.7) {
                    spawnAAAcar(left)
                }
                if (Math.random() > 0.9) {
                    spawnAAAtank(left)
                }
                if (Math.random() > 0.9) {
                    spawnHeliAAA(left)
                }
            }
        }
        if (score < 300 || (score < 700 && Math.random() > 0.9)) {
            if (Math.random() > 0.5) {
                spawnHuman(left)
            }
            if ((Math.random() > 0.25)) {
                spawnCar(left)
            } else {
                if ((Math.random() > 0.25)) {
                    spawnTruck(left)
                } else {
                    spawnPolice(left)
                    if (Math.random() > 0.9) {
                        spawnHelipolice(left)
                    }
                }
            }
        }
    }

}
function spawnHuman(left) {
    humans.push({
        leftlane: left,
        hue: Math.random() * 360,
        skinV: (Math.random() * 255 / 100 + 10) * 5,
        skinB: Math.random() * 255 / 100 * 60 + 20,
        x: left ? -1300 : 2031,
        y: 517,
        hp: 1,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0
    })
}
function spawnCar(left) {
    cars.push({
        type: "car",
        leftlane: left,
        hue: Math.random() * 360,
        x: left ? -1300 : 2031,
        y: 544,
        hp: 10,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0
    })
}
function spawnTruck(left) {
    cars.push({
        type: "truck",
        leftlane: left,
        hue: Math.random() * 360,
        x: left ? -1300 : 2031,
        y: 544,
        hp: 15,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0
    })
}
function spawnPolice(left) {
    cars.push({
        type: "police",
        leftlane: left,
        x: left ? -1300 : 2031,
        y: 544,
        hp: 12,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0
    })
}
function spawnMilitary(left) {
    cars.push({
        type: "military",
        leftlane: left,
        x: left ? -1300 : 2031,
        y: 544,
        hp: 20,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0
    })
}
function spawnTank(left) {
    cars.push({
        type: "tank",
        leftlane: left,
        x: left ? -1300 : 2031,
        y: 544,
        hp: 35,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0
    })
}
function spawnAAAcar(left) {
    cars.push({
        type: "AAAcar",
        leftlane: left,
        x: left ? -1300 : 2031,
        y: 544,
        hp: 25,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0
    })
}
function spawnAAAtank(left) {
    cars.push({
        type: "AAAtank",
        leftlane: left,
        x: left ? -1300 : 2031,
        y: 544,
        hp: 50,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0
    })
}
function spawnHelipolice(left) {
    helicopters.push({
        type: "police",
        left: left,
        x: left ? -1300 : 2031,
        y: 254,
        hp: 30,
        speed: 1,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0,
        rotorspeed: 0
    })
}
function spawnHelimilitary(left) {
    helicopters.push({
        type: "military",
        left: left,
        x: left ? -1300 : 2031,
        y: 254,
        hp: 40,
        speed: 1,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0,
        rotorspeed: 0
    })
}
function spawnHeliAAA(left) {
    helicopters.push({
        type: "AAA",
        left: left,
        x: left ? -1300 : 2031,
        y: 254,
        hp: 60,
        speed: 2,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0,
        rotorspeed: 0
    })
}