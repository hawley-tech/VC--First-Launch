import { C, Field, Btn, Placeholder } from '../../components/ui';
import { AttySidebar } from './ProDashboard';

const threads = [
  { c: 'James Reyes', last: 'Saw them. Good. Keep your phone on tonight.', t: '11:55p', flag: true, unread: false },
  { c: 'Dana Okafor', last: '— missed message thread —', t: '8:14p', flag: true, unread: true },
  { c: 'Luis Camargo', last: 'I sent the paystub.', t: '4:02p', unread: false },
  { c: 'Priya Narayan', last: 'Confirmed treatment plan.', t: '1:11p', unread: false },
  { c: 'Riverside Probation', last: 'Monthly summary attached.', t: 'Sun', unread: true },
  { c: 'Hon. R. Tanaka clerk', last: 'Filed under 4429-A.', t: 'Fri', unread: false },
];

const msgs = [
  { from: 'client', text: "I just had to bring my daughter to the ER. I won't make the 9pm check-in.", time: "James · 11:38 PM · ✓✓ · 📍 St. Mary's" },
  { from: 'me', text: 'File an EEP from the app right now. Include the ER intake photo and discharge papers when you have them.', time: 'You · 11:41 PM · ✓✓ Read' },
  { from: 'client', text: 'EEP filed. Attached docs and selfie inside.', time: 'James · 11:51 PM · 🔗 EEP-0042', attachment: true },
  { from: 'me', text: 'Got the EEP. I\'ll review tomorrow before 10. Don\'t post anything publicly about tonight.', time: 'You · 11:55 PM · ✓ Sent' },
];

export default function ProMessaging() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AttySidebar active="Communication" />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* thread list */}
        <div style={{ width: 280, borderRight: `1.5px solid ${C.ink}`, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 12, borderBottom: `1px solid ${C.line}`, flexShrink: 0 }}>
            <Field placeholder="Search messages…" h={28} />
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {threads.map((t, i) => (
              <div key={i} style={{ padding: 12, borderBottom: `1px dashed ${C.line}`, background: i === 0 ? '#fdf0ed' : C.paper, display: 'flex', gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1.2px solid ${C.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, background: C.light, flexShrink: 0 }}>
                  {t.c.split(' ').map(p => p[0]).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <span style={{ fontWeight: t.unread ? 700 : 600 }}>{t.c}{t.flag && <span style={{ color: C.accent, marginLeft: 4 }}>🚩</span>}</span>
                    <span style={{ color: C.pencil }}>{t.t}</span>
                  </div>
                  <div style={{ fontSize: 11, color: C.pencil, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.last}</div>
                </div>
                {t.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.accent, alignSelf: 'center', flexShrink: 0 }} />}
              </div>
            ))}
          </div>
        </div>
        {/* thread view */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '12px 18px', borderBottom: `1.5px solid ${C.ink}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: C.light, flexShrink: 0 }}>
            <div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1 }}>James Reyes</div>
              <div style={{ fontSize: 11, color: C.pencil }}>Privileged · Immutable · #VC-58812</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <Btn size="sm" kind="ghost">🚩 Flag</Btn>
              <Btn size="sm" kind="ghost">＋ to report</Btn>
              <Btn size="sm" kind="ghost">Export thread</Btn>
            </div>
          </div>
          <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>
            <div style={{ alignSelf: 'center', fontSize: 11, color: C.pencil }}>— Yesterday —</div>
            {msgs.map((m, i) => (
              <div key={i} style={{
                maxWidth: '60%',
                alignSelf: m.from === 'client' ? 'flex-start' : 'flex-end',
                background: m.from === 'client' ? C.light : '#fdf0ed',
                padding: 10, borderRadius: 10, border: `1.2px solid ${C.ink}`,
              }}>
                {m.attachment && <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                  <Placeholder kind="doc" w={50} h={60} label="EEP-0042" />
                </div>}
                <div style={{ fontSize: 12 }}>{m.text}</div>
                <div style={{ fontSize: 10, color: C.pencil, marginTop: 4 }}>{m.time}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '10px 14px', borderTop: `1.5px solid ${C.ink}`, background: C.light, display: 'flex', gap: 8, flexShrink: 0 }}>
            <Field placeholder="Reply privileged…" h={36} style={{ flex: 1 }} />
            <Btn size="md" kind="accent">Send (privileged)</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
