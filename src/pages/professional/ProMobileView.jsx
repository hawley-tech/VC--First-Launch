import { C, MobileHeader, MobileTabbar, Card, Chip } from '../../components/ui';

export default function ProMobileView() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Marian J. · pro" left="☰" right="🔔 4" subtitle="View-only · use web for decisions" />
      <div style={{ padding: '8px 14px', background: '#fef8e8', borderBottom: `1px solid ${C.ink}`, fontSize: 11, flexShrink: 0 }}>
        ⚠ Decisions and message exports require the web portal.
      </div>
      <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[['Awaiting review', '12'], ['SLA risk ≤2h', '2']].map(([t, v], i) => (
            <Card key={i} padding={10}>
              <div style={{ fontSize: 10, color: C.pencil, textTransform: 'uppercase' }}>{t}</div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 28, lineHeight: 1 }}>{v}</div>
            </Card>
          ))}
        </div>
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>My clients</div>
        {[
          ['JR', 'James Reyes', 'New submission · 7m ago', 'ok'],
          ['DO', 'Dana Okafor', 'Emergency explanation filed', 'warn'],
          ['LC', 'Luis Camargo', 'Routine · queued offline · synced', 'ok'],
          ['MO', "M. O'Connell", 'Location quality flag', 'flag'],
        ].map((r, i) => (
          <Card key={i} padding={10} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1.2px solid ${C.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0 }}>{r[0]}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{r[1]}</div>
              <div style={{ fontSize: 11, color: C.pencil }}>{r[2]}</div>
            </div>
            <Chip kind={r[3]}>view</Chip>
          </Card>
        ))}
      </div>
      <MobileTabbar active="home" />
    </div>
  );
}
