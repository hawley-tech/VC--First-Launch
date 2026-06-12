import { C, MobileHeader, Card, Btn, Annot, Stamp, Row } from '../../components/ui';

export default function MobEEPDone() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <MobileHeader title="EEP filed" left="" right="✕" />
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'center', alignItems: 'center' }}>
        <Stamp color={C.stamp} rotate={-6} style={{ fontSize: 18 }}>Filed · Submitted</Stamp>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 24, lineHeight: 1.1 }}>EEP-0042<br/>has been filed.</div>
        <Card padding={12} style={{ width: '100%', textAlign: 'left' }}>
          <Row left="📨" title="Sent to Att. Jennings" sub="Auto-notified · awaiting review" />
          <Row left="🧾" title="3 attachments locked" sub="ER receipt, discharge, photo" />
          <Row left="📍" title="Submission location" sub="St. Mary's Hospital · 11:42 PM" />
          <Row left="🔐" title="Hash 7f3a…b21c" sub="Chain of custody: 4 events" />
        </Card>
        <Annot style={{ alignSelf: 'flex-start' }}>You'll be notified when reviewed.</Annot>
        <div style={{ display: 'flex', gap: 8, width: '100%', marginTop: 'auto' }}>
          <Btn size="md" kind="ghost" style={{ flex: 1 }}>View on record</Btn>
          <Btn size="md" kind="accent" style={{ flex: 1 }}>Done</Btn>
        </div>
      </div>
    </div>
  );
}
