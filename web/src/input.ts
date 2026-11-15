// Keyboard and swipe input.
export type Action = 'left' | 'right' | 'up' | 'down' | 'pause' | 'confirm' | 'mute' | 'double';

export function bindInput(target: HTMLElement, on: (a: Action) => void, canSwipe: () => boolean) {
  const keys: Record<string, Action> = {
    ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right',
    ArrowUp: 'up', KeyW: 'up', Space: 'up', ArrowDown: 'down', KeyS: 'down',
    Escape: 'pause', KeyP: 'pause', Enter: 'confirm', KeyM: 'mute',
  };
  window.addEventListener('keydown', (e) => {
    const a = keys[e.code];
    if (!a) return;
    if ((e.target as HTMLElement)?.tagName === 'BUTTON' && (e.code === 'Space' || e.code === 'Enter')) return;
    e.preventDefault();
    if (e.repeat && a !== 'left' && a !== 'right') return;
    on(a);
  });
  // A swipe is read when the finger lifts: from where it went down to where it came up, the longer axis
  // decides the direction. One touch, one move; a touch that barely moves does nothing.
  let id = -1, sx = 0, sy = 0;
  let lastTap = 0, lastX = 0, lastY = 0;
  const dist = () => Math.max(24, Math.min(window.innerWidth, window.innerHeight) * 0.05);
  target.addEventListener('pointerdown', (e) => {
    if (!canSwipe()) return;
    id = e.pointerId;
    sx = e.clientX;
    sy = e.clientY;
    try { target.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  });
  target.addEventListener('pointerup', (e) => {
    if (e.pointerId !== id) return;
    id = -1;
    const dx = e.clientX - sx, dy = e.clientY - sy, D = dist();
    if (Math.abs(dx) < D && Math.abs(dy) < D) {
      // a tap: two of them close together launch a skateboard
      const now = performance.now();
      if (now - lastTap < 320 && Math.hypot(e.clientX - lastX, e.clientY - lastY) < 70) {
        lastTap = 0;
        on('double');
      } else {
        lastTap = now;
        lastX = e.clientX;
        lastY = e.clientY;
      }
      return;
    }
    if (Math.abs(dx) > Math.abs(dy)) on(dx > 0 ? 'right' : 'left');
    else on(dy > 0 ? 'down' : 'up');
  });
  target.addEventListener('pointercancel', (e) => { if (e.pointerId === id) id = -1; });
}
