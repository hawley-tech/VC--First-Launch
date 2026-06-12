import { C } from '../../components/ui';

export default function MobCheckin3() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#1a1815', color: '#fbf6e8' }}>
      <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${C.pencil}`, flexShrink: 0 }}>
        <span>←</span>
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: 20 }}>Step 2 — Selfie</span>
        <span>?</span>
      </div>
      <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{
          flex: 1, border: `2px dashed #fbf6e8`, borderRadius: 14, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2a251f',
        }}>
          <div style={{ width: 160, height: 200, border: `2px solid ${C.yellow}`, borderRadius: 100, opacity: 0.7 }} />
          <div style={{ position: 'absolute', bottom: 16, left: 16, fontSize: 12 }}>📍 Home · 6:47 AM</div>
          <div style={{
            position: 'absolute', top: 16, right: 16, fontSize: 12,
            background: C.accent, padding: '2px 8px', borderRadius: 4,
          }}>● LIVE</div>
        </div>
        <div style={{ fontSize: 13, textAlign: 'center' }}>Center your face. Blink when prompted.</div>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '4px 0' }}>
          <span style={{ fontSize: 24 }}>↺</span>
          <div style={{ width: 64, height: 64, borderRadius: '50%', border: `4px solid #fbf6e8`, background: C.accent }} />
          <span style={{ fontSize: 24 }}>⚡</span>
        </div>
        <div style={{ fontSize: 11, color: '#bdb6a4', textAlign: 'center' }}>
          Photo cannot be retaken once submitted.
        </div>
      </div>
    </div>
  );
}
