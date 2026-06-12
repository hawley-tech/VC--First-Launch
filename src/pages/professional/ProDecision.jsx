import { C, SectionTitle, Card, Chip, Btn, Placeholder } from '../../components/ui';
import { AttySidebar } from './ProDashboard';

export default function ProDecision() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AttySidebar active="Evidence review" />
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* blurred background */}
        <div style={{ filter: 'blur(2px)', opacity: 0.5, padding: 18 }}>
          <SectionTitle>Review queue</SectionTitle>
          <Card padding={14} style={{ marginTop: 12, height: 400 }}>
            <Placeholder kind="image" label="(record detail behind modal)" h="100%" />
          </Card>
        </div>
        {/* modal overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,26,23,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <Card padding={20} style={{ width: 520, maxWidth: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 24, lineHeight: 1 }}>Professional determination</div>
              <span style={{ color: C.pencil, fontSize: 16 }}>✕</span>
            </div>
            <div style={{ fontSize: 11, color: C.pencil, marginTop: 4 }}>
              This decision becomes an immutable review artifact. The source record is never modified.
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Decision</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 6, marginTop: 6 }}>
                <div style={{ padding: 10, border: `1.5px solid ${C.stamp}`, borderRadius: 6, background: '#edf5f0', textAlign: 'center', fontWeight: 700 }}>✓ Approve</div>
                <div style={{ padding: 10, border: `1.5px solid ${C.ink}`, borderRadius: 6, textAlign: 'center' }}>✕ Reject</div>
                <div style={{ padding: 10, border: `1.5px solid ${C.ink}`, borderRadius: 6, textAlign: 'center' }}>🚩 Flag</div>
                <div style={{ padding: 10, border: `1.5px solid ${C.ink}`, borderRadius: 6, textAlign: 'center' }}>✎ Annotate</div>
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Reason <span style={{ color: C.pencil, textTransform: 'none' }}>(required if Reject)</span></div>
              <div style={{ height: 70, border: `1.5px solid ${C.ink}`, borderRadius: 6, padding: 8, marginTop: 4, fontSize: 13, color: C.pencil, background: C.paper }}>
                Optional note for this approval…
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Recorded with</div>
              <div style={{ fontSize: 12 }}>Reviewer: <b>M. Jennings</b> · credential <Chip kind="ok">ACTIVE</Chip></div>
              <div style={{ fontSize: 12, marginTop: 4 }}>Policy: <b>CA-RIV v2.4</b> · Algorithm version (clustering): <b>v1.4</b></div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'flex-end' }}>
              <Btn size="md" kind="ghost">Cancel</Btn>
              <Btn size="md" kind="accent">Record approval</Btn>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
