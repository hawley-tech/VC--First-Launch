import { C, MobileHeader, Card, Field, Btn } from '../../components/ui';

const messages = [
  { from: 'ai', text: 'Hello. I can help you find information in your record, understand requirements, or draft an explanation. I do not make legal judgments.', time: '6:30 AM' },
  { from: 'me', text: 'What happens if I miss an evening check-in?', time: '6:31 AM' },
  { from: 'ai', text: 'If you miss a check-in window, you have 24 hours to file an Emergency Explanation Packet (EEP). Your attorney is automatically notified. No determination is made automatically — your supervising professional reviews the situation.', time: '6:31 AM' },
];

export default function MobAI() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="AI Concierge" left="←" subtitle="For questions only — not legal advice" />
      <Card padding={8} style={{ margin: '8px 12px 0', background: '#eef2fc', borderColor: '#234266', flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: '#234266', display: 'flex', gap: 6 }}>
          <span>🤖</span>
          <span><b>AI assistant.</b> Responses use your record data. PII is not used to train models. Not a substitute for your attorney.</span>
        </div>
      </Card>
      <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            maxWidth: '84%',
            alignSelf: m.from === 'ai' ? 'flex-start' : 'flex-end',
            background: m.from === 'ai' ? '#eef2fc' : '#fdf0ed',
            padding: 10, borderRadius: 10, border: `1.2px solid ${C.ink}`, fontSize: 13,
          }}>
            {m.from === 'ai' && <div style={{ fontSize: 10, color: '#234266', marginBottom: 4 }}>AI Concierge</div>}
            {m.text}
            <div style={{ fontSize: 10, color: C.pencil, marginTop: 4 }}>{m.time}</div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1.5px solid ${C.ink}`, padding: '8px 10px', display: 'flex', gap: 8, alignItems: 'center', background: C.light, flexShrink: 0 }}>
        <Field placeholder="Ask about your record…" h={28} style={{ flex: 1 }} />
        <Btn size="sm" kind="accent">Send</Btn>
      </div>
    </div>
  );
}
