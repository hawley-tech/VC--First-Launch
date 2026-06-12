import { C } from '../ui';

export function PhoneShell({ children, status = '9:41' }) {
  return (
    <div style={{
      width: 340,
      flexShrink: 0,
      filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.28))',
    }}>
      <div style={{
        width: 340, height: 690,
        background: '#111018',
        borderRadius: 50,
        padding: 10,
        boxSizing: 'border-box',
        position: 'relative',
      }}>
        {/* Physical buttons */}
        <div style={{ position: 'absolute', left: -3, top: 108, width: 3, height: 32, background: '#252230', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 152, width: 3, height: 58, background: '#252230', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 220, width: 3, height: 58, background: '#252230', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: -3, top: 138, width: 3, height: 78, background: '#252230', borderRadius: '0 2px 2px 0' }} />
        {/* Screen */}
        <div style={{
          width: '100%', height: '100%',
          background: C.paper,
          borderRadius: 40,
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          border: '1px solid #1e1b28',
        }}>
          {/* Status bar with dynamic island */}
          <div style={{
            height: 38,
            background: C.card,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 22px',
            flexShrink: 0,
            position: 'relative',
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>{status}</span>
            {/* Dynamic island pill */}
            <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 104, height: 28,
              background: '#111018',
              borderRadius: 20,
            }} />
            <span style={{ fontSize: 11, color: C.ink }}>● ▲ ■</span>
          </div>
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
