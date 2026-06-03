const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

if (isTouchDevice) {
  document.querySelectorAll(".floating-video").forEach((video) => {
    video.remove();
  });

  const cursor = document.getElementById("custom-cursor");
  if (cursor) cursor.remove();
} else {
  document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}