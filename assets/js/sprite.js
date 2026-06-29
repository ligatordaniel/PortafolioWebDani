(function () {
  'use strict';

  var cv = document.getElementById('profile-photo');
  if (!cv || cv.tagName !== 'CANVAS') return;

  // ── Canvas setup ─────────────────────────────────────────────────
  var D = 160;
  cv.width = cv.height = D;
  cv.style.imageRendering = 'pixelated';
  cv.style.cursor = 'pointer';

  var ctx = cv.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  // ── Sprite sheet layout (assets/img/sprite.png) ──────────────────
  // 4 rows × 8 columns of equal-size frames:
  //   Row 0: IDLE - BREATHING  (cols 0-7, 8 frames)
  //   Row 1: ACTION - SCRATCH  (cols 0-7, 8 frames)
  //   Row 2: WALK FRONT (cols 0-3) · WALK BACK (cols 4-7)
  //   Row 3: WALK LEFT  (cols 0-3) · WALK RIGHT (cols 4-7)
  var sheet = new Image();
  sheet.src = 'assets/img/sprite.png';
  var FW = 0, FH = 0;

  sheet.onload = function () {
    FW = sheet.width  / 8;
    FH = sheet.height / 4;
    requestAnimationFrame(tick);
  };

  sheet.onerror = function () {
    // Fallback: muestra la foto real hasta que se agregue sprite.png
    var fb = new Image();
    fb.onload = function () {
      ctx.clearRect(0, 0, D, D);
      ctx.drawImage(fb, 0, 0, D, D);
    };
    fb.src = 'assets/img/fotoperfil2.jpg';
  };

  // ── Timings ──────────────────────────────────────────────────────
  var IDLE_MS    = 280;   // ms per idle frame (yawn included naturally)
  var SCRATCH_MS = 150;   // ms per scratch frame
  var WALK_MS    = 160;   // ms per walk frame

  var FIRST_SCRATCH_DELAY  = 20000;  // first scratch after 20 s
  var SCRATCH_REPEAT_DELAY = 15000;  // subsequent scratches every 15 s

  // ── State ────────────────────────────────────────────────────────
  var state      = 'idle';   // 'idle' | 'scratch' | 'walk'
  var hovering   = false;
  var t0         = null;
  var stateStart = 0;
  var nextScratch = 0;

  // ── Hover events ─────────────────────────────────────────────────
  cv.addEventListener('mouseenter', function () { hovering = true; });
  cv.addEventListener('mouseleave', function () { hovering = false; });

  // ── Animation loop ───────────────────────────────────────────────
  function tick(ts) {
    if (!FW) { requestAnimationFrame(tick); return; }

    if (t0 === null) {
      t0 = stateStart = ts;
      nextScratch = ts + FIRST_SCRATCH_DELAY;
    }

    // — Transitions —
    if (state === 'idle') {
      if (hovering) {
        state = 'walk'; stateStart = ts;
      } else if (ts >= nextScratch) {
        state = 'scratch'; stateStart = ts;
      }
    } else if (state === 'scratch') {
      if ((ts - stateStart) >= 8 * SCRATCH_MS) {
        state = 'idle'; stateStart = ts;
        nextScratch = ts + SCRATCH_REPEAT_DELAY;
      }
    } else if (state === 'walk') {
      if (!hovering) { state = 'idle'; stateStart = ts; }
    }

    // — Draw —
    var e = ts - stateStart;
    var row, col;

    if (state === 'idle') {
      row = 0;
      col = Math.floor(e / IDLE_MS) % 8;
    } else if (state === 'scratch') {
      row = 1;
      col = Math.min(Math.floor(e / SCRATCH_MS), 7);
    } else {
      // walk-front: face toward camera while walking (looks natural in circle)
      row = 2;
      col = Math.floor(e / WALK_MS) % 4;
    }

    ctx.clearRect(0, 0, D, D);
    ctx.drawImage(sheet, col * FW, row * FH, FW, FH, 0, 0, D, D);

    requestAnimationFrame(tick);
  }
})();
