import { C, MobileHeader, Field, Card, Btn, Annot } from '../../components/ui';

export default function MobCheckin4() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Step 3 of 3" left="←" right="" subtitle="Self statement" />
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Annot>2 quick questions. Honest answers protect your record.</Annot>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Have you consumed alcohol or non-prescribed substances in the last 24 hours?</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <Btn size="md" kind="accent" style={{ flex: 1 }}>No</Btn>
            <Btn size="md" kind="ghost" style={{ flex: 1 }}>Yes</Btn>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Any documentation concerns to report?</div>
          <Field placeholder="Optional note for your attorney…" h={70} style={{ marginTop: 6 }} />
        </div>
        <Card padding={10} style={{ background: '#fef8e8' }}>
          <div style={{ fontSize: 12, display: 'flex', gap: 6 }}>
            <span>⚠</span>
            <span>False statements may be reviewed by your attorney, the court, or your supervising agency.</span>
          </div>
        </Card>
        <div style={{ marginTop: 'auto' }}>
          <Btn fullWidth size="lg" kind="accent">Submit check-in</Btn>
        </div>
      </div>
    </div>
  );
}
