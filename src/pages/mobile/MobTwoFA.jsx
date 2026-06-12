import { C, MobileHeader, Btn, Card, Field } from '../../components/ui';

export default function MobTwoFA() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Secure your account" left="←" right="" subtitle="Step 3 of 5" />
      <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ height: 6, background: C.light, borderRadius: 3, border: `1px solid ${C.ink}` }}>
          <div style={{ width: '60%', height: '100%', background: C.accent, borderRadius: 3 }} />
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1.1 }}>
          Two-factor<br/>authentication
        </div>
        <div style={{ fontSize: 13, color: C.pencil }}>
          A verification code will be sent to confirm your identity on every login.
        </div>
        <Card padding={12} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { i: '📱', t: 'Authenticator app', s: 'Most secure · recommended', active: true },
            { i: '💬', t: 'SMS to phone', s: 'Backup method' },
            { i: '📧', t: 'Email code', s: 'Slowest' },
          ].map((m, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, padding: '8px 10px',
              border: `1.5px solid ${m.active ? C.accent : C.ink}`,
              borderRadius: 8, background: m.active ? '#fdf0ed' : C.paper,
            }}>
              <div style={{ fontSize: 20 }}>{m.i}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{m.t}</div>
                <div style={{ fontSize: 12, color: C.pencil }}>{m.s}</div>
              </div>
              <span>{m.active ? '◉' : '○'}</span>
            </div>
          ))}
        </Card>
        <Field label="Phone number" placeholder="+1 (555) 000-0000" />
        <div style={{ marginTop: 'auto' }}>
          <Btn fullWidth size="lg" kind="accent">Set up 2FA →</Btn>
        </div>
        <div style={{ fontSize: 11, color: C.pencil, textAlign: 'center' }}>
          All login attempts are logged as audit events.
        </div>
      </div>
    </div>
  );
}
