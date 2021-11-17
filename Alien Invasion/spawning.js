function spawning() {
    if (Math.random() > 0.97) {
        let left = Math.random() > 0.5
        if (score > 250 && Math.random() > 0.5) {
            spawnPolice(left)
            if (Math.random() > 0.9 && score > 500) {
                spawnHelipolice(left)
            }
            if (Math.random() > 0.9 && score > 500) {
                spawnTank(left)
            }
            if (Math.random() > 0.8 && score > 1000) {
                spawnAAAcar(left)
            }
            if (Math.random() > 0.5) {
                spawnMilitary(left)
            }else{
                if (Math.random() > 0.9){
                    spawnHelimilitary(left)
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
                    if (Math.random() > 0.9){
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
        x: left ? -1300 : 2031,
        y: 520,
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
        hue: Math.random() * 360,
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
        hue: 0,
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
        hue: 0,
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
        hue: 0,
        x: left ? -1300 : 2031,
        y: 544,
        hp: 25,
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
        hp: 20,
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
        hp: 25,
        velx: 0,
        vely: 0,
        r: 0,
        velr: 0,
        rotorspeed: 0
    })
}