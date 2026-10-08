/* =========================================================
   EDIT YOUR CONTENT HERE
   Change/add/remove entries in these arrays — the page
   rebuilds itself from this data. No HTML editing needed.
   ========================================================= */

const ROLES = [
  "Cybersecurity Enthusiast"
];

const SKILLS = [
  {
    category: "Security Domains",
    items: ["Penetration Testing", "Network Security", "Digital Forensics", "Web App Security"]
  },
  {
    category: "Tools & Platforms",
    items: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite"]
  },
  {
    category: "Languages & Dev",
    items: ["Python", "C++ / Java", "HTML / CSS", "Git & GitHub"]
  }
];

const PROJECTS = [
  {
    title: "Python Network Port Scanner",
    tag: "Security Tool",
    category: "security",
    description: "A custom-built port scanner in Python for identifying open ports and basic service fingerprinting on target hosts — paired with a 10-slide technical presentation.",
    stack: ["Python", "Sockets", "Networking"],
    link: "https://github.com/i-poorvi17/Python-Scripts",
    linkLabel: "View on GitHub →"
  },
  {
    title: "AI-Powered Product Intelligence",
    tag: "Hackathon · Team Lead",
    category: "dev",
    description: "Led team 'Elle Codes' at a hackathon to design an AI-driven product intelligence concept for industrial commerce — from idea to a full pitch deck.",
    stack: ["AI/ML Concepts", "Pitch Deck", "Team Leadership"],
    link: "#",
    linkLabel: "View Slides →"
  },
  {
    title: "TryHackMe Write-ups",
    tag: "CTF / Labs",
    category: "security",
    description: "Ongoing write-ups from the Cyber Security 101 path and HackTheBox Starting Point machines, documenting methodology and lessons learned.",
    stack: ["THM", "HTB", "Documentation"],
    link: "https://github.com/i-poorvi17/TryHackMe-Writeups",
    linkLabel: "Read Write-ups →"
  },
  {
    title: "RTI Portal Clone",
    tag: "Front-End Project",
    category: "dev",
    description: "A responsive front-end prototype of India's National RTI Portal — featuring citizen login, a multi-step RTI filing wizard, application tracking, and an AI assistant widget.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/i-poorvi17/RTI-Clone",
    linkLabel: "View on GitHub →"
  },
  {
    title: "PDF Merger",
    tag: "CLI Tool",
    category: "dev",
    description: "A lightweight Python script that merges every PDF in a folder into a single output file using pypdf — built for quick, no-fuss document consolidation.",
    stack: ["Python", "pypdf"],
    link: "https://github.com/i-poorvi17/Python-Scripts",
    linkLabel: "View on GitHub →"
  },
  {
    title: "Snake Water Gun",
    tag: "Console Game",
    category: "dev",
    description: "A console-based Snake–Water–Gun game (Rock-Paper-Scissors variant) in Python, with randomized computer choices, win/loss logic, and live score tracking.",
    stack: ["Python", "Game Logic"],
    link: "https://github.com/i-poorvi17/Python-Scripts",
    linkLabel: "View on GitHub →"
  },
  {
    title: "QR Code Generator",
    tag: "Utility Script",
    category: "dev",
    description: "A simple Python utility that takes any URL as input and generates a downloadable QR code image using the qrcode library.",
    stack: ["Python", "qrcode"],
    link: "https://github.com/i-poorvi17/Python-Scripts",
    linkLabel: "View on GitHub →"
  }
];

const TIMELINE = [
  { status: "In Progress", title: "TryHackMe — Cyber Security 101", desc: "Core path covering networking, Linux, and web fundamentals for security.", done: true },
  { status: "In Progress", title: "HackTheBox — Starting Point", desc: "Beginner machines with documented write-ups on GitHub.", done: true },
  { status: "Ongoing", title: "PortSwigger Web Security Academy", desc: "Structured study of web hacking techniques and OWASP-aligned vulnerabilities.", done: false },
  { status: "Planned", title: "OSCP Prep", desc: "Targeted after 6th semester, once core offensive fundamentals are solid.", done: false },
];


/* =========================================================
   RENDER: SKILLS
   ========================================================= */
