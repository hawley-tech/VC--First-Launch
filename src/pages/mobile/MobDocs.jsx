import { C, MobileHeader, MobileTabbar, Field, Row } from '../../components/ui';

const docs = [
  { t: 'Court Order 4429-A', s: 'Hon. Tanaka · Jan 5, 2026', i: '📜' },
  { t: 'Custody Agreement', s: 'Filed Mar 2025 · 12 pp', i: '📑' },
  { t: 'Employer letter', s: 'Hawthorne Mfg · Apr 2026', i: '📨' },
  { t: 'Treatment plan', s: 'Riverside Clinic', i: '🏥' },
  { t: 'Insurance card', s: 'Updated May 2026', i: '🪪' },
];

export default function MobDocs() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Documents" left="←" right="＋" />
      <div style={{ padding: '8px 12px', borderBottom: `1px solid ${C.line}`, flexShrink: 0 }}>
        <Field placeholder="Search 24 documents…" h={28} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 12px' }}>
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Pinned</div>
        {docs.slice(0, 2).map((d, i) => (
          <Row key={i} left={d.i} title={d.t} sub={d.s} right="⋯" />
        ))}
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', margin: '12px 0 6px' }}>All</div>
        {docs.slice(2).map((d, i) => (
          <Row key={i} left={d.i} title={d.t} sub={d.s} right="⋯" />
        ))}
      </div>
      <MobileTabbar active="more" />
    </div>
  );
}
