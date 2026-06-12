import { C, MobileHeader, MobileTabbar, DisclaimerBanner, Chip, Card, Btn, Row } from '../../components/ui';

export default function MobIncident() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Today, Mon May 26" subtitle="Day 142 of documentation" />
      <DisclaimerBanner compact />
      <Card padding={10} style={{ margin: '8px 14px 0', background: '#fdf0ed', borderColor: '#a53321' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span>⚠</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>Incident: EEP-0042 under review</div>
            <div style={{ fontSize: 12, color: C.pencil }}>Att. Jennings reviewing · filed 8h ago</div>
          </div>
          <Btn size="sm" kind="ghost">View</Btn>
        </div>
      </Card>
      <div style={{ flex: 1, overflow: 'auto', padding: '10px 14px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ border: `1.5px solid ${C.ink}`, borderRadius: 10, padding: 12, background: '#fef8e8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Chip kind="warn">Needs attention</Chip>
            <span style={{ fontFamily: "'Caveat', cursive", fontSize: 18 }}>97%</span>
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, marginTop: 4, lineHeight: 1 }}>1 open explanation.</div>
          <div style={{ fontSize: 12, color: '#8a5a1a', marginTop: 2 }}>EEP-0042: Hospital emergency, under review</div>
        </div>
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase' }}>Due today</div>
        <Card padding={10} style={{ display: 'flex', gap: 10, alignItems: 'center', borderLeft: `5px solid ${C.accent}` }}>
          <div style={{ fontSize: 22 }}>◉</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Morning sobriety check-in</div>
            <div style={{ fontSize: 12, color: C.pencil }}>Window: 6:00 – 9:00 AM · GPS + photo</div>
          </div>
          <Btn size="sm" kind="accent">Start</Btn>
        </Card>
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>Activity</div>
        <Row left="⚠" title="EEP-0042 filed" sub="Yesterday 11:42 PM · St. Mary's Hospital" />
        <Row left="✕" title="Evening check-in missed" sub="Yesterday 9:00 PM window" />
        <Row left="✓" title="Morning check-in recorded" sub="Yesterday 6:51 AM · Home" />
      </div>
      <MobileTabbar active="home" />
    </div>
  );
}
