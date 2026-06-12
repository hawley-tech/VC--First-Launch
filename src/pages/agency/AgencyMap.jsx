import { C, SectionTitle, Card, Chip, Btn, Row, Placeholder } from '../../components/ui';
import { AgencySidebar } from './AgencyCaseload';

const pins = [
  ['28%', '40%', 'ok'],
  ['44%', '55%', 'ok'],
  ['52%', '30%', 'warn'],
  ['64%', '62%', 'bad'],
  ['38%', '70%', 'ok'],
  ['72%', '38%', 'warn'],
];

export default function AgencyMap() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AgencySidebar active="GPS map" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '12px 18px', borderBottom: `1.5px solid ${C.ink}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <SectionTitle sub="Live GPS positions · 184 subjects">Caseload map</SectionTitle>
          <div style={{ display: 'flex', gap: 6 }}>
            <Chip kind="ok">142 inside geofence</Chip>
            <Chip kind="warn">35 in transit</Chip>
            <Chip kind="bad">7 alert</Chip>
          </div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 320px', overflow: 'hidden' }}>
          <div style={{ position: 'relative', background: `repeating-linear-gradient(45deg, transparent 0 14px, ${C.light} 14px 15px)`, overflow: 'hidden' }}>
            <Placeholder kind="map" label="Live caseload map · Riverside County" h="100%" w="100%" />
            {pins.map(([l, t, k], i) => (
              <div key={i} style={{
                position: 'absolute', left: l, top: t,
                width: 18, height: 18, borderRadius: '50%',
                border: `2px solid ${C.ink}`,
                background: k === 'ok' ? C.stamp : k === 'warn' ? C.yellow : C.accent,
                transform: 'translate(-50%,-50%)',
              }} />
            ))}
          </div>
          <div style={{ borderLeft: `1.5px solid ${C.ink}`, padding: 14, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Selected · D. Okafor</div>
            <Card padding={10}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Dana M. Okafor · #VC-58901</div>
              <div style={{ fontSize: 12, color: C.pencil }}>Co-parenting · house geofence</div>
              <div style={{ marginTop: 8, fontSize: 12 }}>● <b>Status:</b> Outside geofence 14m</div>
              <div style={{ fontSize: 12 }}>📍 1455 Maple St (geofence: 22 Elm)</div>
              <div style={{ fontSize: 12 }}>⏱ Window 8–10p · 24m elapsed</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                <Btn size="sm" kind="ghost">Call</Btn>
                <Btn size="sm" kind="ghost">Message</Btn>
                <Btn size="sm" kind="danger">Flag violation</Btn>
              </div>
            </Card>
            <Card padding={10}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Last 6 pings</div>
              {['2m', '5m', '8m', '11m', '15m', '24m'].map((t, i) => (
                <Row key={i} left="•" title={`Ping ${t} ago`} sub={i === 0 ? 'Outside · accuracy 6m' : 'Inside · accuracy 4m'} status={{ kind: i === 0 ? 'bad' : 'ok', label: i === 0 ? 'out' : 'in' }} />
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
