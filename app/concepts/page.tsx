/**
 * /concepts — Oak + Main Concept Directions · Version 5
 *
 *   01 Timeless Editorial  — wordmark only, no leaf, no line
 *   02 Oak Leaf Signature  — leaf replaces the "+" structurally
 *   03 Refined Heritage Seal — single ring, leaf as hero, Boutique below
 *
 * Direction: C01 approved as primary mark. Oak leaf (C02/C03) lives as a
 * secondary luxury motif — seals, packaging, stickers, pattern accents.
 * No underline. No anchor rule anywhere.
 */

import Link from "next/link";
import OakLeaf, { OAK_LEAF_SRC, OAK_VIEWBOX } from "@/components/concepts/OakLeaf";

// ── Palette ────────────────────────────────────────────────────────────────────
const C = {
  navy:   "#1B2D42",
  harbor: "#122033",
  champ:  "#D5BE97",
  porc:   "#F7F2EC",
  cash:   "#E3DACE",
  taupe:  "#8D7A67",
};

const SERIF = "var(--font-cormorant), Didot, Georgia, serif";
const SANS  = "var(--font-montserrat), sans-serif";

// ── Helpers ────────────────────────────────────────────────────────────────────

function Note({ label, body, tc }: { label: string; body: string; tc: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.22em", textTransform: "uppercase", color: tc, opacity: 0.48 }}>
        {label}
      </span>
      <p style={{ fontFamily: SANS, fontSize: 9, fontWeight: 300, color: tc, opacity: 0.65, lineHeight: 1.85, letterSpacing: "0.03em", margin: 0 }}>
        {body}
      </p>
    </div>
  );
}

function Tag({ bg, tc, text, border }: { bg: string; tc: string; text: string; border?: boolean }) {
  return (
    <span style={{
      fontFamily: SANS, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase",
      color: tc, background: bg, padding: "5px 12px", borderRadius: 1,
      border: border ? `0.5px solid ${C.navy}18` : "none",
      whiteSpace: "nowrap",
    }}>{text}</span>
  );
}

function MockupLabel({ tc, children }: { tc: string; children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.14em", textTransform: "uppercase", color: tc, opacity: 0.38, textAlign: "center" as const }}>
      {children}
    </span>
  );
}

// ── Brand mark components ──────────────────────────────────────────────────────
// ac prop accepted but intentionally unused — keeps all call sites compatible.

/**
 * C01 — Timeless Editorial
 * OAK + MAIN · Boutique · Nothing else.
 * Jenni Kayne / The Row level restraint — typography carries the brand.
 */
function EditorialMark({ tc, ac: _ac, size = 44 }: { tc: string; ac?: string; size?: number }) {
  const gap = Math.max(5, Math.round(size * 0.16));
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap }}>
      <span style={{
        fontFamily: SERIF, fontSize: size, fontWeight: 400,
        letterSpacing: "0.22em", color: tc, textTransform: "uppercase",
        lineHeight: 1, userSelect: "none", whiteSpace: "nowrap",
      }}>
        OAK + MAIN
      </span>
      <span style={{
        fontFamily: SERIF, fontSize: Math.max(10, Math.round(size * 0.30)), fontWeight: 400,
        fontStyle: "italic", color: tc, opacity: 0.60,
        letterSpacing: "0.08em", whiteSpace: "nowrap",
      }}>
        Boutique
      </span>
    </div>
  );
}

/**
 * C02 — Oak Leaf Signature
 * The SVG leaf replaces the "+" — it becomes the structural linking element
 * inside the wordmark itself. OAK [leaf] MAIN · Boutique below.
 * Leaf is the same colour as the text: it reads as part of the typography.
 */
