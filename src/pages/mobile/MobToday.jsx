import { C, MobileHeader, MobileTabbar, DisclaimerBanner, Chip, Btn } from '../../components/ui';

const AVATAR_COLORS = ['#c0442e', '#276148', '#4a6fa5', '#8b5cf6', '#d97706'];

export default function MobToday() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: C.paper }}>
      <MobileHeader title="Today, Mon May 26" subtitle="Day 142 of documentation" />
      <DisclaimerBanner compact />
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Status hero card */}
        <div style={{
          borderRadius: 16, padding: '18px 20px',
          background: 'linear-gradient(140deg, #1e5c40 0%, #276148 60%, #2a7055 100%)',
          boxShadow: '0 4px 16px rgba(39,97,72,0.35)',
          color: '#fff',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.75 }}>Compliance rate</div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 52, lineHeight: 1, fontWeight: 700, marginTop: 2 }}>98%</div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>59 of 60 events recorded</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 10, padding: '8px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 22 }}>✓</div>
              <div style={{ fontSize: 10, opacity: 0.8, marginTop: 2 }}>On track</div>
            </div>
          </div>
          <div style={{ marginTop: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, opacity: 0.7, marginBottom: 5 }}>
              <span>Progress this period</span><span>30 days</span>
            </div>
            <div style={{ height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.25)' }}>
              <div style={{ height: '100%', width: '98%', borderRadius: 3, background: '#fff' }} />
            </div>
          </div>
        </div>

        {/* Due today section */}
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>Due today</div>

        <div style={{
          background: '#fff', borderRadius: 12, padding: '12px 14px',
          boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`,
          borderLeft: `4px solid ${C.accent}`,
          display: 'flex', gap: 12, alignItems: 'center',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, flexShrink: 0,
            background: '#fdf0ed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
          }}>◉</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Morning sobriety check-in</div>
            <div style={{ fontSize: 12, color: C.pencil, marginTop: 1 }}>Window: 6:00 – 9:00 AM · GPS + photo</div>
          </div>
          <Btn size="sm" kind="accent">Start</Btn>
        </div>

        {[
          { icon: '👥', label: 'AA meeting (Riverside)', sub: '7:00 PM · Geofenced attendance', chip: '7p', chipKind: 'pending' },
          { icon: '💼', label: 'Employer documentation', sub: 'Upload Friday timesheet', chip: 'Fri', chipKind: 'pending' },
        ].map((item, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 12, padding: '12px 14px',
            boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`,
            display: 'flex', gap: 12, alignItems: 'center',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, flexShrink: 0,
              background: C.light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
            }}>{item.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{item.label}</div>
              <div style={{ fontSize: 12, color: C.pencil, marginTop: 1 }}>{item.sub}</div>
            </div>
            <Chip kind={item.chipKind}>{item.chip}</Chip>
          </div>
        ))}

        {/* Activity feed */}
        <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>Recent activity</div>
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflow: 'hidden' }}>
          {[
            { icon: '✓', color: C.stamp, label: 'Evening check-in recorded', sub: 'Yesterday 9:42 PM · 1247 Elm St' },
            { icon: '✎', color: '#4a6fa5', label: 'Att. Jennings sent a message', sub: 'Yesterday 4:11 PM' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 12, alignItems: 'center',
              padding: '11px 14px',
              borderBottom: i === 0 ? `1px solid ${C.line}` : 'none',
            }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                background: item.color, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
              }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: C.pencil, marginTop: 1 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <MobileTabbar active="home" />
    </div>
  );
}
