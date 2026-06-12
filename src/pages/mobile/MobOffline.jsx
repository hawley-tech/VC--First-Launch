import { C, MobileHeader, Card, Btn, Chip, Row } from '../../components/ui';

const queue = [
  { t: 'Morning check-in', s: 'Captured 6:47 AM · 3 attachments', k: 'warn', a: 'Pending sync' },
  { t: 'Evidence photo', s: 'Captured 7:01 AM · 1.2 MB', k: 'warn', a: 'Pending sync' },
  { t: 'Self-statement note', s: 'Captured 7:03 AM', k: 'warn', a: 'Pending sync' },
];

export default function MobOffline() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Offline queue" left="←" subtitle="Sync pending" />
      <div style={{ background: '#fdf0ed', padding: '8px 14px', display: 'flex', gap: 8, alignItems: 'center', borderBottom: `1.2px solid ${C.ink}`, flexShrink: 0 }}>
        <span>📡</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>No internet connection</div>
          <div style={{ fontSize: 11, color: C.pencil }}>3 items will sync when connection restores</div>
        </div>
        <Chip kind="bad">Offline</Chip>
      </div>
      <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Queued for sync</div>
        {queue.map((q, i) => (
          <Card key={i} padding={10} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ fontSize: 18 }}>⏳</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{q.t}</div>
              <div style={{ fontSize: 12, color: C.pencil }}>{q.s}</div>
            </div>
            <Chip kind={q.k}>{q.a}</Chip>
          </Card>
        ))}
        <Card padding={12} style={{ background: '#fef8e8', marginTop: 8 }}>
          <div style={{ fontSize: 12, display: 'flex', gap: 6 }}>
            <span>ⓘ</span>
            <span>Items are timestamped at capture. Sync delay does not affect the time recorded on your document.</span>
          </div>
        </Card>
        <div style={{ marginTop: 'auto' }}>
          <Btn fullWidth kind="ghost">Retry connection</Btn>
        </div>
      </div>
    </div>
  );
}
