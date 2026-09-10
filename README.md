# Wes's Rate Card

Rebuild this as a React site with the same sections, copy, and functionality: <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wesley Wes Creates — Rate Card</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #14181c;
    --panel: #1b2126;
    --line: #33393f;
    --text: #ece7dd;
    --text-dim: #9aa2a8;
    --amber: #e8a33d;
    --teal: #3f7d55;
    --jungle: #3f7d55;
    --jungle-light: #6fb98a;
    --coral: #d1667e;
  }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    padding: 0 0 140px;
  }

  .wrap {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 28px;
  }

  @media (min-width: 860px) {
    .wrap {
      max-width: 920px;
      padding: 0 40px;
    }
    .rate-row-inner {
      grid-template-columns: 1fr 200px;
      column-gap: 40px;
    }
    .rate-desc {
      max-width: 56ch;
    }
    .work-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* HERO */
  header.hero {
    padding: 72px 0 48px;
    border-bottom: 1px solid var(--line);
  }

  .kicker {
    font-size: 13px;
    color: var(--amber);
    letter-spacing: 0.02em;
    margin: 0 0 18px;
  }

  h1.name {
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: clamp(40px, 9vw, 64px);
    line-height: 1.04;
    margin: 0 0 20px;
    letter-spacing: -0.01em;
  }

  .tagline {
    font-size: 17px;
    line-height: 1.6;
    color: var(--text-dim);
    max-width: 46ch;
    margin: 0 0 20px;
  }

  .howto {
    font-size: 13.5px;
    color: var(--teal);
    background: rgba(75,122,114,0.12);
    border: 1px solid rgba(75,122,114,0.35);
    display: inline-block;
    padding: 8px 14px;
    border-radius: 4px;
    margin: 0;
  }

  /* RECENT WORK */
  section.work {
    padding: 48px 0;
    border-bottom: 1px solid var(--line);
  }

  h2.work-title {
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: 24px;
    margin: 0 0 8px;
  }

  .work-sub {
    font-size: 14px;
    color: var(--text-dim);
    margin: 0 0 28px;
  }

  .work-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .work-card {
    display: block;
    text-decoration: none;
    color: var(--text);
    border: 1px solid var(--line);
    border-radius: 6px;
    overflow: hidden;
    transition: border-color 0.15s ease, background 0.15s ease;
  }

  .work-card:hover {
    border-color: var(--amber);
    background: rgba(232,163,61,0.05);
  }

  .work-thumb {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    background: var(--panel);
    overflow: hidden;
  }

  .work-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .work-thumb-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    background: repeating-linear-gradient(45deg, var(--panel), var(--panel) 10px, #202830 10px, #202830 20px);
    color: var(--text-dim);
    font-size: 11px;
    text-align: center;
    padding: 12px;
  }

  .work-card-body {
    padding: 16px 18px 18px;
  }

  .work-card-label {
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--amber);
    margin: 0 0 8px;
  }

  .work-card-label-design {
    color: var(--jungle-light);
  }

  .work-card-design {
    cursor: default;
  }

  .work-card-title {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 6px;
    line-height: 1.4;
  }

  .work-card-desc {
    font-size: 13px;
    color: var(--text-dim);
    margin: 0;
    line-height: 1.5;
  }

  /* CURRENCY TOGGLE */
  .currency-toggle {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding: 18px 0 0;
  }

  .currency-toggle-label {
    font-size: 13px;
    color: var(--text-dim);
  }

  .currency-pills {
    display: inline-flex;
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 3px;
    gap: 2px;
  }

  .currency-pill {
    border: none;
    background: transparent;
    color: var(--text-dim);
    font-size: 13px;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 999px;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .currency-pill.is-active {
    background: var(--amber);
    color: #14181c;
  }

  .currency-note {
    font-size: 12px;
    color: var(--text-dim);
    font-style: italic;
  }

  /* SECTIONS */
  section.pillar {
    padding: 56px 0 8px;
    border-bottom: 1px solid var(--line);
  }

  section.pillar:last-of-type {
    border-bottom: none;
  }

  .pillar-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 8px;
    gap: 16px;
  }

  h2.pillar-title {
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: 28px;
    margin: 0;
    letter-spacing: -0.005em;
  }

  .pillar-note {
    font-size: 13px;
    color: var(--text-dim);
    white-space: nowrap;
    padding-bottom: 3px;
  }

  .pillar-intro {
    font-size: 15px;
    line-height: 1.6;
    color: var(--text-dim);
    max-width: 54ch;
    margin: 0 0 36px;
  }

  /* RATE ROWS (selectable) */
  .rate-row {
    border-top: 1px solid var(--line);
    padding: 22px 0;
    cursor: pointer;
  }

  .rate-row:last-child {
    padding-bottom: 28px;
  }

  .rate-row-inner {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 24px;
    align-items: start;
  }

  .rate-select {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }

  .visually-hidden-input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }

  .rate-price-col {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
  }

  .rate-price-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .cart-icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--line);
    background: var(--panel);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.15s ease, border-color 0.15s ease;
    padding: 0;
  }

  .cart-icon-btn svg {
    width: 18px;
    height: 18px;
    stroke: var(--text-dim);
  }

  .cart-icon-btn .icon-check {
    display: none;
  }

  .cart-icon-btn:hover {
    border-color: var(--amber);
  }

  .rate-row.is-active .cart-icon-btn {
    background: var(--amber);
    border-color: var(--amber);
  }

  .rate-row.is-active .cart-icon-btn svg {
    stroke: #14181c;
  }

  .rate-row.is-active .cart-icon-btn .icon-cart {
    display: none;
  }

  .rate-row.is-active .cart-icon-btn .icon-check {
    display: block;
  }

  .pillar-social .rate-row.is-active .cart-icon-btn {
    background: var(--coral);
    border-color: var(--coral);
  }

  .pillar-social .cart-icon-btn:hover {
    border-color: var(--coral);
  }

  .cart-icon-sm {
    width: 32px;
    height: 32px;
    margin-left: auto;
  }

  .cart-icon-sm svg {
    width: 15px;
    height: 15px;
  }

  .addon-check:checked ~ .cart-icon-sm {
    background: var(--jungle);
    border-color: var(--jungle);
  }

  .addon-check:checked ~ .cart-icon-sm svg {
    stroke: #14181c;
  }

  .addon-check:checked ~ .cart-icon-sm .icon-cart {
    display: none;
  }

  .addon-check:checked ~ .cart-icon-sm .icon-check {
    display: block;
  }

  .addon-check:disabled ~ .cart-icon-sm {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .rate-name {
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 8px;
  }

  .rate-desc {
    font-size: 14.5px;
    line-height: 1.55;
    color: var(--text-dim);
    margin: 0;
    max-width: 48ch;
  }

  .rate-price {
    font-variant-numeric: tabular-nums;
    font-size: 17px;
    font-weight: 600;
    color: var(--amber);
    text-align: right;
    white-space: nowrap;
    padding-top: 1px;
    display: block;
  }

  .rate-unit {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: var(--text-dim);
    text-align: right;
    margin-top: 2px;
  }

  .rate-row.is-active {
    background: rgba(232,163,61,0.06);
    margin: 0 -16px;
    padding: 22px 16px;
    border-radius: 6px;
  }

  .qty-box {
    display: none;
    align-items: center;
    gap: 12px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px dashed var(--line);
  }

  .rate-row.is-active .qty-box.show {
    display: flex;
  }

  .qty-box label {
    font-size: 13px;
    color: var(--text-dim);
  }

  .qty-box .stepper {
    display: flex;
    align-items: center;
    gap: 0;
    border: 1px solid var(--line);
    border-radius: 4px;
    overflow: hidden;
  }

  .qty-box button {
    background: var(--panel);
    color: var(--text);
    border: none;
    width: 32px;
    height: 32px;
    font-size: 16px;
    cursor: pointer;
  }

  .qty-box button:hover {
    background: rgba(232,163,61,0.15);
  }

  .qty-box .qty-val {
    width: 40px;
    text-align: center;
    font-variant-numeric: tabular-nums;
    font-size: 14px;
    font-weight: 600;
  }

  .qty-hint {
    font-size: 12px;
    color: var(--teal);
  }

  .retainer-note {
    margin-top: 4px;
    padding: 18px 20px;
    background: var(--panel);
    border-left: 2px solid var(--teal);
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-dim);
  }

  .retainer-note strong {
    color: var(--text);
    font-weight: 600;
  }

  /* SOCIAL MEDIA SECTION — coral accent */
  .pillar-social .rate-price,
  .pillar-social .pillar-note {
    color: var(--coral);
  }

  .pillar-social .rate-row.is-active {
    background: rgba(209,102,126,0.08);
  }

  .pillar-social .retainer-note {
    border-left-color: var(--coral);
  }

  /* ADD-ONS */
  .addons-list {
    list-style: none;
    margin: 24px 0 32px;
    padding: 0;
  }

  .addons-list li {
    padding: 14px 0;
    border-top: 1px solid var(--line);
    font-size: 14.5px;
  }

  .addons-list li.is-disabled {
    opacity: 0.4;
  }

  .addons-list li:last-child {
    padding-bottom: 0;
  }

  .addon-row {
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
  }

  .addon-row input[type="checkbox"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }

  .is-disabled .addon-row {
    cursor: not-allowed;
  }

  .addon-name {
    color: var(--text);
    flex: 1;
  }

  .addon-hint {
    display: block;
    font-size: 11.5px;
    color: var(--teal);
    margin-top: 2px;
  }

  .addon-price {
    color: var(--text-dim);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  /* CLOSING */
  footer.closing {
    padding: 60px 0 0;
    text-align: left;
  }

  .closing-text {
    font-family: 'Fraunces', serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.5;
    max-width: 34ch;
    margin: 0 0 28px;
    color: var(--text);
  }

  .contact-line {
    font-size: 14.5px;
    color: var(--text-dim);
    line-height: 1.8;
  }

  .contact-line a {
    color: var(--amber);
    text-decoration: none;
    border-bottom: 1px solid rgba(232,163,61,0.35);
  }

  .contact-line a:hover {
    border-bottom-color: var(--amber);
  }

  .payment-terms {
    margin-top: 24px;
    padding: 14px 18px;
    background: var(--panel);
    border-left: 2px solid var(--amber);
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-dim);
    max-width: 50ch;
  }

  .payment-terms strong {
    color: var(--text);
  }

  .validity {
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--line);
    font-size: 12.5px;
    color: var(--text-dim);
  }

  /* STICKY CART BAR */
  .cart-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0f1215;
    border-top: 1px solid var(--line);
    z-index: 50;
    box-shadow: 0 -8px 24px rgba(0,0,0,0.35);
  }

  .cart-bar-main {
    max-width: 920px;
    margin: 0 auto;
    padding: 14px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    cursor: pointer;
  }

  @media (min-width: 860px) {
    .cart-bar-main { padding: 16px 40px; }
  }

  .cart-label {
    font-size: 12.5px;
    color: var(--text-dim);
    margin: 0 0 2px;
  }

  .cart-total {
    font-variant-numeric: tabular-nums;
    font-size: 20px;
    font-weight: 600;
    color: var(--amber);
    margin: 0;
  }

  .cart-total .empty-hint {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-dim);
  }

  .cart-toggle {
    font-size: 13px;
    color: var(--text-dim);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .cart-toggle svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
  }

  .cart-bar.open .cart-toggle svg {
    transform: rotate(180deg);
  }

  .cart-breakdown {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;
    border-top: 1px solid transparent;
  }

  .cart-bar.open .cart-breakdown {
    max-height: 440px;
    overflow-y: auto;
    border-top: 1px solid var(--line);
  }

  .cart-breakdown-inner {
    max-width: 920px;
    margin: 0 auto;
    padding: 16px 28px 20px;
  }

  @media (min-width: 860px) {
    .cart-breakdown-inner { padding: 16px 40px 20px; }
  }

  .cart-line {
    display: flex;
    justify-content: space-between;
    font-size: 13.5px;
    padding: 6px 0;
    color: var(--text-dim);
  }

  .cart-line.discount {
    color: var(--teal);
  }

  .cart-line.total {
    color: var(--text);
    font-weight: 600;
    border-top: 1px solid var(--line);
    margin-top: 6px;
    padding-top: 10px;
    font-size: 15px;
  }

  .cart-empty-msg {
    font-size: 13.5px;
    color: var(--text-dim);
    padding: 6px 0;
  }

  .cart-next-step {
    font-size: 12.5px;
    color: var(--text-dim);
    margin: 14px 0 12px;
    line-height: 1.5;
  }

  .cart-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 4px;
  }

  .cart-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13.5px;
    font-weight: 600;
    padding: 10px 16px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    border: none;
  }

  .cart-btn.primary {
    background: var(--amber);
    color: #14181c;
  }

  .cart-btn.primary:hover {
    background: #f0b155;
  }

  .cart-btn.secondary {
    background: transparent;
    border: 1px solid var(--teal);
    color: var(--teal);
  }

  .cart-btn.secondary:hover {
    background: rgba(75,122,114,0.12);
  }

  @media (max-width: 480px) {
    header.hero { padding: 56px 0 40px; }
    .wrap { padding: 0 20px; }
    .pillar-head { flex-direction: column; align-items: flex-start; gap: 4px; }
    .rate-row-inner { grid-template-columns: 1fr; row-gap: 14px; }
    .rate-price-col { justify-content: flex-start; }
    .rate-price-text { align-items: flex-start; }
    .rate-price, .rate-unit { text-align: left; }
    .cart-bar-main { padding: 12px 20px; }
    .cart-breakdown-inner { padding: 14px 20px 18px; }
  }








  


    

