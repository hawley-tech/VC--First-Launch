import { C, MobileHeader, Btn, Card } from '../../components/ui';

const consents = [
  { t: 'Data collection & storage', s: 'GPS, photos, messages, and activity are recorded and stored securely.', required: true },
  { t: 'Professional access', s: 'Your attorney, agency, or supervising professional can view your record.', required: true },
  { t: 'Immutable records', s: 'Submitted data cannot be edited or deleted — only added to.', required: true },
  { t: 'Export & sharing', s: 'Reports may be generated and shared with courts or agencies.', required: true },
];

export default function MobConsent() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Consent & terms" left="←" right="" subtitle="Step 5 of 5" />
      <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
        <div style={{ height: 6, background: C.light, borderRadius: 3, border: `1px solid ${C.ink}` }}>
          <div style={{ width: '100%', height: '100%', background: C.accent, borderRadius: 3 }} />
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1.1 }}>
          Before we begin,<br/>you must agree to:
        </div>
        {consents.map((c, i) => (
          <Card key={i} padding={10} style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 22, height: 22, border: `2px solid ${C.accent}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0, color: C.accent }}>✓</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{c.t}</div>
              <div style={{ fontSize: 12, color: C.pencil, marginTop: 2 }}>{c.s}</div>
              {c.required && <div style={{ fontSize: 10, color: C.accent, marginTop: 2 }}>Required</div>}
            </div>
          </Card>
        ))}
        <div style={{ fontSize: 11, color: C.pencil, lineHeight: 1.4, marginTop: 4 }}>
          This platform is a documentation tool only. It does not make legal determinations. By continuing, you acknowledge that all records are immutable once submitted.
        </div>
        <Btn fullWidth size="lg" kind="accent" style={{ marginTop: 'auto' }}>I agree — begin documentation</Btn>
      </div>
    </div>
  );
}
