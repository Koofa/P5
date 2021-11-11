let explosionSound = []
let farexplosionSound = []

function preload() {
    soundFormats('wav')
    explosionSound = [
        loadSound('Sounds/explosion_large_01.wav'),
        loadSound('Sounds/explosion_large_02.wav'),
        loadSound('Sounds/explosion_large_03.wav'),
        loadSound('Sounds/explosion_large_04.wav'),
        loadSound('Sounds/explosion_large_05.wav'),
        loadSound('Sounds/explosion_large_06.wav'),
        loadSound('Sounds/explosion_large_07.wav'),
        loadSound('Sounds/explosion_large_08.wav'),
        loadSound('Sounds/explosion_large_09.wav'),
        loadSound('Sounds/explosion_large_10.wav')]
    farexplosionSound = [
        loadSound('Sounds/explosion_far_distant_01.wav'),
        loadSound('Sounds/explosion_far_distant_02.wav'),
        loadSound('Sounds/explosion_far_distant_03.wav')]
}