Rate card — 2026


    

Wesley Wes Creates


    

Podcast production and social media management for people who have something worth saying, and want it to sound and look like it.


    

Tap a package to build your quote — the total updates at the bottom.



  


    

Recent work


    

A few things I've produced and managed.


    



      
        


          
          


            Save a screenshot as
images/work-podcast.jpg
          


        


        


          

Podcast


          

Business Clinics — episode sample


          

Watch the episode on YouTube.


        


      

      
        


          
          


            Save a screenshot as
images/work-social.jpg
          


        


        


          

Social media


          

Instagram post / campaign


        


      

      


        


          
          


            Export from Canva as
images/work-design.jpg
          


        


        


          

Design


          

Design portfolio


          

A spread of designs I've created.


        


      



    



  


    Show prices in:
    


      KES
      USD
    


    



  


    


      

Podcast production


      priced per episode
    


    

From raw recordings to something you'd hand to a stranger and not flinch. Choose the tier that matches how much of the process you want off your plate.



    


      


        


          
          


            

Edit only


            

Audio cleanup, noise reduction, level balancing, intro and outro placement. You bring the raw recording, I bring back something broadcast-ready.


          


        


        


          


            
            
          


          
            
            
          
        


      


      


        Episodes per month:
        


          −
          1
          +
        


        4+ unlocks a 12% retainer discount
      


    



    


      


        


          
          


            

