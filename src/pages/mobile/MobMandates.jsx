import { C, MobileHeader, MobileTabbar, Chip, Card } from '../../components/ui';

const items = [
  { t: 'Sobriety monitoring', s: 'Daily check-in 6–9 AM & 8–10 PM', tag: 'Court order #4429-A', kind: 'ok', d: 'Active · 142d' },
  { t: 'AA attendance', s: '3 meetings / week, geofenced', tag: 'Court order #4429-A', kind: 'ok', d: 'On pace · 8/12' },
  { t: 'Employment documentation', s: 'Weekly timesheet upload', tag: 'Probation cond.', kind: 'warn', d: 'Due Fri' },
  { t: 'Co-parent exchange log', s: 'Pickup/dropoff documentation', tag: 'Custody agmt §4', kind: 'ok', d: 'Active' },
  { t: 'Travel — out of county', s: 'Geofence + 24h notice', tag: 'Conditional', kind: 'pending', d: 'Unused' },
  { t: 'Community service', s: '80 hours by Aug 30', tag: 'Court order', kind: 'warn', d: '34 / 80h' },
];

export default function MobMandates() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="My mandates" left="←" right="?" subtitle="6 active · 1 needs attention" />
      <div style={{ display: 'flex', gap: 6, padding: '8px 12px', borderBottom: `1px solid ${C.line}`, flexShrink: 0 }}>
        <Chip kind="info">Active</Chip>
        <Chip>Upcoming</Chip>
        <Chip>Completed</Chip>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 12px' }}>
        {items.map((m, i) => (
          <Card key={i} padding={10} style={{ marginTop: 8, borderLeft: `4px solid ${m.kind === 'warn' ? C.accent : C.ink}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{m.t}</div>
                <div style={{ fontSize: 12, color: C.pencil }}>{m.s}</div>
                <div style={{ fontSize: 11, color: C.pencil, marginTop: 4 }}>📎 {m.tag}</div>
              </div>
              <Chip kind={m.kind}>{m.d}</Chip>
            </div>
          </Card>
        ))}
      </div>
      <MobileTabbar active="more" />
    </div>
  );
}
