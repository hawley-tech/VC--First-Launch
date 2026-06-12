import { C, MobileHeader, Btn, Chip } from '../../components/ui';

const perms = [
  { i: '◎', t: 'Location, always', s: 'Required to record check-ins.' },
  { i: '📷', t: 'Camera & photos', s: 'For evidence capture.' },
  { i: '🎙', t: 'Microphone', s: 'For audio evidence (optional).' },
  { i: '🔔', t: 'Notifications', s: 'For check-in reminders.' },
  { i: '🆔', t: 'Face ID', s: 'For secure sign-in.' },
];

export default function MobPermissions() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Permissions" left="←" right="" subtitle="Step 4 of 5" />
      <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1.1 }}>
          We need these<br/>to record what occurs.
        </div>
        {perms.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: `1px dashed ${C.line}` }}>
            <div style={{ width: 32, height: 32, border: `1.2px solid ${C.ink}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{p.i}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{p.t}</div>
              <div style={{ fontSize: 12, color: C.pencil }}>{p.s}</div>
            </div>
            <Chip kind={i < 4 ? 'ok' : 'pending'}>{i < 4 ? '✓ on' : 'tap'}</Chip>
          </div>
        ))}
        <Btn fullWidth size="lg" kind="accent" style={{ marginTop: 'auto' }}>Grant all & continue</Btn>
        <div style={{ fontSize: 11, color: C.pencil, textAlign: 'center' }}>
          You may revoke any time. Limits will be noted on your record.
        </div>
      </div>
    </div>
  );
}