Full production


            

Everything in Edit Only, plus pre-production planning, session support on recording day, written show notes, and upload to one platform.


          


        


        


          


            
            
          


          
            
            
          
        


      


      


        Episodes per month:
        


          −
          1
          +
        


        4+ unlocks a 12% retainer discount
      


    



    


      


        


          
          


            

Full-service


            

Everything in Full Production, plus 3–5 short-form clips or audiograms with captions, a full transcript, and distribution across platforms.


          


        


        


          


            
            
          


          
            
            
          
        


      


      


        Episodes per month:
        


          −
          1
          +
        


        4+ unlocks a 12% retainer discount
      


    



    


      Monthly retainer: pick 4 or more episodes a month on any tier above and the calculator automatically takes 12% off. Good fit once a show settles into a rhythm.
    



  


    


      

Social media & digital marketing


      priced monthly
    


    

Consistent presence without you having to think about it daily. Content calendars, posting, and reporting scaled to how much ground you want covered.



    


      


        


          
          


            

Starter


            

Two platforms, around 12 posts a month, and a content calendar you approve ahead of time.


          


        


        


          


            
            
          


          
            
            
          
        


      


    



    


      


        


          
          


            

Growth


            

Three platforms, around 20 posts a month, community management, and a monthly performance report.


          


        


        


          


            
            
          


          
            
            
          
        


      


    



    


      


        


          
          


            

