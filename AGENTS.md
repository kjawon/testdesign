# Design comparison workflow

- Design 1 is frozen on `design-1` at `C:/testdesign`, port 5173.
- Design 2 is preserved on `design-2` at `C:/testdesign/work/design-2`, port 5174.
- Design 3 is the active design on `design-3` at `C:/testdesign/work/design-3`, port 5175.
- Apply subsequent design changes only to Design 3 unless the user explicitly selects another design.
- Design 3 retains the original purple palette and uses pale pastel emerald for previously white surfaces.
- Start Vite with `--strictPort`. Preserve the existing static-screen scope and local Vite previews; do not publish Sites for design iterations.
