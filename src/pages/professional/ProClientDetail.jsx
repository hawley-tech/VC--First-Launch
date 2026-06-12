import { C, SectionTitle, Card, Row, Chip, Btn } from '../../components/ui';
import { AttySidebar } from './ProDashboard';

const tabs = ['Overview','Timeline','Evidence','Communication','Mandates','Reports','Documents','Audit'];

export default function ProClientDetail() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AttySidebar active="Clients" />
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 18px', borderBottom: `1.5px solid ${C.ink}`, background: C.light, display: 'flex', gap: 14, alignItems: 'center', flexShrink: 0 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', border: `1.5px solid ${C.ink}`, background: C.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700 }}>JR</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, lineHeight: 1 }}>James Reyes</div>
              <Chip kind="ok">● Active · 142d</Chip>
              <Chip kind="warn">EEP open</Chip>
            </div>
            <div style={{ fontSize: 12, color: C.pencil }}>#VC-58812 · Case 4429-A · Hon. Tanaka · Riverside Probation</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Btn size="sm" kind="ghost">Message</Btn>
            <Btn size="sm" kind="ghost">Add note</Btn>
            <Btn size="sm" kind="accent">Generate report</Btn>
            <Btn size="sm" kind="ghost">⋯</Btn>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4, padding: '0 18px', borderBottom: `1px solid ${C.ink}`, fontSize: 13, flexShrink: 0 }}>
          {tabs.map((t, i) => (
            <div key={t} style={{ padding: '10px 12px', borderBottom: i === 0 ? `2.5px solid ${C.accent}` : '2.5px solid transparent', fontWeight: i === 0 ? 700 : 400 }}>{t}</div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 18, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[['Submission rate', '98%', 'last 30 d'], ['Check-ins', '284 / 284', '100%'], ['Missed', '1', 'EEP filed']].map(([t, v, s], i) => (
                <Card key={i} padding={10}>
                  <div style={{ fontSize: 10, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>{t}</div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, lineHeight: 1, marginTop: 2 }}>{v}</div>
                  <div style={{ fontSize: 11, color: C.pencil }}>{s}</div>
                </Card>
              ))}
            </div>
            <Card padding={14} style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <SectionTitle>Recent timeline</SectionTitle>
                <span style={{ fontSize: 12, color: C.pencil }}>View all 1,247 events →</span>
              </div>
              {[
                { d: 'Today 7:12a', i: '✎', t: 'You replied in privileged thread', s: 'Re: EEP-0042' },
                { d: 'Today 6:47a', i: '◉', t: 'Morning check-in recorded', s: 'Home · GPS ±4m · liveness ✓' },
                { d: 'Yest 11:42p', i: '⚠', t: 'EEP-0042 filed', s: '"Hospital emergency w/ daughter"' },
                { d: 'Yest 9:00p', i: '✕', t: 'Evening check-in missed', s: 'Window closed · Explanation eligible' },
                { d: 'Yest 6:51a', i: '◉', t: 'Morning check-in recorded', s: 'Home · GPS ±3m' },
                { d: 'May 24 7:02p', i: '👥', t: 'AA meeting recorded', s: 'Riverside · geofence + duration' },
              ].map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '7px 0', borderBottom: `1px dashed ${C.line}` }}>
                  <div style={{ width: 70, fontSize: 11, color: C.pencil, flexShrink: 0 }}>{e.d}</div>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', border: `1.2px solid ${C.ink}`, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{e.i}</div>
                  <div style={{ flex: 1, fontSize: 12 }}>
                    <div style={{ fontWeight: 600 }}>{e.t}</div>
                    <div style={{ color: C.pencil }}>{e.s}</div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
            <Card padding={12} style={{ background: '#fef8e8' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Chip kind="warn">EEP-0042</Chip>
                <span style={{ fontSize: 12, color: C.pencil }}>Filed 8h ago</span>
              </div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, marginTop: 4 }}>"Hospital emergency with daughter"</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>3 attachments · GPS: St. Mary's · 11:42 PM</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                <Btn size="sm" kind="accent">Review</Btn>
                <Btn size="sm" kind="ghost">Mark reviewed</Btn>
                <Btn size="sm" kind="ghost">→ Court</Btn>
              </div>
            </Card>
            <Card padding={12}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Active mandates · 4</div>
              <Row left="◉" title="Sobriety monitoring" sub="2× daily check-in" status={{ kind: 'ok', label: 'On track' }} />
              <Row left="👥" title="AA attendance" sub="3/wk geofenced" status={{ kind: 'ok', label: '8/12' }} />
              <Row left="💼" title="Employment documentation" sub="Weekly timesheet" status={{ kind: 'warn', label: 'Due Fri' }} />
              <Row left="🏛" title="Community service" sub="80h by Aug 30" status={{ kind: 'warn', label: '34/80h' }} />
            </Card>
            <Card padding={12}>
              <div style={{ fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Private notes</div>
              <div style={{ fontSize: 12, color: C.pencil, marginTop: 4, fontStyle: 'italic' }}>
                "Daughter has ongoing medical needs — context for EEP. Hearing Thu 9a, preparing summary report."
              </div>
              <div style={{ fontSize: 10, color: C.pencil, marginTop: 6 }}>Marian J. · Today 7:14 AM · privileged</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
