import { useEffect, useRef } from 'react';

const nodes = [
    {
        label: 'TypeScript', level: 90,
        cx: 50, cy: 50,
        colorClass: 'border-primary shadow-[0_0_35px_rgba(0,191,255,0.5)]',
        barClass: 'bg-primary', textClass: 'text-primary',
        size: 'w-40 h-40', textSize: 'text-xs', abbrSize: 'text-3xl', abbr: 'TS', barWidth: 'w-20',
        borderWidth: 'border-2',
        floatAmp: 10, floatSpeed: 0.6, floatPhaseX: 0, floatPhaseY: 1.2,
    },
    {
        label: 'PHP', level: 85,
        cx: 18, cy: 18,
        colorClass: 'border-accent-pink shadow-[0_0_25px_rgba(255,0,255,0.4)]',
        barClass: 'bg-accent-pink', textClass: 'text-accent-pink',
        size: 'w-32 h-32', textSize: 'text-xs', abbrSize: 'text-2xl', abbr: 'PHP', barWidth: 'w-16',
        borderWidth: 'border-2',
        floatAmp: 8, floatSpeed: 0.5, floatPhaseX: 2.1, floatPhaseY: 0.4,
    },
    {
        label: 'Node.js', level: 82,
        cx: 80, cy: 16,
        colorClass: 'border-primary shadow-[0_0_20px_rgba(0,191,255,0.3)]',
        barClass: 'bg-primary', textClass: 'text-primary',
        size: 'w-28 h-28', textSize: 'text-[10px]', abbrSize: 'text-xl', abbr: 'Nd', barWidth: 'w-14',
        borderWidth: 'border',
        floatAmp: 9, floatSpeed: 0.7, floatPhaseX: 4.0, floatPhaseY: 2.8,
    },
    {
        label: 'AWS', level: 75,
        cx: 14, cy: 80,
        colorClass: 'border-accent-pink/70 shadow-[0_0_18px_rgba(255,0,255,0.2)]',
        barClass: 'bg-accent-pink/80', textClass: 'text-accent-pink/80',
        size: 'w-24 h-24', textSize: 'text-[10px]', abbrSize: 'text-lg', abbr: 'AWS', barWidth: 'w-12',
        borderWidth: 'border',
        floatAmp: 7, floatSpeed: 0.45, floatPhaseX: 1.5, floatPhaseY: 3.6,
    },
    {
        label: 'React', level: 78,
        cx: 82, cy: 82,
        colorClass: 'border-primary/50 shadow-[0_0_14px_rgba(0,191,255,0.15)]',
        barClass: 'bg-primary/60', textClass: 'text-primary/70',
        size: 'w-24 h-24', textSize: 'text-[10px]', abbrSize: 'text-lg', abbr: 'Re', barWidth: 'w-12',
        borderWidth: 'border',
        floatAmp: 6, floatSpeed: 0.55, floatPhaseX: 3.3, floatPhaseY: 0.9,
    },
    {
        label: 'Git', level: 88,
        cx: 84, cy: 50,
        colorClass: 'border-accent-pink/50 shadow-[0_0_12px_rgba(255,0,255,0.15)]',
        barClass: 'bg-accent-pink/60', textClass: 'text-accent-pink/70',
        size: 'w-16 h-16', textSize: 'text-[8px]', abbrSize: 'text-xs', abbr: 'Git', barWidth: 'w-9',
        borderWidth: 'border',
        floatAmp: 7, floatSpeed: 0.42, floatPhaseX: 5.1, floatPhaseY: 1.7,
    },
    {
        label: 'Postgres', level: 72,
        cx: 50, cy: 86,
        colorClass: 'border-primary/50 shadow-[0_0_12px_rgba(0,191,255,0.15)]',
        barClass: 'bg-primary/60', textClass: 'text-primary/70',
        size: 'w-20 h-20', textSize: 'text-[9px]', abbrSize: 'text-sm', abbr: 'PG', barWidth: 'w-10',
        borderWidth: 'border',
        floatAmp: 8, floatSpeed: 0.38, floatPhaseX: 2.6, floatPhaseY: 4.2,
    },
    {
        label: 'Docker', level: 68,
        cx: 16, cy: 50,
        colorClass: 'border-accent-pink/40 shadow-[0_0_12px_rgba(255,0,255,0.12)]',
        barClass: 'bg-accent-pink/50', textClass: 'text-accent-pink/60',
        size: 'w-16 h-16', textSize: 'text-[8px]', abbrSize: 'text-xs', abbr: 'Dk', barWidth: 'w-9',
        borderWidth: 'border',
        floatAmp: 6, floatSpeed: 0.48, floatPhaseX: 0.8, floatPhaseY: 3.1,
    },
];

const REPULSE_RADIUS = 130;
const REPULSE_STRENGTH = 35;
const LERP = 0.02; // lower = smoother/slower

