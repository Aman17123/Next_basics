<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Next.js 15 Playlist — Categorized</title>
  <style>
    :root{
      --bg:#0b1220; --card:#0f1724; --muted:#9aa4b2; --accent:#2ea44f;
      --glass: rgba(255,255,255,0.03);
      --maxw:1100px;
      color-scheme: dark;
      color: #e6eef6;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    html,body{height:100%;margin:0;background:linear-gradient(180deg,#071018 0%, #071827 100%);display:flex;align-items:flex-start;justify-content:center;padding:28px;}
    .container{width:100%;max-width:var(--maxw);display:grid;grid-template-columns:260px 1fr;gap:20px;}
    .sidebar{
      background:var(--card);border-radius:12px;padding:18px;position:sticky;top:28px;height:calc(100vh - 56px);overflow:auto;
      box-shadow:0 6px 18px rgba(2,6,23,0.6);
    }
    .main{
      background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
      border-radius:12px;padding:28px;box-shadow:0 6px 18px rgba(2,6,23,0.6);
      min-height:80vh;overflow:auto;
    }
    h1{margin:0 0 8px;font-size:20px}
    h2{margin:0 0 12px;font-size:18px}
    h3{margin:0 0 8px;font-size:16px}
    p, li{color:var(--muted);line-height:1.5}
    .toc a{display:block;padding:6px 8px;margin:6px 0;border-radius:6px;color:inherit;text-decoration:none}
    .toc a:hover{background:var(--glass)}
    .section{margin-bottom:24px;padding:18px;border-radius:10px;background:rgba(255,255,255,0.01);border:1px solid rgba(255,255,255,0.02)}
    .badge{display:inline-block;padding:4px 8px;border-radius:999px;font-weight:600;background:rgba(255,255,255,0.03);color:var(--muted);font-size:12px}
    .checked-list{margin:12px 0 18px;padding:10px;border-radius:8px;background:rgba(46,164,79,0.08);border:1px solid rgba(46,164,79,0.12);color:var(--accent)}
    ul.topics{margin:8px 0 0 18px}
    .video-links{margin-top:10px}
    .video-links ul{margin:6px 0 0 18px}
    a.video-link{color:#93c5fd;text-decoration:none;font-weight:600}
    a.video-link:hover{text-decoration:underline}
    .small{font-size:13px;color:var(--muted)}
    pre{background:#071226;padding:12px;border-radius:8px;color:#a7b8d6;overflow:auto}
    /* responsive */
    @media (max-width:900px){.container{grid-template-columns:1fr;}.sidebar{height:auto;position:relative}}
    /* sidebar items */
    .sb-item{display:flex;align-items:center;gap:8px;padding:8px;border-radius:6px;margin:6px 0;color:var(--muted);text-decoration:none}
    .sb-item:hover{background:var(--glass);color:inherit}
    .sb-item .dot{width:8px;height:8px;border-radius:999px;background:#6ee7b7}
    .search{display:flex;margin:8px 0}
    .search input{flex:1;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.03);background:transparent;color:inherit}
    footer.small{margin-top:18px;color:var(--muted)}
  </style>
</head>
<body>
  <div class="container" role="main">
    <!-- SIDEBAR -->
    <aside class="sidebar" aria-label="Navigation">
      <h1>Playlist Catalog</h1>
      <p class="small">Next.js 15 — Categorized by full-stack topics</p>

      <div class="checked-list" aria-hidden="true">
        ✅ I can add links to each video<br/>
        ✅ I can create a table of contents<br/>
        ✅ I can generate a Markdown sidebar for GitHub
      </div>

      <div class="search" role="search">
        <input id="search" placeholder="Search sections..." />
      </div>

      <nav class="toc" id="toc">
        <a class="sb-item" href="#foundations"><span class="dot"></span>1. Foundations &amp; Routing (Videos 1–14)</a>
        <a class="sb-item" href="#ui"><span class="dot"></span>2. UI, Styling &amp; Components (Videos 15–24)</a>
        <a class="sb-item" href="#api"><span class="dot"></span>3. API Routes &amp; Middleware (Videos 25–36)</a>
        <a class="sb-item" href="#data"><span class="dot"></span>4. Data Fetching, Caching &amp; Server Actions (Videos 37–52)</a>
        <a class="sb-item" href="#auth"><span class="dot"></span>5. Authentication &amp; Security (Videos 53–61)</a>
        <a class="sb-item" href="#db"><span class="dot"></span>6. Database &amp; ORM (Videos 62–70)</a>
        <a class="sb-item" href="#deploy"><span class="dot"></span>7. Deployment, Serverless &amp; Production (Videos 71–78)</a>
      </nav>

      <hr style="border:none;border-top:1px solid rgba(255,255,255,0.02);margin:12px 0" />
      <footer class="small">
        Edit this file to add video links. Use the helper script at the bottom to bulk-insert links from a JSON array.
      </footer>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="main">
      <h2>🎥 Next.js 15 — Full Playlist Categorized</h2>
      <p class="small">Click a section in the sidebar or table of contents to jump.</p>

      <!-- Table of contents (inline) -->
      <section class="section" aria-labelledby="toc-inline">
        <h3 id="toc-inline">Table of Contents</h3>
        <ol>
          <li><a href="#foundations">Foundations &amp; Routing (Videos 1–14)</a></li>
          <li><a href="#ui">UI, Styling &amp; Components (Videos 15–24)</a></li>
          <li><a href="#api">API Routes &amp; Middleware (Videos 25–36)</a></li>
          <li><a href="#data">Data Fetching, Caching &amp; Server Actions (Videos 37–52)</a></li>
          <li><a href="#auth">Authentication &amp; Security (Videos 53–61)</a></li>
          <li><a href="#db">Database &amp; ORM (Videos 62–70)</a></li>
          <li><a href="#deploy">Deployment, Serverless &amp; Production (Videos 71–78)</a></li>
        </ol>
      </section>

      <!-- Sections -->
      <section id="foundations" class="section">
        <h3>1. Foundations &amp; Routing (Videos 1–14)</h3>
        <p>Learn core Next.js concepts like project setup, routing, layouts, and rendering.</p>

        <h4 class="small">Topics Covered</h4>
        <ul class="topics">
          <li>Intro, project structure</li>
          <li>App Router vs Pages Router</li>
          <li>File-based routing</li>
          <li>Layouts, templates, metadata</li>
          <li>Client vs server components</li>
        </ul>

        <h4 class="small">Outcome</h4>
        <p class="small">Strong foundation to navigate and structure any Next.js app.</p>

        <div class="video-links" data-range="1-14">
          <strong>Video links</strong>
          <ul id="links-1"></ul>
        </div>
      </section>

      <section id="ui" class="section">
        <h3>2. UI, Styling &amp; Components (Videos 15–24)</h3>
        <p>Everything related to UI building and styling.</p>

        <h4 class="small">Topics Covered</h4>
        <ul class="topics">
          <li>Global CSS, CSS modules</li>
          <li>Tailwind setup</li>
          <li>Optimizing images</li>
          <li>Fonts, metadata</li>
          <li>Reusable components</li>
        </ul>

        <h4 class="small">Outcome</h4>
        <p class="small">You can build polished, performant UIs using Next.js best practices.</p>

        <div class="video-links" data-range="15-24">
          <strong>Video links</strong>
          <ul id="links-2"></ul>
        </div>
      </section>

      <section id="api" class="section">
        <h3>3. API Routes &amp; Middleware (Videos 25–36) — <span class="badge">API Section</span></h3>
        <p>This is where backend development inside Next.js begins.</p>

        <h4 class="small">Topics Covered</h4>
        <ul class="topics">
          <li>Route Handlers (GET/POST/PATCH/DELETE)</li>
          <li>Request/response objects</li>
          <li>Handling query params, headers</li>
          <li>Cookies, redirects</li>
          <li>Middleware for logging, auth, blocking routes</li>
          <li>Error handling and validation</li>
        </ul>

        <h4 class="small">Outcome</h4>
        <p class="small">This section makes you a <strong>full backend-capable</strong> developer using only Next.js.</p>

        <div class="video-links" data-range="25-36">
          <strong>Video links</strong>
          <ul id="links-3"></ul>
        </div>
      </section>

      <section id="data" class="section">
        <h3>4. Data Fetching, Caching &amp; Server Actions (Videos 37–52)</h3>
        <p>Learn how data loading actually works in the new architecture.</p>

        <h4 class="small">Topics Covered</h4>
        <ul class="topics">
          <li><code>fetch()</code>, caching, revalidation</li>
          <li>Server-only code</li>
          <li>Parallel &amp; intercepting routes</li>
          <li>Loading UI &amp; error UI</li>
          <li>Server Actions (form handling, mutations)</li>
          <li>Streaming &amp; Suspense</li>
        </ul>

        <h4 class="small">Outcome</h4>
        <p class="small">You can build fast, scalable, data-heavy applications using best practices.</p>

        <div class="video-links" data-range="37-52">
          <strong>Video links</strong>
          <ul id="links-4"></ul>
        </div>
      </section>

      <section id="auth" class="section">
        <h3>5. Authentication &amp; Security (Videos 53–61)</h3>
        <p>Full-stack auth inside Next.js.</p>

        <h4 class="small">Topics Covered</h4>
        <ul class="topics">
          <li>NextAuth / custom auth strategies</li>
          <li>Credentials, JWT, OAuth</li>
          <li>Protecting server components</li>
          <li>Securing API routes</li>
          <li>Using middleware for auth guards</li>
        </ul>

        <h4 class="small">Outcome</h4>
        <p class="small">You can build secure apps with login, signup, protected routes &amp; sessions.</p>

        <div class="video-links" data-range="53-61">
          <strong>Video links</strong>
          <ul id="links-5"></ul>
        </div>
      </section>

      <section id="db" class="section">
        <h3>6. Database &amp; ORM (Videos 62–70)</h3>
        <p>Connect your backend to persistent storage.</p>

        <h4 class="small">Topics Covered</h4>
        <ul class="topics">
          <li>Using Prisma with Next.js</li>
          <li>Connecting PostgreSQL / MySQL / MongoDB</li>
          <li>CRUD operations with ORM</li>
          <li>Server Actions + DB workflows</li>
          <li>Data modeling</li>
        </ul>

        <h4 class="small">Outcome</h4>
        <p class="small">You can build fully persistent full-stack apps.</p>

        <div class="video-links" data-range="62-70">
          <strong>Video links</strong>
          <ul id="links-6"></ul>
        </div>
      </section>

      <section id="deploy" class="section">
        <h3>7. Deployment, Serverless &amp; Production (Videos 71–78)</h3>
        <p>Everything needed before shipping your app.</p>

        <h4 class="small">Topics Covered</h4>
        <ul class="topics">
          <li>Deploying to Vercel</li>
          <li>Environment variables</li>
          <li>Edge functions</li>
          <li>Serverless architecture</li>
          <li>Monitoring &amp; production best practices</li>
        </ul>

        <h4 class="small">Outcome</h4>
        <p class="small">Ready to deploy and maintain production-grade Next.js apps.</p>

        <div class="video-links" data-range="71-78">
          <strong>Video links</strong>
          <ul id="links-7"></ul>
        </div>
      </section>

      <section class="section">
        <h3>How to add links quickly</h3>
        <p class="small">Option A — Manual: edit the <code>&lt;ul id="links-X"&gt;</code> lists and add &lt;li&gt;&lt;a href="..."&gt;Video 3 — Title&lt;/a&gt;&lt;/li&gt;.</p>
        <p class="small">Option B — Bulk: use the JSON helper below. Paste your array into the <code>sampleVideos</code> variable in the script (or fetch your own JSON) and call <code>populateVideos(sampleVideos)</code>.</p>

        <pre>
// Example JSON format for each video:
[
  { "number": 1, "title": "Introduction to Next.js 15", "url": "https://www.youtube.com/watch?v=VIDEO_ID" },
  { "number": 2, "title": "Hello World", "url": "https://www.youtube.com/watch?v=VIDEO_ID" },
  ...
]
        </pre>
        <p class="small">If you want, paste the real playlist JSON here and I can format it into the file for you.</p>
      </section>

    </main>
  </div>

  <!-- Helper script to populate video links from a JSON array.
       Usage:
       1) Provide an array of objects: { number, title, url }
       2) Call populateVideos(array)
       The script will insert each video into the correct section based on number.
  -->
  <script>
    // Populate video links into lists for each section.
    // Assumes ranges: 1-14 -> links-1, 15-24 -> links-2, 25-36 -> links-3, 37-52 -> links-4, 53-61 -> links-5, 62-70 -> links-6, 71-78 -> links-7
    function getListIdForNumber(n) {
      if (n >=1 && n <=14) return 'links-1';
      if (n >=15 && n <=24) return 'links-2';
      if (n >=25 && n <=36) return 'links-3';
      if (n >=37 && n <=52) return 'links-4';
      if (n >=53 && n <=61) return 'links-5';
      if (n >=62 && n <=70) return 'links-6';
      if (n >=71 && n <=78) return 'links-7';
      return null;
    }

    function createListItem(video) {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href = video.url || '#';
      a.target = '_blank';
      a.className = 'video-link';
      a.textContent = `Video ${video.number} — ${video.title || 'Untitled'}`;
      li.appendChild(a);
      return li;
    }

    function populateVideos(videos) {
      if (!Array.isArray(videos)) return;
      videos.forEach(v => {
        const listId = getListIdForNumber(Number(v.number));
        if (!listId) return;
        const ul = document.getElementById(listId);
        if (!ul) return;
        ul.appendChild(createListItem(v));
      });
    }

    // Example: Uncomment and fill this array (or replace it with your own data)
    /*
    const sampleVideos = [
      { number: 1, title: "Introduction to Next.js 15", url: "https://www.youtube.com/watch?v=XXXXX" },
      { number: 2, title: "Hello World", url: "https://www.youtube.com/watch?v=YYYYY" },
      // ... continue for each video
    ];
    populateVideos(sampleVideos);
    */

    // Small search UI to filter sidebar links
    document.getElementById('search').addEventListener('input', function(e){
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.sb-item').forEach(a=>{
        const text = a.textContent.toLowerCase();
        a.style.display = text.includes(q) ? '' : 'none';
      });
    });

    // Smooth scrolling for same-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(ev){
        ev.preventDefault();
        const id = this.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  </script>
</body>
</html>
