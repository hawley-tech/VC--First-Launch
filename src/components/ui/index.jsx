// Verified Compliance™ Design System — High-fidelity

export const C = {
  ink:         '#18161a',
  pencil:      '#72686f',
  paper:       '#f5f2eb',
  card:        '#ffffff',
  light:       '#eae5dc',
  line:        '#e2dbd0',
  accent:      '#c0442e',
  accentLight: '#fdf0ed',
  stamp:       '#276148',
  stampLight:  '#edf5f0',
  yellow:      '#e8b84b',
  yellowLight: '#fef8e8',
  sidebar:     '#1a1720',
};

// ── VCSheet ────────────────────────────────────────────────────────────────────
export function VCSheet({ children, style, padding = 18, bg }) {
  return (
    <div style={{
      width: '100%', height: '100%', boxSizing: 'border-box',
      background: bg || C.paper,
      borderRadius: 12,
      border: `1px solid ${C.line}`,
      boxShadow: 'var(--shadow-sm)',
      padding,
      color: C.ink,
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      lineHeight: 1.5,
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>{children}</div>
  );
}

// ── Btn ────────────────────────────────────────────────────────────────────────
const btnSizes = {
  sm: { padding: '0 12px', fontSize: 12, height: 28, borderRadius: 6 },
  md: { padding: '0 16px', fontSize: 13, height: 34, borderRadius: 7 },
  lg: { padding: '0 20px', fontSize: 14, height: 40, borderRadius: 8 },
  xl: { padding: '0 24px', fontSize: 15, height: 46, borderRadius: 9 },
};

const btnKinds = {
  solid:  { background: C.ink,         color: '#fff',    border: 'none', boxShadow: '0 1px 3px rgba(0,0,0,0.18)' },
  accent: { background: C.accent,      color: '#fff',    border: 'none', boxShadow: '0 1px 3px rgba(192,68,46,0.3)' },
  ghost:  { background: 'transparent', color: C.ink,     border: `1.5px solid ${C.line}` },
  danger: { background: C.accentLight, color: C.accent,  border: `1.5px solid #f4c9c0` },
  stamp:  { background: C.stamp,       color: '#fff',    border: 'none', boxShadow: '0 1px 3px rgba(39,97,72,0.3)' },
};

export function Btn({ children, kind = 'solid', size = 'md', style, fullWidth, onClick }) {
  const isGhost = kind === 'ghost';
  return (
    <span
      onClick={onClick}
      className={`vc-btn${isGhost ? ' vc-btn-ghost' : ''}`}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-ui)',
        fontWeight: 500,
        borderRadius: 7,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        width: fullWidth ? '100%' : undefined,
        boxSizing: 'border-box',
        userSelect: 'none',
        letterSpacing: '0.01em',
        ...btnSizes[size],
        ...btnKinds[kind],
        ...style,
      }}>{children}</span>
  );
}

// ── Chip ──────────────────────────────────────────────────────────────────────
const chipKinds = {
  default: { background: C.light,        color: C.ink,     border: C.line },
  ok:      { background: C.stampLight,   color: '#1a5c39', border: '#b8d9c8' },
  warn:    { background: C.yellowLight,  color: '#7a4e00', border: '#e8c870' },
  bad:     { background: C.accentLight,  color: '#a83020', border: '#f0b8b0' },
  info:    { background: '#eef2fc',      color: '#2648b0', border: '#c0cef4' },
  pending: { background: C.light,        color: C.pencil,  border: C.line },
  flag:    { background: '#f5eeff',      color: '#5a18a0', border: '#d0a8f0' },
};

export function Chip({ children, kind = 'default', style }) {
  const s = chipKinds[kind] || chipKinds.default;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3,
      padding: '2px 9px',
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.02em',
      border: `1px solid ${s.border}`,
      background: s.background,
      color: s.color,
      whiteSpace: 'nowrap',
      ...style,
    }}>{children}</span>
  );
}

