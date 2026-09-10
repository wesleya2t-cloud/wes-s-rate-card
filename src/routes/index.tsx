import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wesley Wes Creates — Rate Card 2026" },
      {
        name: "description",
        content:
          "Podcast production and social media management rates in KES or USD. Build your own quote with the interactive calculator.",
      },
      { property: "og:title", content: "Wesley Wes Creates — Rate Card 2026" },
      {
        property: "og:description",
        content:
          "Podcast production and social media management rates in KES or USD. Build your own quote with the interactive calculator.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RateCard,
});

const EMAIL = "handywesley@gmail.com";
const WHATSAPP = "254700000000";

// Approximate rate as of Sept 2026. Rough guide for international clients
// only — invoices are always issued in KES.
const KES_PER_USD = 129.4;

type Tier = {
  id: string;
  label: string;
  desc: string;
  min: number;
  max: number;
  price: number;
  unit: string;
};

const PODCAST: Tier[] = [
  {
    id: "edit",
    label: "Edit only",
    desc: "Audio cleanup, noise reduction, level balancing, intro and outro placement. You bring the raw recording, I bring back something broadcast-ready.",
    min: 3500,
    max: 6000,
    price: 4750,
    unit: "episode",
  },
  {
    id: "full",
    label: "Full production",
    desc: "Everything in Edit Only, plus pre-production planning, session support on recording day, written show notes, and upload to one platform.",
    min: 8000,
    max: 15000,
    price: 11500,
    unit: "episode",
  },
  {
    id: "service",
    label: "Full-service",
    desc: "Everything in Full Production, plus 3–5 short-form clips or audiograms with captions, a full transcript, and distribution across platforms.",
    min: 18000,
    max: 30000,
    price: 24000,
    unit: "episode",
  },
];

const SOCIAL: Tier[] = [
  {
    id: "starter",
    label: "Starter",
    desc: "Two platforms, around 12 posts a month, and a content calendar you approve ahead of time.",
    min: 15000,
    max: 25000,
    price: 20000,
    unit: "month",
  },
  {
    id: "growth",
    label: "Growth",
    desc: "Three platforms, around 20 posts a month, community management, and a monthly performance report.",
    min: 30000,
    max: 45000,
    price: 37500,
    unit: "month",
  },
  {
    id: "digital",
    label: "Full digital marketing",
    desc: "Three to four platforms, daily posting, paid ad support, monthly strategy calls, and full analytics reporting.",
    min: 60000,
    max: 90000,
    price: 75000,
    unit: "month",
  },
];

type Addon = {
  id: string;
  label: string;
  type?: "rush";
  min?: number;
  max?: number;
  price?: number;
};

