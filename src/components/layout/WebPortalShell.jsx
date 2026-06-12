import { C } from '../ui';

export function WebPortalShell({ children, url = 'verified.app', width, height }) {
  return (
    <div style={{
      width: width || '100%',
      height: height || '100%',
      background: C.card,
      borderRadius: 10,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      boxShadow: 'var(--shadow-lg)',
      border: `1px solid ${C.line}`,
    }}>
      {/* Browser chrome */}
      <div style={{
        height: 38,
        background: '#f0ece4',
        borderBottom: `1px solid ${C.line}`,
        display: 'flex', alignItems: 'center',
        padding: '0 14px', gap: 10,
        flexShrink: 0,
      }}>
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'block', border: '1px solid rgba(0,0,0,0.08)' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e', display: 'block', border: '1px solid rgba(0,0,0,0.08)' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', display: 'block', border: '1px solid rgba(0,0,0,0.08)' }} />
        </div>
        {/* URL bar */}
        <div style={{
          flex: 1, maxWidth: 400, height: 24,
          background: C.card,
          border: `1px solid ${C.line}`,
          borderRadius: 6,
          padding: '0 10px',
          fontSize: 11,
          color: C.pencil,
          display: 'flex', alignItems: 'center', gap: 5,
          margin: '0 auto',
        }}>
          <span style={{ color: C.stamp, fontSize: 10 }}>🔒</span>
          <span>{url}</span>
        </div>
        <div style={{ width: 52 }} />
      </div>
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', minHeight: 0 }}>
        {children}
      </div>
    </div>
  );
}