// ── Field ─────────────────────────────────────────────────────────────────────
export function Field({ label, placeholder, value, kind = 'box', icon, style, w, h = 34 }) {
  return (
    <div style={{ width: w || '100%', ...style }}>
      {label && (
        <div style={{ fontSize: 11, fontWeight: 600, color: C.pencil, marginBottom: 5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          {label}
        </div>
      )}
      <div style={{
        height: h, padding: '0 12px',
        border: kind === 'underline' ? 'none' : `1.5px solid ${C.line}`,
        borderBottom: `1.5px solid ${kind === 'underline' ? C.ink : C.line}`,
        borderRadius: kind === 'underline' ? 0 : 7,
        background: C.card,
        display: 'flex', alignItems: 'center', gap: 7,
        fontSize: 13,
        color: value ? C.ink : C.pencil,
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)',
      }}>
        {icon && <span style={{ opacity: 0.5 }}>{icon}</span>}
        <span>{value || placeholder}</span>
      </div>
    </div>
  );
}

// ── Placeholder ───────────────────────────────────────────────────────────────
const phIcons = { image: '📷', map: '🗺', avatar: '🙂', doc: '📄', video: '🎬', audio: '🎙', chart: '📊', signature: '✍︎' };

export function Placeholder({ label, w = '100%', h = 100, kind = 'image', style }) {
  const isMap = kind === 'map';
  return (
    <div style={{
      width: w, height: h, ...style,
      border: `1.5px dashed ${C.line}`,
      borderRadius: 8,
      background: isMap
        ? 'linear-gradient(135deg, #d4e8d8 0%, #c8dfc8 50%, #d4e8d8 100%)'
        : `repeating-linear-gradient(45deg, transparent 0 8px, ${C.light} 8px 9px)`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      color: C.pencil, fontSize: 12, gap: 5,
      fontStyle: 'italic',
    }}>
      <span style={{ fontSize: 24, opacity: 0.5 }}>{phIcons[kind] || phIcons.image}</span>
      <span style={{ opacity: 0.7 }}>{label}</span>
    </div>
  );
}

// ── MobileHeader ──────────────────────────────────────────────────────────────
export function MobileHeader({ title, left, right, subtitle }) {
  return (
    <div style={{
      padding: '10px 16px 10px',
      borderBottom: `1px solid ${C.line}`,
      display: 'flex', alignItems: 'center', gap: 8,
      background: C.card,
      flexShrink: 0,
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    }}>
      <div style={{ width: 28, fontSize: 16, color: C.pencil, cursor: 'pointer' }}>{left ?? '☰'}</div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-brand)', fontSize: 20, lineHeight: 1, fontWeight: 700, color: C.ink }}>{title}</div>
        {subtitle && <div style={{ fontSize: 10, color: C.pencil, marginTop: 2, letterSpacing: '0.02em' }}>{subtitle}</div>}
      </div>
      <div style={{ width: 28, textAlign: 'right', fontSize: 13, color: C.pencil }}>{right ?? '⋯'}</div>
    </div>
  );
}

