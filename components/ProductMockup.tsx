import React, { useEffect, useRef, useState } from 'react';
import { Filter, Download, RefreshCw } from 'lucide-react';
import iconImage from '../assets/icon.png';

const ORANGE = '#F2852D';
const CREAM = '#FAF7F4';
const APPLE_EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';

const DonutChart: React.FC<{ percent: number; size?: number; animate?: boolean }> = ({
  percent,
  size = 52,
  animate = true,
}) => {
  const r = size / 2 - 6;
  const cx = size / 2;
  const stroke = Math.max(3, size * 0.1);
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;
  const [ready, setReady] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, [animate]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle cx={cx} cy={cx} r={r} fill="none" stroke="#F3F4F6" strokeWidth={stroke} />
      <circle
        cx={cx}
        cy={cx}
        r={r}
        fill="none"
        stroke={ORANGE}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={ready ? offset : circumference}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cx})`}
        style={{ transition: `stroke-dashoffset 1.4s ${APPLE_EASE}` }}
      />
      <text
        x={cx}
        y={cx + 4}
        textAnchor="middle"
        fontSize={size < 46 ? 8 : 10}
        fontWeight="700"
        fill="#1F2937"
        opacity={ready ? 1 : 0}
        style={{ transition: `opacity 0.6s ${APPLE_EASE} 0.8s` }}
      >
        {percent}%
      </text>
    </svg>
  );
};

const ScoreCard: React.FC<{
  label: string;
  title: string;
  percent: number;
  positive: number;
  negative: number;
  delta: string;
  description: string;
  delay?: number;
  visible?: boolean;
}> = ({ label, title, percent, positive, negative, delta, description, delay = 0, visible = true }) => (
  <div
    className="bg-white rounded-lg border border-gray-100/80 p-2 shadow-sm mockup-card"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
      transition: `opacity 0.8s ${APPLE_EASE} ${delay}ms, transform 0.8s ${APPLE_EASE} ${delay}ms, box-shadow 0.4s ease`,
    }}
  >
    <div className="flex items-start justify-between gap-1 mb-1">
      <div className="min-w-0">
        <p className="text-[6px] font-semibold uppercase tracking-wider text-gray-400 truncate">{label}</p>
        <p className="text-[9px] font-bold text-gray-800 leading-tight truncate">{title}</p>
      </div>
      <span className="text-[6px] font-semibold px-1 py-0.5 rounded-full bg-red-50 text-red-500 whitespace-nowrap shrink-0">
        {delta}
      </span>
    </div>
    <div className="flex items-center gap-1.5">
      <DonutChart percent={percent} size={40} animate={visible} />
      <div className="min-w-0">
        <p className="text-[7px] text-gray-500">
          +<span className="text-green-600 font-semibold">{positive}</span>
          {' / '}
          −<span className="text-red-500 font-semibold">{negative}</span>
        </p>
        <p className="text-[6px] text-gray-400 leading-snug line-clamp-1">{description}</p>
      </div>
    </div>
  </div>
);

const TOPICS = [
  { topic: 'food quality', pos: 2, neg: 7, highlight: true },
  { topic: 'service', pos: 0, neg: 2 },
  { topic: 'ambience', pos: 1, neg: 1 },
  { topic: 'staff', pos: 0, neg: 2 },
  { topic: 'cleanliness', pos: 0, neg: 1 },
];

const SUGGESTIONS = [
  { text: 'improve Paneer Reshmi Handi', repeated: true },
  { text: 'Improve food quality', repeated: true },
  { text: 'review pricing strategy', repeated: true },
  { text: 'improve staff behavior and training', repeated: true },
  { text: 'enhance ambiance', repeated: true },
  { text: 'improve kadhai', repeated: true },
];

const SentimentSparkline: React.FC<{ color: string; points: string; label: string; total: string }> = ({
  color,
  points,
  label,
  total,
}) => (
  <div className="flex-1">
    <div className="flex items-center justify-between mb-1">
      <p className="text-[7px] font-bold text-gray-700">{label}</p>
      <span className="text-[6px] text-gray-400 border border-gray-200 rounded-full px-1.5 py-0.5">{total}</span>
    </div>
    <svg viewBox="0 0 80 28" className="w-full h-7">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sparkline-draw"
      />
    </svg>
  </div>
);

const ProductMockup: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto mockup-scene overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1400px' }}
    >
      <div
        className="mockup-tilt relative"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovering ? 1.02 : 1})`,
          transition: hovering
            ? `transform 0.15s ${APPLE_EASE}`
            : `transform 0.9s ${APPLE_EASE}`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main dashboard frame */}
        <div
          className="relative rounded-2xl overflow-hidden mockup-main flex flex-col h-[480px] max-h-[480px]"
          style={{
            backgroundColor: CREAM,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.94)',
            transition: `opacity 1s ${APPLE_EASE}, transform 1.2s ${APPLE_EASE}`,
            boxShadow: hovering
              ? '0 40px 80px -20px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)'
              : '0 25px 60px -15px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04)',
          }}
        >
          {/* App navbar */}
          <div className="shrink-0 flex items-center justify-between px-3 py-2 bg-white/90 backdrop-blur-md border-b border-gray-100/80">
            <div className="flex items-center gap-1.5">
              <img src={iconImage} alt="" className="h-6 w-auto" />
              <div>
                <p className="text-[10px] font-bold text-gray-800 leading-none">Review Bag</p>
                <p className="text-[6px] text-gray-400">Bridging Plate to Progress</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2.5">
              <span className="text-[8px] font-semibold text-gray-800">Dashboard</span>
              <span className="text-[8px] text-gray-400">Review</span>
              <span className="text-[8px] text-gray-400">Manage User</span>
            </div>
            <button
              className="text-[7px] font-bold text-white px-2 py-0.5 rounded-full transition-transform hover:scale-105"
              style={{ backgroundColor: ORANGE }}
            >
              Create User
            </button>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-2 mockup-dashboard-scroll">
            {/* Experience Pulse */}
            <div
              className="flex items-start justify-between gap-2 mb-2 bg-white rounded-lg border border-gray-100/80 p-2 shadow-sm"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.7s ${APPLE_EASE} 200ms, transform 0.7s ${APPLE_EASE} 200ms`,
              }}
            >
              <div>
                <p className="text-[7px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                  Top Section — Summary
                </p>
                <h3 className="text-xs font-bold text-gray-900">Experience Pulse</h3>
                <p className="text-[7px] text-gray-400 mt-0.5 max-w-[180px] leading-snug line-clamp-1 hidden sm:block">
                  Live overview of how guests feel about your restaurant.
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button className="flex items-center gap-0.5 text-[7px] font-medium text-gray-500 bg-white border border-gray-200 rounded-full px-2 py-1 hover:bg-gray-50 transition-colors">
                  <Filter className="w-2.5 h-2.5" /> Filter
                </button>
                <button className="flex items-center gap-0.5 text-[7px] font-medium text-gray-500 bg-white border border-gray-200 rounded-full px-2 py-1 hidden sm:flex hover:bg-gray-50 transition-colors">
                  <Download className="w-2.5 h-2.5" /> Export
                </button>
                <span className="flex items-center gap-0.5 text-[7px] text-gray-400 bg-white border border-gray-200 rounded-full px-2 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mockup-pulse" />
                  Synced
                </span>
                <button className="p-1 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                  <RefreshCw className="w-2.5 h-2.5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 mb-2">
              <div
                className="col-span-2 bg-white rounded-lg border border-gray-100/80 p-2 shadow-sm mockup-card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.8s ${APPLE_EASE} 300ms, transform 0.8s ${APPLE_EASE} 300ms`,
                }}
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="min-w-0">
                    <p className="text-[6px] font-semibold uppercase tracking-wider text-gray-400">Composite Score</p>
                    <p className="text-[10px] font-bold text-gray-800 leading-tight">Overall Customer Satisfaction</p>
                  </div>
                  <span className="text-[6px] font-semibold px-1 py-0.5 rounded-full bg-red-50 text-red-500 shrink-0">
                    -28.9 vs prev
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DonutChart percent={21} size={48} animate={visible} />
                  <div className="min-w-0">
                    <p className="text-[8px] text-gray-500">
                      Positive: <span className="text-green-600 font-semibold">4</span>
                      {' | '}
                      Negative: <span className="text-red-500 font-semibold">15</span>
                    </p>
                    <p className="text-[6px] text-gray-400 mt-0.5 leading-snug line-clamp-2">
                      Blend of food, service, ambience, and cleanliness signals across all branches.
                    </p>
                  </div>
                </div>
              </div>

              <ScoreCard label="Taste & Presentation" title="Food Quality Score" percent={30} positive={3} negative={7} delta="-20.0 vs prev" description="Freshness, temperature, and plating." delay={400} visible={visible} />
              <ScoreCard label="Speed & Hospitality" title="Service Score" percent={0} positive={0} negative={4} delta="-50.0 vs prev" description="Wait times and friendliness." delay={500} visible={visible} />
              <ScoreCard label="FOH & BOH Hygiene" title="Cleanliness Score" percent={33} positive={1} negative={2} delta="-16.7 vs prev" description="Dining room and kitchen compliance." delay={600} visible={visible} />
              <div
                className="bg-white rounded-lg border border-gray-100/80 p-2 shadow-sm mockup-card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.8s ${APPLE_EASE} 700ms, transform 0.8s ${APPLE_EASE} 700ms`,
                }}
              >
                <p className="text-[6px] font-semibold uppercase tracking-wider text-gray-400">Video vs Audio</p>
                <p className="text-[9px] font-bold text-gray-800 mb-1">Review Types</p>
                <div className="flex gap-3">
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-800">0</p>
                    <p className="text-[6px] text-gray-400">Video</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-800">0</p>
                    <p className="text-[6px] text-gray-400">Audio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Suggestions section */}
            <div
              className="bg-white rounded-lg border border-gray-100/80 shadow-sm overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.9s ${APPLE_EASE} 800ms, transform 0.9s ${APPLE_EASE} 800ms`,
              }}
            >
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-gray-100">
                <div>
                  <p className="text-[6px] font-semibold uppercase tracking-wider text-gray-400">Suggestions Mentioned</p>
                  <p className="text-[10px] font-bold text-gray-800">Review suggestions</p>
                </div>
                <span className="text-[6px] font-medium text-gray-500 border border-gray-200 rounded-full px-1.5 py-0.5">
                  20 suggestions
                </span>
              </div>

              <div className="grid grid-cols-[1fr_auto_auto] gap-x-1.5 text-[5px] font-semibold uppercase tracking-wider text-gray-400 px-2 py-1 border-b border-gray-50">
                <span>Suggestion</span>
                <span className="text-center w-6">Count</span>
                <span className="text-center w-12">Actions</span>
              </div>

              <div className="suggestions-scroll relative h-[56px] overflow-hidden">
                <div className="suggestions-track">
                  {[...SUGGESTIONS, ...SUGGESTIONS].map((row, i) => (
                    <div
                      key={`${row.text}-${i}`}
                      className="grid grid-cols-[1fr_auto_auto] gap-x-1.5 items-center px-2 py-1 border-b border-gray-50 text-[7px]"
                    >
                      <div className="flex items-center gap-1 min-w-0">
                        <span className="truncate text-gray-700">{row.text}</span>
                        {row.repeated && (
                          <span className="shrink-0 text-[5px] font-semibold px-1 py-px rounded-full bg-red-50 text-red-500">
                            Repeated
                          </span>
                        )}
                      </div>
                      <span className="text-red-500 font-semibold text-center w-6">1</span>
                      <button className="text-[6px] font-medium text-gray-600 border border-gray-200 rounded-full px-1.5 py-px w-12 hover:bg-gray-50 transition-colors">
                        Details
                      </button>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-white to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating review topics card — right */}
        <div
          className="absolute -bottom-8 -right-2 sm:-right-8 w-[50%] sm:w-[44%] rounded-xl border border-white/60 shadow-2xl overflow-hidden z-20 mockup-float-delayed"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0) translateY(0) translateZ(60px)' : 'translateX(20px) translateY(16px) translateZ(0)',
            transition: `opacity 1s ${APPLE_EASE} 900ms, transform 1.1s ${APPLE_EASE} 900ms`,
          }}
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100/60">
            <div>
              <p className="text-[6px] font-semibold uppercase tracking-wider text-gray-400">Topics Mentioned</p>
              <p className="text-[10px] font-bold text-gray-800">Review topics</p>
            </div>
            <span className="text-[7px] font-medium text-gray-500 border border-gray-200 rounded-full px-2 py-0.5">
              8 topics
            </span>
          </div>
          <div className="px-2 py-1">
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-2 text-[6px] font-semibold uppercase tracking-wider text-gray-400 px-1 mb-1">
              <span>Topic</span>
              <span className="text-center w-4">+</span>
              <span className="text-center w-4">−</span>
            </div>
            {TOPICS.map((row, i) => (
              <div
                key={row.topic}
                className={`grid grid-cols-[1fr_auto_auto] gap-x-2 items-center px-1 py-1 rounded text-[8px] transition-colors duration-300 ${
                  row.highlight ? 'bg-red-50/80' : ''
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(8px)',
                  transition: `opacity 0.5s ${APPLE_EASE} ${1000 + i * 80}ms, transform 0.5s ${APPLE_EASE} ${1000 + i * 80}ms`,
                }}
              >
                <span className={`truncate ${row.highlight ? 'text-red-700 font-medium' : 'text-gray-700'}`}>
                  {row.topic}
                </span>
                <span className="text-green-600 font-semibold text-center w-4">{row.pos}</span>
                <span className="text-red-500 font-semibold text-center w-4">{row.neg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating sentiment analytics card — left (outside tilt so position isn't clipped/overridden) */}
      <div
        className={`absolute -top-[4%] -left-20 z-30 w-[42%] sm:w-[38%] pointer-events-none transition-all duration-1000 ease-out ${
          visible
            ? 'opacity-100 -translate-x-14 sm:-translate-x-20 lg:-translate-x-28 xl:-translate-x-32'
            : 'opacity-0 -translate-x-16 sm:-translate-x-24 lg:-translate-x-32 xl:-translate-x-36'
        }`}
      >
        <div
          className="mockup-float-slow pointer-events-auto rounded-xl border border-white/60 shadow-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="px-3 py-2 border-b border-gray-100/60">
            <p className="text-[6px] font-semibold uppercase tracking-wider text-gray-400">Deep Insights</p>
            <p className="text-[10px] font-bold text-gray-800">Experience analytics</p>
          </div>
          <div className="flex gap-2 px-3 py-2.5">
            <SentimentSparkline color="#22C55E" points="0,24 12,4 24,24 36,24 48,24 60,24 72,24 80,24" label="Positive" total="4 total" />
            <SentimentSparkline color="#EF4444" points="0,24 10,8 20,24 30,6 42,20 55,4 68,18 80,10" label="Negative" total="15 total" />
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute -top-8 -right-8 w-48 h-48 rounded-full blur-3xl -z-10 mockup-glow"
        style={{ backgroundColor: ORANGE }}
      />
      <div
        className="absolute -bottom-12 -left-8 w-36 h-36 rounded-full blur-3xl -z-10 opacity-30"
        style={{ backgroundColor: '#22C55E' }}
      />

      <style>{`
        .mockup-card:hover {
          box-shadow: 0 8px 24px -6px rgba(0,0,0,0.08);
        }

        .mockup-dashboard-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .mockup-dashboard-scroll::-webkit-scrollbar {
          display: none;
        }

        @keyframes mockup-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes mockup-float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes mockup-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        @keyframes mockup-glow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.08); }
        }

        @keyframes suggestions-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes sparkline-draw {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }

        .mockup-float-slow {
          animation: mockup-float 7s ease-in-out infinite;
        }

        .mockup-float-delayed {
          animation: mockup-float-delayed 6s ease-in-out 1.5s infinite;
        }

        .mockup-pulse {
          animation: mockup-pulse 2.5s ease-in-out infinite;
        }

        .mockup-glow {
          animation: mockup-glow 5s ease-in-out infinite;
        }

        .suggestions-track {
          animation: suggestions-scroll 18s linear infinite;
        }

        .suggestions-scroll:hover .suggestions-track {
          animation-play-state: paused;
        }

        .sparkline-draw {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
          animation: sparkline-draw 1.6s ${APPLE_EASE} forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .mockup-float-slow,
          .mockup-float-delayed,
          .mockup-pulse,
          .mockup-glow,
          .suggestions-track,
          .sparkline-draw {
            animation: none !important;
          }
          .mockup-tilt {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductMockup;
