import { C, MobileHeader, DisclaimerBanner, Btn } from '../../components/ui';

const STEPS = [
  { icon: '◎', num: 1, title: 'Confirm your location', sub: 'GPS will be captured automatically.', color: '#4a6fa5' },
  { icon: '📷', num: 2, title: 'Take a selfie', sub: 'Liveness check — no edits allowed.', color: '#276148' },
  { icon: '✓', num: 3, title: 'Answer 2 questions', sub: 'Sobriety self-statement.', color: '#8b5cf6' },
];

export default function MobCheckin1() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: C.paper }}>
      <MobileHeader title="Check-in" left="✕" subtitle="Sobriety · Morning" />
      <DisclaimerBanner compact />
      <div style={{ flex: 1, padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 14 }}>

        {/* Window countdown */}
        <div style={{
          background: '#fff', borderRadius: 12, padding: '12px 16px',
          boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5 }}>Window closes</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 28, lineHeight: 1, color: C.stamp }}>9:00 AM</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5 }}>Time remaining</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 22, color: C.stamp, fontWeight: 600 }}>2:14:07</div>
          </div>
        </div>

        {/* Steps card */}
        <div style={{
          background: '#fff', borderRadius: 12, padding: '16px',
          boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`,
        }}>
          <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 14 }}>This check-in takes about 2 minutes</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, position: 'relative', paddingBottom: i < STEPS.length - 1 ? 18 : 0 }}>
                {/* connector line */}
                {i < STEPS.length - 1 && (
                  <div style={{ position: 'absolute', left: 17, top: 36, width: 2, height: 'calc(100% - 18px)', background: C.line }} />
                )}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: step.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 15, boxShadow: `0 2px 8px ${step.color}55`,
                }}>{step.num}</div>
                <div style={{ paddingTop: 6 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{step.title}</div>
                  <div style={{ fontSize: 12, color: C.pencil, marginTop: 2 }}>{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy note */}
        <div style={{
          background: C.light, borderRadius: 10, padding: '10px 14px',
          fontSize: 12, color: C.pencil, display: 'flex', gap: 8, alignItems: 'flex-start',
        }}>
          <span>🔒</span>
          <span>All data is end-to-end encrypted and submitted directly to your case record. No one can view your selfie in real time.</span>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Btn fullWidth size="lg" kind="accent">Begin check-in →</Btn>
          <Btn fullWidth size="md" kind="ghost">I can't right now — explain</Btn>
        </div>
      </div>
    </div>
  );
}
