import { C, MobileHeader, MobileTabbar, Field, Chip } from '../../components/ui';

const threads = [
  { who: 'Att. M. Jennings', sub: 'Re: EEP-0042 — got it.', t: '11:51 PM', unread: true, kind: 'Attorney', flag: true },
  { who: 'Agency: Riverside Probation', sub: 'Your monthly summary is ready.', t: 'Sun', unread: true, kind: 'Agency' },
  { who: 'Co-parent: D. Reyes', sub: 'Pickup at 5:30 confirmed.', t: 'Fri', kind: 'Co-parent' },
  { who: 'Case Mgr: T. Park', sub: 'Reminder: meeting Thu 4p', t: 'May 22', kind: 'Case Mgr' },
  { who: 'System', sub: 'Receipt for check-in #2,847', t: 'May 21', kind: 'System' },
];

export default function MobMessages() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Messages" right="✎" />
      <div style={{ padding: '8px 12px', borderBottom: `1px solid ${C.ink}`, flexShrink: 0 }}>
        <Field placeholder="Search messages…" h={28} />
      </div>
      <div style={{ display: 'flex', gap: 6, padding: '8px 12px', borderBottom: `1px solid ${C.line}`, flexShrink: 0 }}>
        <Chip kind="info">All</Chip>
        <Chip>Attorney</Chip>
        <Chip>Agency</Chip>
        <Chip>Co-parent</Chip>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '0 12px' }}>
        {threads.map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: `1px dashed ${C.line}` }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', border: `1.5px solid ${C.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, background: i === 0 ? '#fdf0ed' : C.paper, flexShrink: 0 }}>
              {t.who.split(' ')[0][0]}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: t.unread ? 700 : 500, fontSize: 13, display: 'flex', gap: 6, alignItems: 'center' }}>
                  {t.who.length > 18 ? t.who.substring(0, 18) + '…' : t.who}
                  {t.flag && <span style={{ color: C.accent }}>🚩</span>}
                </div>
                <div style={{ fontSize: 11, color: C.pencil }}>{t.t}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 6 }}>
                <div style={{ fontSize: 12, color: C.pencil, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{t.sub}</div>
                <Chip kind={t.kind === 'Attorney' ? 'info' : t.kind === 'System' ? 'pending' : 'default'} style={{ fontSize: 10, flexShrink: 0 }}>{t.kind}</Chip>
              </div>
            </div>
            {t.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.accent, marginTop: 14, flexShrink: 0 }} />}
          </div>
        ))}
      </div>
      <MobileTabbar active="msg" />
    </div>
  );
}
