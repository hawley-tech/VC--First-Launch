import { C, WebSidebar, Chip } from '../../components/ui';

function AdminSidebar({ active }) {
  return (
    <WebSidebar title="Admin Console" accent={active} sections={[
      { items: [
        { label: 'Overview' },
        { label: 'Users', badge: 12480 },
        { label: 'Cases' },
        { label: 'Needs review attention', badge: 23 },
      ]},
      { heading: 'Trust', items: [
        { label: 'Audit log' },
        { label: 'Chain of custody' },
        { label: 'Verification queue' },
      ]},
      { heading: 'System', items: [
        { label: 'Permissions' },
        { label: 'Templates' },
        { label: 'Notifications' },
        { label: 'API & integrations' },
      ]},
    ]} />
  );
}

export { AdminSidebar };

const KPI_CONFIG = [
  { label: 'Active users', value: '12,480', sub: '+184 this week', color: '#4a6fa5', bg: '#eef2fc' },
  { label: 'Check-ins / day', value: '38,221', sub: '99.4% nominal', color: '#276148', bg: '#edf5f0' },
  { label: 'Explanations open', value: '187', sub: '24 SLA risk', color: '#d97706', bg: '#fef8e8' },
  { label: 'Data quality flags', value: '23', sub: '4 confirmed', color: '#c0442e', bg: '#fdf0ed' },
  { label: 'Reports generated', value: '1,492', sub: 'this week', color: '#276148', bg: '#edf5f0' },
  { label: 'Court accesses', value: '218', sub: 'all verified', color: '#4a6fa5', bg: '#eef2fc' },
];

const ANOMALIES = [
  { icon: '🛰', title: 'GPS location data quality concern', sub: "M. O'Connell · 4 events", kind: 'bad' },
  { icon: '📷', title: 'Face mismatch detected', sub: 'Subject #VC-71204 · 1 event', kind: 'bad' },
  { icon: '🔁', title: 'Replayed photo (EXIF mismatch)', sub: 'Subject #VC-72993', kind: 'flag' },
  { icon: '⏱', title: 'Cluster of last-second check-ins', sub: '8 users · same agency', kind: 'warn' },
  { icon: '📶', title: 'Device clock drift > 30s', sub: '14 users', kind: 'warn' },
  { icon: '🪪', title: 'New device, no biometric re-enroll', sub: '3 users · 24h', kind: 'info' },
];

const STATUS_ROWS = [
  { label: 'API · check-in service', sub: 'p99 142ms', kind: 'ok', detail: '99.99%' },
  { label: 'Evidence storage', sub: 'WORM bucket · 3 regions', kind: 'ok', detail: 'OK' },
  { label: 'Signing service', sub: 'HSM healthy', kind: 'ok', detail: 'OK' },
  { label: 'Court export queue', sub: '218 deliveries / 24h', kind: 'ok', detail: 'OK' },
  { label: 'Push delivery', sub: 'iOS 99.7 · Android 98.9', kind: 'warn', detail: 'watch' },
];

const KIND_DOT = { ok: '#276148', warn: '#d97706', bad: '#c0442e', flag: '#8b5cf6', info: '#4a6fa5' };

export default function AdminOverview() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AdminSidebar active="Overview" />
      <div style={{ flex: 1, padding: '20px 22px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Page title */}
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>Platform overview</div>
          <div style={{ fontSize: 12, color: C.pencil, marginTop: 2 }}>System-wide health · last 24 hours</div>
        </div>

        {/* KPI grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10, flexShrink: 0 }}>
          {KPI_CONFIG.map((k, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 10, padding: '12px 12px 10px',
              boxShadow: 'var(--shadow-xs)', border: `1px solid ${C.line}`,
              borderTop: `3px solid ${k.color}`,
            }}>
              <div style={{ fontSize: 10, color: C.pencil, textTransform: 'uppercase', letterSpacing: 0.5 }}>{k.label}</div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, lineHeight: 1, marginTop: 5, color: k.color }}>{k.value}</div>
              <div style={{ fontSize: 10, color: C.pencil, marginTop: 3 }}>{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Bottom panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 14, flex: 1, overflow: 'hidden' }}>

          {/* Anomaly stream */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ marginBottom: 4 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Anomaly stream</div>
              <div style={{ fontSize: 11, color: C.pencil }}>ML + rule-based, ranked by severity</div>
            </div>
            {ANOMALIES.map((a, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'center', padding: '9px 12px',
                borderRadius: 8, background: a.kind === 'bad' ? '#fdf0ed' : a.kind === 'flag' ? '#f5f0fe' : C.paper,
                border: `1px solid ${a.kind === 'bad' ? '#f0c4bb' : a.kind === 'flag' ? '#ddd0f8' : C.line}`,
              }}>
                <div style={{ fontSize: 20, flexShrink: 0 }}>{a.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{a.title}</div>
                  <div style={{ fontSize: 11, color: C.pencil, marginTop: 1 }}>{a.sub}</div>
                </div>
                <Chip kind={a.kind}>{a.kind}</Chip>
              </div>
            ))}
          </div>

          {/* System status */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>System status</div>
            {STATUS_ROWS.map((s, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'center', padding: '9px 12px',
                borderRadius: 8, background: C.paper, border: `1px solid ${C.line}`,
              }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                  background: KIND_DOT[s.kind] || C.pencil,
                  boxShadow: `0 0 0 3px ${KIND_DOT[s.kind]}28`,
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: C.pencil }}>{s.sub}</div>
                </div>
                <Chip kind={s.kind}>{s.detail}</Chip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
