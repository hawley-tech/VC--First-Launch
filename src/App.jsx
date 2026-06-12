import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { C } from './components/ui';
import { PhoneShell } from './components/layout/PhoneShell';
import { WebPortalShell } from './components/layout/WebPortalShell';

// Mobile screens
import MobSplash from './pages/mobile/MobSplash';
import MobEnrollLanding from './pages/mobile/MobEnrollLanding';
import MobOnboarding from './pages/mobile/MobOnboarding';
import MobPermissions from './pages/mobile/MobPermissions';
import MobTwoFA from './pages/mobile/MobTwoFA';
import MobConsent from './pages/mobile/MobConsent';
import MobToday from './pages/mobile/MobToday';
import MobIncident from './pages/mobile/MobIncident';
import MobCheckin1 from './pages/mobile/MobCheckin1';
import MobCheckin2 from './pages/mobile/MobCheckin2';
import MobCheckin3 from './pages/mobile/MobCheckin3';
import MobCheckin4 from './pages/mobile/MobCheckin4';
import MobCheckinDone from './pages/mobile/MobCheckinDone';
import MobReceipt from './pages/mobile/MobReceipt';
import MobOffline from './pages/mobile/MobOffline';
import MobEvidence from './pages/mobile/MobEvidence';
import MobEEP1 from './pages/mobile/MobEEP1';
import MobEEP2 from './pages/mobile/MobEEP2';
import MobEEPDone from './pages/mobile/MobEEPDone';
import MobMessages from './pages/mobile/MobMessages';
import MobThread from './pages/mobile/MobThread';
import MobAI from './pages/mobile/MobAI';
import MobMandates from './pages/mobile/MobMandates';
import MobMandateDetail from './pages/mobile/MobMandateDetail';
import MobHistory from './pages/mobile/MobHistory';
import MobDocs from './pages/mobile/MobDocs';
import MobNotifs from './pages/mobile/MobNotifs';
import MobSettings from './pages/mobile/MobSettings';
import MobLockNotif from './pages/mobile/MobLockNotif';

// Professional portal
import ProDashboard from './pages/professional/ProDashboard';
import ProClients from './pages/professional/ProClients';
import ProClientDetail from './pages/professional/ProClientDetail';
import ProReviewQueue from './pages/professional/ProReviewQueue';
import ProDecision from './pages/professional/ProDecision';
import ProMessaging from './pages/professional/ProMessaging';
import ProEvidenceQuality from './pages/professional/ProEvidenceQuality';
import ProReportBuilder from './pages/professional/ProReportBuilder';
import ProMobileView from './pages/professional/ProMobileView';

// Court portal
import CourtDocket from './pages/court/CourtDocket';
import CourtCaseView from './pages/court/CourtCaseView';

// Agency portal
import AgencyCaseload from './pages/agency/AgencyCaseload';
import AgencyMap from './pages/agency/AgencyMap';

// Admin portal
import AdminOverview from './pages/admin/AdminOverview';
import AdminFraud from './pages/admin/AdminFraud';
import AdminAudit from './pages/admin/AdminAudit';
import AdminLegalRequest from './pages/admin/AdminLegalRequest';

// Report
import ReportPDFPreview from './pages/report/ReportPDFPreview';

// ── Top nav bar (used in web + full-page routes) ─────────────────────────────
const NAV_PORTALS = [
  ['/mobile/today',          '📱', 'Individual'],
  ['/professional/dashboard','⚖', 'Professional'],
  ['/court/docket',          '🏛', 'Court'],
  ['/agency/caseload',       '🛡', 'Agency'],
  ['/admin/overview',        '🔧', 'Admin'],
  ['/report',                '📄', 'Report'],
];

function TopBar() {
  const loc = useLocation();
  return (
    <div style={{
      height: 46,
      background: C.sidebar,
      display: 'flex', alignItems: 'center',
      padding: '0 16px', gap: 6,
      flexShrink: 0,
    }}>
      <Link to="/" style={{ fontFamily: 'var(--font-brand)', fontSize: 18, color: '#f5f2eb', fontWeight: 700, marginRight: 10, whiteSpace: 'nowrap' }}>
        VC™
      </Link>
      {NAV_PORTALS.map(([path, icon, label]) => {
        const isActive = loc.pathname.startsWith(path.split('/').slice(0, 2).join('/'));
        return (
          <Link key={path} to={path} style={{
            fontSize: 12, fontWeight: 500,
            color: isActive ? '#fff' : 'rgba(245,242,235,0.6)',
            textDecoration: 'none',
            padding: '4px 10px',
            borderRadius: 6,
            background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
            transition: 'all 0.15s ease',
            whiteSpace: 'nowrap',
          }}>
            {icon} {label}
          </Link>
        );
      })}
    </div>
  );
}