// ── MobileTabbar ──────────────────────────────────────────────────────────────
export function MobileTabbar({ active = 'home' }) {
  const tabs = [
    { id: 'home',    label: 'Today',    icon: '⌂' },
    { id: 'checkin', label: 'Check-in', icon: '◎' },
    { id: 'evidence',label: 'Evidence', icon: '◈' },
    { id: 'msg',     label: 'Messages', icon: '✉' },
    { id: 'more',    label: 'More',     icon: '⋯' },
  ];
  return (
    <div style={{
      borderTop: `1px solid ${C.line}`,
      display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
      padding: '8px 2px 16px',
      background: C.card,
      gap: 0,
      flexShrink: 0,
      boxShadow: '0 -1px 4px rgba(0,0,0,0.04)',
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <div key={t.id} className="vc-tab" style={{
            textAlign: 'center',
            color: isActive ? C.accent : C.pencil,
            fontSize: 10,
            fontWeight: isActive ? 600 : 400,
            letterSpacing: '0.03em',
          }}>
            <div style={{ fontSize: 20, lineHeight: 1.2 }}>{t.icon}</div>
            {t.label}
            {isActive && (
              <div style={{ width: 18, height: 2, background: C.accent, borderRadius: 1, margin: '3px auto 0' }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── WebSidebar ────────────────────────────────────────────────────────────────
export function WebSidebar({ title, sections, accent }) {
  return (
    <div style={{
      width: 220,
      background: C.sidebar,
      color: '#f5f2eb',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      height: '100%',
      overflowY: 'auto',
    }}>
      <div style={{
        padding: '20px 16px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        flexShrink: 0,
      }}>
        <div style={{ fontFamily: 'var(--font-brand)', fontSize: 20, lineHeight: 1.1, fontWeight: 700, color: '#f5f2eb' }}>
          Verified<br /><span style={{ color: C.accent }}>Compliance™</span>
        </div>
        {title && (
          <div style={{ fontSize: 10, color: 'rgba(245,242,235,0.45)', marginTop: 8, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
            {title}
          </div>
        )}
      </div>
      <div style={{ flex: 1, padding: '10px 8px', overflowY: 'auto' }}>
        {sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 6 }}>
            {sec.heading && (
              <div style={{
                fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(245,242,235,0.35)', fontWeight: 700,
                padding: '12px 8px 5px',
              }}>
                {sec.heading}
              </div>
            )}
            {sec.items.map((it, j) => {
              const label = typeof it === 'string' ? it : it.label;
              const badge = typeof it === 'object' ? it.badge : undefined;
              const isActive = label === accent;
              return (
                <div key={j} className={isActive ? '' : 'vc-nav-item'} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '7px 8px',
                  marginBottom: 1,
                  borderRadius: 7,
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#fff' : 'rgba(245,242,235,0.72)',
                  background: isActive ? 'var(--vc-sidebar-active)' : 'transparent',
                  borderLeft: isActive ? `3px solid ${C.accent}` : '3px solid transparent',
                  paddingLeft: isActive ? 8 : 8,
                  cursor: 'pointer',
                }}>
                  <span>{label}</span>
                  {badge !== undefined && (
                    <span style={{
                      fontSize: 10, fontWeight: 700,
                      background: isActive ? C.accent : 'rgba(255,255,255,0.12)',
                      color: '#fff',
                      borderRadius: 999, padding: '0 6px', minWidth: 18,
                      textAlign: 'center', lineHeight: '18px', height: 18,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {badge > 999 ? `${(badge/1000).toFixed(0)}k` : badge}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PostIt ────────────────────────────────────────────────────────────────────
export function PostIt({ children, rotate = -2, color, style }) {
  return (
    <div style={{
      background: color || C.yellow,
      color: C.ink,
      padding: '10px 14px',
      fontFamily: 'var(--font-brand)',
      fontSize: 15,
      transform: `rotate(${rotate}deg)`,
      lineHeight: 1.3,
      boxShadow: '2px 4px 12px rgba(0,0,0,0.15)',
      borderRadius: 2,
      maxWidth: 220,
      ...style,
    }}>{children}</div>
  );
}

// ── Annot ─────────────────────────────────────────────────────────────────────
export function Annot({ children, style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-brand)',
      color: C.accent,
      fontSize: 15,
      lineHeight: 1.2,
      ...style,
    }}>{children}</div>
  );
}

// ── SectionTitle ──────────────────────────────────────────────────────────────
export function SectionTitle({ children, sub, style }) {
  return (
    <div style={{ ...style }}>
      <div style={{
        fontFamily: 'var(--font-brand)',
        fontSize: 30,
        fontWeight: 700,
        lineHeight: 1,
        color: C.ink,
        letterSpacing: '-0.01em',
      }}>{children}</div>
      {sub && (
        <div style={{ color: C.pencil, fontSize: 12, marginTop: 5, fontWeight: 400, letterSpacing: '0.01em' }}>
          {sub}
        </div>
      )}
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
export function Card({ children, style, padding = 14, dashed }) {
  return (
    <div style={{
      background: C.card,
      border: dashed ? `1.5px dashed ${C.line}` : `1px solid ${C.line}`,
      borderRadius: 10,
      padding,
      boxSizing: 'border-box',
      boxShadow: 'var(--shadow-sm)',
      ...style,
    }}>{children}</div>
  );
}

// ── Row ───────────────────────────────────────────────────────────────────────
export function Row({ left, title, sub, right, status }) {
  return (
    <div className="vc-row" style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 6px',
      borderBottom: `1px solid ${C.line}`,
      borderRadius: 4,
    }}>
      {left && (
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: C.light,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, flexShrink: 0, color: C.pencil,
        }}>{left}</div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: C.ink, lineHeight: 1.3 }}>{title}</div>
        {sub && <div style={{ fontSize: 11, color: C.pencil, marginTop: 1 }}>{sub}</div>}
      </div>
      {status && <Chip kind={status.kind}>{status.label}</Chip>}
      {right !== undefined && <div style={{ fontSize: 12, color: C.pencil, flexShrink: 0 }}>{right}</div>}
    </div>
  );
}

// ── DisclaimerBanner ──────────────────────────────────────────────────────────
export function DisclaimerBanner({ style, compact }) {
  return (
    <div aria-label="Documentation disclaimer" style={{
      background: C.yellowLight,
      borderBottom: `1px solid #e8c870`,
      padding: compact ? '5px 14px' : '8px 16px',
      display: 'flex', alignItems: 'center', gap: 8,
      fontSize: compact ? 10 : 11,
      lineHeight: 1.4,
      color: '#6a4800',
      flexShrink: 0,
      fontWeight: 400,
      ...style,
    }}>
      <span style={{ fontSize: compact ? 12 : 14, flexShrink: 0 }}>⚠</span>
      <span>
        <strong style={{ fontWeight: 600 }}>Documentation record.</strong>
        {' '}Professional determinations are made by your supervising professional — not by this app.
      </span>
    </div>
  );
}

// ── Stamp ─────────────────────────────────────────────────────────────────────
export function Stamp({ children, color, rotate = -6, style }) {
  const c = color || C.stamp;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      border: `2px solid ${c}`,
      color: c,
      padding: '3px 12px',
      fontFamily: 'var(--font-brand)',
      fontSize: 14, fontWeight: 700,
      letterSpacing: '0.1em', textTransform: 'uppercase',
      borderRadius: 4,
      transform: `rotate(${rotate}deg)`,
      opacity: 0.88,
      background: `${c}12`,
      ...style,
    }}>{children}</div>
  );
}

// ── HandLine ──────────────────────────────────────────────────────────────────
export function HandLine({ length = 100, style, thick = 1.5, dashed }) {
  return (
    <svg width={length} height={6} style={{ display: 'block', ...style }}>
      <path
        d={`M 1 3 Q ${length / 4} 5, ${length / 2} 3 T ${length - 1} 3`}
        stroke={C.line} strokeWidth={thick} fill="none"
        strokeDasharray={dashed ? '4 3' : ''} strokeLinecap="round"
      />
    </svg>
  );
}
