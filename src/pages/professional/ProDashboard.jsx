import { C, WebSidebar, SectionTitle, Card, Row, Chip, Btn } from '../../components/ui';

function AttySidebar({ active }) {
  return (
    <WebSidebar title="Attorney Portal" accent={active} sections={[
      { items: [
        { label: 'Dashboard' },
        { label: 'Clients', badge: 47 },
        { label: 'Inbox', badge: 12 },
        { label: 'Calendar' },
      ]},
      { heading: 'Workspace', items: [
        { label: 'Evidence review', badge: 3 },
        { label: 'Reports' },
        { label: 'Communication' },
        { label: 'Document vault' },
        { label: 'Timeline' },
      ]},
      { heading: 'Practice', items: [
        { label: 'Billing' },
        { label: 'Team' },
        { label: 'Settings' },
      ]},
    ]} />
  );
}

export { AttySidebar };

const KPI_COLORS = ['#276148', '#4a6fa5', '#d97706', '#c0442e'];
const KPI_BG = ['#edf5f0', '#eef2fc', '#fef8e8', '#fdf0ed'];

const ALERT_AVATAR_COLORS = {
  'JR': '#c0442e', 'DO': '#276148', 'LC': '#4a6fa5', 'PN': '#8b5cf6', "MO": '#d97706',
};

export default function ProDashboard() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AttySidebar active="Dashboard" />
      <div style={{ flex: 1, padding: '20px 22px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 34, lineHeight: 1, color: C.ink }}>Good morning, Marian.</div>
            <div style={{ color: C.pencil, fontSize: 13, marginTop: 4 }}>47 clients · 3 hearings this week · 12 unread messages</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn size="md" kind="ghost">＋ Client</Btn>
            <Btn size="md" kind="accent">＋ Report</Btn>
          </div>
        </div>

        {/* KPI cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            ['Active clients', '47', '+3 this month', 0],
            ['Submission rate', '94.2%', 'Across all clients', 1],
            ['Open explanations', '5', '2 need review', 2],
            ['Hearings ≤7 days', '3', 'Next: Thu 9 AM', 3],
          ].map(([t, v, s, ci], i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 12, padding: '14px 16px',
              boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`,
              borderTop: `3px solid ${KPI_COLORS[ci]}`,
            }}>
              <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 0.5, textTransform: 'uppercase' }}>{t}</div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 36, lineHeight: 1, marginTop: 6, color: KPI_COLORS[ci] }}>{v}</div>
              <div style={{ fontSize: 11, color: C.pencil, marginTop: 4 }}>{s}</div>
            </div>
          ))}
        </div>

        {/* Main panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 14, flex: 1, overflow: 'hidden' }}>

          {/* Needs attention */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Needs your attention</div>
              <Chip kind="bad">9 items</Chip>
            </div>
            {[
              { initials: 'JR', c: 'James Reyes', e: 'EEP-0042 filed — review by 10 AM', k: 'warn', t: '7m' },
              { initials: 'DO', c: 'Dana Okafor', e: 'Missed evening check-in', k: 'bad', t: '14h' },
              { initials: 'LC', c: 'Luis Camargo', e: 'Court filing deadline tomorrow', k: 'warn', t: '23h' },
              { initials: 'PN', c: 'Priya N.', e: 'New evidence flagged — drug test', k: 'flag', t: '2d' },
              { initials: 'MO', c: "Mac O'Connell", e: 'GPS data quality concern', k: 'bad', t: '2d' },
            ].map((r, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'center',
                padding: '8px 10px', borderRadius: 8,
                background: i === 0 ? '#fef8e8' : 'transparent',
                transition: 'background 0.1s',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  background: ALERT_AVATAR_COLORS[r.initials] || C.pencil,
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 600,
                }}>{r.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{r.c}</div>
                  <div style={{ fontSize: 11, color: C.pencil, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.e}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3, flexShrink: 0 }}>
                  <Chip kind={r.k} style={{ fontSize: 10 }}>{r.k}</Chip>
                  <span style={{ fontSize: 10, color: C.pencil }}>{r.t}</span>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 'auto', paddingTop: 4, textAlign: 'right' }}>
              <Btn size="sm" kind="ghost">View all →</Btn>
            </div>
          </div>

          {/* Calendar + activity */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: 'var(--shadow-sm)', border: `1px solid ${C.line}`, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontWeight: 600, fontSize: 15 }}>This week</div>

            {/* Week grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 10, color: i === 0 ? C.accent : C.pencil, fontWeight: i === 0 ? 700 : 400, marginBottom: 3 }}>{d}</div>
                  <div style={{
                    height: 54, borderRadius: 6,
                    border: `1px solid ${i === 0 ? C.accent : C.line}`,
                    padding: '3px 2px', fontSize: 9, textAlign: 'left',
                    background: i === 0 ? '#fdf0ed' : C.paper,
                    position: 'relative',
                  }}>
                    {i === 0 && <div style={{ color: C.accent, fontWeight: 700, fontSize: 9 }}>Today</div>}
                    {i === 3 && <div style={{ color: '#4a6fa5', fontSize: 9 }}>Hearing 9a</div>}
                    {i === 4 && <div style={{ color: C.pencil, fontSize: 9 }}>2 filings</div>}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: C.line, margin: '2px 0' }} />

            {/* Activity */}
            <div style={{ fontSize: 11, color: C.pencil, letterSpacing: 0.5, textTransform: 'uppercase' }}>Recent activity</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { icon: '✎', color: '#4a6fa5', t: 'Sent reply to J. Reyes', s: '3 min ago · Privileged' },
                { icon: '📄', color: C.stamp, t: 'Report VR-2026-091 generated', s: '32 min · Camargo case' },
                { icon: '⚠', color: '#d97706', t: 'Data quality concern dismissed', s: '2h · Okafor' },
                { icon: '🔐', color: C.pencil, t: 'Court portal access granted', s: 'Yesterday · Hon. Tanaka' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 0', borderBottom: i < 3 ? `1px solid ${C.line}` : 'none' }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                    background: item.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{item.t}</div>
                    <div style={{ fontSize: 11, color: C.pencil }}>{item.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
