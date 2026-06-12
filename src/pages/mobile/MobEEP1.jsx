import { C, MobileHeader, Card, Btn, PostIt } from '../../components/ui';

export default function MobEEP1() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Emergency Explanation" left="✕" subtitle="EEP-0042" />
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Card padding={12} style={{ background: '#fef8e8' }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, lineHeight: 1 }}>Missed a requirement?<br/>Tell the record what happened.</div>
          <div style={{ fontSize: 12, color: C.pencil, marginTop: 6 }}>
            This is not a confession. It's a contemporaneous statement that becomes part of your file.
          </div>
        </Card>
        <div>
          <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase' }}>An EEP includes</div>
          {['Your written statement', 'Photos / video / docs', 'Optional witness contact', 'Timestamp + GPS at submission', 'Attorney auto-notification'].map((s, i) => (
            <div key={i} style={{ fontSize: 13, padding: '4px 0', borderBottom: `1px dashed ${C.line}`, display: 'flex', gap: 8 }}>
              <span style={{ color: C.stamp }}>✓</span>{s}
            </div>
          ))}
        </div>
        <PostIt rotate={-2} style={{ alignSelf: 'flex-end' }}>You have 24h to file<br/>after a missed event.</PostIt>
        <div style={{ marginTop: 'auto' }}>
          <Btn fullWidth size="lg" kind="accent">Start explanation →</Btn>
          <div style={{ textAlign: 'center', fontSize: 11, color: C.pencil, marginTop: 6 }}>Saved drafts: 0</div>
        </div>
      </div>
    </div>
  );
}
