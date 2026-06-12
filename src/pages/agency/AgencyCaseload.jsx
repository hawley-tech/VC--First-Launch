import { C, WebSidebar, Chip, Btn } from '../../components/ui';

function AgencySidebar({ active }) {
  return (
    <WebSidebar title="Agency · Riverside Probation" accent={active} sections={[
      { items: [{ label: 'Caseload' }, { label: 'Alerts', badge: 7 }, { label: 'Random tests' }, { label: 'Reports' }] },
      { heading: 'Tools', items: [{ label: 'GPS map' }, { label: 'Bulk actions' }, { label: 'Templates' }] },
    ]} />
  );
}

export { AgencySidebar };

const KPI_COLORS = ['#276148', '#4a6fa5', '#c0442e', '#d97706', '#8b5cf6'];

const ALERTS = [
  { initials: 'DO', name: 'D. Okafor', event: 'Outside geofence 14 min', kind: 'bad', ago: '2m ago', color: '#276148' },
  { initials: 'MO', name: "M. O'Connell", event: 'GPS location data quality concern', kind: 'flag', ago: '11m ago', color: '#8b5cf6' },
  { initials: 'RS', name: 'R. Singh', event: 'Missed evening check-in', kind: 'bad', ago: '14h ago', color: '#c0442e' },
  { initials: 'JH', name: 'J. Holt', event: 'Battery dead during window', kind: 'warn', ago: '20h ago', color: '#d97706' },
  { initials: 'AB', name: 'A. Bauer', event: 'Travel notice — review required', kind: 'pending', ago: '1d ago', color: '#4a6fa5' },
];

const TESTS = [
  { icon: '🧪', title: "Generate today's draw", sub: 'Pool: 184 · Quota 14', kind: 'info', label: 'auto 7a' },
  { icon: '🧪', title: 'J. Reyes — window 2–4p', sub: 'Notice sent 6:47a', kind: 'pending', label: 'pending' },
  { icon: '🧪', title: 'P. Narayan — Wed 9–11a', sub: 'Confirmed', kind: 'ok', label: 'set' },
  { icon: '🧪', title: 'D. Okafor — Mon 1–3p', sub: 'No-show · review', kind: 'bad', label: 'no-show' },
];

export default function AgencyCaseload() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AgencySidebar active="Caseload" />
      <div style={{ flex: 1, padding: '20px 22px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>My caseload</div>
            <div style={{ fontSize: 12, color: C.pencil, marginTop: 2 }}>Officer T. Park · 184 subjects · 7 alerts</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn size="sm" kind="ghost">Map view</Btn>
            <Btn size="sm" kind="ghost">Schedule test</Btn>
            <Btn size="sm" kind="accent">Bulk action</Btn>
          </div>
        </div>

        {/* KPI strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, flexShrink: 0 }}>
          {[
            ['Compliance avg', '91.4%', 0],
            ['Open explanations', '12', 1],
            ['Missed last 24h', '7', 2],
            ['Tests due ≤24h', '14', 3],
            ['Field visits', '3', 4],
          ].map(([t, v, ci], i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 10, padding: '12px 14px',
              boxShadow: 'var(--shadow-xs)', border: `1px solid ${C.line}`,
              borderTop: `3px solid ${KPI_COLORS[ci]}`,
            }}>
              <div style={{ fontSize: 10, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5 }}>{t}</div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 28, lineHeight: 1, marginTop: 4, color: KPI_COLORS[ci] }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Main panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, flex: 1, overflow: 'hidden' }}>

          {/* Live alerts */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Live alerts</div>
              <div style={{ display: 'flex', gap: 4 }}>
                <Chip kind="bad">7 critical</Chip>
                <Chip kind="warn">14 watch</Chip>
              </div>
            </div>
            {ALERTS.map((a, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'center', padding: '10px 12px',
                borderRadius: 8,
                background: a.kind === 'bad' ? '#fdf0ed' : a.kind === 'flag' ? '#f5f0fe' : C.paper,
                border: `1px solid ${a.kind === 'bad' ? '#f0c4bb' : a.kind === 'flag' ? '#ddd0f8' : C.line}`,
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                  background: a.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 600,
                }}>{a.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{a.name}</div>
                  <div style={{ fontSize: 11, color: C.pencil, marginTop: 1 }}>{a.event}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3, flexShrink: 0 }}>
                  <Chip kind={a.kind}>{a.kind}</Chip>
                  <span style={{ fontSize: 10, color: C.pencil }}>{a.ago}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Random test queue */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Random test queue</div>
            {TESTS.map((t, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'center', padding: '9px 12px',
                borderRadius: 8, background: C.paper, border: `1px solid ${C.line}`,
              }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{t.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{t.title}</div>
                  <div style={{ fontSize: 11, color: C.pencil }}>{t.sub}</div>
                </div>
                <Chip kind={t.kind}>{t.label}</Chip>
              </div>
            ))}
            <div style={{ marginTop: 6 }}>
              <Btn size="sm" kind="ghost" fullWidth>Open scheduler →</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
