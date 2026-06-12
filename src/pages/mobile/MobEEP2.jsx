import { C, MobileHeader, Card, Chip, Field, Placeholder, Btn } from '../../components/ui';

export default function MobEEP2() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Step 2 of 4" left="←" right="Save draft" subtitle="What happened" />
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
        <div>
          <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase' }}>Linked to</div>
          <Card padding={8} style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 4 }}>
            <Chip kind="bad">Missed</Chip>
            <div style={{ flex: 1, fontSize: 12 }}>Evening check-in · May 25, 9:00 PM</div>
            <span style={{ color: C.pencil }}>›</span>
          </Card>
        </div>
        <Field label="Headline (1 sentence)" placeholder="e.g. Hospital emergency with daughter" />
        <div>
          <div style={{ fontSize: 12, color: C.pencil, marginBottom: 2 }}>Full statement</div>
          <div style={{
            height: 110, border: `1.5px solid ${C.ink}`, borderRadius: 6, padding: 10,
            fontSize: 13, color: C.pencil, background: C.paper,
          }}>
            Write what happened, in your own words. Include time, place, and who was present.
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: C.pencil, marginBottom: 4 }}>Supporting evidence</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <Placeholder kind="image" label="ER receipt" w={70} h={70} />
            <Placeholder kind="doc" label="Discharge" w={70} h={70} />
            <div style={{ width: 70, height: 70, border: `1.5px dashed ${C.pencil}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: C.pencil }}>＋</div>
          </div>
        </div>
        <Btn fullWidth size="lg" kind="accent" style={{ marginTop: 'auto' }}>Continue →</Btn>
      </div>
    </div>
  );
}
