// import {Application, Sprite, Graphics } from 'pixi.js'
import * as PIXI from 'pixi.js'

import './style.css'
import gsap from 'gsap'
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

let boxLW = 10;

const app = new PIXI.Application({
  view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x1099bb,
  autoDensity: true,

})

window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight)
})


let width = window.innerWidth / boxLW
let height = window.innerHeight / boxLW

let arr: PIXI.Graphics[][] = []

for(let i = 0; i < boxLW; i++) {
  arr[i] = []
  for(let j = 0; j < boxLW; j++) {
    const rect = new PIXI.Graphics()
    rect.beginFill(0x1271b5)
    rect.drawRect(i * width, j * height, width, height)
    rect.endFill()
    rect.scale.set(2, 2)

    // let texture = app.renderer.generateTexture(rect)
    // let sprite = new PIXI.Sprite(texture)

    app.stage.addChild(rect)
    arr[i][j] = rect
  }
}

gsap.to(arr, {
  stagger: {
    grid: [boxLW, boxLW],
    
    from: "center",
    ease: "power2.in",
    amount: 1,
    
  },
  pixi: {  scale: 0.1, alpha: 0.5  },
   duration: 5, yoyo: true, repeat: -1});




