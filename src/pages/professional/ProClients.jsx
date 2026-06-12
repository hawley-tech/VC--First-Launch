import { C, SectionTitle, Card, Chip, Btn, Field } from '../../components/ui';
import { AttySidebar } from './ProDashboard';

const rows = [
  ['JR','James Reyes','Sobriety · Probation','98%','142d','ok','warn','EEP open'],
  ['DO','Dana Okafor','Co-parenting','89%','61d','ok','bad','Missed 9p'],
  ['LC','Luis Camargo','Work release','100%','22d','ok','ok','—'],
  ['PN','Priya N.','Sobriety','92%','310d','ok','flag','Test flagged'],
  ['MO','M. O\'Connell','House arrest','81%','46d','ok','bad','GPS concern'],
  ['TK','Tomás K.','Community svc','94%','55d','ok','ok','34/80h'],
  ['AB','A. Bauer','Travel cond.','100%','12d','ok','ok','Unused'],
  ['SG','Sasha G.','Employment','97%','201d','ok','ok','—'],
  ['RD','R. Dela Cruz','Sobriety','—','—','pending','pending','Discharged'],
];

export default function ProClients() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AttySidebar active="Clients" />
      <div style={{ flex: 1, padding: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SectionTitle sub="47 total · 12 need attention">Clients</SectionTitle>
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn size="sm" kind="ghost">Filter</Btn>
            <Btn size="sm" kind="ghost">Export CSV</Btn>
            <Btn size="sm" kind="accent">＋ New client</Btn>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Field placeholder="Search by name, case #, or mandate…" h={32} style={{ flex: 1 }} />
          <Chip kind="info">Active</Chip>
          <Chip>Sobriety</Chip>
          <Chip>Co-parenting</Chip>
          <Chip>+ filter</Chip>
        </div>
        <Card padding={0} style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '40px 1.5fr 1.4fr 70px 80px 110px 110px 1fr',
            padding: '10px 14px', borderBottom: `1.5px solid ${C.ink}`,
            background: C.light, fontSize: 11, color: C.pencil,
            textTransform: 'uppercase', letterSpacing: 1,
          }}>
            <div /><div>Client</div><div>Mandate</div><div>Comp.</div><div>Day</div><div>Status</div><div>Flag</div><div>Last activity</div>
          </div>
          <div style={{ overflowY: 'auto', height: 'calc(100% - 40px)' }}>
            {rows.map((r, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '40px 1.5fr 1.4fr 70px 80px 110px 110px 1fr',
                padding: '10px 14px', borderBottom: `1px dashed ${C.line}`,
                alignItems: 'center', fontSize: 13, background: i === 0 ? '#fdf0ed' : C.paper,
              }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', border: `1.2px solid ${C.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, background: C.light }}>{r[0]}</div>
                <div>
                  <div style={{ fontWeight: 600 }}>{r[1]}</div>
                  <div style={{ fontSize: 11, color: C.pencil }}>#VC-{58000 + i * 7}</div>
                </div>
                <div>{r[2]}</div>
                <div>{r[3]}</div>
                <div>{r[4]}</div>
                <div><Chip kind={r[5]}>● Active</Chip></div>
                <div><Chip kind={r[6]}>{r[7]}</Chip></div>
                <div style={{ color: C.pencil }}>2 min ago · Check-in</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
