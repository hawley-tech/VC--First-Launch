import { C, SectionTitle, Card, Chip, Btn, Field } from '../../components/ui';
import { AdminSidebar } from './AdminOverview';

const events = [
  ['09:42:11', 'm.jennings@law', 'VIEW', 'Client #VC-58812 timeline', 'ok'],
  ['09:42:08', 'court-clerk@riv', 'VERIFY', 'VR-2026-091 QR scan', 'ok'],
  ['09:38:42', 'james.r@vc', 'CREATE', 'check-in #2,847', 'ok'],
  ['09:32:17', 'system', 'SEAL', 'Evidence #EV-7741', 'ok'],
  ['09:11:04', 'admin.kt@vc', 'EXPORT', 'Bulk audit CSV', 'flag'],
  ['08:58:00', 't.park@agency', 'ESCALATE', 'Subject #VC-72103', 'warn'],
  ['08:42:50', 'unknown', 'AUTH_FAIL', 'IP 78.42.x.x · 4 attempts', 'bad'],
  ['08:17:21', 'm.jennings@law', 'GENERATE_REPORT', 'VR-2026-091', 'ok'],
  ['07:14:09', 'm.jennings@law', 'PRIVILEGED_MSG', 'thread #58812', 'ok'],
  ['07:02:33', 'james.r@vc', 'ATTACH', 'EEP-0042 ← evidence ×3', 'ok'],
];

export default function AdminAudit() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AdminSidebar active="Audit log" />
      <div style={{ flex: 1, padding: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <SectionTitle sub="Append-only · cryptographically chained">Audit log</SectionTitle>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Field placeholder="Filter…" h={28} w={200} />
            <Chip kind="info">Today</Chip>
            <Chip>All actors</Chip>
            <Btn size="sm" kind="ghost">Export</Btn>
          </div>
        </div>
        <Card padding={0} style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '90px 200px 130px 1fr 100px', padding: '10px 14px', borderBottom: `1.5px solid ${C.ink}`, background: C.light, fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: C.pencil }}>
            <div>Time</div><div>Actor</div><div>Action</div><div>Target</div><div>Status</div>
          </div>
          <div style={{ overflowY: 'auto', height: 'calc(100% - 40px)' }}>
            {events.map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 200px 130px 1fr 100px', padding: '8px 14px', borderBottom: `1px dashed ${C.line}`, fontSize: 12, fontFamily: 'monospace', alignItems: 'center' }}>
                <div>{e[0]}</div>
                <div>{e[1]}</div>
                <div style={{ color: e[2] === 'AUTH_FAIL' ? '#a53321' : C.ink }}>{e[2]}</div>
                <div style={{ fontFamily: "var(--font-ui)" }}>{e[3]}</div>
                <div><Chip kind={e[4]}>{e[4]}</Chip></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
