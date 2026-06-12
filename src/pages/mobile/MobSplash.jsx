import { C, Btn } from '../../components/ui';

export default function MobSplash() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 0, padding: '0 28px 32px',
      background: 'linear-gradient(175deg, #1e5c40 0%, #276148 45%, #1e1c24 100%)',
    }}>
      {/* Logo mark */}
      <div style={{
        width: 80, height: 80, borderRadius: 22,
        background: 'rgba(255,255,255,0.12)',
        border: '1.5px solid rgba(255,255,255,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 36, marginBottom: 20,
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      }}>✓</div>

      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 38, lineHeight: 1, fontWeight: 700, textAlign: 'center', color: '#fff' }}>
        Verified<br/>Compliance<span style={{ fontSize: 16, verticalAlign: 'super', opacity: 0.7 }}>™</span>
      </div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: 200, marginTop: 10, lineHeight: 1.5 }}>
        Documentation, not determination.<br/>A neutral record of what occurs.
      </div>

      {/* Divider */}
      <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.2)', margin: '28px 0' }} />

      {/* Auth */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button style={{
          width: '100%', padding: '14px 0', borderRadius: 12,
          background: '#fff', color: C.ink, border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          <span style={{ fontSize: 18 }}>⬡</span> Continue with Face ID
        </button>
        <button style={{
          width: '100%', padding: '13px 0', borderRadius: 12,
          background: 'rgba(255,255,255,0.1)', color: '#fff',
          border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
          fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 500,
        }}>
          Enter PIN
        </button>
      </div>

      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 18 }}>
        Forgot PIN? · Sign in another way
      </div>
    </div>
  );
}