function LeafSigMark({ tc, ac: _ac, size = 44 }: { tc: string; ac?: string; size?: number }) {
  const leafH  = Math.round(size * 0.52);
  const lsPx   = Math.round(size * 0.22); // cancel trailing letter-spacing of "OAK"
  const padPx  = Math.round(size * 0.18); // symmetric padding either side of leaf
  const gap    = Math.max(5, Math.round(size * 0.16));
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap }}>
      {/* Inline wordmark: OAK [leaf] MAIN */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{
          fontFamily: SERIF, fontSize: size, fontWeight: 400,
          letterSpacing: "0.22em", color: tc, textTransform: "uppercase",
          lineHeight: 1, userSelect: "none",
        }}>OAK</span>
        {/* marginLeft cancels the trailing letter-spacing of the K */}
        <div style={{
          marginLeft: `-${lsPx}px`,
          padding: `0 ${padPx}px`,
          display: "flex", alignItems: "center",
          transform: "translateY(1px)",
        }}>
          <OakLeaf size={leafH} color={tc} sw={0.9} />
        </div>
        <span style={{
          fontFamily: SERIF, fontSize: size, fontWeight: 400,
          letterSpacing: "0.22em", color: tc, textTransform: "uppercase",
          lineHeight: 1, userSelect: "none",
        }}>MAIN</span>
      </div>
      <span style={{
        fontFamily: SERIF, fontSize: Math.max(10, Math.round(size * 0.30)), fontWeight: 400,
        fontStyle: "italic", color: tc, opacity: 0.60,
        letterSpacing: "0.08em", whiteSpace: "nowrap",
      }}>
        Boutique
      </span>
    </div>
  );
}

/**
 * C03 — Refined Heritage Seal
 * Single clean circle · navy fill · leaf centred as hero icon.
 * OAK + MAIN and Boutique are set horizontally inside the circle — not on an arc.
 * Premium brand stamp aesthetic (Sézane / Veronica Beard) rather than rustic wax seal.
 */
function SealMark({ tc: _tc, size = 200 }: { tc?: string; size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const r  = size * 0.44;

  // Leaf — horizontal client reference, centred in circle
  const leafH = Math.round(size * 0.22);
  const leafW = Math.round(leafH * OAK_VIEWBOX.w / OAK_VIEWBOX.h);
  const leafX = cx - leafW / 2;
  const leafY = cy - leafH / 2 - size * 0.06;

  // Text — sits below leaf with generous breathing room
  const leafBottom = leafY + leafH;
  const divY   = leafBottom + size * 0.065;
  const nameY  = divY + size * 0.072;
  const boutY  = nameY + size * 0.075;
  const nameSz = size * 0.060;
  const boutSz = size * 0.046;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Navy fill */}
      <circle cx={cx} cy={cy} r={r} fill={C.navy} />
      {/* Inner thin ring — breathing room from the fill edge */}
      <circle cx={cx} cy={cy} r={r - size * 0.026} fill="none" stroke={C.champ} strokeWidth="0.4" opacity="0.32" />

      {/* Oak leaf — client-approved horizontal reference */}
      <image
        href={OAK_LEAF_SRC}
        x={leafX}
        y={leafY}
        width={leafW}
        height={leafH}
        opacity={0.92}
        preserveAspectRatio="xMidYMid meet"
      />

      {/* Hairline divider between leaf and name */}
      <line
        x1={cx - size * 0.10} y1={divY}
        x2={cx + size * 0.10} y2={divY}
        stroke={C.champ} strokeWidth="0.4" opacity="0.28"
      />

      {/* "OAK + MAIN" centred, horizontal, Cormorant */}
      <text
        x={cx} y={nameY}
        style={{ fontFamily: SERIF }}
        fontSize={nameSz}
        letterSpacing={size * 0.009}
        fill={C.champ}
        textAnchor="middle"
        opacity="0.88"
      >
        OAK + MAIN
      </text>

      {/* "Boutique" italic */}
      <text
        x={cx} y={boutY}
        style={{ fontFamily: SERIF, fontStyle: "italic" }}
        fontSize={boutSz}
        fill={C.champ}
        textAnchor="middle"
        opacity="0.58"
      >
        Boutique
      </text>
    </svg>
  );
}

// ── Mockup wrappers ────────────────────────────────────────────────────────────
// Premium product shapes — shopping bag, hang tag, round sticker.

