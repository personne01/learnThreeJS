/*
    Scene
        - Lingkungan 3D yang akan menjadi aplikasi kita
        - 3D World 
    Camera
        - Camera yang kita gunakan untuk melihat ke dalam 3D world tersebut
    Renderer
        - Yang menampilkan hasil dari camera ke layar
        - ada beberapa tipe renderer tapi di sini menggunakan renderer webGL

*/

var scene =  new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1,1000);
/**
 * ada beberpa tipe kamera yang digunakan adalah FOV
 *  1. FOV. How wide is ur camera (semakin kecil fov semakin kecil kamera dan sebaliknya )
 *  2. Aspectratio  
 *  3. near clip. how close
 *  4. far clip. how far
 */ 
var renderer = new THREE.WebGLRenderer();

var box = new THREE.BoxGeometry(1,1,3)   //Box dengan ukuran 1, 1, 1
var boxMat = new THREE.MeshBasicMaterial({color:0xff0220});     //warnanya (rgb)
var boxMesh = new THREE.Mesh(box, boxMat);

scene.add(boxMesh);
cam.position.z = 10;
 
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function(){
    renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    cam.aspect = this.window.innerWidth/this.window.innerHeight;
    cam.updateProjectionMatrix();
});

function draw(){
    requestAnimationFrame(draw);
    boxMesh.rotation.y +=0.01;
    boxMesh.rotation.x +=0.01;
    renderer.render(scene, cam);
}
draw();