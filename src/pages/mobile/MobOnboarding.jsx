import { C, MobileHeader, Btn } from '../../components/ui';

const options = [
  'Court-ordered compliance',
  'Co-parenting agreement',
  'Sobriety monitoring',
  'Work release / probation',
  'Voluntary accountability',
];

export default function MobOnboarding() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Set up your record" left="←" right="" subtitle="Step 2 of 5" />
      <div style={{ padding: 16, flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ height: 6, background: C.light, borderRadius: 3, position: 'relative', border: `1px solid ${C.ink}` }}>
          <div style={{ width: '40%', height: '100%', background: C.accent, borderRadius: 3 }} />
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1.1 }}>
          How are you using<br/>Verified Compliance?
        </div>
        <div style={{ fontSize: 12, color: C.pencil, marginTop: -4 }}>
          Your attorney or agency may have set this for you.
        </div>
        {options.map((o, i) => (
          <div key={i} style={{
            padding: '10px 12px', border: `1.5px solid ${i === 0 ? C.accent : C.ink}`,
            borderRadius: 8, display: 'flex', justifyContent: 'space-between',
            background: i === 0 ? '#fdf0ed' : C.paper, fontSize: 14,
          }}>
            <span>{o}</span>
            <span>{i === 0 ? '◉' : '○'}</span>
          </div>
        ))}
        <div style={{ marginTop: 'auto' }}>
          <Btn fullWidth size="lg" kind="solid">Continue →</Btn>
        </div>
      </div>
    </div>
  );
}
