# Massage Picker

A small phone app for picking a massage-chair program without digging through the manual.

- **How do you feel?** Tap a mood (before bed, lower back, after workout…) to see only the programs that fit.
- **Rate them** ❤️ Love / 👍 OK / 👎 Skip. Favourites float to the top; skipped ones get tucked away.
- **Which button to press** is shown right on every card; tap for the full description and an optional note ("great with heat").
- **"Last time… how was it?"** — the next time you open the app after tapping *Using it now*, a one-tap Love / OK / Skip strip appears at the top.
- **🎲 Surprise me** picks from your favourites (or ones you haven't tried yet).

Everything is saved on the phone itself — no account, no sync, works offline.
Built for Android (sized for both the folded cover screen and the unfolded inner screen).

## Install on a phone
1. Open the site in Chrome on the phone.
2. Menu ⋮ → **Add to Home screen** (or **Install app**).

## Editing the program list
All programs live in `modes.js` (name, description from the manual, mood tags, how to start).
After changing files, bump `VERSION` in `sw.js` so installed phones pick up the update.

## Single-file version
`Massage-Picker.html` is the whole app in one file (no install, no hosting). Copy it to a phone and open it in Chrome.
It is generated from `index.html` + `modes.js`; regenerate it after changing either.
