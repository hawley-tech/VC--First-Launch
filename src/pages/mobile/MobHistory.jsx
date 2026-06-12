import { C, MobileHeader, MobileTabbar, Chip } from '../../components/ui';

const events = [
  { d: 'Today', i: '◉', t: 'Morning check-in recorded', s: '6:47 AM · Home', k: 'ok' },
  { d: 'Today', i: '✎', t: 'Att. Jennings replied', s: '7:12 AM · Privileged', k: 'info' },
  { d: 'Yest', i: '⚠', t: 'EEP-0042 filed', s: '11:42 PM · St. Mary\'s', k: 'warn' },
  { d: 'Yest', i: '✕', t: 'Evening check-in missed', s: '9:00 PM window', k: 'bad' },
  { d: 'Yest', i: '◉', t: 'Morning check-in recorded', s: '6:51 AM · Home', k: 'ok' },
  { d: 'May 24', i: '👥', t: 'AA meeting recorded', s: '7:02 PM · Riverside', k: 'ok' },
  { d: 'May 24', i: '📄', t: 'Timesheet uploaded', s: '5:14 PM · 32.5h', k: 'ok' },
];

const kBg = { ok: '#edf5f0', bad: '#fdf0ed', warn: '#fef8e8', info: '#eef2fc' };

export default function MobHistory() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="My record" left="←" right="↓" subtitle="Newest first" />
      <div style={{ display: 'flex', gap: 6, padding: '8px 12px', borderBottom: `1px solid ${C.line}`, overflow: 'auto', flexShrink: 0 }}>
        <Chip kind="info">All</Chip>
        <Chip>Check-ins</Chip>
        <Chip>Evidence</Chip>
        <Chip>Messages</Chip>
        <Chip>Explanations</Chip>
      </div>
      <div style={{ flex: 1, padding: '4px 14px', overflowY: 'auto' }}>
        {events.map((e, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: `1px dashed ${C.line}` }}>
            <div style={{ width: 36, textAlign: 'right', fontSize: 11, color: C.pencil, paddingTop: 4, flexShrink: 0 }}>{e.d}</div>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', border: `1.5px solid ${C.ink}`,
              background: kBg[e.k] || C.paper,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0,
            }}>{e.i}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{e.t}</div>
              <div style={{ fontSize: 11, color: C.pencil }}>{e.s}</div>
            </div>
          </div>
        ))}
      </div>
      <MobileTabbar active="evidence" />
    </div>
  );
}
