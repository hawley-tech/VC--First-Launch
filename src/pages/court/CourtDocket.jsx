import { C, WebSidebar, SectionTitle, Card, Chip, Btn } from '../../components/ui';

function CourtSidebar({ active }) {
  return (
    <WebSidebar title="Court Portal · Read-only" accent={active} sections={[
      { items: [{ label: 'Cases on docket' }, { label: 'Reports received', badge: 4 }, { label: 'Verification audit' }] },
      { heading: 'Tools', items: [{ label: 'Search' }, { label: 'verify QR / hash' }, { label: 'Account' }] },
    ]} />
  );
}

export { CourtSidebar };

const cases = [
  ['4429-A', 'James L. Reyes', 'Sobriety compliance', 'VR-2026-091', 'Marian Jennings', 'Thu 9:00 AM', 'warn'],
  ['4318-C', 'Dana M. Okafor', 'Co-parenting', 'VR-2026-082', 'M. Jennings', 'Fri 11:00 AM', 'ok'],
  ['4501-B', 'Luis T. Camargo', 'Work release', 'VR-2026-088', 'R. Patel', 'Jun 2', 'ok'],
  ['4488-A', 'Priya Narayan', 'Sobriety + treatment', 'VR-2026-079', 'M. Jennings', 'Jun 4', 'ok'],
  ["4421-D", "Mac O'Connell", 'House arrest', 'VR-2026-074', 'D. Hsu', 'Jun 9', 'bad'],
];

const COLS = '80px 1.4fr 1.3fr 120px 1.2fr 1fr 80px';

export default function CourtDocket() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <CourtSidebar active="Cases on docket" />
      <div style={{ flex: 1, padding: '20px 22px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 14 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>Cases with compliance records</div>
            <div style={{ fontSize: 12, color: C.pencil, marginTop: 3 }}>Hon. R. Tanaka · Dept 12 · Riverside Superior</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn size="sm" kind="ghost">Verify external report</Btn>
            <Btn size="sm" kind="ghost">Export docket</Btn>
          </div>
        </div>

        {/* Table */}
        <div style={{
          flex: 1, background: '#fff', borderRadius: 12,
          boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`,
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}>
          {/* Table header */}
          <div style={{
            display: 'grid', gridTemplateColumns: COLS,
            padding: '10px 16px', background: C.light,
            borderBottom: `1px solid ${C.line}`,
            fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.8,
          }}>
            <div>Case</div><div>Subject</div><div>Order type</div><div>Latest report</div>
            <div>Atty of record</div><div>Hearing</div><div></div>
          </div>

          {/* Rows */}
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {cases.map((c, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: COLS,
                padding: '13px 16px', alignItems: 'center', fontSize: 13,
                borderBottom: `1px solid ${C.line}`,
                background: i % 2 === 0 ? '#fff' : C.paper,
                transition: 'background 0.1s',
              }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: C.pencil }}>{c[0]}</div>
                <div style={{ fontWeight: 600 }}>{c[1]}</div>
                <div style={{ fontSize: 12, color: C.pencil }}>{c[2]}</div>
                <div><Chip kind="info">{c[3]}</Chip></div>
                <div style={{ fontSize: 12 }}>{c[4]}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Chip kind={c[6]}>{c[5]}</Chip>
                </div>
                <div><Btn size="sm" kind="ghost">Open →</Btn></div>
              </div>
            ))}
          </div>
        </div>

        {/* Read-only notice */}
        <div style={{
          background: '#fef8e8', borderRadius: 10, padding: '12px 16px',
          border: `1px solid #e8d87a`, flexShrink: 0,
          display: 'flex', gap: 12, alignItems: 'center',
        }}>
          <span style={{ fontSize: 20 }}>⚖</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 13 }}>Court view is read-only and audited</div>
            <div style={{ fontSize: 12, color: C.pencil, marginTop: 2 }}>Every access by the court is logged. Reports are validated against the originating record before display.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
