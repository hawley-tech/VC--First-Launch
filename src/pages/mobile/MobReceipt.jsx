import { C, MobileHeader, DisclaimerBanner, Chip, Btn } from '../../components/ui';

const TIMESTAMPS = [
  ['Device time', '6:47:23 AM PDT'],
  ['Server received', '6:47:24 AM UTC'],
  ['Ledger entry', '6:47:25 AM UTC'],
];

const SIGNALS = [
  { icon: '◎', label: 'GPS accuracy 4m', ok: true },
  { icon: '📶', label: 'Wi-Fi corroborated', ok: true },
  { icon: '🔵', label: 'Bluetooth beacon detected', ok: true },
  { icon: '📱', label: 'Device sensor data normal', ok: true },
];

export default function MobReceipt() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: C.paper }}>
      <MobileHeader title="Receipt detail" left="←" subtitle="Check-in #2,847" />
      <DisclaimerBanner compact />
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>

        {/* Timestamps */}
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflow: 'hidden' }}>
          <div style={{ padding: '9px 14px', background: C.light, borderBottom: `1px solid ${C.line}`, fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Timestamps
          </div>
          {TIMESTAMPS.map(([label, value], i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 14px',
              borderBottom: i < TIMESTAMPS.length - 1 ? `1px solid ${C.line}` : 'none',
            }}>
              <span style={{ fontSize: 12, color: C.pencil }}>{label}</span>
              <span style={{ fontSize: 12, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Data quality signals */}
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflow: 'hidden' }}>
          <div style={{ padding: '9px 14px', background: C.light, borderBottom: `1px solid ${C.line}`, fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Data quality signals
          </div>
          {SIGNALS.map((s, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, alignItems: 'center',
              padding: '9px 14px',
              borderBottom: i < SIGNALS.length - 1 ? `1px solid ${C.line}` : 'none',
            }}>
              <span style={{ fontSize: 16 }}>{s.icon}</span>
              <span style={{ flex: 1, fontSize: 13 }}>{s.label}</span>
              {s.ok && <Chip kind="ok">ok</Chip>}
            </div>
          ))}
        </div>

        {/* Hash */}
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, padding: '12px 14px' }}>
          <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Record hash</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, wordBreak: 'break-all', color: C.pencil, lineHeight: 1.6 }}>
            SHA-256: 7f3a9b2c4d8e1f6a0c3b5d2e9f4a7b1c8d5e2f0a…b21c
          </div>
          <div style={{ marginTop: 8 }}>
            <Chip kind="ok">Hash unchanged ✓</Chip>
          </div>
        </div>

        <div style={{ fontSize: 11, color: C.pencil, lineHeight: 1.5, padding: '4px 2px' }}>
          This receipt confirms data was received and stored. It does not constitute a professional determination.
        </div>

        <Btn fullWidth kind="ghost">Export receipt PDF</Btn>
      </div>
    </div>
  );
}
