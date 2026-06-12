import { C, MobileHeader, Card, Chip, Btn, Row } from '../../components/ui';

const days = ['M','T','W','T','F','S','S'];

export default function MobMandateDetail() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Sobriety monitoring" left="←" right="⋯" />
      <div style={{ flex: 1, overflowY: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Card padding={10}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Chip kind="ok">● Active · Day 142</Chip>
            <span style={{ fontSize: 16, fontFamily: "'Caveat', cursive" }}>98% submission rate</span>
          </div>
          <div style={{ fontSize: 12, color: C.pencil, marginTop: 4 }}>Issued by Hon. R. Tanaka · 4429-A · Jan 5, 2026</div>
        </Card>
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase' }}>Rules</div>
        <div style={{ fontSize: 13, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div>• Two check-ins daily, 6–9 AM and 8–10 PM</div>
          <div>• Photo + GPS at each check-in</div>
          <div>• No alcohol or non-prescribed substances</div>
          <div>• Random tests up to 2× / week</div>
        </div>
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>This week</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {days.map((d, i) => (
            <div key={i} style={{ textAlign: 'center', fontSize: 11, color: C.pencil }}>
              <div>{d}</div>
              <div style={{
                marginTop: 4, height: 30, borderRadius: 4, border: `1.2px solid ${C.ink}`,
                background: i < 5 ? '#edf5f0' : i === 5 ? C.paper : C.light,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
              }}>{i < 5 ? '✓' : i === 5 ? '·' : ''}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
          <Btn size="md" kind="ghost" style={{ flex: 1 }}>Court order PDF</Btn>
          <Btn size="md" kind="accent" style={{ flex: 1 }}>Check in now</Btn>
        </div>
      </div>
    </div>
  );
}