function renderSkills(){
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map(cat => `
    <div class="skill-cat reveal">
      <p class="skill-cat__title">${cat.category}</p>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* =========================================================
   RENDER: PROJECTS
   ========================================================= */
function renderProjects(filter = 'all'){
  const grid = document.getElementById('projectsGrid');
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => `
    <article class="project-card reveal is-visible">
      <p class="project-card__tag">${p.tag}</p>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-card__stack">
        ${p.stack.map(s => `<span class="chip">${s}</span>`).join('')}
      </div>
      <a href="${p.link}" class="project-card__link" target="_blank" rel="noopener noreferrer">${p.linkLabel}</a>
    </article>
  `).join('');
}

function initFilters(){
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderProjects(btn.dataset.filter);
    });
  });
}

/* =========================================================
   RENDER: TIMELINE
   ========================================================= */
function renderTimeline(){
  const el = document.getElementById('timeline');
  el.innerHTML = TIMELINE.map(t => `
    <div class="timeline-item reveal ${t.done ? 'is-done' : ''}">
      <p class="timeline-item__status">${t.status}</p>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
    </div>
  `).join('');
}

/* =========================================================
   TYPED ROLE TEXT
   ========================================================= */
function initTypedRole(){
  const el = document.getElementById('typedRole');
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick(){
    const current = ROLES[roleIndex];
    if(!deleting){
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if(charIndex === current.length){
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if(charIndex === 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 60);
  }
  tick();
}

/* =========================================================
   NETWORK GRAPH CANVAS (hero background)
   ========================================================= */
function initNetworkCanvas(){
  const canvas = document.getElementById('netCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, nodes;
  const NODE_COUNT = 46;
  const LINK_DIST = 150;

  function resize(){
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function makeNodes(){
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      pulse: Math.random() * Math.PI * 2
    }));
  }

  function step(){
    ctx.clearRect(0, 0, w, h);

    // move nodes
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if(n.x < 0 || n.x > w) n.vx *= -1;
      if(n.y < 0 || n.y > h) n.vy *= -1;
      n.pulse += 0.02;
    });

    // draw links
    for(let i = 0; i < nodes.length; i++){
      for(let j = i + 1; j < nodes.length; j++){
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if(dist < LINK_DIST){
          const opacity = (1 - dist / LINK_DIST) * 0.35;
          ctx.strokeStyle = `rgba(94, 234, 212, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // draw nodes
    nodes.forEach(n => {
      const r = 1.6 + Math.sin(n.pulse) * 0.8;
      ctx.fillStyle = 'rgba(94, 234, 212, 0.85)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  resize();
  makeNodes();
  window.addEventListener('resize', () => { resize(); makeNodes(); });

  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    requestAnimationFrame(step);
  }
}

/* =========================================================
   NAV: mobile toggle + scroll-aware background
   ========================================================= */
function initNav(){
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('is-open'));
  });
}

/* =========================================================
   SCROLL REVEAL + SKILL BAR FILL
   ========================================================= */
function initScrollEffects(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* =========================================================
   CONTACT FORM (client-side only — wire up a backend
   or a service like Formspree/EmailJS to actually send mail)
   ========================================================= */
// Paste your Formspree endpoint here, e.g. "https://formspree.io/f/abcdwxyz"
const FORMSPREE_ENDPOINT = "PASTE_YOUR_FORMSPREE_URL_HERE";

function initContactForm(){
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(FORMSPREE_ENDPOINT.includes('PASTE_YOUR')){
      note.textContent = "Form not connected yet — add your Formspree URL in script.js.";
      return;
    }

    btn.disabled = true;
    btn.textContent = "Sending...";
    note.textContent = "";

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: document.getElementById('c-name').value,
          email: document.getElementById('c-email').value,
          message: document.getElementById('c-msg').value
        })
      });

      if(res.ok){
        note.textContent = "Message sent! I'll get back to you soon.";
        form.reset();
      } else {
        note.textContent = "Something went wrong. Please try again or email me directly.";
      }
    } catch (err) {
      note.textContent = "Network error. Please try again or email me directly.";
    }

    btn.disabled = false;
    btn.textContent = "Send Message";
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderTimeline();
  initFilters();
  initTypedRole();
  initNetworkCanvas();
  initNav();
  initContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();

  // re-run reveal observer after dynamic content is in the DOM
  requestAnimationFrame(initScrollEffects);
});
