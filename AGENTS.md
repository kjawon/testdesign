# Design comparison workflow

- Design 1 is the approved, frozen baseline on branch `design-1`, checked out at `C:/testdesign`.
- Design 2 is the active design on branch `design-2`, checked out at `C:/testdesign/work/design-2`.
- For subsequent design changes, work only in `C:/testdesign/work/design-2` unless the user explicitly asks to change Design 1.
- Keep Design 1 on port 5173 and Design 2 on port 5174. Start Vite with `--strictPort` to prevent silent port changes.
- Preserve the existing static-screen scope and use local Vite previews. Do not publish Sites as part of these design iterations.
