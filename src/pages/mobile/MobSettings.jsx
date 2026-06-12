import { C, MobileHeader, MobileTabbar } from '../../components/ui';

const items = [
  ['🆔 Identity & documentation', 'Face ID, ID docs, biometric audit'],
  ['🔒 Permissions & sharing', 'Who sees what'],
  ['📤 Export my record', 'Generate full PDF or share link'],
  ['🛎 Notifications', 'Push, SMS, email rules'],
  ['🆘 Help & support', '24/7 line for documentation issues'],
  ['🚪 Sign out', ''],
];

export default function MobSettings() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Profile" left="←" />
      <div style={{ flex: 1, overflowY: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', border: `1.5px solid ${C.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, background: C.light, flexShrink: 0 }}>JR</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>James Reyes</div>
            <div style={{ fontSize: 12, color: C.pencil }}>ID #VC-58812 · Day 142</div>
            <div style={{ fontSize: 11, color: C.pencil }}>Att. Jennings · Riverside Probation</div>
          </div>
        </div>
        {items.map(([t, s], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px dashed ${C.line}` }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{t}</div>
              {s && <div style={{ fontSize: 12, color: C.pencil }}>{s}</div>}
            </div>
            <span style={{ color: C.pencil, fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>
      <MobileTabbar active="more" />
    </div>
  );
}
