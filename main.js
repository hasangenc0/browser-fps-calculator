export default function calculateFPS() {
    let render = 0;
    let start = 0;
    function step(timestamp) {
      if (render++ === 0) {
        start = timestamp;
      }

      if (render > 100) {
        return Math.ceil(100000 / (timestamp - start));
      }

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}
