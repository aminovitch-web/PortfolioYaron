export default function Waves() {
  return (
    <svg
      className="hero__waves"
      viewBox="0 0 1440 240"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2e8b57" />
          <stop offset="100%" stopColor="#f4a261" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#waveStroke)" strokeLinecap="round">
        <path className="wave wave--1" strokeOpacity="0.25" strokeWidth="2"
          d="M0 160 C 160 140, 320 180, 480 160 C 640 140, 800 180, 960 160 C 1120 140, 1280 180, 1440 160"/>
        <path className="wave wave--2" strokeOpacity="0.18" strokeWidth="2"
          d="M0 190 C 160 170, 320 210, 480 190 C 640 170, 800 210, 960 190 C 1120 170, 1280 210, 1440 190"/>
        <path className="wave wave--3" strokeOpacity="0.12" strokeWidth="2"
          d="M0 130 C 160 110, 320 150, 480 130 C 640 110, 800 150, 960 130 C 1120 110, 1280 150, 1440 130"/>
      </g>
    </svg>
  );
}
