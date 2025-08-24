'use client';


import Simulator from '@/components/Simulator';
import ControlPanel from '@/components/ControlPanel';
import { useState } from 'react';


export default function Page() {
const [params, setParams] = useState({
kp: 0.9,
ki: 0.0,
kd: 0.15,
speed: 2.0,
sensorSpacing: 14,
noise: 0.0
});


const [playing, setPlaying] = useState(false);


return (
<main className="grid md:grid-cols-5 gap-4">
<section className="md:col-span-3 bg-white rounded-2xl shadow-soft p-3">
<Simulator params={params} playing={playing} />
</section>
<aside className="md:col-span-2 bg-white rounded-2xl shadow-soft p-4">
<ControlPanel
params={params}
onChange={setParams}
playing={playing}
setPlaying={setPlaying}
/>
</aside>
</main>
);
}
