import { C, SectionTitle, Card, Chip, Btn, Row } from '../../components/ui';
import { AdminSidebar } from './AdminOverview';

const queue = [
  ['Replayed selfie (EXIF mismatch)', '#VC-72993', '1 event', 'flag'],
  ['Face liveness failed × 3', '#VC-61201', '3 events', 'bad'],
  ['Clock drift > 30s on submit', '#VC-58440', '6 events', 'warn'],
  ['Device fingerprint changed', '#VC-71204', '2 events', 'warn'],
  ['Geofence boundary jitter', '#VC-69103', '12 events', 'info'],
];

export default function AdminFraud() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AdminSidebar active="Needs review attention" />
      <div style={{ flex: 1, padding: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <SectionTitle sub="23 open · 4 confirmed today">Needs review attention queue</SectionTitle>
          <div style={{ display: 'flex', gap: 6 }}>
            <Chip kind="bad">GPS data quality</Chip>
            <Chip kind="bad">Face mismatch</Chip>
            <Chip kind="warn">Replay</Chip>
            <Chip kind="warn">Time drift</Chip>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 14, flex: 1, overflow: 'hidden' }}>
          <Card padding={0} style={{ overflow: 'hidden', overflowY: 'auto' }}>
            <div style={{ padding: 12, borderBottom: `1px dashed ${C.line}`, background: '#fdf0ed', display: 'grid', gridTemplateColumns: '24px 1.4fr 1fr 100px 80px', gap: 8, alignItems: 'center' }}>
              <input type="checkbox" readOnly />
              <div>
                <div style={{ fontWeight: 700 }}>GPS data quality concern signature</div>
                <div style={{ fontSize: 11, color: C.pencil }}>M. O'Connell · #VC-72103</div>
              </div>
              <div style={{ fontSize: 12, color: C.pencil }}>4 events · last 7d</div>
              <Chip kind="bad">High</Chip>
              <Btn size="sm" kind="ghost">Open</Btn>
            </div>
            {queue.map((r, i) => (
              <div key={i} style={{ padding: 12, borderBottom: `1px dashed ${C.line}`, display: 'grid', gridTemplateColumns: '24px 1.4fr 1fr 100px 80px', gap: 8, alignItems: 'center' }}>
                <input type="checkbox" readOnly />
                <div>
                  <div style={{ fontWeight: 600 }}>{r[0]}</div>
                  <div style={{ fontSize: 11, color: C.pencil }}>{r[1]}</div>
                </div>
                <div style={{ fontSize: 12, color: C.pencil }}>{r[2]}</div>
                <Chip kind={r[3]}>{r[3]}</Chip>
                <Btn size="sm" kind="ghost">Open</Btn>
              </div>
            ))}
          </Card>
          <Card padding={14} style={{ display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>
            <div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1 }}>Location data quality concern · M. O'Connell</div>
              <div style={{ fontSize: 11, color: C.pencil }}>4 events flagged · auto-suspended pending review</div>
            </div>
            <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Why we flagged</div>
            <div style={{ fontSize: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div>• Reported location differs &gt; 8mi from device cell tower</div>
              <div>• WiFi BSSID claims home network, no actual association</div>
              <div>• Accelerometer flat during 30 min of "drive"</div>
              <div>• Mock-location flag set on device (Android)</div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
              <Btn size="sm" kind="danger">Flag for review → escalate</Btn>
              <Btn size="sm" kind="ghost">Mark false positive</Btn>
              <Btn size="sm" kind="ghost">Request explanation</Btn>
            </div>
            <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Notify</div>
            <Row left="⚖" title="Attorney of record" sub="D. Hsu — auto-notify on confirm" />
            <Row left="🛡" title="Supervising officer" sub="T. Park" />
            <Row left="📨" title="Subject" sub="Plain-language explanation" />
          </Card>
        </div>
      </div>
    </div>
  );
}
