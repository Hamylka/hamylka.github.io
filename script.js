/* =========================================================
   Portfolio VR — Maxime Cauvin
   Script classique (pas de module local) pour fonctionner
   aussi en double-cliquant sur index.html (file://).
   ========================================================= */
(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Traductions FR / EN ---------- */
  const I18N = {
    fr: {
      'nav.skip': 'Aller au contenu',
      'nav.projects': 'Projets', 'nav.skills': 'Compétences', 'nav.about': 'À propos',
      'nav.experience': 'Expérience', 'nav.contact': 'Contact',
      'hero.badge': 'Osaka, Japon · Disponible pour de nouveaux projets',
      'hero.title1': 'Je construis des mondes',
      'hero.title2': 'VR / XR',
      'hero.subtitle': 'Développeur VR avancé — Unity, C# / C++, OpenXR, SteamVR / UnityXR, VIVE Wave, WebGL. Simulation, jeux et expériences immersives, du prototype à la production.',
      'hero.cta1': 'Voir mes projets', 'hero.cta2': 'Me contacter',
      'projects.title': 'Projets sélectionnés',
      'projects.lead': 'Trois projets marquants, avec leur vidéo de démonstration.',
      'projects.itch': 'Voir sur itch.io', 'projects.more': 'En savoir plus', 'projects.release': 'Voir la release sur GitHub',
      'projects.yt': 'Regarder sur YouTube',
      'pj1.vtitle': 'Vidéo : simulation de systèmes ferroviaires',
      'pj1.title': 'Simulation de systèmes ferroviaires',
      'pj1.desc': "Simulateur de formation professionnelle pour un projet ferroviaire suisse de premier plan, conçu pour s'intégrer à une réplique physique de cabine.",
      'pj1.k1': 'Rôle', 'pj1.v1': 'Développement des interfaces utilisateur et de la logique des systèmes cœur, dont le système de freinage complexe.',
      'pj1.k2': 'Défi', 'pj1.v2': 'Respecter les spécifications des ingénieurs du client et rester fidèle aux données réelles du manuel du prototype, en étroite collaboration avec leur équipe.',
      'pj2.vtitle': "Vidéo : Kazak'tul Skull",
      'pj2.title': "Kazak'tul Skull — Escape game VR",
      'pj2.desc': "Pendant les confinements COVID, l'équipe a transformé le ralentissement du marché en opportunité avec un projet R&D autofinancé.",
      'pj2.k1': 'Objectif', 'pj2.v1': 'Créer un escape game VR innovant et très créatif, avec des puzzles originaux et des interactions XR complexes et immersives.',
      'pj2.k2': 'Technique', 'pj2.v2': 'Explorer de nouveaux outils et moderniser nos pipelines de rendu sous Unity.',
      'pj3.vtitle': 'Vidéo : Squadron B-431',
      'pj3.meta': "Programme d'échange · 4 mois",
      'pj3.title': 'Squadron B-431 — Jeu VR multijoueur en cross-play local',
      'pj3.desc': 'Jeu original développé de zéro avec une équipe d\'étudiants : un rogue-lite asymétrique qui relie casque VR et manette.',
      'pj3.k1': 'Objectif', 'pj3.v1': 'Repousser les limites techniques en réunissant deux modes d\'entrée très différents dans une même partie locale.',
      'pj3.k2': 'Défi', 'pj3.v2': "Garantir un équilibre parfait : une expérience aussi juste et engageante en VR qu'à la manette.",
      'skills.title': 'Stack technique',
      'skills.lead': 'Plus de 8 ans de C# / Unity, du gameplay aux outils internes.',
      'skills.engines': 'Moteurs & frameworks XR', 'skills.langs': 'Langages',
      'skills.hw': 'Matériels & casques', 'skills.hw3': 'Casques compatibles OpenXR', 'skills.hw4': 'Contrôleurs & trackers',
      'skills.tools': 'Outils & 3D',
      'about.title': "La technique au service de l'immersion",
      'about.p1': "Passionné par la réalité virtuelle depuis mes études à EPITECH, je conçois des expériences où la technique s'efface devant la sensation de présence. Mon parcours m'a mené de la recherche (INRIA) à la santé, au divertissement, à la simulation industrielle et à des projets sensibles liés à la sécurité nationale.",
      'about.p2': "J'ai passé un an en Corée du Sud pendant mon cursus et je vis aujourd'hui à Osaka, au Japon. J'aime les équipes ouvertes, les bibliothèques d'outils réutilisables et les prototypes qui deviennent des produits.",
      'about.hobbies': 'Hors écran : Gaming · Culture japonaise · Webtoons · Musique · Tennis',
      'about.langs': 'Langues : FR (natif) · EN (TOEIC 840)',
      'about.s1': 'ans de C# / Unity', 'about.s2': 'serious games VR / WebGL', 'about.s3': 'ans en entreprise', 'about.s4': "ans d'études à EPITECH",
      'exp.title': 'Parcours professionnel', 'exp.months': 'mois',
      'e1.role': 'Développeur 3D temps réel — VR & simulation de systèmes',
      'e1.a': 'Projets VR classifiés étroitement liés à la sécurité nationale.',
      'e1.b': "Conception et amélioration de bibliothèques d'assets VR pour les projets internes.",
      'e1.c': "Interfaces utilisateur et logique des systèmes (dont le freinage) d'une simulation de train suisse, en collaboration avec les ingénieurs du client.",
      'e2.role': 'Développeur 3D temps réel — spécialisé VR',
      'e2.a': '15+ serious games VR et WebGL pour plusieurs secteurs.',
      'e2.b': "Projet R&D autofinancé : l'escape game VR Kazak'tul Skull.",
      'e2.c': "Scripts VR et bibliothèques d'assets pour tous les projets internes et clients.",
      'e3.role': 'Stage — Développeur VR',
      'e3.a': 'Gestionnaire de patients moderne et accessible sous Unity.',
      'e3.b': 'Nouvelle solution thérapeutique en VR basée sur les réflexes humains.',
      'e4.role': 'Stage à temps partiel — Développeur',
      'e4.a': "Réseau social gamifié d'arbres virtuels générés, avec des chercheurs de l'INRIA (projet L-Py).",
      'e5.role': 'Master Informatique — EPITECH',
      'e5.a': 'Ouverture internationale (1 an en Corée du Sud) et projet de fin d\'études mené avec une équipe de 8+ personnes.',
      'e5.b': 'Bac informatique & électronique avec mention (2014–2015).',
      'e5.c': "Squadron B-431, jeu VR / manette développé en 4 mois avec une équipe d'étudiants.",
      'contact.title': 'Parlons de votre prochain projet',
      'contact.lead': 'Un projet VR, une mission, une question ? Je réponds en général sous 48 h.',
      'form.name': 'Nom', 'form.email': 'E-mail', 'form.subject': 'Sujet', 'form.message': 'Message',
      'form.send': 'Envoyer le message', 'form.sending': 'Envoi…',
      'form.ok': 'Merci ! Votre message a bien été envoyé.',
      'form.err': "Échec de l'envoi. Écrivez-moi directement par e-mail.",
      'form.invalid': 'Merci de remplir les champs requis avec un e-mail valide.',
      'form.notconfigured': "Formulaire non configuré : remplacez VOTRE_CLE_SNAPITFORMS dans index.html.",
      'footer.text': 'Conçu avec HTML, Tailwind & Three.js',
    },
    en: {
      'nav.skip': 'Skip to content',
      'nav.projects': 'Projects', 'nav.skills': 'Skills', 'nav.about': 'About',
      'nav.experience': 'Experience', 'nav.contact': 'Contact',
      'hero.badge': 'Osaka, Japan · Open to new projects',
      'hero.title1': 'I build worlds in',
      'hero.title2': 'VR / XR',
      'hero.subtitle': 'Advanced VR developer — Unity, C# / C++, OpenXR, SteamVR / UnityXR, VIVE Wave, WebGL. Simulation, games and immersive experiences, from prototype to production.',
      'hero.cta1': 'View my projects', 'hero.cta2': 'Contact me',
      'projects.title': 'Selected projects',
      'projects.lead': 'Three standout projects, each with its demo video.',
      'projects.itch': 'View on itch.io', 'projects.more': 'Learn more', 'projects.release': 'View the release on GitHub',
      'projects.yt': 'Watch on YouTube',
      'pj1.vtitle': 'Video: train system simulation',
      'pj1.title': 'Train System Simulation',
      'pj1.desc': 'Professional training simulator for a high-profile Swiss train project, designed to integrate with a physical cabin replica.',
      'pj1.k1': 'Role', 'pj1.v1': "Built the user interfaces and the core systems logic, including the simulation's complex braking system.",
      'pj1.k2': 'Challenge', 'pj1.v2': "Follow the client engineers' technical specifications and stay faithful to real-world data from the prototype manual, in close collaboration with their team.",
      'pj2.vtitle': "Video: Kazak'tul Skull",
      'pj2.title': "Kazak'tul Skull — VR Escape Game",
      'pj2.desc': 'During the COVID lockdowns, our team turned a market slowdown into an opportunity with a self-funded R&D project.',
      'pj2.k1': 'Goal', 'pj2.v1': 'Create an innovative, highly creative VR escape room with original puzzles and complex, deeply immersive XR interactions.',
      'pj2.k2': 'Tech', 'pj2.v2': 'Explore new tools and upgrade our rendering pipelines within Unity.',
      'pj3.vtitle': 'Video: Squadron B-431',
      'pj3.meta': 'Exchange program · 4 months',
      'pj3.title': 'Squadron B-431 — Local Cross-play VR Multiplayer Game',
      'pj3.desc': 'An original game built from scratch with a student team: an asymmetric rogue-lite bridging a VR headset and a gamepad.',
      'pj3.k1': 'Goal', 'pj3.v1': 'Push technological boundaries by bringing two vastly different input modes into the same local game.',
      'pj3.k2': 'Challenge', 'pj3.v2': 'Ensure flawless gameplay balance: an experience equally fair and engaging in VR or on a controller.',
      'skills.title': 'Tech stack',
      'skills.lead': '8+ years of C# / Unity, from gameplay to internal tooling.',
      'skills.engines': 'XR engines & frameworks', 'skills.langs': 'Languages',
      'skills.hw': 'Hardware & headsets', 'skills.hw3': 'OpenXR-compatible headsets', 'skills.hw4': 'Controllers & trackers',
      'skills.tools': 'Tools & 3D',
      'about.title': 'Technology in service of immersion',
      'about.p1': 'Passionate about virtual reality since my EPITECH years, I design experiences where technology fades behind the feeling of presence. My path has taken me from research (INRIA) to healthcare, entertainment, industrial simulation and sensitive national-security projects.',
      'about.p2': 'I spent a year in South Korea during my studies and now live in Osaka, Japan. I enjoy open teams, reusable tool libraries and prototypes that grow into products.',
      'about.hobbies': 'Off-screen: Gaming · Japanese culture · Webtoons · Music · Tennis',
      'about.langs': 'Languages: French (native) · English (TOEIC 840)',
      'about.s1': 'years of C# / Unity', 'about.s2': 'VR / WebGL serious games', 'about.s3': 'years in industry', 'about.s4': 'years of study at EPITECH',
      'exp.title': 'Professional experience', 'exp.months': 'months',
      'e1.role': '3D Realtime Developer — VR & System Simulation',
      'e1.a': 'Classified VR projects closely linked to national security.',
      'e1.b': 'Built and improved VR asset libraries for internal projects.',
      'e1.c': "User interfaces and systems logic (including braking) for a Swiss train simulation, in collaboration with the client's engineers.",
      'e2.role': '3D Realtime Developer — VR Specialist',
      'e2.a': '15+ diversified VR and WebGL serious games across several sectors.',
      'e2.b': "Self-funded R&D project: the Kazak'tul Skull VR escape game.",
      'e2.c': 'VR scripts and asset libraries for all internal and client projects.',
      'e3.role': 'Internship — VR Developer',
      'e3.a': 'Modern and accessible patient manager built with Unity.',
      'e3.b': 'New therapeutic VR solution based on human reflexes.',
      'e4.role': 'Part-time internship — Developer',
      'e4.a': 'Gamified social network with generated virtual trees, with INRIA researchers (L-Py project).',
      'e5.role': "Master's Degree in Computer Science — EPITECH",
      'e5.a': 'International openness (1 year in South Korea) and a graduation project led with a team of 8+ people.',
      'e5.b': 'IT & electronics baccalaureate with honors (2014–2015).',
      'e5.c': 'Squadron B-431, a VR / gamepad game built in 4 months with a student team.',
      'contact.title': "Let's talk about your next project",
      'contact.lead': 'A VR project, a mission, a question? I usually reply within 48 hours.',
      'form.name': 'Name', 'form.email': 'Email', 'form.subject': 'Subject', 'form.message': 'Message',
      'form.send': 'Send message', 'form.sending': 'Sending…',
      'form.ok': 'Thank you! Your message has been sent.',
      'form.err': 'Sending failed. Please email me directly.',
      'form.invalid': 'Please fill in the required fields with a valid email.',
      'form.notconfigured': 'Form not configured: replace VOTRE_CLE_SNAPITFORMS in index.html.',
      'footer.text': 'Built with HTML, Tailwind & Three.js',
    },
  };

  let lang = (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  try { lang = localStorage.getItem('lang') || lang; } catch (_) {}

  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || key;

  function applyLang(next, animate) {
    const run = () => {
      lang = next;
      document.documentElement.lang = lang;
      $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
      $$('[data-y]').forEach((el) => {
        const y = el.dataset.y, one = y === '1';
        el.textContent = `${y} ${lang === 'fr' ? (one ? 'an' : 'ans') : (one ? 'yr' : 'yrs')}`;
      });
      $$('[data-i18n-title]').forEach((el) => { el.title = t(el.dataset.i18nTitle); });
      document.title = lang === 'fr' ? 'Maxime Cauvin — Développeur VR / XR' : 'Maxime Cauvin — VR / XR Developer';
      try { localStorage.setItem('lang', lang); } catch (_) {}
    };
    if (!animate || reduceMotion) return run();
    document.body.classList.add('lang-switching');
    setTimeout(() => { run(); document.body.classList.remove('lang-switching'); }, 180);
  }
  applyLang(lang, false);
  $('#lang-toggle').addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr', true));

  /* ---------- 2. Navigation ---------- */
  const navbar = $('#navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const menuBtn = $('#menu-btn'), mobileMenu = $('#mobile-menu');
  const setMenu = (open) => { mobileMenu.classList.toggle('hidden', !open); menuBtn.setAttribute('aria-expanded', String(open)); };
  menuBtn.addEventListener('click', () => setMenu(mobileMenu.classList.contains('hidden')));
  $$('.mobile-link').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // Lien actif selon la section visible
  const links = $$('#nav-links a');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => spy.observe(s));

  /* ---------- 3. Animations au défilement ---------- */
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      if (e.target.matches('.stat')) countUp(e.target.querySelector('b'));
      reveal.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach((el) => reveal.observe(el));
  // Les .stat sont dans un conteneur .reveal : on déclenche les compteurs à l'apparition
  const statObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { $$('.stat b', e.target).forEach(countUp); statObs.unobserve(e.target); } });
  }, { threshold: 0.3 });
  const statGrid = $('.stat')?.parentElement; if (statGrid) statObs.observe(statGrid);

  function countUp(el) {
    if (!el || el.dataset.done) return; el.dataset.done = '1';
    const end = +el.dataset.count, suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = end + suffix; return; }
    const t0 = performance.now(), dur = 1200;
    const tick = (n) => {
      const p = Math.min((n - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // Inclinaison 3D légère des cartes (pointeur fin uniquement)
  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    $$('.tilt').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-6px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  $('#year').textContent = new Date().getFullYear();

  /* ---------- 4. Formulaire (SnapItForms) ---------- */
  const form = $('#contact-form'), status = $('#form-status'), submit = $('#form-submit');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const setStatus = (key, cls) => { status.textContent = t(key); status.className = 'text-sm ' + (cls || ''); };
    if (!form.checkValidity()) { setStatus('form.invalid', 'err'); form.reportValidity(); return; }
    if (form.access_key.value.includes('VOTRE_CLE')) { setStatus('form.notconfigured', 'err'); return; }
    submit.disabled = true; setStatus('form.sending');
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) throw new Error(data.message || res.status);
      form.reset(); setStatus('form.ok', 'ok');
    } catch (_) { setStatus('form.err', 'err'); }
    finally { submit.disabled = false; }
  });

  /* ---------- 5. Fond : nuage de points Three.js ---------- */
  const canvas = $('#bg-canvas');
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('pointermove', (e) => {
    mouse.tx = (e.clientX / innerWidth) * 2 - 1;
    mouse.ty = -((e.clientY / innerHeight) * 2 - 1);
  }, { passive: true });

  const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
  import(THREE_URL).then(initThree).catch(initFallback2D);

  function initThree(THREE) {
    const small = innerWidth < 700;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 3.2, 9); camera.lookAt(0, 0, 0);

    // Grille de points ondulante
    const N = small ? 70 : 130, SIZE = 22;
    const pos = new Float32Array(N * N * 3), seed = new Float32Array(N * N);
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const k = i * N + j;
      pos[k * 3] = (i / (N - 1) - 0.5) * SIZE;
      pos[k * 3 + 1] = 0;
      pos[k * 3 + 2] = (j / (N - 1) - 0.5) * SIZE - 2;
      seed[k] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 }, uMouse: { value: new THREE.Vector3(999, 0, 999) },
        uPx: { value: renderer.getPixelRatio() },
        uA: { value: new THREE.Color('#22d3ee') }, uB: { value: new THREE.Color('#8b5cf6') },
      },
      vertexShader: /* glsl */`
        uniform float uTime, uPx; uniform vec3 uMouse;
        attribute float aSeed; varying float vMix; varying float vAlpha;
        void main() {
          vec3 p = position;
          float w = sin(p.x * .45 + uTime * .7) * .55 + cos(p.z * .5 + uTime * .55) * .5;
          p.y += w;
          vec2 d = p.xz - uMouse.xz;
          float dist = length(d);
          float push = smoothstep(3.2, 0., dist);
          p.y += push * 1.6;
          p.xz += normalize(d + 1e-4) * push * .5;
          vMix = clamp((p.y + 1.2) / 3.2 + aSeed * .15, 0., 1.);
          vAlpha = (.28 + push * .7) * (1. - smoothstep(6., 12., abs(p.z - 1.)));
          vec4 mv = modelViewMatrix * vec4(p, 1.);
          gl_PointSize = (1.6 + push * 3.2 + aSeed * 1.2) * uPx * (9. / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 uA, uB; varying float vMix; varying float vAlpha;
        void main() {
          float r = length(gl_PointCoord - .5);
          if (r > .5) discard;
          float a = smoothstep(.5, .0, r) * vAlpha;
          gl_FragColor = vec4(mix(uA, uB, vMix), a);
        }`,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Raycast souris -> plan y = 0
    const ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3(), ndc = new THREE.Vector2();

    const resize = () => {
      renderer.setSize(innerWidth, innerHeight, false);
      camera.aspect = innerWidth / innerHeight;
      camera.position.z = innerWidth < 700 ? 12 : 9;
      camera.updateProjectionMatrix();
    };
    resize(); addEventListener('resize', resize);

    let running = true, last = performance.now(), time = 0;
    document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) { last = performance.now(); loop(); } });

    function loop() {
      if (!running) return;
      const now = performance.now(), dt = Math.min((now - last) / 1000, 0.05); last = now;
      if (!reduceMotion) time += dt;
      mouse.x += (mouse.tx - mouse.x) * 0.08; mouse.y += (mouse.ty - mouse.y) * 0.08;

      ndc.set(mouse.x, mouse.y); ray.setFromCamera(ndc, camera);
      if (ray.ray.intersectPlane(plane, hit)) mat.uniforms.uMouse.value.copy(hit);

      mat.uniforms.uTime.value = time;
      // Parallaxe douce + léger décalage au défilement
      camera.position.x = mouse.x * 0.8;
      camera.position.y = 3.2 + mouse.y * 0.4 - Math.min(scrollY / 900, 1.5);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }
    loop();
    canvas.style.opacity = '0'; canvas.style.transition = 'opacity 1.2s'; requestAnimationFrame(() => (canvas.style.opacity = '1'));
  }

  /* Repli sans WebGL / hors-ligne : particules 2D reliées */
  function initFallback2D() {
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    let w, h, pts;
    const make = () => {
      w = canvas.width = innerWidth; h = canvas.height = innerHeight;
      pts = Array.from({ length: Math.min(110, Math.floor(w * h / 14000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }));
    };
    make(); addEventListener('resize', make);
    (function draw() {
      ctx.clearRect(0, 0, w, h);
      const mx = (mouse.tx + 1) / 2 * w, my = (1 - mouse.ty) / 2 * h;
      for (const p of pts) {
        p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < 140) { p.x += dx / d * 1.2; p.y += dy / d * 1.2; }
        ctx.fillStyle = 'rgba(34,211,238,.7)'; ctx.fillRect(p.x, p.y, 1.8, 1.8);
      }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 110) { ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 110) * .35})`; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
      }
      if (!reduceMotion && !document.hidden) requestAnimationFrame(draw); else setTimeout(draw, 500);
    })();
  }
})();
