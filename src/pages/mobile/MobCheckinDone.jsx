import { C, MobileHeader, DisclaimerBanner, Btn } from '../../components/ui';

export default function MobCheckinDone() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: C.paper }}>
      <MobileHeader title="Recorded" left="" right="✕" />
      <DisclaimerBanner compact />
      <div style={{ flex: 1, padding: '24px 18px', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>

        {/* Success mark */}
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'linear-gradient(140deg, #1e5c40, #276148)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 36, color: '#fff',
          boxShadow: '0 4px 20px rgba(39,97,72,0.4)',
          marginTop: 10,
        }}>✓</div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 30, lineHeight: 1, color: C.ink }}>Check-in #2,847 recorded.</div>
          <div style={{ fontSize: 13, color: C.pencil, marginTop: 6 }}>Mon May 26 · 6:47:23 AM · 1247 Elm St · GPS ±4m</div>
        </div>

        {/* Receipt breakdown */}
        <div style={{
          width: '100%', background: '#fff', borderRadius: 14,
          boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`,
          overflow: 'hidden',
        }}>
          <div style={{ padding: '10px 14px', background: C.light, borderBottom: `1px solid ${C.line}`, fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            What was recorded
          </div>
          {[
            { icon: '◎', label: 'Location recorded', detail: '1247 Elm St · ±4m' },
            { icon: '📷', label: 'Selfie · liveness captured', detail: 'No issues detected' },
            { icon: '✎', label: 'Self-statement submitted', detail: 'Sobriety declaration' },
            { icon: '🔐', label: 'Hash issued', detail: 'SHA-256: 7f3a…b21c' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 12, alignItems: 'center',
              padding: '10px 14px',
              borderBottom: i < 3 ? `1px solid ${C.line}` : 'none',
            }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: C.pencil }}>{item.detail}</div>
              </div>
              <span style={{ color: C.stamp, fontWeight: 700, fontSize: 16 }}>✓</span>
            </div>
          ))}
        </div>

        {/* Hash badge */}
        <div style={{
          width: '100%', background: '#edf5f0', borderRadius: 10,
          padding: '10px 14px', border: `1px solid #c2dcd0`,
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 10,
          color: C.stamp, wordBreak: 'break-all', lineHeight: 1.6,
        }}>
          Record sealed · SHA-256: 7f3a9b2c4d8e1f6a0c3b5d2e9f4a7b1c8d5e2f0a…b21c
        </div>

        <div style={{ display: 'flex', gap: 8, width: '100%', marginTop: 'auto' }}>
          <Btn size="md" kind="ghost" style={{ flex: 1 }}>Share receipt</Btn>
          <Btn size="md" kind="accent" style={{ flex: 1 }}>Done</Btn>
        </div>
      </div>
    </div>
  );
}
