let explosionSound = []
let farexplosionSound = []
let laserblastSound = []
let laserbeamSound
let alarmSound
let tractorbeamSound
let helicopterSound
let deadSound
let tankshotSound = []
let gunshotSound = []
let ufoimpactSound = []
let humandeathSound = []
let vehicleimpactSound = []
let AAAgunshotSound = []

function preload() {
    soundFormats('wav', 'ogg')
    laserbeamSound = loadSound('Sounds/aliencar_acc_loop.wav')
    alarmSound = loadSound('Sounds/alarm.wav')
    tractorbeamSound = loadSound('Sounds/ion_thruster_loop.wav')
    helicopterSound = loadSound('Sounds/helicopter_blades_spinning_loop_01.wav')
    deadSound = loadSound('Sounds/ziel_geluiden.ogg')
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
    laserblastSound = [
        loadSound('Sounds/sci-fi_weapon_blaster_laser_boom_heavy_01.wav'),
        loadSound('Sounds/sci-fi_weapon_blaster_laser_boom_heavy_02.wav'),
        loadSound('Sounds/sci-fi_weapon_blaster_laser_boom_heavy_03.wav'),
        loadSound('Sounds/sci-fi_weapon_blaster_laser_boom_heavy_04.wav')]
    tankshotSound = [
        loadSound('Sounds/autocannon_1.wav'),
        loadSound('Sounds/autocannon_2.wav'),
        loadSound('Sounds/autocannon_3.wav')]
    gunshotSound = [
        loadSound('Sounds/Beretta_Model_92F_9_mm_Parabellum_Semi_Automatic_Pistol_Single_Shot_01.wav'),
        loadSound('Sounds/Beretta_Model_92F_9_mm_Parabellum_Semi_Automatic_Pistol_Single_Shot_05.wav'),
        loadSound('Sounds/Beretta_Model_92F_9_mm_Parabellum_Semi_Automatic_Pistol_Single_Shot_06.wav'),
        loadSound('Sounds/Beretta_Model_92F_9_mm_Parabellum_Semi_Automatic_Pistol_Single_Shot_07.wav')]
    ufoimpactSound = [
        loadSound('Sounds/Bullet_Impact_Into_Metal_01.wav'),
        loadSound('Sounds/Bullet_Impact_Into_Metal_02.wav'),
        loadSound('Sounds/Bullet_Impact_Into_Metal_03.wav'),
        loadSound('Sounds/Bullet_Impact_Into_Metal_05.wav'),
        loadSound('Sounds/Bullet_Impact_Into_Metal_06.wav')]
    humandeathSound = [
        loadSound('Sounds/dismember1.wav'),
        loadSound('Sounds/dismember2.wav'),
        loadSound('Sounds/dismember3.wav')]
    vehicleimpactSound = [
        loadSound('Sounds/HardVehicleImpact-02.wav'),
        loadSound('Sounds/HardVehicleImpact-03.wav'),
        loadSound('Sounds/HardVehicleImpact-04.wav'),
        loadSound('Sounds/HardVehicleImpact-Alt-01.wav'),
        loadSound('Sounds/HardVehicleImpact-Alt-02.wav'),
        loadSound('Sounds/HardVehicleImpact-Alt-03.wav'),
        loadSound('Sounds/HardVehicleImpact-Alt-04.wav')]
    AAAgunshotSound = [
        loadSound('Sounds/machine_blaster-01.wav'),
        loadSound('Sounds/machine_blaster-02.wav'),
        loadSound('Sounds/machine_blaster-03.wav'),
        loadSound('Sounds/machine_blaster-00.wav')]
}