// ── Mobile screen picker ─────────────────────────────────────────────────────
const MOBILE_SCREENS = [
  ['splash','Splash'],['enroll','Enroll'],['onboarding','Onboard'],['permissions','Permissions'],
  ['2fa','2FA'],['consent','Consent'],['today','Today'],['incident','Incident'],
  ['checkin/1','Checkin 1'],['checkin/2','Checkin 2'],['checkin/3','Checkin 3'],['checkin/4','Checkin 4'],
  ['checkin/done','Done'],['receipt','Receipt'],['offline','Offline'],['evidence','Evidence'],
  ['eep/1','EEP 1'],['eep/2','EEP 2'],['eep/done','EEP Done'],['messages','Messages'],
  ['thread','Thread'],['ai','AI'],['mandates','Mandates'],['mandate-detail','Mandate Detail'],
  ['history','History'],['docs','Docs'],['notifs','Notifs'],['settings','Settings'],['lock','Lock'],
];

function ScreenPicker() {
  const loc = useLocation();
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 4,
      maxWidth: 460, justifyContent: 'center',
      padding: '0 8px',
    }}>
      {MOBILE_SCREENS.map(([slug, label]) => {
        const isActive = loc.pathname === `/mobile/${slug}`;
        return (
          <Link key={slug} to={`/mobile/${slug}`} style={{
            fontSize: 10, fontWeight: 500,
            color: isActive ? C.accent : C.pencil,
            textDecoration: 'none',
            padding: '3px 9px',
            border: `1px solid ${isActive ? C.accent : C.line}`,
            borderRadius: 99,
            background: isActive ? C.accentLight : C.card,
            transition: 'all 0.12s ease',
          }}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}

// ── Mobile route wrapper ─────────────────────────────────────────────────────
function MobileRoute({ children }) {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', background: '#16141e' }}>
      <TopBar />
      <div style={{
        flex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 28,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 60%, #2a2538 0%, #16141e 70%)',
      }}>
        <ScreenPicker />
        <PhoneShell>{children}</PhoneShell>
      </div>
    </div>
  );
}

// ── Web portal wrapper ───────────────────────────────────────────────────────
function WebRoute({ children, url }) {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'flex', flexDirection: 'column',
      background: C.paper,
    }}>
      <TopBar />
      <div style={{ flex: 1, padding: 16, overflow: 'hidden' }}>
        <WebPortalShell url={url || 'verified.app'}>
          {children}
        </WebPortalShell>
      </div>
    </div>
  );
}

