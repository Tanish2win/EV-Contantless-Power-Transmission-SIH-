import { useEffect, useRef, useState } from 'react';
import { PID } from '@/lib/pid';


type Params = {
kp: number; ki: number; kd: number; speed: number; sensorSpacing: number; noise: number;
};


const W = 900; // canvas width
const H = 560; // canvas height
const LINE = 20; // line thickness target (pixels)


export default function Simulator({ params, playing }:{ params: Params; playing: boolean; }) {
const canvasRef = useRef<HTMLCanvasElement | null>(null);
const overlayRef = useRef<HTMLCanvasElement | null>(null);


const [pid] = useState(() => new PID(0, 0, 0));
const [pose, setPose] = useState({ x: W/2, y: H/2, theta: 0 });
const [drawMode, setDrawMode] = useState<'brush'|'move'>('brush');


// sync PID with params
useEffect(() => { pid.set(params.kp, params.ki, params.kd); }, [params.kp, params.ki, params.kd, pid]);


useEffect(() => {
const canvas = canvasRef.current!;
const ctx = canvas.getContext('2d')!;


// init background
ctx.fillStyle = '#f9fafb';
ctx.fillRect(0,0,W,H);


// draw a default oval track
ctx.strokeStyle = '#000';
ctx.lineWidth = LINE;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.beginPath();
const cx = W/2, cy = H/2, rx = 300, ry = 180;
for (let a = 0; a <= 2*Math.PI+0.01; a += 0.02) {
const x = cx + rx*Math.cos(a);
const y = cy + ry*Math.sin(a);
if (a === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
}
ctx.stroke();
}, []);


// draw/erase interaction on track canvas
useEffect(() => {
const canvas = canvasRef.current!;
const ctx = canvas.getContext('2d')!;
let drawing = false;


const onDown = (e: PointerEvent) => {
if (drawMode !== 'brush') return;
drawing = true;
ctx.lineWidth = LINE;
