import { useRef } from 'react';
};


const uploadPNG = (file: File) => {
const img = new Image();
img.onload = () => {
const canvas = document.getElementById('track-canvas') as HTMLCanvasElement | null;
if (!canvas) return;
const ctx = canvas.getContext('2d');
if (!ctx) return;
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = URL.createObjectURL(file);
};


return (
<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold">Controls</h2>
<button onClick={() => setPlaying(!playing)} className="px-4 py-1.5 rounded-xl bg-gray-900 text-white text-sm">
{playing ? 'Pause' : 'Run'}
</button>
</div>


<div className="grid grid-cols-2 gap-4">
<label className="block text-sm">Kp: {params.kp.toFixed(2)}
<input type="range" min={0} max={3} step={0.01} value={params.kp} onChange={set('kp')} className="w-full" />
</label>
<label className="block text-sm">Ki: {params.ki.toFixed(2)}
<input type="range" min={0} max={1} step={0.001} value={params.ki} onChange={set('ki')} className="w-full" />
</label>
<label className="block text-sm">Kd: {params.kd.toFixed(2)}
<input type="range" min={0} max={1} step={0.01} value={params.kd} onChange={set('kd')} className="w-full" />
</label>
<label className="block text-sm">Speed: {params.speed.toFixed(2)} px/frame
<input type="range" min={0.2} max={6} step={0.1} value={params.speed} onChange={set('speed')} className="w-full" />
</label>
<label className="block text-sm">Sensor Spacing: {params.sensorSpacing.toFixed(0)} px
<input type="range" min={8} max={28} step={1} value={params.sensorSpacing} onChange={set('sensorSpacing')} className="w-full" />
</label>
<label className="block text-sm">Noise: {params.noise.toFixed(2)}
<input type="range" min={0} max={1} step={0.01} value={params.noise} onChange={set('noise')} className="w-full" />
</label>
</div>


<div className="flex gap-2">
<button onClick={() => document.dispatchEvent(new Event('sim-reset'))} className="px-3 py-1.5 rounded-xl border">Reset</button>
<button onClick={() => document.dispatchEvent(new Event('sim-clear'))} className="px-3 py-1.5 rounded-xl border">Clear Track</button>
<button onClick={downloadPNG} className="px-3 py-1.5 rounded-xl border">Export Track</button>
<button onClick={() => fileRef.current?.click()} className="px-3 py-1.5 rounded-xl border">Import Track</button>
<input ref={fileRef} type="file" accept="image/png" hidden onChange={(e) => {
const f = e.target.files?.[0];
if (f) uploadPNG(f);
}} />
</div>


<div className="text-sm text-gray-600">
<p><strong>Tips:</strong> Hold <kbd>Shift</kbd> to erase, <kbd>B</kbd> to toggle brush vs. move, <kbd>R</kbd> to recenter the car.</p>
</div>
</div>
);
}