// ── Report / full-page wrapper ───────────────────────────────────────────────
function FullPageRoute({ children }) {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

// ── Landing page ─────────────────────────────────────────────────────────────
const PORTALS = [
  {
    path: '/mobile/today',
    icon: '📱',
    title: 'Individual',
    tagline: 'Mobile app for James Reyes',
    desc: 'Check-ins, EEPs, messages, mandates, documents',
    accent: C.stamp,
    accentBg: C.stampLight,
    screens: [
      ['/mobile/today','Today'],
      ['/mobile/checkin/1','Check-in'],
      ['/mobile/eep/1','EEP wizard'],
      ['/mobile/messages','Messages'],
      ['/mobile/history','History'],
      ['/mobile/splash','+ 24 more'],
    ],
  },
  {
    path: '/professional/dashboard',
    icon: '⚖',
    title: 'Professional',
    tagline: 'Attorney & supervisor portal',
    desc: 'Review queue, report builder, client detail, messaging',
    accent: '#2648b0',
    accentBg: '#eef2fc',
    screens: [
      ['/professional/dashboard','Dashboard'],
      ['/professional/review-queue','Review queue'],
      ['/professional/report-builder','Report builder'],
      ['/professional/client-detail','Client detail'],
      ['/professional/messaging','Messaging'],
    ],
  },
  {
    path: '/court/docket',
    icon: '🏛',
    title: 'Court',
    tagline: 'Read-only · Hon. R. Tanaka · Dept 12',
    desc: 'Cases on docket, verification audit, evidence chain',
    accent: '#7a4e00',
    accentBg: C.yellowLight,
    screens: [
      ['/court/docket','Docket'],
      ['/court/case','Case view'],
    ],
  },
  {
    path: '/agency/caseload',
    icon: '🛡',
    title: 'Agency',
    tagline: 'Officer T. Park · Riverside Probation',
    desc: 'Caseload, live GPS map, alerts, random test queue',
    accent: '#5a18a0',
    accentBg: '#f5eeff',
    screens: [
      ['/agency/caseload','Caseload'],
      ['/agency/map','GPS map'],
    ],
  },
  {
    path: '/admin/overview',
    icon: '🔧',
    title: 'Admin',
    tagline: 'Platform console',
    desc: 'Overview, fraud queue, audit ledger, legal intake',
    accent: C.accent,
    accentBg: C.accentLight,
    screens: [
      ['/admin/overview','Overview'],
      ['/admin/fraud','Review queue'],
      ['/admin/audit','Audit log'],
      ['/admin/legal','Legal intake'],
    ],
  },
];

function Landing() {
  return (
    <div style={{ minHeight: '100vh', background: C.paper, color: C.ink, overflowY: 'auto' }}>
      {/* Hero */}
      <div style={{
        background: C.sidebar,
        padding: '64px 40px 56px',
        color: '#f5f2eb',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-brand)', fontSize: 64, lineHeight: 1, fontWeight: 700, letterSpacing: '-0.02em' }}>
            Verified<br /><span style={{ color: C.accent }}>Compliance™</span>
          </div>
          <div style={{ fontSize: 18, color: 'rgba(245,242,235,0.65)', marginTop: 14, maxWidth: 540, lineHeight: 1.6 }}>
            Neutral documentation platform for courts, attorneys, agencies, and individuals under supervision.
          </div>
          <div style={{
            marginTop: 20,
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 14px',
            background: 'rgba(232,184,75,0.12)',
            border: '1px solid rgba(232,184,75,0.3)',
            borderRadius: 6,
            fontSize: 12,
            color: '#e8c870',
          }}>
            ⚠ Documentation record only — final determinations are made by your supervising professional
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            <Link to="/mobile/today" style={{
              padding: '10px 22px', background: C.accent, color: '#fff',
              borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(192,68,46,0.4)',
            }}>
              Individual app →
            </Link>
            <Link to="/report" style={{
              padding: '10px 22px', background: 'rgba(255,255,255,0.1)', color: '#f5f2eb',
              borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
            }}>
              Sample VC Report
            </Link>
          </div>
        </div>
      </div>

      {/* Portal grid */}
      <div style={{ maxWidth: 1020, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.pencil, marginBottom: 20 }}>
          Five portals · 47 screens
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 16 }}>
          {PORTALS.map((p) => (
            <div key={p.path} style={{
              background: C.card,
              border: `1px solid ${C.line}`,
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ padding: '18px 20px', borderBottom: `1px solid ${C.line}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: p.accentBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, flexShrink: 0,
                    border: `1px solid ${p.accent}22`,
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{p.title} Portal</div>
                    <div style={{ fontSize: 11, color: p.accent, fontWeight: 500, marginTop: 1 }}>{p.tagline}</div>
                    <div style={{ fontSize: 11, color: C.pencil, marginTop: 3, lineHeight: 1.4 }}>{p.desc}</div>
                  </div>
                </div>
                <Link to={p.path} style={{
                  display: 'block', marginTop: 14, textAlign: 'center',
                  padding: '8px', background: p.accent, color: '#fff',
                  borderRadius: 7, fontSize: 13, fontWeight: 600, textDecoration: 'none',
                  boxShadow: `0 2px 6px ${p.accent}44`,
                }}>
                  Open {p.title} Portal →
                </Link>
              </div>
              <div style={{ padding: '10px 14px 12px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {p.screens.map(([path, label]) => (
                  <Link key={path} to={path} style={{
                    fontSize: 11, fontWeight: 500,
                    color: C.pencil,
                    textDecoration: 'none',
                    padding: '3px 9px',
                    border: `1px solid ${C.line}`,
                    borderRadius: 99,
                    background: C.paper,
                    transition: 'all 0.12s ease',
                  }}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: '20px 24px', background: C.card, borderRadius: 10, border: `1px solid ${C.line}` }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>About this prototype</div>
          <div style={{ fontSize: 13, color: C.pencil, lineHeight: 1.6, maxWidth: 720 }}>
            This is a UI/UX design prototype for Verified Compliance™. All data is fictional. The platform records documentation — it does not determine compliance, guilt, or truth. Final determinations are made exclusively by supervising professionals (attorneys, probation officers, judges).
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Router ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* Mobile */}
        <Route path="/mobile/splash"        element={<MobileRoute><MobSplash /></MobileRoute>} />
        <Route path="/mobile/enroll"        element={<MobileRoute><MobEnrollLanding /></MobileRoute>} />
        <Route path="/mobile/onboarding"    element={<MobileRoute><MobOnboarding /></MobileRoute>} />
        <Route path="/mobile/permissions"   element={<MobileRoute><MobPermissions /></MobileRoute>} />
        <Route path="/mobile/2fa"           element={<MobileRoute><MobTwoFA /></MobileRoute>} />
        <Route path="/mobile/consent"       element={<MobileRoute><MobConsent /></MobileRoute>} />
        <Route path="/mobile/today"         element={<MobileRoute><MobToday /></MobileRoute>} />
        <Route path="/mobile/incident"      element={<MobileRoute><MobIncident /></MobileRoute>} />
        <Route path="/mobile/checkin/1"     element={<MobileRoute><MobCheckin1 /></MobileRoute>} />
        <Route path="/mobile/checkin/2"     element={<MobileRoute><MobCheckin2 /></MobileRoute>} />
        <Route path="/mobile/checkin/3"     element={<MobileRoute><MobCheckin3 /></MobileRoute>} />
        <Route path="/mobile/checkin/4"     element={<MobileRoute><MobCheckin4 /></MobileRoute>} />
        <Route path="/mobile/checkin/done"  element={<MobileRoute><MobCheckinDone /></MobileRoute>} />
        <Route path="/mobile/receipt"       element={<MobileRoute><MobReceipt /></MobileRoute>} />
        <Route path="/mobile/offline"       element={<MobileRoute><MobOffline /></MobileRoute>} />
        <Route path="/mobile/evidence"      element={<MobileRoute><MobEvidence /></MobileRoute>} />
        <Route path="/mobile/eep/1"         element={<MobileRoute><MobEEP1 /></MobileRoute>} />
        <Route path="/mobile/eep/2"         element={<MobileRoute><MobEEP2 /></MobileRoute>} />
        <Route path="/mobile/eep/done"      element={<MobileRoute><MobEEPDone /></MobileRoute>} />
        <Route path="/mobile/messages"      element={<MobileRoute><MobMessages /></MobileRoute>} />
        <Route path="/mobile/thread"        element={<MobileRoute><MobThread /></MobileRoute>} />
        <Route path="/mobile/ai"            element={<MobileRoute><MobAI /></MobileRoute>} />
        <Route path="/mobile/mandates"      element={<MobileRoute><MobMandates /></MobileRoute>} />
        <Route path="/mobile/mandate-detail" element={<MobileRoute><MobMandateDetail /></MobileRoute>} />
        <Route path="/mobile/history"       element={<MobileRoute><MobHistory /></MobileRoute>} />
        <Route path="/mobile/docs"          element={<MobileRoute><MobDocs /></MobileRoute>} />
        <Route path="/mobile/notifs"        element={<MobileRoute><MobNotifs /></MobileRoute>} />
        <Route path="/mobile/settings"      element={<MobileRoute><MobSettings /></MobileRoute>} />
        <Route path="/mobile/lock"          element={<MobileRoute><MobLockNotif /></MobileRoute>} />

        {/* Professional */}
        <Route path="/professional/dashboard"      element={<WebRoute url="verified.app/professional"><ProDashboard /></WebRoute>} />
        <Route path="/professional/clients"        element={<WebRoute url="verified.app/professional/clients"><ProClients /></WebRoute>} />
        <Route path="/professional/client-detail"  element={<WebRoute url="verified.app/professional/client"><ProClientDetail /></WebRoute>} />
        <Route path="/professional/review-queue"   element={<WebRoute url="verified.app/professional/review"><ProReviewQueue /></WebRoute>} />
        <Route path="/professional/decision"       element={<WebRoute url="verified.app/professional/decision"><ProDecision /></WebRoute>} />
        <Route path="/professional/messaging"      element={<WebRoute url="verified.app/professional/messaging"><ProMessaging /></WebRoute>} />
        <Route path="/professional/evidence-quality" element={<WebRoute url="verified.app/professional/evidence"><ProEvidenceQuality /></WebRoute>} />
        <Route path="/professional/report-builder" element={<WebRoute url="verified.app/professional/reports"><ProReportBuilder /></WebRoute>} />
        <Route path="/professional/mobile"         element={<MobileRoute><ProMobileView /></MobileRoute>} />

        {/* Court */}
        <Route path="/court/docket" element={<WebRoute url="court.verified.app/docket"><CourtDocket /></WebRoute>} />
        <Route path="/court/case"   element={<WebRoute url="court.verified.app/case/4429-A"><CourtCaseView /></WebRoute>} />

        {/* Agency */}
        <Route path="/agency/caseload" element={<WebRoute url="agency.verified.app/caseload"><AgencyCaseload /></WebRoute>} />
        <Route path="/agency/map"      element={<WebRoute url="agency.verified.app/map"><AgencyMap /></WebRoute>} />

        {/* Admin */}
        <Route path="/admin/overview" element={<WebRoute url="admin.verified.app/overview"><AdminOverview /></WebRoute>} />
        <Route path="/admin/fraud"    element={<WebRoute url="admin.verified.app/review"><AdminFraud /></WebRoute>} />
        <Route path="/admin/audit"    element={<WebRoute url="admin.verified.app/audit"><AdminAudit /></WebRoute>} />
        <Route path="/admin/legal"    element={<WebRoute url="admin.verified.app/legal"><AdminLegalRequest /></WebRoute>} />

        {/* Report */}
        <Route path="/report" element={<FullPageRoute><ReportPDFPreview /></FullPageRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
