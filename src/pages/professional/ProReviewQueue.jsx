import { C, SectionTitle, DisclaimerBanner, Chip, Card, Btn, Row, Field, Placeholder } from '../../components/ui';
import { AttySidebar } from './ProDashboard';

const items = [
  { c: 'James Reyes', t: 'Morning check-in', s: 'GPS 4m · liveness captured', sig: 'Recurring location pattern', k: 'awaiting', tags: ['CA-RIV v2.4', 'sobriety'] },
  { c: 'Dana Okafor', t: 'Missed evening window', s: 'Emergency explanation filed · 3 attachments', sig: 'Insufficient data', k: 'awaiting', tags: ['CA-RIV v2.4', 'co-parenting'] },
  { c: 'Luis Camargo', t: 'Check-in · queued offline', s: 'Synced 14:22 UTC · 2h delay', sig: 'Time drift +12s', k: 'awaiting', tags: ['CA-RIV v2.4'] },
  { c: 'Priya Narayan', t: 'Check-out · departure', s: 'GPS accuracy 28m (degraded)', sig: 'GPS quality degraded', k: 'flag', tags: ['CA-RIV v2.4'] },
  { c: "M. O'Connell", t: 'Check-in · location signal', s: 'Inconsistent location pattern', sig: 'Inconsistent location pattern', k: 'flag', tags: ['CA-RIV v2.4', 'house arrest'] },
  { c: 'Tomás K.', t: 'Check-in · routine', s: 'No quality concerns', sig: '—', k: 'awaiting', tags: ['CA-RIV v2.4'] },
];

const signals = [
  ['GPS accuracy', '4.1 m', 'ok'],
  ['Satellites', '11', 'ok'],
  ['Time-to-fix', '1.8 s', 'ok'],
  ['Liveness signal', 'captured', 'ok'],
  ['Image blur score', '0.04', 'ok'],
  ['Lighting', '0.91', 'ok'],
  ['Device integrity', 'clean', 'ok'],
  ['System time drift', '+2.81s', 'ok'],
];

export default function ProReviewQueue() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AttySidebar active="Evidence review" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <DisclaimerBanner />
        <div style={{ padding: '14px 18px', borderBottom: `1.5px solid ${C.ink}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <SectionTitle sub="You make the determination. The system records the data.">Review queue</SectionTitle>
          <div style={{ display: 'flex', gap: 6 }}>
            <Field placeholder="Filter…" h={28} w={220} />
            <Chip kind="info">Awaiting (12)</Chip>
            <Chip kind="flag">Quality flag (3)</Chip>
            <Chip>Reviewed</Chip>
          </div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '380px 1fr', overflow: 'hidden' }}>
          <div style={{ borderRight: `1.5px solid ${C.ink}`, overflowY: 'auto' }}>
            {items.map((r, i) => (
              <div key={i} style={{ padding: 12, borderBottom: `1px dashed ${C.line}`, background: i === 0 ? '#fdf0ed' : C.paper, display: 'flex', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1.2px solid ${C.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, background: C.light, flexShrink: 0 }}>
                  {r.c.split(' ').map(p => p[0]).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{r.c}</div>
                    <Chip kind={r.k === 'flag' ? 'flag' : 'warn'}>{r.k === 'flag' ? '🚩 flag' : 'awaiting'}</Chip>
                  </div>
                  <div style={{ fontSize: 12 }}>{r.t}</div>
                  <div style={{ fontSize: 11, color: C.pencil }}>{r.s}</div>
                  <div style={{ marginTop: 4, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {r.tags.map(t => <Chip key={t} style={{ fontSize: 10 }}>{t}</Chip>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 24, lineHeight: 1 }}>James Reyes · check-in</div>
                <div style={{ fontSize: 12, color: C.pencil }}>Record RCP-2026-8847211 · CA-RIV policy v2.4</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <Btn size="sm" kind="ghost">Annotate</Btn>
                <Btn size="sm" kind="ghost">Flag</Btn>
                <Btn size="sm" kind="danger">Reject</Btn>
                <Btn size="sm" kind="accent">Approve</Btn>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14 }}>
              <Card padding={12}>
                <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Captured</div>
                <Placeholder kind="image" h={180} label="Selfie (capture artifact)" />
                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                  <Placeholder kind="map" h={80} w={100} label="GPS snapshot" />
                  <div style={{ flex: 1, fontSize: 11 }}>
                    <div><b>Device ts</b> 2026-05-26 13:47:08 UTC</div>
                    <div><b>Server receipt</b> 2026-05-26 13:47:11 UTC</div>
                    <div><b>Drift</b> +2.81s</div>
                  </div>
                </div>
              </Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Card padding={10}>
                  <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Data quality signals</div>
                  {signals.map(([k, v, st], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: `1px dashed ${C.line}`, fontSize: 12 }}>
                      <span style={{ color: C.pencil }}>{k}</span>
                      <span>{v} <Chip kind={st}>·</Chip></span>
                    </div>
                  ))}
                  <div style={{ fontSize: 10, color: C.pencil, marginTop: 6, fontStyle: 'italic' }}>Descriptive only. Not a compliance score.</div>
                </Card>
                <Card padding={10} style={{ background: C.light }}>
                  <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Location clustering · jurisdiction enabled</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>📍 <b>Recurring location pattern</b></div>
                  <div style={{ fontSize: 11, color: C.pencil }}>Algorithm v1.4 · DBSCAN · last computed 03:00 UTC</div>
                  <div style={{ fontSize: 10, color: C.pencil, marginTop: 6, fontStyle: 'italic' }}>Not visible to the individual. No automated action.</div>
                </Card>
                <Card padding={10}>
                  <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Review history (immutable artifacts)</div>
                  <Row left="●" title="Reviewed Apr 30 · approved" sub="M. Jennings · credential ACTIVE" status={{ kind: 'ok', label: '✓' }} />
                  <Row left="●" title="Reviewed Apr 14 · annotated" sub={`M. Jennings · "Photo lighting"`} status={{ kind: 'info', label: '✎' }} />
                  <div style={{ fontSize: 10, color: C.pencil, marginTop: 4 }}>Every decision appends a new artifact. Originals never mutate.</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