function BagMockup({ bg, tc, children }: { bg: string; tc: string; children: React.ReactNode }) {
  const W = 100, H = 144;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Handle — proportional arch */}
      <svg width={W} height={22} viewBox={`0 0 ${W} 22`} style={{ marginBottom: -1 }}>
        <path
          d={`M ${W * 0.26},20 C ${W * 0.26},5 ${W * 0.37},1 ${W * 0.5},1 C ${W * 0.63},1 ${W * 0.74},5 ${W * 0.74},20`}
          fill="none" stroke={tc} strokeWidth="2.5" strokeLinecap="round" opacity="0.25"
        />
      </svg>
      {/* Bag body */}
      <div style={{
        width: W, height: H,
        background: bg,
        border: `0.5px solid ${tc}18`,
        borderRadius: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {children}
      </div>
    </div>
  );
}

function TagMockup({ bg, tc, children }: { bg: string; tc: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* String above hole */}
      <div style={{ width: "0.5px", height: 14, background: tc, opacity: 0.16 }} />
      {/* Hole */}
      <div style={{
        width: 8, height: 8, borderRadius: "50%",
        border: `0.75px solid ${tc}32`,
        margin: "-4px 0",
        zIndex: 1,
        background: "transparent",
      }} />
      {/* Short connector */}
      <div style={{ width: "0.5px", height: 4, background: tc, opacity: 0.16 }} />
      {/* Tag card */}
      <div style={{
        width: 74, minHeight: 112,
        background: bg,
        border: `0.5px solid ${tc}18`,
        borderRadius: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px 10px",
      }}>
        {children}
      </div>
    </div>
  );
}

function StickerMockup({ bg, tc, diameter = 96, children }: {
  bg: string; tc: string; diameter?: number; children: React.ReactNode
}) {
  return (
    <div style={{
      width: diameter, height: diameter,
      borderRadius: "50%",
      background: bg,
      border: `0.5px solid ${tc}20`,
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      {children}
    </div>
  );
}

// ── Concept-section layout helpers ─────────────────────────────────────────────

function Section({ id, bg, children }: { id?: string; bg: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ background: bg, padding: "72px clamp(24px, 6vw, 88px)" }}>
      {children}
    </section>
  );
}

function ConceptHeader({ num, title, tagline, tc, ac }: {
  num: string; title: string; tagline: string; tc: string; ac: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 52 }}>
      <span style={{ fontFamily: SERIF, fontSize: 44, fontWeight: 400, color: ac, lineHeight: 1, userSelect: "none", flexShrink: 0 }}>
        {num}
      </span>
      <div>
        <p style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 400, letterSpacing: "0.14em", color: tc, textTransform: "uppercase", userSelect: "none", margin: 0 }}>
          {title}
        </p>
        <p style={{ fontFamily: SERIF, fontSize: 11.5, fontStyle: "italic", color: tc, opacity: 0.45, margin: "5px 0 0" }}>
          {tagline}
        </p>
      </div>
    </div>
  );
}

function ColorwayRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "48px 0 0" }}>
      {children}
    </div>
  );
}

function Swatch({ bg, border, children }: { bg: string; border?: boolean; children: React.ReactNode }) {
  return (
    <div style={{
      background: bg, flex: "1 1 160px",
      padding: "36px 20px",
      borderRadius: 2,
      display: "flex", alignItems: "center", justifyContent: "center",
      border: border ? `0.5px solid ${C.navy}12` : "none",
    }}>
      {children}
    </div>
  );
}

function MockupRow({ tc, children }: { tc: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 48 }}>
      <p style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.22em", textTransform: "uppercase", color: tc, opacity: 0.35, margin: "0 0 24px" }}>
        Applications
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-end" }}>
        {children}
      </div>
    </div>
  );
}

