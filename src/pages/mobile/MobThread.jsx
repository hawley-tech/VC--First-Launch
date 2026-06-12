import { C, MobileHeader, Card, Field, Btn } from '../../components/ui';

const messages = [
  { from: 'them', text: "Got the EEP. I'll review tomorrow before 10. Don't post anything publicly about tonight.", time: '11:51 PM', status: '✓✓ Read' },
  { from: 'me', text: "Understood. Daughter's discharge papers are also in the EEP attachments.", time: '11:53 PM', status: '✓✓ Delivered' },
  { from: 'them', text: 'Saw them. Good. Keep your phone on tonight.', time: '11:55 PM', status: '✓ Sent' },
];

export default function MobThread() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="Att. M. Jennings" left="←" right="ⓘ" subtitle="Privileged · Immutable" />
      <Card padding={8} style={{ margin: '8px 12px 0', background: '#fef8e8', borderColor: C.ink, flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: C.ink, display: 'flex', gap: 6 }}>
          <span>⚠</span>
          <span>Every message is timestamped, submitted, and exportable. Messages cannot be deleted.</span>
        </div>
      </Card>
      <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>
        <div style={{ alignSelf: 'center', fontSize: 11, color: C.pencil }}>— May 25, 11:51 PM —</div>
        {messages.map((m, i) => (
          <div key={i} style={{
            maxWidth: '78%',
            alignSelf: m.from === 'them' ? 'flex-start' : 'flex-end',
            background: m.from === 'them' ? C.light : '#fdf0ed',
            padding: 8, borderRadius: 10, border: `1.2px solid ${C.ink}`, fontSize: 13,
          }}>
            {m.text}
            <div style={{ fontSize: 10, color: C.pencil, marginTop: 4 }}>{m.time} · {m.status}</div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1.5px solid ${C.ink}`, padding: '8px 10px', display: 'flex', gap: 8, alignItems: 'center', background: C.light, flexShrink: 0 }}>
        <span style={{ fontSize: 18 }}>＋</span>
        <Field placeholder="Type a message…" h={28} />
        <Btn size="sm" kind="accent">Send</Btn>
      </div>
    </div>
  );
}
