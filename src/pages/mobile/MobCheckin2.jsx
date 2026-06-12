import { C, MobileHeader, Placeholder, Chip, Card, Btn } from '../../components/ui';

export default function MobCheckin2() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Step 1 of 3" left="←" right="Help" subtitle="Confirming location" />
      <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Placeholder kind="map" label="Map · 1247 Elm St, Apt 4" h={220} />
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Chip kind="ok">● GPS accuracy 4m</Chip>
          <Chip kind="ok">● Data quality signals captured</Chip>
          <Chip kind="info">Wi-Fi corroborated</Chip>
        </div>
        <Card padding={10}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 12, color: C.pencil }}>Captured at</span>
            <span style={{ fontSize: 13 }}>Mon May 26, 6:47:08 AM</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 12, color: C.pencil }}>Lat / Lng</span>
            <span style={{ fontSize: 13, fontFamily: 'monospace' }}>34.0521, -118.2437</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: C.pencil }}>Geofence</span>
            <span style={{ fontSize: 13 }}>Home — 50m radius ✓</span>
          </div>
        </Card>
        <div style={{ marginTop: 'auto' }}>
          <Btn fullWidth size="lg" kind="accent">Confirm & continue →</Btn>
          <div style={{ textAlign: 'center', fontSize: 12, color: C.pencil, marginTop: 6 }}>
            Location wrong? <span style={{ color: C.accent }}>Report a problem</span>
          </div>
        </div>
      </div>
    </div>
  );
}