function MockupItem({ label, tc, children }: { label: string; tc: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      {children}
      <MockupLabel tc={tc}>{label}</MockupLabel>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
export const metadata = {
  title: "Oak + Main — Concept Directions",
  description: "Concept Directions — Version 5",
};

export default function ConceptsPage() {
  return (
    <div style={{ background: C.porc, maxWidth: 1200, margin: "0 auto" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <div style={{
        background: C.harbor, padding: "13px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: SANS, fontSize: 7.5, letterSpacing: "0.2em", color: C.champ, opacity: 0.6, textTransform: "uppercase" }}>
            ← Brand Presentation
          </span>
        </Link>
        <span style={{ fontFamily: SERIF, fontSize: 12, fontStyle: "italic", color: C.porc, opacity: 0.45 }}>
          Concept Directions · Version 5
        </span>
        <span style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.14em", color: C.champ, opacity: 0.35, textTransform: "uppercase" }}>
          Concept Approval Only
        </span>
      </div>


      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <section style={{ background: C.porc, padding: "56px clamp(24px, 6vw, 88px) 48px" }}>
        <p style={{ fontFamily: SANS, fontSize: 7.5, letterSpacing: "0.24em", color: C.navy, opacity: 0.38, textTransform: "uppercase", margin: "0 0 8px" }}>
          Oak + Main · Concept Approval Phase · Version 5
        </p>
        <p style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 400, letterSpacing: "0.12em", color: C.navy, textTransform: "uppercase", userSelect: "none", margin: "0 0 8px" }}>
          Three Concept Directions
        </p>
        <p style={{ fontFamily: SERIF, fontSize: 13, fontStyle: "italic", color: C.navy, opacity: 0.4, margin: 0 }}>
          Version 5 — refined in response to client feedback
        </p>

        <div style={{ width: "100%", height: "0.3px", background: C.navy, opacity: 0.1, margin: "32px 0" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
          {[
            { n: "01", t: "Pure wordmark — OAK + MAIN, Boutique beneath. No leaf. No rule. Jenni Kayne restraint." },
            { n: "02", t: "Leaf replaces the \"+\" — integrated structurally into the wordmark itself, not placed below." },
            { n: "03", t: "Heritage seal — leaf as hero icon, horizontal text centred below. Brand stamp, not rustic wax seal." },
          ].map(f => (
            <div key={f.n} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <span style={{ fontFamily: SERIF, fontSize: 20, color: C.champ }}>{f.n}</span>
              <span style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 300, color: C.navy, opacity: 0.58, lineHeight: 1.75 }}>{f.t}</span>
            </div>
          ))}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          CONCEPT 01 — EDITORIAL MINIMAL
          The most restrained direction. No leaf in the primary lockup.
          Just the wordmark, the anchor rule, and the boutique subtitle.
          Think: Jenni Kayne, The Row, Khaite.
      ════════════════════════════════════════════════════════════════════ */}
      <Section id="c01" bg={C.porc}>
        <ConceptHeader num="01" title="Timeless Editorial" ac={C.champ} tc={C.navy}
          tagline="Pure typography — OAK + MAIN · Boutique · nothing more" />

        {/* PRIMARY MARK */}
        <div style={{ display: "flex", justifyContent: "center", padding: "40px 0 48px" }}>
          <EditorialMark tc={C.navy} ac={C.champ} size={52} />
        </div>

        {/* COLORWAYS */}
        <ColorwayRow>
          <Swatch bg={C.navy}>
            <EditorialMark tc={C.porc} ac={C.champ} size={32} />
          </Swatch>
          <Swatch bg={C.harbor}>
            <EditorialMark tc={C.champ} ac={C.champ} size={28} />
          </Swatch>
          <Swatch bg={C.cash}>
            <EditorialMark tc={C.navy} ac={C.taupe} size={28} />
          </Swatch>
          <Swatch bg={C.porc} border>
            <EditorialMark tc={C.navy} ac={C.champ} size={24} />
          </Swatch>
        </ColorwayRow>

        {/* MOCKUPS */}
        <MockupRow tc={C.navy}>
          <MockupItem label="Shopping Bag" tc={C.navy}>
            <BagMockup bg={C.navy} tc={C.porc}>
              <EditorialMark tc={C.champ} ac={C.champ} size={18} />
            </BagMockup>
          </MockupItem>
          <MockupItem label="Hang Tag" tc={C.navy}>
            <TagMockup bg={C.porc} tc={C.navy}>
              <EditorialMark tc={C.navy} ac={C.champ} size={15} />
            </TagMockup>
          </MockupItem>
          <MockupItem label="Round Sticker" tc={C.navy}>
            <StickerMockup bg={C.navy} tc={C.porc} diameter={96}>
              <EditorialMark tc={C.champ} ac={C.champ} size={14} />
            </StickerMockup>
          </MockupItem>
        </MockupRow>

        {/* NOTES */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginTop: 40 }}>
          <Note tc={C.navy} label="Strategy"
            body="The most universally versatile direction. Works at any scale from a care label to a storefront sign. Every brand touchpoint is intentional and considered." />
          <Note tc={C.navy} label="Precedents"
            body="Jenni Kayne, Khaite, Toteme. High-end boutiques where typography carries the brand equity — no decoration needed." />
          <Note tc={C.navy} label="Best For"
            body="Shopping bags, letterhead, business cards, hang tags, social profile. The safest and most timeless option." />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
          {["Shopping Bag", "Business Card", "Hang Tag", "Letterhead", "Digital"].map(a => (
            <Tag key={a} bg={C.cash} tc={C.navy} text={a} />
          ))}
        </div>
      </Section>


      {/* ════════════════════════════════════════════════════════════════════
          CONCEPT 02 — OAK LEAF SIGNATURE
          The leaf sits BELOW the wordmark as a distinctive brand motif.
          Wordmark → rule → leaf → subtitle. The leaf becomes ownable.
      ════════════════════════════════════════════════════════════════════ */}
      <Section id="c02" bg={C.navy}>
        <ConceptHeader num="02" title="Oak Leaf Signature" ac={C.champ} tc={C.porc}
          tagline="The leaf replaces the + — structural integration, not decoration" />

        {/* PRIMARY MARK */}
        <div style={{ display: "flex", justifyContent: "center", padding: "40px 0 48px" }}>
          <LeafSigMark tc={C.porc} ac={C.champ} size={52} />
        </div>

        {/* COLORWAYS */}
        <ColorwayRow>
          <Swatch bg={C.porc} border>
            <LeafSigMark tc={C.navy} ac={C.taupe} size={28} />
          </Swatch>
          <Swatch bg={C.cash}>
            <LeafSigMark tc={C.navy} ac={C.taupe} size={26} />
          </Swatch>
          <Swatch bg={C.harbor}>
            <LeafSigMark tc={C.champ} ac={C.champ} size={26} />
          </Swatch>
          <Swatch bg={C.navy}>
            <LeafSigMark tc={C.porc} ac={C.champ} size={24} />
          </Swatch>
        </ColorwayRow>

        {/* MOCKUPS */}
        <MockupRow tc={C.porc}>
          <MockupItem label="Shopping Bag" tc={C.porc}>
            <BagMockup bg={C.harbor} tc={C.porc}>
              <LeafSigMark tc={C.champ} ac={C.champ} size={17} />
            </BagMockup>
          </MockupItem>
          <MockupItem label="Hang Tag" tc={C.porc}>
            <TagMockup bg={C.porc} tc={C.navy}>
              <LeafSigMark tc={C.navy} ac={C.taupe} size={14} />
            </TagMockup>
          </MockupItem>
          <MockupItem label="Round Sticker" tc={C.porc}>
            <StickerMockup bg={C.harbor} tc={C.porc} diameter={96}>
              <LeafSigMark tc={C.champ} ac={C.champ} size={14} />
            </StickerMockup>
          </MockupItem>
        </MockupRow>

        {/* NOTES */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginTop: 40 }}>
          <Note tc={C.porc} label="Strategy"
            body="The leaf replaces the + sign, making it a structural element of the wordmark rather than a decoration. OAK [leaf] MAIN is a single cohesive mark — the leaf is not added, it belongs." />
          <Note tc={C.porc} label="Precedents"
            body="Sézane, Veronica Beard. Brands that have a secondary icon that becomes as recognisable as the wordmark itself." />
          <Note tc={C.porc} label="Best For"
            body="Hang tags, wax seals, embossed packaging, thank you cards, and any touchpoint where the leaf motif reinforces brand recognition." />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
          {["Hang Tag", "Wax Seal", "Embossed Packaging", "Thank You Card", "Tissue Paper"].map(a => (
            <Tag key={a} bg="#1A2B3E" tc={C.champ} text={a} />
          ))}
        </div>
      </Section>


      {/* ════════════════════════════════════════════════════════════════════
          CONCEPT 03 — HERITAGE SEAL
          Single clean circle. The oak leaf replaces the OM monogram as
          the central icon. "OAK + MAIN" on top arc only. Nothing else.
          Directly answers: "I like the circle — just not all the details."
      ════════════════════════════════════════════════════════════════════ */}
      <Section id="c03" bg={C.cash}>
        <ConceptHeader num="03" title="Refined Heritage Seal" ac={C.taupe} tc={C.navy}
          tagline={"Single ring \u00b7 leaf as hero icon \u00b7 generous breathing room \u2014 answers \u201cI like the circle, not all the details\u201d"} />

        {/* PRIMARY MARK */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "center", alignItems: "center", padding: "40px 0 48px" }}>
          <SealMark tc={C.navy} size={220} />
          <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
            <SealMark tc={C.navy} size={140} />
            <div style={{ width: "0.5px", height: 32, background: C.navy, opacity: 0.12 }} />
            {/* Companion wordmark for applications that can't use the seal */}
            <EditorialMark tc={C.navy} ac={C.taupe} size={22} />
          </div>
        </div>

        {/* COLORWAYS */}
        <ColorwayRow>
          <Swatch bg={C.navy}>
            <SealMark tc={C.champ} size={140} />
          </Swatch>
          <Swatch bg={C.harbor}>
            <SealMark tc={C.porc} size={140} />
          </Swatch>
          <Swatch bg={C.porc} border>
            <SealMark tc={C.navy} size={140} />
          </Swatch>
        </ColorwayRow>

        {/* MOCKUPS */}
        <MockupRow tc={C.navy}>
          <MockupItem label="Shopping Bag" tc={C.navy}>
            <BagMockup bg={C.navy} tc={C.porc}>
              <SealMark size={72} />
            </BagMockup>
          </MockupItem>
          <MockupItem label="Hang Tag" tc={C.navy}>
            <TagMockup bg={C.porc} tc={C.navy}>
              <SealMark size={56} />
            </TagMockup>
          </MockupItem>
          <MockupItem label="Seal Sticker" tc={C.navy}>
            <StickerMockup bg={C.navy} tc={C.champ} diameter={96}>
              <SealMark size={96} />
            </StickerMockup>
          </MockupItem>
        </MockupRow>

        {/* NOTES */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginTop: 40 }}>
          <Note tc={C.navy} label="Strategy"
            body={"Direct response to the client\u2019s feedback: \u201cI like the circle but not all the details.\u201d Previous version had a double ring, OM monogram, arc text on both sides, and decorative dots. This version has one ring, the leaf, and the name."} />
          <Note tc={C.navy} label="What Was Removed"
            body="Double ring, OM monogram, bottom arc text, dot separators, and secondary decorative elements. What remains: single ring, oak leaf as hero icon, OAK + MAIN, Boutique. Nothing more." />
          <Note tc={C.navy} label="Best For"
            body="Seal stickers, wax seals, embossed tissue paper, care labels, and event collateral. Pairs with the C01 wordmark for any application that needs a non-circular mark." />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
          {["Seal Sticker", "Wax Seal", "Tissue Paper", "Care Label", "Event Collateral"].map(a => (
            <Tag key={a} bg={C.porc} tc={C.navy} text={a} border />
          ))}
        </div>
      </Section>


      {/* ════════════════════════════════════════════════════════════════════
          COMPARISON — THREE DIRECTIONS AT EQUAL SCALE
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: C.porc, padding: "72px clamp(24px, 6vw, 88px)" }}>
        <p style={{ fontFamily: SANS, fontSize: 7.5, letterSpacing: "0.22em", textTransform: "uppercase", color: C.navy, opacity: 0.38, margin: "0 0 4px" }}>
          Side-by-Side Comparison
        </p>
        <p style={{ fontFamily: SERIF, fontSize: 13, fontStyle: "italic", color: C.navy, opacity: 0.35, margin: "0 0 40px" }}>
          All three primary marks at equal scale · wordmark 22px
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>

          {/* C01 */}
          <div style={{
            background: C.porc, border: `0.5px solid ${C.navy}12`,
            padding: "52px 20px 36px",
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "space-between", minHeight: 300,
          }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <EditorialMark tc={C.navy} ac={C.champ} size={22} />
            </div>
            <span style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.15em", color: C.navy, opacity: 0.3, textTransform: "uppercase", textAlign: "center" as const, marginTop: 28 }}>
              01 · Timeless Editorial
            </span>
          </div>

          {/* C02 */}
          <div style={{
            background: C.navy,
            padding: "52px 20px 36px",
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "space-between", minHeight: 300,
          }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <LeafSigMark tc={C.porc} ac={C.champ} size={22} />
            </div>
            <span style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.15em", color: C.champ, opacity: 0.35, textTransform: "uppercase", textAlign: "center" as const, marginTop: 28 }}>
              02 · Oak Leaf Signature
            </span>
          </div>

          {/* C03 */}
          <div style={{
            background: C.cash,
            padding: "32px 16px 36px",
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "space-between", minHeight: 300,
          }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <SealMark tc={C.navy} size={180} />
            </div>
            <span style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.15em", color: C.navy, opacity: 0.3, textTransform: "uppercase", textAlign: "center" as const, marginTop: 16 }}>
              03 · Refined Heritage Seal
            </span>
          </div>

        </div>
      </section>


      {/* ── RECOMMENDATION ──────────────────────────────────────────────── */}
      <section style={{ background: C.harbor, padding: "56px clamp(24px, 6vw, 88px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
          <div style={{ flex: "2 1 280px" }}>
            <p style={{ fontFamily: SANS, fontSize: 7.5, letterSpacing: "0.2em", color: C.champ, opacity: 0.55, textTransform: "uppercase", margin: "0 0 16px" }}>
              KXD Recommendation
            </p>
            <p style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 400, fontStyle: "italic", color: C.porc, lineHeight: 1.7, maxWidth: 480, margin: 0 }}>
              Concepts 01 and 02 offer the strongest foundation. 01 is the most timeless and universally versatile. 02 gives the brand a distinctive visual asset that becomes more recognisable over time. 03 directly addresses the seal feedback.
            </p>
          </div>
          <div style={{ flex: "1.5 1 240px" }}>
            <p style={{ fontFamily: SANS, fontSize: 7.5, letterSpacing: "0.14em", color: C.porc, opacity: 0.38, textTransform: "uppercase", margin: "0 0 14px" }}>
              Next Steps
            </p>
            {[
              "Select preferred concept direction (01, 02, or 03)",
              "Confirm preferred oak leaf style and weight",
              "Confirm subtitle typography (italic serif or small-caps sans)",
              "Decide: seal as secondary mark or primary mark",
              "Proceed to full identity system production",
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 9 }}>
                <span style={{ fontFamily: SERIF, fontSize: 10, color: C.champ, opacity: 0.4, flexShrink: 0 }}>—</span>
                <span style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 300, color: C.porc, opacity: 0.62, lineHeight: 1.8 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <section style={{
        background: C.porc, padding: "24px clamp(24px, 6vw, 88px)",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
      }}>
        <span style={{ fontFamily: SANS, fontSize: 7, letterSpacing: "0.13em", color: C.navy, opacity: 0.22, textTransform: "uppercase" }}>
          Prepared by Kreate by Design · Concept Approval Phase · Not for Production
        </span>
        <span style={{ fontFamily: SERIF, fontSize: 9.5, fontStyle: "italic", color: C.navy, opacity: 0.2 }}>
          Building brands designed to endure.
        </span>
      </section>

    </div>
  );
}