Full digital marketing


            

Three to four platforms, daily posting, paid ad support, monthly strategy calls, and full analytics reporting.


          


        


        


          


            
            
          


          
            
            
          
        


      


    



    


      Bundle discount: select a podcast package alongside any social media package and the calculator applies an extra 5% off both combined.
    



  


    


      

Add-ons


    


    


      


        
          
          
            Rush turnaround (under 48 hours)
            Select a podcast package first
          
          +20% of podcast total
          
            
            
          
        
      


      


        
          
          Episode script or interview question prep
          
          
            
            
          
        
      


      


        
          
          Guest research briefing
          
          
            
            
          
        
      


      


        
          
          Cover art / episode artwork design
          
          
            
            
          
        
      


      


        
          
          Website design
          
          
            
            
          
        
      


    



  


    

Every show is different. If nothing above fits exactly, tell me what you're building and I'll put a package together for it.


    


      Wesley Wes · Podcast production & digital marketing

      

@gmail.com">handywesley@gmail.com</a>
    




    


      Payment terms: 50% deposit to begin work, balance due on delivery. For monthly retainers, payment is due at the start of each month.
    


    

Rates shown in Kenyan Shillings (KES). The calculator uses the midpoint of each range as an estimate — final pricing is confirmed on a quick call. Reviewed periodically.


  






    


      