const SkillNebula = ({ skillsRef }) => {
    const containerRef = useRef(null);
    const nodeRefs = useRef([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const animRef = useRef(null);
    // Track smoothed offsets per node
    const smoothed = useRef(nodes.map(() => ({ x: 0, y: 0 })));

    useEffect(() => {
        const container = containerRef.current;
        smoothed.current = nodes.map(() => ({ x: 0, y: 0 }));

        const onMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        const onMouseLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };

        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseLeave);

        const animate = (timestamp) => {
            const t = timestamp / 1000;
            const rect = container.getBoundingClientRect();
            const W = rect.width;
            const H = rect.height;
            const mouse = mouseRef.current;

            nodeRefs.current.forEach((el, i) => {
                if (!el) return;
                const node = nodes[i];

                const idleX = Math.sin(t * node.floatSpeed + node.floatPhaseX) * node.floatAmp;
                const idleY = Math.cos(t * node.floatSpeed * 0.8 + node.floatPhaseY) * node.floatAmp;

                const basePx = (node.cx / 100) * W;
                const basePy = (node.cy / 100) * H;
                const currX = basePx + idleX;
                const currY = basePy + idleY;

                const dx = currX - mouse.x;
                const dy = currY - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let targetRepX = 0, targetRepY = 0;
                if (dist < REPULSE_RADIUS && dist > 0) {
                    const force = ((REPULSE_RADIUS - dist) / REPULSE_RADIUS) * REPULSE_STRENGTH;
                    targetRepX = (dx / dist) * force;
                    targetRepY = (dy / dist) * force;
                }

                // Lerp towards target for smooth easing
                smoothed.current[i].x += (targetRepX - smoothed.current[i].x) * LERP;
                smoothed.current[i].y += (targetRepY - smoothed.current[i].y) * LERP;

                el.style.transform = `translate(calc(-50% + ${idleX + smoothed.current[i].x}px), calc(-50% + ${idleY + smoothed.current[i].y}px))`;
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);

        return () => {
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(animRef.current);
        };
    }, []);

    return (
        <section ref={skillsRef} className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-10 pb-24 border-t border-white/5">
            <div className="flex flex-col gap-4 mb-10">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                    Skill <span className="text-primary neon-glow">Nebula</span>
                </h2>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            {/* Nebula visualization */}
            <div ref={containerRef} className="relative w-full aspect-square max-w-lg mx-auto my-8">
                {/* Decorative constellation rays */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent absolute rotate-45" />
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-pink/30 to-transparent absolute -rotate-45" />
                    <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent absolute rotate-90" />
                </div>

                {/* Ambient glow blobs */}
                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-[70px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent-pink/10 rounded-full blur-[60px] pointer-events-none" />

                {/* Skill nodes */}
                {nodes.map((node, i) => (
                    <div
                        key={node.label}
                        ref={el => nodeRefs.current[i] = el}
                        className="absolute"
                        style={{ left: `${node.cx}%`, top: `${node.cy}%`, transform: 'translate(-50%, -50%)' }}
                    >
                        <div className={`${node.size} rounded-full glass-panel flex flex-col items-center justify-center ${node.colorClass} ${node.borderWidth} transition-all duration-700 ease-out hover:scale-110 cursor-default select-none`}>
                            <span className={`font-bold ${node.textClass} ${node.abbrSize} uppercase tracking-tighter`}>
                                {node.abbr}
                            </span>
                            <span className={`${node.textSize} font-bold uppercase tracking-tighter text-slate-200 mt-0.5`}>
                                {node.label}
                            </span>
                            <div className={`mt-1.5 ${node.barWidth} h-0.5 bg-slate-800 rounded-full overflow-hidden`}>
                                <div className={`${node.barClass} h-full rounded-full`} style={{ width: `${node.level}%` }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detail cards — backend first */}
            <div className="grid grid-cols-1 gap-4 mt-12">
                <div className="glass-panel p-5 rounded-xl flex items-center gap-4 border-l-4 border-l-accent-pink">
                    <div className="w-12 h-12 rounded-lg bg-accent-pink/10 flex items-center justify-center shrink-0">
                        <span className="text-accent-pink font-bold text-sm">BE</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-100">Backend & Cloud</h4>
                        <p className="text-sm text-slate-400">TypeScript, PHP, Node.js, AWS, and Jenkins</p>
                    </div>
                    <div className="ml-auto text-accent-pink font-bold text-lg shrink-0">90%</div>
                </div>
                <div className="glass-panel p-5 rounded-xl flex items-center gap-4 border-l-4 border-l-primary">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-sm">FE</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-100">Frontend Development</h4>
                        <p className="text-sm text-slate-400">React, Tailwind CSS, and responsive UI</p>
                    </div>
                    <div className="ml-auto text-primary font-bold text-lg shrink-0">78%</div>
                </div>
            </div>

            {/* Footer stats */}
            <div className="mt-10 flex justify-center gap-12 px-2">
                <div className="text-center">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Experience</p>
                    <p className="text-2xl font-bold text-primary neon-glow">2+</p>
                    <p className="text-xs text-slate-500">years</p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Projects</p>
                    <p className="text-2xl font-bold text-accent-pink pink-glow">6+</p>
                    <p className="text-xs text-slate-500">shipped</p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Tech Stack</p>
                    <p className="text-2xl font-bold text-slate-200">10+</p>
                    <p className="text-xs text-slate-500">tools</p>
                </div>
            </div>
        </section>
    );
};

export default SkillNebula;
