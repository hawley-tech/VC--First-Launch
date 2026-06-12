import { C, SectionTitle, Card, Row, Chip, Btn, Stamp } from '../../components/ui';
import { CourtSidebar } from './CourtDocket';

export default function CourtCaseView() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <CourtSidebar active="Cases on docket" />
      <div style={{ flex: 1, padding: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexShrink: 0 }}>
          <div>
            <SectionTitle>Case 4429-A · James L. Reyes</SectionTitle>
            <div style={{ fontSize: 12, color: C.pencil }}>Sobriety compliance · Hearing Thu, May 28 · 9:00 AM</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Stamp color={C.stamp} rotate={-4}>Recorded by VC</Stamp>
            <Btn size="sm" kind="ghost">Verify QR</Btn>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 14, flex: 1, overflow: 'hidden' }}>
          <Card padding={14} style={{ overflowY: 'auto' }}>
            <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Submissions · Apr 26 – May 26</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 38, lineHeight: 1, marginTop: 2 }}>98.2%</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(30, 1fr)', gap: 2, marginTop: 8 }}>
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} style={{ aspectRatio: '1', background: i === 28 || i === 35 ? C.accent : C.stamp, borderRadius: 1 }} />
              ))}
            </div>
            <div style={{ fontSize: 11, color: C.pencil, marginTop: 4 }}>60 check-in windows · 2 missed (1 EEP filed)</div>
            <hr style={{ margin: '14px 0', border: 0, borderTop: `1px dashed ${C.line}` }} />
            <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Reports filed</div>
            <Row left="📄" title="VR-2026-091 — VC Report" sub="Filed today 7:22 AM · M. Jennings · submitted" status={{ kind: 'ok', label: 'recorded' }} />
            <Row left="📄" title="VR-2026-072 — Monthly summary" sub="Apr 30 · auto-generated" status={{ kind: 'ok', label: 'recorded' }} />
            <Row left="📄" title="VR-2026-055 — EEP-0019 packet" sub="Mar 18 · attorney filed" status={{ kind: 'ok', label: 'recorded' }} />
          </Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
            <Card padding={12}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Order on file</div>
              <div style={{ marginTop: 4, fontFamily: 'Georgia, serif', fontSize: 13, fontStyle: 'italic' }}>
                "Defendant shall maintain continuous sobriety monitoring via Verified Compliance with twice-daily check-ins…"
              </div>
              <Btn size="sm" kind="ghost" style={{ marginTop: 8 }}>Open order PDF</Btn>
            </Card>
            <Card padding={12}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Verification audit</div>
              <Row left="🔐" title="Report hash matches origin" sub="Recomputed 1m ago" status={{ kind: 'ok', label: '✓' }} />
              <Row left="🔐" title="Evidence chain intact" sub="1,247 events, 0 gaps" status={{ kind: 'ok', label: '✓' }} />
              <Row left="🔐" title="No tampering detected" sub="QR matches submitted hash" status={{ kind: 'ok', label: '✓' }} />
            </Card>
            <Card padding={12} style={{ background: C.light }}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Privileged excluded</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>Attorney-client communication is not visible from this portal. 14 messages excluded.</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
