# InukSaiyan Retro Game Club — current project handoff
_Last reviewed: 2026-10-31. Updated from GitHub roadmap #16, the user's AYN Thor/S25 Ultra screen tests, and the exact local v0.4.7 HTML artifact._

## Version / source of truth (do not mix up)
- **Latest local iiSU HTML:** `InukSaiyan_Community_Widget_v0.4.7_Club_Spotlight_iiSU.html` — **v0.4.7 Club Spotlight**. The original **39428-byte local HTML exists in the ChatGPT conversation artifact files**; it is NOT yet checked into GitHub as a versioned source. Avoid claiming the earlier public GitHub Pages widget is v0.4.7.
- **GitHub Pages community widget:** `preview/community-widget-v0.4/index.html`, the older **v0.4 preview**, not v0.4.7.
- **Published Game Picker site:** **v0.3**, https://inuksaiyan.github.io/Retro-Game-Clubs/ . Keep production unchanged until user approves an update.
- **Future five-page Android frontend:** working **browser UI concept only**, not an APK: https://inuksaiyan.github.io/Retro-Game-Clubs/preview/launcher-concept/ . Pages: Home, Consoles, RetroAchievements, Game Picker, Android Apps.
- **Research roster:** `research/community-club-candidates-2026-10-31.md`, compiled from 21 screenshots of YouTube creators and the user's explicit Retro Game Corps request. These are **research leads**, not automatically verified active game clubs, and are not yet all rendered in the current local widget.

## What v0.4.7 already has
- Picks / Clubs / My Plays, locally saved followed clubs, personal plays/finished and private notes.
- Per-club chips above Picks (All / Joey's / Retro Handhelds), and Browse N picks links from Clubs cards; Week/Month/Season/Special filtering and Surprise Me.
- Responsive 1-, 2-, and 3-column artwork cards plus a compact Home tile showing a featured game.
- Static October 2026 public game picks, with attribution and **ARCHIVED** messaging when outdated. No live club updates, Discord message access, or live reviews.
- Safe external-link preview panel to prevent iiSU WebView being replaced by external pages. Clipboard selection/copy; an on-screen Back action; physical B supported in code but on-device **not verified**.
- Gamepad focus/diagnostic controls from v0.4.6. No emulator/ROM scanning or launching.

## Crucial resolved issue and what is genuinely tested
- On **AYN Thor v0.4.6**, iiSU **Edit Home Widget → Controls → Pass Through** (instead of Scroll Page) was the practical fix. In a 74-second recording, actual D-pad input arrived in embedded widget and focus navigated among tabs/cards. Try **Focus widget controls** when expanded.
- Earlier Thor recordings validated v0.4.3 two-column layout and safe-link overlay. v0.4.6 showed game artwork loads for most curated titles.
- v0.4.7 **automated browser tests passed**, but its new club-chip navigation and Browse N picks buttons **have not yet had a specifically documented Thor/iiSU on-device test**. Do NOT assert they are real-device verified.
- On **S25 Ultra v0.4.2**, physical **A** activated the focused on-screen Back to widget action; this was NOT a successful physical B test.
- STILL NEED TO TEST: physical A-only and B-only behavior on v0.4.7, follow/progress/notes surviving full iiSU restart, compact tile focus and mode transitions, and imported v0.4.7 running on both devices.

## Content and product scope decisions
- User wants independent **community game book clubs**, with each club's voted monthly/weekly games, play-alongs, discussion and reviews; follow any number of clubs. Do NOT conflate generic gaming YouTube channels/Discord servers with actual event-running clubs.
- Separate **Verified Game Clubs** (real sourced picks), **Featured Creators** (guides/news/community links; no invented picks), and **Research Candidates**. Requested creators include **Retro Game Corps, Graves @Graves_tech** and many others. An earlier generated Graves photo was a wrong person; always identify his profile from the user screenshot/correct channel, never assume a similarly named picture.
- Joey's Retro Handhelds and Retro Handhelds GotX already exist; TechDweeb Dusty Game Society is directory-only because some content is patron-gated. Don't duplicate clubs. Historical Ryan Retro event was 2025, not verified current 2026.
- Future v0.4.8 direction: a **Featured Creators** directory alongside clubs, preserving the v0.4.7 behavior. Do not add unverified creators to Game-of-Month randomization.
- Offline-first: locally saved content; any club feeds, artwork or updates need connectivity. Respect rights and source credit; no private Discord scraping/paywall bypass, unauthorized club media, or ROM downloads.
- Native Android frontend later: optional emulator installation/setup from official sources, detected GPU-specific driver suggestions with rollback, fast controller-first launch and library, *retro/console emulation only*, **NO Steam/PC gaming/Wine/Proton/FEX/GameHub style functionality**. Do not pretend an HTML widget can launch emulator ROMs via undocumented iiSU API. "Best Experienced On" device filters, RetroAchievements, Discord and native app support are roadmap features, not live widget functions. Limit first-run complexity; RP Classic performance matters.

## Cross-device handoff and data warning
- ChatGPT conversations generally appear on another device when signed into the **same account and same conversation**, but separate chats don't guarantee the same exact artifact state. This document + issue #16 are project reference points.
- **iiSU WebView localStorage is per app/device/origin**; follows, notes, progress and preferences on AYN Thor **do not automatically synchronize** with S25 Ultra, nor with the public website or a differently imported `file://` widget. Avoid claiming sync.
- For each new iteration: verify current HTML baseline → retain previous local download → update/test on Thor → optionally test S25 Ultra → document exact result, version and source in issue #16 → save approved release source to GitHub or an accessible artifact, keeping live v0.3 unchanged.

## Immediate next actions
1. On Thor, open **v0.4.7** in iiSU, set **Controls → Pass Through**, then try a club chip and **Browse N picks** using D-pad/A.
2. Test physical **B** on the safe-link popup and restart-persistence.
3. Back up exact v0.4.7 source into the repository (separately, without replacing v0.3) to avoid losing the current stable baseline across devices/chats.
4. Only after these checks, begin **v0.4.8 Featured Creators**, using research directory as seed and a clearly marked verified/unverified distinction.

See [roadmap issue #16](https://github.com/InukSaiyan/Retro-Game-Clubs/issues/16), [frontend issue #15](https://github.com/InukSaiyan/Retro-Game-Clubs/issues/15), [integration hub issue #5](https://github.com/InukSaiyan/Retro-Game-Clubs/issues/5), and [creator research](../research/community-club-candidates-2026-10-31.md).
