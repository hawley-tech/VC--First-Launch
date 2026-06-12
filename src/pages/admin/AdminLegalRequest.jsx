import { C, SectionTitle, Card, Btn, Row, Field } from '../../components/ui';
import { AdminSidebar } from './AdminOverview';

export default function AdminLegalRequest() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AdminSidebar active="Audit log" />
      <div style={{ flex: 1, padding: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <SectionTitle sub="V2-18 · Subpoenas · court orders · agency requests">Legal request intake</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14, flex: 1, overflow: 'hidden' }}>
          <Card padding={14} style={{ overflowY: 'auto' }}>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>New request · LR-2026-0142</div>
            <div style={{ fontSize: 11, color: C.pencil, marginBottom: 10 }}>Authority verification required before any disclosure</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <Field label="Request type" value="Subpoena duces tecum" />
              <Field label="Requesting authority" value="Riverside Superior Court · Hon. R. Tanaka" />
              <Field label="Received at" value="May 26 · 9:14 AM PT" />
              <Field label="Due date" value="Jun 9, 2026 · 5:00 PM" />
            </div>
            <div style={{ marginTop: 10, fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Scope (auto-derived)</div>
            <Card padding={10} style={{ marginTop: 6, border: `1px dashed ${C.line}`, background: C.paper }}>
              <div style={{ fontSize: 12 }}>· Records for subject <b>#VC-58812 (James Reyes)</b></div>
              <div style={{ fontSize: 12 }}>· Date range <b>Jan 5 – May 26, 2026</b></div>
              <div style={{ fontSize: 12 }}>· Record types: <b>session_events, selfie_artifacts, emergency_explanations, vc_reports</b></div>
              <div style={{ fontSize: 12, color: C.accent, marginTop: 4 }}>✕ Privileged messages excluded by policy</div>
            </Card>
            <div style={{ marginTop: 12, fontSize: 11, color: C.pencil, textTransform: 'uppercase', letterSpacing: 1 }}>Authority verification</div>
            <Row left="📜" title="Document uploaded" sub="subpoena_4429-A.pdf · hash f0c2…" />
            <Row left="🪪" title="Authority check pending" sub="Court directory lookup · clerk callback required" />
            <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              <Btn size="md" kind="ghost">Reject</Btn>
              <Btn size="md" kind="ghost">Request clarification</Btn>
              <Btn size="md" kind="accent">Verify authority & continue →</Btn>
            </div>
          </Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>
            <Card padding={10}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Disclosure audit trail</div>
              <Row left="●" title="Request received" sub="May 26 · 9:14" />
              <Row left="●" title="Filed in queue" sub="May 26 · 9:14" />
              <Row left="○" title="Authority verified" sub="—" />
              <Row left="○" title="Scoped export generated" sub="—" />
              <Row left="○" title="Disclosed" sub="—" />
            </Card>
            <Card padding={10}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Open requests · 3</div>
              <Row left="LR-141" title="Agency · CDCR" sub="Compliance review · due Jun 2" status={{ kind: 'warn', label: '5d' }} />
              <Row left="LR-140" title="Court · Tanaka" sub="Subpoena · due May 30" status={{ kind: 'bad', label: '2d' }} />
              <Row left="LR-139" title="Atty · third party" sub="Discovery · rejected" status={{ kind: 'pending', label: 'closed' }} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
