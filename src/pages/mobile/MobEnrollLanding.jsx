import { C, Btn, Card, Chip } from '../../components/ui';

export default function MobEnrollLanding() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 20, gap: 16, background: C.paper }}>
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 28, fontWeight: 700, lineHeight: 1.1, marginTop: 16 }}>
        You've been enrolled<br/>in Verified Compliance™
      </div>
      <div style={{ fontSize: 13, color: C.pencil }}>
        Your attorney or supervising agency has added you to a documentation program. This app records your activity — it does not make decisions about your case.
      </div>
      <Card padding={12} style={{ background: '#fef8e8' }}>
        <div style={{ fontSize: 12, display: 'flex', gap: 6 }}>
          <span>ⓘ</span>
          <span><b>Documentation only.</b> All determinations are made by your supervising professional.</span>
        </div>
      </Card>
      <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Enrolled by</div>
      <Card padding={10} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1.2px solid ${C.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>MJ</div>
        <div>
          <div style={{ fontWeight: 600 }}>Att. M. Jennings</div>
          <div style={{ fontSize: 12, color: C.pencil }}>Riverside Family Law</div>
        </div>
        <Chip kind="info" style={{ marginLeft: 'auto' }}>Attorney</Chip>
      </Card>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Btn fullWidth size="lg" kind="accent">Set up my account →</Btn>
        <div style={{ textAlign: 'center', fontSize: 11, color: C.pencil }}>
          Already have an account? <span style={{ color: C.accent }}>Sign in</span>
        </div>
      </div>
    </div>
  );
}
