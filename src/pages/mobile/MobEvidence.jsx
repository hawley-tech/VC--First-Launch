import { C, MobileHeader, MobileTabbar, Annot, PostIt } from '../../components/ui';

const types = [
  { i: '📷', t: 'Photo', s: 'Single shot, no edits' },
  { i: '🎬', t: 'Video', s: 'Up to 60 sec' },
  { i: '🎙', t: 'Audio', s: 'With auto transcript' },
  { i: '📄', t: 'Document', s: 'PDF, image, scan' },
  { i: '👤', t: 'Witness statement', s: 'Recorded testimony' },
  { i: '📍', t: 'Location ping', s: 'GPS only, no media' },
];

export default function MobEvidence() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Add evidence" left="←" />
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Annot>What are you capturing? Every piece is timestamped, GPS-tagged, and locked.</Annot>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {types.map((t, i) => (
            <div key={i} style={{
              border: `1.5px solid ${C.ink}`, borderRadius: 8, padding: 12,
              background: C.paper, textAlign: 'center', cursor: 'pointer',
            }}>
              <div style={{ fontSize: 26 }}>{t.i}</div>
              <div style={{ fontWeight: 600, fontSize: 13, marginTop: 4 }}>{t.t}</div>
              <div style={{ fontSize: 11, color: C.pencil }}>{t.s}</div>
            </div>
          ))}
        </div>
        <PostIt rotate={2}>Tip: Pin to a mandate so it shows up in your record.</PostIt>
      </div>
      <MobileTabbar active="evidence" />
    </div>
  );
}
