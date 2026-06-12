import { C, Stamp } from '../../components/ui';

export default function ReportPDFPreview() {
  return (
    <div style={{ background: '#eae5dc', padding: 30, height: '100%', overflow: 'auto', fontFamily: 'Georgia, serif' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', background: '#fff', border: `1px solid ${C.ink}`, padding: 48, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 38, lineHeight: 1, fontWeight: 700 }}>Verified Compliance™</div>
            <div style={{ fontSize: 10, color: C.pencil, letterSpacing: 2, textTransform: 'uppercase', marginTop: 4 }}>VC Report · VR-2026-091</div>
            <div style={{ fontSize: 11, color: C.pencil }}>Generated May 26, 2026 · 7:22 AM PT</div>
          </div>
          <Stamp color={C.stamp} rotate={4}>Recorded · immutable</Stamp>
        </div>
        <hr style={{ margin: '18px 0', border: 0, borderTop: `1px solid ${C.ink}` }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, fontSize: 11 }}>
          <div>
            <div style={{ color: C.pencil, fontSize: 10, textTransform: 'uppercase' }}>Subject</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>James L. Reyes</div>
            <div>DOB: redacted · ID #VC-58812</div>
          </div>
          <div>
            <div style={{ color: C.pencil, fontSize: 10, textTransform: 'uppercase' }}>Case</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>4429-A</div>
            <div>Hon. R. Tanaka · Riverside Superior, Dept 12</div>
          </div>
          <div>
            <div style={{ color: C.pencil, fontSize: 10, textTransform: 'uppercase' }}>Reporting period</div>
            <div>Apr 26, 2026 – May 26, 2026 (30 days)</div>
          </div>
          <div>
            <div style={{ color: C.pencil, fontSize: 10, textTransform: 'uppercase' }}>Attorney of record</div>
            <div>Marian Jennings, Esq. · CA #284991</div>
          </div>
        </div>

        <div style={{ marginTop: 24, fontWeight: 700, fontSize: 14, borderBottom: `2px solid ${C.ink}`, paddingBottom: 4 }}>1 · Executive summary</div>
        <p style={{ fontSize: 12, lineHeight: 1.5, marginTop: 8 }}>
          Subject completed 59 of 60 scheduled compliance events during the reporting period (98.3%). The single missed event (May 25, 9 PM check-in window) is documented in Emergency Explanation Packet EEP-0042 with three supporting attachments captured contemporaneously at St. Mary's Hospital. No data quality or chain-of-custody anomalies were detected.
        </p>

        <div style={{ marginTop: 18, fontWeight: 700, fontSize: 14, borderBottom: `2px solid ${C.ink}`, paddingBottom: 4 }}>2 · Documentation grid</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(30, 1fr)', gap: 2, marginTop: 8 }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} style={{ aspectRatio: '1', background: i === 28 ? '#a53321' : '#2a6f4f', borderRadius: 1 }} />
          ))}
        </div>
        <div style={{ fontSize: 10, color: C.pencil, marginTop: 4, display: 'flex', gap: 14 }}>
          <span>■ Recorded (59)</span><span style={{ color: '#a53321' }}>■ Missed — EEP filed (1)</span>
        </div>

        <div style={{ marginTop: 18, fontWeight: 700, fontSize: 14, borderBottom: `2px solid ${C.ink}`, paddingBottom: 4 }}>3 · Emergency explanation · EEP-0042</div>
        <div style={{ marginTop: 8, padding: 14, border: `1px solid ${C.ink}`, background: C.paper }}>
          <div style={{ fontStyle: 'italic', fontSize: 12 }}>
            "At approximately 9:14 PM on May 25, my 7-year-old daughter began having a severe allergic reaction. I transported her to St. Mary's Hospital ER, arriving at 9:38 PM, and we were not discharged until 12:11 AM…"
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: C.pencil }}>
            Filed 11:42 PM · GPS: St. Mary's ER · Hash 7f3a8b…b21c · 3 attachments (ER intake receipt, discharge papers, triage photo)
          </div>
        </div>

        <div style={{ marginTop: 18, fontWeight: 700, fontSize: 14, borderBottom: `2px solid ${C.ink}`, paddingBottom: 4 }}>4 · Chain of custody</div>
        <div style={{ fontSize: 11, marginTop: 8, fontFamily: 'monospace' }}>
          1,247 events · 0 gaps · root hash f0c2…aa18 · last-seal 7:22:09 AM
        </div>

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 12, borderTop: `1px solid ${C.ink}` }}>
          <div style={{ fontSize: 10, color: C.pencil, maxWidth: 380 }}>
            <div><b>This is a documentation record.</b> Verified Compliance does not determine compliance, guilt, or truth. Final determinations are made by your supervising professional.</div>
            <div style={{ marginTop: 4 }}>QR code confirms only that this record exists in our ledger and that the hash has not been altered. It does not assert truth about the underlying facts.</div>
            <div style={{ marginTop: 4 }}>Policy version <b>CA-RIV v2.4</b> · Verification provider <b>VC_NATIVE</b></div>
            <div style={{ marginTop: 4 }}>verify.vc/r/VR-2026-091 · Generated 7:22 AM PT · Page 1 of 8</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ width: 80, height: 80, background: '#000', display: 'inline-block', marginBottom: 4 }} />
            <div style={{ fontSize: 9, color: C.pencil }}>scan to verify</div>
          </div>
        </div>
      </div>
    </div>
  );
}