const ADDONS: Addon[] = [
  { id: "rush", label: "Rush turnaround (under 48 hours)", type: "rush" },
  {
    id: "script",
    label: "Episode script or interview question prep",
    min: 3000,
    max: 5000,
    price: 4000,
  },
  { id: "guest", label: "Guest research briefing", min: 2500, max: 4000, price: 3250 },
  {
    id: "art",
    label: "Cover art / episode artwork design",
    min: 5000,
    max: 8000,
    price: 6500,
  },
  { id: "web", label: "Website design", min: 20000, max: 150000, price: 60000 },
];

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function RateCard() {
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const [podcast, setPodcast] = useState<string | null>(null);
  const [social, setSocial] = useState<string | null>(null);
  const [qty, setQty] = useState<Record<string, number>>({});
  const [addons, setAddons] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const fmt = (amountKES: number) => {
    if (currency === "USD") {
      return "USD " + Math.round(amountKES / KES_PER_USD).toLocaleString("en-US");
    }
    return "KES " + Math.round(amountKES).toLocaleString("en-KE");
  };

  const formatRatePrice = (minKES: number, maxKES: number) => {
    if (currency === "USD") {
      const min = Math.round(minKES / KES_PER_USD);
      const max = Math.round(maxKES / KES_PER_USD);
      return min === max ? `$${min}` : `$${min}–$${max}`;
    }
    const min = Math.round(minKES).toLocaleString("en-KE");
    const max = Math.round(maxKES).toLocaleString("en-KE");
    return minKES === maxKES ? min : `${min}–${max}`;
  };

  const formatUnitLabel = (unit: string) =>
    currency === "USD" ? `per ${unit}` : `KES / ${unit}`;

  const formatAddonPrice = (minKES: number, maxKES: number) => {
    if (currency === "USD") {
      const min = Math.round(minKES / KES_PER_USD);
      const max = Math.round(maxKES / KES_PER_USD);
      return min === max ? `$${min}` : `$${min}–$${max}`;
    }
    const min = Math.round(minKES).toLocaleString("en-KE");
    const max = Math.round(maxKES).toLocaleString("en-KE");
    return minKES === maxKES ? `${min} KES` : `${min}–${max} KES`;
  };

  const getQty = (id: string) => qty[id] ?? 1;
  const bump = (id: string, delta: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(1, (q[id] ?? 1) + delta) }));

  const calc = useMemo(() => {
    const podcastTier = PODCAST.find((t) => t.id === podcast) ?? null;
    const socialTier = SOCIAL.find((t) => t.id === social) ?? null;

    let podcastTotal = 0;
    let podcastQty = 1;
    let retainerDiscount = 0;
    let podcastLine = 0;

    if (podcastTier) {
      podcastQty = getQty(podcastTier.id);
      podcastLine = podcastTier.price * podcastQty;
      let base = podcastLine;
      if (podcastQty >= 4) {
        retainerDiscount = base * 0.12;
        base -= retainerDiscount;
      }
      podcastTotal = base;
    }

    const socialTotal = socialTier ? socialTier.price : 0;

    let combined = podcastTotal + socialTotal;
    let bundleDiscount = 0;
    if (podcastTier && socialTier) {
      bundleDiscount = combined * 0.05;
      combined -= bundleDiscount;
    }

    let addonsTotal = 0;
    const addonLines: { label: string; amount: number }[] = [];
    ADDONS.forEach((a) => {
      if (!addons.includes(a.id)) return;
      if (a.type === "rush") {
        if (podcastTier) {
          const rush = podcastTotal * 0.2;
          addonsTotal += rush;
          addonLines.push({
            label: "Rush turnaround (+20% of podcast total)",
            amount: rush,
          });
        }
      } else {
        addonsTotal += a.price!;
        addonLines.push({ label: a.label, amount: a.price! });
      }
    });

    const grandTotal = combined + addonsTotal;
    const hasSelection = !!podcastTier || !!socialTier || addonLines.length > 0;

    return {
      podcastTier,
      socialTier,
      podcastQty,
      podcastLine,
      retainerDiscount,
      socialTotal,
      bundleDiscount,
      addonLines,
      grandTotal,
      hasSelection,
    };
  }, [podcast, social, qty, addons]);

  const summaryLines = useMemo(() => {
    const lines: string[] = [];
    if (calc.podcastTier) {
      lines.push(
        `${calc.podcastTier.label} x ${calc.podcastQty} episode(s): ${fmt(calc.podcastLine)}`,
      );
      if (calc.retainerDiscount > 0)
        lines.push(`Retainer discount (12%): -${fmt(calc.retainerDiscount)}`);
    }
    if (calc.socialTier)
      lines.push(`${calc.socialTier.label} (monthly): ${fmt(calc.socialTotal)}`);
    if (calc.bundleDiscount > 0)
      lines.push(`Bundle discount (5%): -${fmt(calc.bundleDiscount)}`);
    calc.addonLines.forEach((l) => lines.push(`${l.label}: ${fmt(l.amount)}`));
    lines.push(`Estimated total: ${fmt(calc.grandTotal)}`);
    return lines;
  }, [calc, currency]);

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Quote request — Wesley Wes Creates",
  )}&body=${encodeURIComponent(
    "Hi Wesley,\n\nI'd like to move forward with this package:\n\n" +
      summaryLines.join("\n") +
      "\n\nLet's set up a time to confirm the details.\n",
  )}`;

  const whatsapp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi Wesley, I'd like to move forward with this package:\n\n" +
      summaryLines.join("\n") +
      "\n\nCan we set up a time to confirm the details?",
  )}`;

  const toggleAddon = (id: string) =>
    setAddons((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const renderRow = (
    tier: Tier,
    group: "podcast" | "social",
    selected: string | null,
    select: (id: string) => void,
  ) => {
    const active = selected === tier.id;
    return (
      <div
        key={tier.id}
        className={`rate-row${active ? " is-active" : ""}`}
        onClick={() => select(tier.id)}
      >
        <div className="rate-row-inner">
          <div className="rate-select">
            <input
              className="visually-hidden-input"
              type="radio"
              name={group}
              checked={active}
              onChange={() => select(tier.id)}
            />
            <div>
              <p className="rate-name">{tier.label}</p>
              <p className="rate-desc">{tier.desc}</p>
            </div>
          </div>
          <div className="rate-price-col">
            <div className="rate-price-text">
              <span className="rate-price">{formatRatePrice(tier.min, tier.max)}</span>
              <span className="rate-unit">{formatUnitLabel(tier.unit)}</span>
            </div>
            <button
              type="button"
              className="cart-icon-btn"
              aria-label={`Select ${tier.label}`}
              onClick={(e) => {
                e.stopPropagation();
                select(tier.id);
              }}
            >
              {active ? <CheckIcon /> : <CartIcon />}
            </button>
          </div>
        </div>
        {group === "podcast" && (
          <div className="qty-box" onClick={(e) => e.stopPropagation()}>
            <label>Episodes per month:</label>
            <div className="stepper">
              <button type="button" onClick={() => bump(tier.id, -1)}>
                −
              </button>
              <span className="qty-val">{getQty(tier.id)}</span>
              <button type="button" onClick={() => bump(tier.id, 1)}>
                +
              </button>
            </div>
            <span className="qty-hint">4+ unlocks a 12% retainer discount</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="rc">
      <header className="hero">
        <div className="wrap">
          <p className="kicker">Rate card — 2026</p>
          <h1 className="name">
            Wesley Wes <br />
            <em>Creates.</em>
          </h1>
          <p className="tagline">
            Podcast production and social media management for people who have something
            worth saying, and want it to sound and look like it.
          </p>
          <p className="howto">
            Tap a package to build your quote — the total updates at the bottom.
          </p>
        </div>
      </header>

      <section className="work">
        <div className="wrap">
          <h2 className="work-title">Recent work</h2>
          <p className="work-sub">A few things I've produced and managed.</p>
          <div className="work-grid">
          <div className="work-card">
            
  <div className="work-thumb">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/7cVgFu7wgt0"
      title="Business Clinics episode"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    ></iframe>
  </div>
  <div className="work-card-body">
    <p className="work-card-label">Podcast</p>
    <p className="work-card-title">Business Clinics — episode sample</p>
    <p className="work-card-desc">Watch the episode below.</p>
  </div>
</div>

            <a
              className="work-card"
              href="https://www.instagram.com/elitek9andanimalcare"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-thumb">
                <div className="work-thumb-placeholder">
                  <span>Save a screenshot as</span>
                  <span>images/work-social.jpg</span>
                </div>
                <div className="work-card-body">
                  <p className="work-card-label">Social media</p>
                  <p className="work-card-title">Instagram post / campaign</p>
                </div>
              </div>
            </a>

<a
  className="work-card work-card-design"
  href="https://canva.link/argwwz1z8z4jddo"
  target="_blank"
  rel="noreferrer"
>
  <div className="work-thumb">
    <div className="work-thumb-placeholder">
      <span>Export from Canva as</span>
      <span>images/work-design.jpg</span>
    </div>
  </div>
  <div className="work-card-body">
    <p className="work-card-label work-card-label-design">Design</p>
    <p className="work-card-title">Design portfolio</p>
    <p className="work-card-desc">A spread of designs I've created.</p>
  </div>
</a>
            </div>
          </div>

          <div className="currency-toggle">
            <span className="currency-toggle-label">Show prices in:</span>
            <div className="currency-pills">
              {(["KES", "USD"] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`currency-pill${currency === c ? " is-active" : ""}`}
                  onClick={() => setCurrency(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="currency-note">
              {currency === "USD"
                ? `~1 USD = ${Math.round(KES_PER_USD)} KES · invoices are issued in KES`
                : ""}
            </span>
          </div>
        </div>
      </section>

      <section className="pillar">
        <div className="wrap">
          <div className="pillar-head">
            <h2 className="pillar-title">Podcast production</h2>
            <span className="pillar-note">priced per episode</span>
          </div>
          <p className="pillar-intro">
            From raw recordings to something you'd hand to a stranger and not flinch.
            Choose the tier that matches how much of the process you want off your plate.
          </p>
          {PODCAST.map((t) => renderRow(t, "podcast", podcast, setPodcast))}
          <p className="retainer-note">
            <strong>Monthly retainer:</strong> pick 4 or more episodes a month on any tier
            above and the calculator automatically takes 12% off. Good fit once a show
            settles into a rhythm.
          </p>
        </div>
      </section>

      <section className="pillar pillar-social">
        <div className="wrap">
          <div className="pillar-head">
            <h2 className="pillar-title">Social media &amp; digital marketing</h2>
            <span className="pillar-note">priced monthly</span>
          </div>
          <p className="pillar-intro">
            Consistent presence without you having to think about it daily. Content
            calendars, posting, and reporting scaled to how much ground you want covered.
          </p>
          {SOCIAL.map((t) => renderRow(t, "social", social, setSocial))}
          <p className="retainer-note">
            <strong>Bundle discount:</strong> select a podcast package alongside any social
            media package and the calculator applies an extra 5% off both combined.
          </p>
        </div>
      </section>

      <section className="pillar">
        <div className="wrap">
          <div className="pillar-head">
            <h2 className="pillar-title">Add-ons</h2>
          </div>
          <ul className="addons-list">
            {ADDONS.map((a) => {
              const isRush = a.type === "rush";
              const disabled = isRush && !podcast;
              const checked = addons.includes(a.id) && !disabled;
              return (
                <li key={a.id} className={disabled ? "is-disabled" : undefined}>
                  <label className="addon-row">
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={disabled}
                      onChange={() => toggleAddon(a.id)}
                    />
                    <span className="addon-name">
                      {a.label}
                      {isRush && (
                        <span className="addon-hint">
                          {disabled
                            ? "Select a podcast package first"
                            : "Adds 20% to your podcast line"}
                        </span>
                      )}
                    </span>
                    <span className="addon-price">
                      {isRush ? "+20% of podcast total" : formatAddonPrice(a.min!, a.max!)}
                    </span>
                    <span
                      className={`cart-icon-btn cart-icon-sm${checked ? " is-checked" : ""}${
                        disabled ? " is-disabled" : ""
                      }`}
                    >
                      {checked ? <CheckIcon /> : <CartIcon />}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer className="closing">
        <div className="wrap">
          <p className="closing-text">
            Every show is different. If nothing above fits exactly, tell me what you're
            building and I'll put a package together for it.
          </p>
          <p className="contact-line">
            Wesley Wes · Podcast production &amp; digital marketing
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p className="payment-terms">
            <strong>Payment terms:</strong> 50% deposit to begin work, balance due on
            delivery. For monthly retainers, payment is due at the start of each month.
          </p>
          <p className="validity">
            Rates shown in Kenyan Shillings (KES). The calculator uses the midpoint of each
            range as an estimate — final pricing is confirmed on a quick call. Reviewed
            periodically.
          </p>
        </div>
      </footer>

      <div className={`cart-bar${open ? " open" : ""}`}>
        <div className="cart-bar-main" onClick={() => setOpen((o) => !o)}>
          <div>
            <p className="cart-label">Your estimate</p>
            <p className="cart-total">
              {calc.hasSelection ? (
                fmt(calc.grandTotal)
              ) : (
                <span className="empty-hint">Pick a package to get started</span>
              )}
            </p>
          </div>
          <button type="button" className="cart-toggle">
            {open ? "Hide breakdown" : "View breakdown"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
        <div className="cart-breakdown">
          <div className="cart-breakdown-inner">
            {!calc.hasSelection ? (
              <p className="cart-empty-msg">Nothing selected yet.</p>
            ) : (
              <>
                {calc.podcastTier && (
                  <div className="cart-line">
                    <span>
                      {calc.podcastTier.label} × {calc.podcastQty} episode
                      {calc.podcastQty > 1 ? "s" : ""}
                    </span>
                    <span>{fmt(calc.podcastLine)}</span>
                  </div>
                )}
                {calc.retainerDiscount > 0 && (
                  <div className="cart-line discount">
                    <span>Retainer discount (12%)</span>
                    <span>−{fmt(calc.retainerDiscount)}</span>
                  </div>
                )}
                {calc.socialTier && (
                  <div className="cart-line">
                    <span>{calc.socialTier.label} (monthly)</span>
                    <span>{fmt(calc.socialTotal)}</span>
                  </div>
                )}
                {calc.bundleDiscount > 0 && (
                  <div className="cart-line discount">
                    <span>Bundle discount (5%)</span>
                    <span>−{fmt(calc.bundleDiscount)}</span>
                  </div>
                )}
                {calc.addonLines.map((l) => (
                  <div className="cart-line" key={l.label}>
                    <span>{l.label}</span>
                    <span>{fmt(l.amount)}</span>
                  </div>
                ))}
                <div className="cart-line total">
                  <span>Estimated total</span>
                  <span>{fmt(calc.grandTotal)}</span>
                </div>
                <p className="cart-next-step">
                  This is a starting point — final scope and pricing confirmed on a quick
                  call or chat.
                </p>
                <div className="cart-actions">
                  <a className="cart-btn primary" href={mailto}>
                    Email me this quote
                  </a>
                  <a
                    className="cart-btn secondary"
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
