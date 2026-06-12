import { C, SectionTitle, Chip, Card, Btn, Placeholder, Row } from '../../components/ui';
import { AttySidebar } from './ProDashboard';

const items = [
  { i: '📷', t: 'Selfie · check-in 2,847', c: 'James Reyes', m: '6:47 AM', tag: 'ok' },
  { i: '🗺', t: 'GPS ping · home geofence', c: 'James Reyes', m: '6:47 AM', tag: 'ok' },
  { i: '📷', t: 'ER receipt', c: 'James Reyes', m: '11:42 PM', tag: 'flag' },
  { i: '📄', t: 'Discharge papers', c: 'James Reyes', m: '11:48 PM', tag: 'flag' },
  { i: '🎬', t: 'Pickup video', c: 'Dana Okafor', m: 'Yest 5:31p', tag: 'warn' },
  { i: '🎙', t: 'Voicemail to co-parent', c: 'Dana Okafor', m: 'Yest 4:11p', tag: 'warn' },
  { i: '📷', t: 'Drug test photo', c: 'Priya N.', m: 'May 24', tag: 'flag' },
  { i: '📄', t: 'Timesheet', c: 'Luis Camargo', m: 'May 23', tag: 'ok' },
];

export default function ProEvidenceQuality() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AttySidebar active="Evidence review" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: 18, borderBottom: `1px solid ${C.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <SectionTitle sub="3 flagged · 2 awaiting review">Data quality & evidence</SectionTitle>
          <div style={{ display: 'flex', gap: 6 }}>
            <Chip kind="flag">🚩 Flagged</Chip>
            <Chip kind="info">All clients</Chip>
            <Chip>This week</Chip>
            <Btn size="sm" kind="ghost">Filter</Btn>
          </div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '360px 1fr', overflow: 'hidden' }}>
          <div style={{ borderRight: `1.5px solid ${C.ink}`, overflowY: 'auto' }}>
            {items.map((e, i) => (
              <div key={i} style={{ padding: 12, borderBottom: `1px dashed ${C.line}`, background: i === 2 ? '#fdf0ed' : C.paper, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, border: `1.2px solid ${C.ink}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, background: C.light, flexShrink: 0 }}>{e.i}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{e.t}</div>
                  <div style={{ fontSize: 11, color: C.pencil }}>{e.c} · {e.m}</div>
                </div>
                <Chip kind={e.tag === 'ok' ? 'ok' : e.tag === 'flag' ? 'flag' : 'warn'}>{e.tag}</Chip>
              </div>
            ))}
          </div>
          <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1 }}>ER receipt — Evidence #EV-7741</div>
                <div style={{ fontSize: 12, color: C.pencil }}>James Reyes · captured 11:42 PM · attached to EEP-0042</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <Btn size="sm" kind="ghost">＋ to report</Btn>
                <Btn size="sm" kind="ghost">🚩 Flag</Btn>
                <Btn size="sm" kind="accent">Mark reviewed</Btn>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, flex: 1 }}>
              <Placeholder kind="image" label="Original capture · cannot be edited" h={300} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Card padding={10}>
                  <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Metadata</div>
                  {[
                    ['Captured', '11:42:08 PM Mon May 25'],
                    ['Lat / Lng', '34.0612, -118.2549'],
                    ['Address', 'St. Mary\'s Hospital · ER'],
                    ['Device', 'iPhone 15 Pro · iOS 18.4'],
                    ['Hash', '7f3a8b…b21c (SHA-256)'],
                  ].map(([k, v], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, padding: '3px 0', borderBottom: `1px dashed ${C.line}` }}>
                      <span style={{ color: C.pencil }}>{k}</span>
                      <span style={{ maxWidth: 150, textAlign: 'right' }}>{v}</span>
                    </div>
                  ))}
                </Card>
                <Card padding={10}>
                  <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Chain of custody</div>
                  {[
                    ['Captured', 'James R. (subject) · device A1F2'],
                    ['Submitted', '11:42:09 PM · hash match'],
                    ['Linked', '11:51 PM · EEP-0042'],
                    ['Viewed', 'Today 7:14 AM · You'],
                  ].map(([k, v], i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, padding: '2px 0' }}>
                      <span style={{ width: 8, height: 8, marginTop: 6, borderRadius: '50%', background: C.stamp, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}><b>{k}</b> — <span style={{ color: C.pencil }}>{v}</span></div>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
