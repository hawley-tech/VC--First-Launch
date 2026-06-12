import { C, MobileHeader, Card, Chip } from '../../components/ui';

const notifs = [
  { i: '⏰', t: 'Morning check-in due in 30 min', s: '6:00 AM window closes 9:00 AM', k: 'warn' },
  { i: '✓', t: 'Att. Jennings reviewed EEP-0042', s: '6:32 AM · No action needed', k: 'ok' },
  { i: '📄', t: 'New document request', s: 'Probation: Upload paystub by Fri', k: 'info' },
  { i: '🔔', t: 'Random test scheduled', s: 'Today, 2:00 – 4:00 PM window', k: 'warn' },
  { i: '🌙', t: 'Evening check-in tomorrow', s: '8:00 – 10:00 PM', k: 'pending' },
];

export default function MobNotifs() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Notifications" left="←" right="⚙" />
      <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
        {notifs.map((n, i) => (
          <Card key={i} padding={10} style={{ marginBottom: 8, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 20, flexShrink: 0 }}>{n.i}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{n.t}</div>
                <Chip kind={n.k} style={{ flexShrink: 0 }}>{n.k}</Chip>
              </div>
              <div style={{ fontSize: 12, color: C.pencil, marginTop: 2 }}>{n.s}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
