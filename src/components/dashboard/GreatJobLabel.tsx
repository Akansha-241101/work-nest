type GreatJobLabelProps = {
  viewBox?: { x?: number; y?: number };
};

export function GreatJobLabel({ viewBox }: GreatJobLabelProps) {
  const x = viewBox?.x ?? 0;
  const y = (viewBox?.y ?? 0) - 30;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={-44}
        y={-14}
        width={88}
        height={28}
        rx={12}
        fill="var(--clay-lavender)"
        stroke="var(--card)"
        strokeWidth={2}
      />
      <path d="M -6 13 L 0 20 L 6 13 Z" fill="var(--clay-lavender)" />
      <text
        y={4}
        textAnchor="middle"
        fontSize={11}
        fontWeight={700}
        fill="var(--clay-lavender-ink)"
      >
        Great job! 🎉
      </text>
    </g>
  );
}