Your estimate


      

Pick a package to get started


    


    


      View breakdown
      
    


    


      

Nothing selected yet.


    



@gmail.com';

  // Approximate rate as of Sept 2026. This is a rough guide for
  // international clients only — invoices are always issued in KES.
  const KES_PER_USD = 129.4;
  let currentCurrency = 'KES';

  function fmt(amountKES) {
    if (currentCurrency === 'USD') {
      const usd = Math.round(amountKES / KES_PER_USD);
      return 'USD ' + usd.toLocaleString('en-US');
    }
    return 'KES ' + Math.round(amountKES).toLocaleString('en-KE');
  }

  function formatRatePrice(minKES, maxKES) {
    if (currentCurrency === 'USD') {
      const min = Math.round(minKES / KES_PER_USD);
      const max = Math.round(maxKES / KES_PER_USD);
      return min === max ? `$${min}` : `$${min}–$${max}`;
    }
    const min = Math.round(minKES).toLocaleString('en-KE');
    const max = Math.round(maxKES).toLocaleString('en-KE');
    return minKES === maxKES ? min : `${min}–${max}`;
  }

  function formatUnitLabel(unit) {
    return currentCurrency === 'USD' ? `per ${unit}` : `KES / ${unit}`;
  }

  function formatAddonPrice(minKES, maxKES) {
    if (currentCurrency === 'USD') {
      const min = Math.round(minKES / KES_PER_USD);
      const max = Math.round(maxKES / KES_PER_USD);
      return min === max ? `$${min}` : `$${min}–$${max}`;
    }
    const min = Math.round(minKES).toLocaleString('en-KE');
    const max = Math.round(maxKES).toLocaleString('en-KE');
    return minKES === maxKES ? `${min} KES` : `${min}–${max} KES`;
  }

  function refreshStaticPrices() {
    document.querySelectorAll('.rate-price-text').forEach(el => {
      const min = parseFloat(el.dataset.min);
      const max = parseFloat(el.dataset.max);
      el.querySelector('.rate-price').textContent = formatRatePrice(min, max);
      el.querySelector('.rate-unit').textContent = formatUnitLabel(el.dataset.unit);
    });
    document.querySelectorAll('.addon-price[data-min]').forEach(el => {
      const min = parseFloat(el.dataset.min);
      const max = parseFloat(el.dataset.max);
      el.textContent = formatAddonPrice(min, max);
    });
    const note = document.getElementById('currencyNote');
    note.textContent = currentCurrency === 'USD'
      ? `~1 USD = ${Math.round(KES_PER_USD)} KES · invoices are issued in KES`
      : '';
  }

  document.querySelectorAll('.currency-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      currentCurrency = pill.dataset.currency;
      document.querySelectorAll('.currency-pill').forEach(p => p.classList.toggle('is-active', p === pill));
      refreshStaticPrices();
      calculate();
    });
  });

  function getQty(row) {
    const el = row.querySelector('.qty-val');
    return el ? parseInt(el.textContent, 10) : 1;
  }

  function setQty(row, val) {
    const el = row.querySelector('.qty-val');
    if (el) el.textContent = Math.max(1, val);
  }

  function updateActiveStates() {
    [...podcastRows, ...socialRows].forEach(row => {
      const radio = row.querySelector('input[type="radio"]');
      row.classList.toggle('is-active', radio.checked);
    });
  }

  function calculate() {
    let podcastTotal = 0;
    let podcastLabel = '';
    let podcastQty = 1;
    let retainerDiscount = 0;

    const podcastChecked = document.querySelector('input[name="podcast"]:checked');

    // Enable/disable rush add-on based on podcast selection
    if (podcastChecked) {
      rushCheck.disabled = false;
      rushLi.classList.remove('is-disabled');
      rushHint.textContent = 'Adds 20% to your podcast line';
    } else {
      rushCheck.disabled = true;
      rushCheck.checked = false;
      rushLi.classList.add('is-disabled');
      rushHint.textContent = 'Select a podcast package first';
    }

    if (podcastChecked) {
      const row = podcastChecked.closest('.rate-row');
      const price = parseFloat(row.dataset.price);
      podcastQty = getQty(row);
      podcastLabel = row.dataset.label;
      let base = price * podcastQty;
      if (podcastQty >= 4) {
        retainerDiscount = base * 0.12;
        base = base - retainerDiscount;
      }
      podcastTotal = base;
    }

    let socialTotal = 0;
    let socialLabel = '';
    const socialChecked = document.querySelector('input[name="social"]:checked');
    if (socialChecked) {
      const row = socialChecked.closest('.rate-row');
      socialTotal = parseFloat(row.dataset.price);
      socialLabel = row.dataset.label;
    }

    let combined = podcastTotal + socialTotal;
    let bundleDiscount = 0;
    if (podcastChecked && socialChecked) {
      bundleDiscount = combined * 0.05;
      combined = combined - bundleDiscount;
    }

    let addonsTotal = 0;
    let rushAmount = 0;
    const addonLines = [];
    addonChecks.forEach(chk => {
      if (!chk.checked) return;
      if (chk.dataset.type === 'rush') {
        if (podcastChecked) {
          rushAmount = podcastTotal * 0.2;
          addonsTotal += rushAmount;
          addonLines.push({ label: 'Rush turnaround (+20% of podcast total)', amount: rushAmount });
        }
      } else {
        const p = parseFloat(chk.dataset.price);
        addonsTotal += p;
        addonLines.push({ label: chk.dataset.label, amount: p });
      }
    });

    const grandTotal = combined + addonsTotal;
    const hasSelection = podcastChecked || socialChecked || addonLines.length > 0;

    if (!hasSelection) {
      cartTotalDisplay.innerHTML = 'Pick a package to get started';
    } else {
      cartTotalDisplay.textContent = fmt(grandTotal);
    }

    let html = '';
    let summaryLines = [];

    if (!hasSelection) {
      html = '

Nothing selected yet.

';
    } else {
      if (podcastChecked) {
        const lineAmt = parseFloat(podcastChecked.closest('.rate-row').dataset.price) * podcastQty;
        html += `

${podcastLabel} × ${podcastQty} episode${podcastQty > 1 ? 's' : ''}${fmt(lineAmt)}

`;
        summaryLines.push(`${podcastLabel} x ${podcastQty} episode(s): ${fmt(lineAmt)}`);
        if (retainerDiscount > 0) {
          html += `

Retainer discount (12%)−${fmt(retainerDiscount)}

`;
          summaryLines.push(`Retainer discount (12%): -${fmt(retainerDiscount)}`);
        }
      }
      if (socialChecked) {
        html += `

${socialLabel} (monthly)${fmt(socialTotal)}

`;
        summaryLines.push(`${socialLabel} (monthly): ${fmt(socialTotal)}`);
      }
      if (bundleDiscount > 0) {
        html += `

Bundle discount (5%)−${fmt(bundleDiscount)}

`;
        summaryLines.push(`Bundle discount (5%): -${fmt(bundleDiscount)}`);
      }
      addonLines.forEach(l => {
        html += `

${l.label}${fmt(l.amount)}

`;
        summaryLines.push(`${l.label}: ${fmt(l.amount)}`);
      });
      html += `

Estimated total${fmt(grandTotal)}

`;
      summaryLines.push(`Estimated total: ${fmt(grandTotal)}`);

      html += `

This is a starting point — final scope and pricing confirmed on a quick call or chat.

`;

      const emailSubject = encodeURIComponent('Quote request — Wesley Wes Creates');
      const emailBody = encodeURIComponent(
        "Hi Wesley,\n\nI'd like to move forward with this package:\n\n" +
        summaryLines.join('\n') +
        "\n\nLet's set up a time to confirm the details.\n"
      );
      const waText = encodeURIComponent(
        "Hi Wesley, I'd like to move forward with this package:\n\n" +
        summaryLines.join('\n') +
        "\n\nCan we set up a time to confirm the details?"
      );

      html += `


        Email me this quote
        Chat on WhatsApp
      

`;
    }
    cartBreakdown.innerHTML = html;

    updateActiveStates();
  }

  document.querySelectorAll('input[name="podcast"], input[name="social"]').forEach(input => {
    input.addEventListener('change', calculate);
  });
  addonChecks.forEach(chk => chk.addEventListener('change', calculate));

  [...podcastRows, ...socialRows].forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.stepper')) return;
      const radio = row.querySelector('input[type="radio"]');
      radio.checked = true;
      calculate();
    });
  });

  document.querySelectorAll('.qty-inc').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const row = btn.closest('.rate-row');
      setQty(row, getQty(row) + 1);
      calculate();
    });
  });
  document.querySelectorAll('.qty-dec').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const row = btn.closest('.rate-row');
      setQty(row, getQty(row) - 1);
      calculate();
    });
  });

  cartToggle.addEventListener('click', () => {
    cartBar.classList.toggle('open');
    cartToggleLabel.textContent = cartBar.classList.contains('open') ? 'Hide breakdown' : 'View breakdown';
  });

  refreshStaticPrices();
  calculate();




]. Keep the navy/coral-orange/teal/gold palette and the KES/USD pricing calculator logic."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1984a5b3-5683-4b8d-a0df-6c077ee50ac4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
