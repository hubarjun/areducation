

window.gltfLoader = new THREE.GLTFLoader();

class Reticle extends THREE.Object3D {
  constructor() {
    super();

    this.loader = new THREE.GLTFLoader();
    this.loader.load("/glb", (gltf) => {
      this.add(gltf.scene);
    })

    this.visible = false;
  }
}

window.gltfLoader.load("/glb", function(gltf) {
  const glb = gltf.scene.children.find(c => c.name === 'glb')
  window.model = gltf.scene;
  window.model.scale.set(0.03, 0.03, 0.03)


  
});


window.DemoUtils = {
  
  createLitScene() {
    const scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, -1, 0);
      scene.add(light);

      
      const PointLight = new THREE.PointLight(0xc4c4c4, 10);
      light.position.set(500, 300, 0);
      scene.add(PointLight);

    const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
    planeGeometry.rotateX(-Math.PI / 2);

    const shadowMesh = new THREE.Mesh(planeGeometry, new THREE.ShadowMaterial({
      color: 0x111111,
      opacity: 0.2,
    }));

    shadowMesh.name = 'shadowMesh';
    shadowMesh.receiveShadow = true;
    shadowMesh.position.y = 10000;

    scene.add(shadowMesh);

    return scene;
  },


  
};

function onNoXRDevice() {
  document.body.classList.add('unsupported');
}