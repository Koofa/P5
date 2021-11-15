function spawning() {
    if (Math.random() > 0.97) {
        let left = Math.random() > 0.5
        if (score > 250 && Math.random() > 0.5) {
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
            if (Math.random() > 0.9 && score > 500) {
                helicopters.push({
                    type: "police",
                    left: left,
                    x: left ? -1300 : 2031,
                    y: 254,
                    hp: 15,
                    velx: 0,
                    vely: 0,
                    r: 0,
                    velr: 0
                })
            }
            if (Math.random() > 0.9 && score > 500) {
                cars.push({
                    type: "tank",
                    leftlane: left,
                    hue: Math.random() * 360,
                    x: left ? -1300 : 2031,
                    y: 544,
                    hp: 35,
                    velx: 0,
                    vely: 0,
                    r: 0,
                    velr: 0
                })
            }
            if (Math.random() > 0.5) {
                cars.push({
                    type: "military",
                    leftlane: left,
                    hue: Math.random() * 360,
                    x: left ? -1300 : 2031,
                    y: 544,
                    hp: 20,
                    velx: 0,
                    vely: 0,
                    r: 0,
                    velr: 0
                })
            }
        }
        if (score < 300 || (score < 700 && Math.random() > 0.9)) {
            if (Math.random() > 0.5) {
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
            if ((Math.random() > 0.25)) {
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
            } else {
                if ((Math.random() > 0.25)) {
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
                } else {
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
            }
        }
    }

}