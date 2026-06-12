import { C, Card, Chip, Btn, Row, Stamp } from '../../components/ui';
import { AttySidebar } from './ProDashboard';

const sections = [
  'Cover page', 'Case summary', 'Documentation overview', 'Timeline (last 30d)',
  'GPS verification', 'Evidence summary', 'Communication summary', 'EEP-0042 detail',
  'Audit history', 'Verification seal + QR',
];

export default function ProReportBuilder() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AttySidebar active="Reports" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '14px 18px', borderBottom: `1.5px solid ${C.ink}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: C.light, flexShrink: 0 }}>
          <div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, lineHeight: 1 }}>VR-2026-091 — Court Report</div>
            <div style={{ fontSize: 12, color: C.pencil }}>James Reyes · 4429-A · Auto-saved 12s ago</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Btn size="sm" kind="ghost">Preview PDF</Btn>
            <Btn size="sm" kind="ghost">Save draft</Btn>
            <Btn size="sm" kind="stamp">🔐 Generate submitted PDF</Btn>
          </div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '240px 1fr 260px', overflow: 'hidden' }}>
          {/* section list */}
          <div style={{ borderRight: `1.5px solid ${C.ink}`, padding: 12, fontSize: 13, display: 'flex', flexDirection: 'column', gap: 4, background: C.light, overflowY: 'auto' }}>
            <div style={{ fontSize: 10, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Sections (drag to reorder)</div>
            {sections.map((s, i) => (
              <div key={i} style={{ padding: '6px 8px', borderRadius: 4, border: `1px solid ${C.ink}`, background: C.paper, display: 'flex', justifyContent: 'space-between' }}>
                <span>☰ {s}</span>
                <Chip kind="ok" style={{ fontSize: 10 }}>✓</Chip>
              </div>
            ))}
            <div style={{ padding: '6px 8px', borderRadius: 4, border: `1px solid ${C.line}`, color: C.pencil, cursor: 'pointer' }}>＋ Add section…</div>
          </div>
          {/* page preview */}
          <div style={{ padding: 16, overflowY: 'auto', background: '#eae5dc' }}>
            <div style={{ background: '#fff', maxWidth: 540, margin: '0 auto', padding: 32, border: `1px solid ${C.ink}`, fontFamily: 'Georgia, serif', fontSize: 12, position: 'relative' }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 30, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>Verified Compliance™</div>
              <div style={{ fontSize: 10, color: C.pencil, letterSpacing: 2, textTransform: 'uppercase' }}>VC Report · VR-2026-091</div>
              <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, fontSize: 11 }}>
                <div><div style={{ color: C.pencil }}>Subject</div><div style={{ fontWeight: 700, fontSize: 14 }}>James L. Reyes</div><div>DOB •• / •• / 19••</div></div>
                <div><div style={{ color: C.pencil }}>Case</div><div style={{ fontWeight: 700, fontSize: 14 }}>4429-A</div><div>Hon. R. Tanaka · Riverside Superior</div></div>
                <div><div style={{ color: C.pencil }}>Reporting period</div><div>Apr 26 – May 26, 2026</div></div>
                <div><div style={{ color: C.pencil }}>Submission rate</div><div style={{ fontWeight: 700, fontSize: 14 }}>98.2%</div><div>1 missed (EEP-0042 filed)</div></div>
              </div>
              <Stamp color={C.stamp} rotate={6} style={{ position: 'absolute', top: 24, right: 24 }}>Draft</Stamp>
              <hr style={{ margin: '20px 0', border: 0, borderTop: `1px solid ${C.ink}` }} />
              <div style={{ fontWeight: 700, fontSize: 13 }}>1 · Case summary</div>
              <p style={{ marginTop: 6, lineHeight: 1.5 }}>Subject is subject to compliance order 4429-A, requiring continuous sobriety monitoring with twice-daily check-ins, three weekly AA attendances, and weekly employment documentation through Aug 30, 2026.</p>
              <div style={{ fontWeight: 700, fontSize: 13, marginTop: 14 }}>2 · Documentation overview</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: 2, marginTop: 6 }}>
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} style={{ width: '100%', aspectRatio: '1', background: i === 14 ? '#a53321' : '#2a6f4f', borderRadius: 2 }} />
                ))}
              </div>
              <div style={{ fontSize: 10, color: C.pencil, marginTop: 2 }}>30 daily cells · green = recorded, red = missed (1)</div>
              <div style={{ position: 'absolute', bottom: 24, right: 24, textAlign: 'right' }}>
                <div style={{ width: 60, height: 60, background: '#000', display: 'inline-block', marginBottom: 4 }} />
                <div style={{ fontSize: 9, color: C.pencil }}>verify.vc/r/VR-2026-091</div>
              </div>
            </div>
          </div>
          {/* sources panel */}
          <div style={{ borderLeft: `1.5px solid ${C.ink}`, padding: 14, display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>
            <div style={{ fontSize: 10, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Sources auto-pulled</div>
            <Card padding={8}><div style={{ fontSize: 12, fontWeight: 600 }}>284 check-ins</div><div style={{ fontSize: 11, color: C.pencil }}>Recorded GPS + selfie</div></Card>
            <Card padding={8}><div style={{ fontSize: 12, fontWeight: 600 }}>1 EEP</div><div style={{ fontSize: 11, color: C.pencil }}>EEP-0042 · 3 attachments</div></Card>
            <Card padding={8}><div style={{ fontSize: 12, fontWeight: 600 }}>62 message events</div><div style={{ fontSize: 11, color: C.pencil }}>14 privileged excluded</div></Card>
            <Card padding={8}><div style={{ fontSize: 12, fontWeight: 600 }}>0 GPS data quality alerts</div><div style={{ fontSize: 11, color: C.pencil }}>No anomalies detected</div></Card>
            <div style={{ fontSize: 10, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Distribution</div>
            <Row left="🏛" title="Court clerk (Tanaka)" sub="Auto-share on seal" status={{ kind: 'ok', label: 'queued' }} />
            <Row left="📨" title="Probation officer" sub="Email export" status={{ kind: 'ok', label: 'queued' }} />
            <Row left="👤" title="Client (James R.)" sub="View-only copy" status={{ kind: 'pending', label: 'opt-in' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
