import { C } from '../../components/ui';

export default function MobLockNotif() {
  return (
    <div style={{ flex: 1, background: '#1a1815', color: '#fbf6e8', padding: '40px 12px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ textAlign: 'center', fontFamily: "'Caveat', cursive", fontSize: 18, opacity: 0.7 }}>Monday, May 26</div>
      <div style={{ textAlign: 'center', fontSize: 58, fontWeight: 200, lineHeight: 1 }}>8:42</div>
      <div style={{ background: '#2a251f', borderRadius: 14, padding: 12, border: `1px solid ${C.pencil}`, marginTop: 30 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, opacity: 0.8 }}>
          <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ width: 16, height: 16, background: C.accent, borderRadius: 4, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>✓</span>
            Verified Compliance
          </span>
          <span>now</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, marginTop: 6 }}>Check-in window closes in 18 min</div>
        <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>Morning sobriety check-in · tap to start</div>
      </div>
      <div style={{ background: '#2a251f', borderRadius: 14, padding: 12, border: `1px solid ${C.pencil}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, opacity: 0.8 }}>
          <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ width: 16, height: 16, background: C.accent, borderRadius: 4 }} />
            Verified Compliance
          </span>
          <span>6:32 AM</span>
        </div>
        <div style={{ fontSize: 13, marginTop: 6 }}>Att. Jennings: "Got the EEP, will review by 10." · 1 of 3</div>
      </div>
    </div>
  );
}
