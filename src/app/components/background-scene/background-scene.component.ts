import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-background-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-scene.component.html',
  styleUrls: ['./background-scene.component.scss']
})
export class BackgroundSceneComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') private canvasRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private pyramidGroup!: THREE.Group;
  private outerPyramid!: THREE.Mesh;
  private innerPyramid!: THREE.Mesh;
  private particles: THREE.Points[] = [];
  private targetRotation = { x: 0, y: 0 };
  private currentRotation = { x: 0, y: 0 };
  private mouse = { x: 0, y: 0 };
  private windowHalfX = window.innerWidth / 2;
  private windowHalfY = window.innerHeight / 2;
  private animationFrameId: number | null = null;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initScene();
    this.addEventListeners();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.renderer.dispose();
    window.removeEventListener('mousemove', this.onMouseMove.bind(this));
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  private createPyramid(size: number, color: number, wireframe: boolean = true): THREE.Mesh {
    const geometry = new THREE.ConeGeometry(size, size * 1.5, 4, 1);
    const material = new THREE.MeshPhongMaterial({
      color: color,
      wireframe: wireframe,
      emissive: color,
      emissiveIntensity: 0.5,
      shininess: 80,
      transparent: true,
      opacity: wireframe ? 1 : 0.3
    });
    return new THREE.Mesh(geometry, material);
  }

  private createParticleSystem(count: number, radius: number): THREE.Points {
    const particles = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = radius * Math.cbrt(Math.random());
      
      particles[i] = r * Math.sin(phi) * Math.cos(theta);
      particles[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particles[i + 2] = r * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));

    const material = new THREE.PointsMaterial({
      color: 0x9f7aea,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    return new THREE.Points(geometry, material);
  }

  private initScene(): void {
    // Scene setup
    this.scene = new THREE.Scene();
    
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 8;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    // Create pyramid group
    this.pyramidGroup = new THREE.Group();

    // Create outer pyramid
    this.outerPyramid = this.createPyramid(2, 0x6b46c1, true);
    this.pyramidGroup.add(this.outerPyramid);

    // Create inner pyramid
    this.innerPyramid = this.createPyramid(1.5, 0x9f7aea, false);
    this.innerPyramid.rotation.y = Math.PI / 4;
    this.pyramidGroup.add(this.innerPyramid);

    // Add particle systems
    for (let i = 0; i < 3; i++) {
      const particles = this.createParticleSystem(200, 3);
      this.particles.push(particles);
      this.pyramidGroup.add(particles);
    }

    this.scene.add(this.pyramidGroup);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x9f7aea, 2);
    pointLight.position.set(5, 5, 5);
    this.scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x4c1d95, 2);
    pointLight2.position.set(-5, -5, 2);
    this.scene.add(pointLight2);
  }

  private addEventListeners(): void {
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onMouseMove(event: MouseEvent): void {
    this.mouse.x = (event.clientX - this.windowHalfX);
    this.mouse.y = (event.clientY - this.windowHalfY);
    
    // Calculate target rotation based on mouse position
    this.targetRotation.x = (this.mouse.y / this.windowHalfY) * Math.PI * 0.2;
    this.targetRotation.y = (this.mouse.x / this.windowHalfX) * Math.PI * 0.2;
  }

  private onWindowResize(): void {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    // Smooth rotation transition for the entire group
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.05;
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.05;
    
    this.pyramidGroup.rotation.x = this.currentRotation.x;
    this.pyramidGroup.rotation.y = this.currentRotation.y;

    // Additional rotations for inner elements
    this.outerPyramid.rotation.y += 0.003;
    this.innerPyramid.rotation.y -= 0.002;

    // Animate particles with varying speeds
    this.particles.forEach((particles, index) => {
      particles.rotation.y += 0.0008 * (index + 1);
      particles.rotation.x += 0.0004 * (index + 1);
    });

    this.renderer.render(this.scene, this.camera);
  }
}
