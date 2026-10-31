# InukSaiyan Retro Game Club — Community Widget v0.4 PREVIEW

**Status:** Prototype for testing on the AYN Thor's iiSU Home page. This is a **Web Widget** page, **not** an APK or an official iiSU integration. It is NOT the main public v0.3 Game Picker.

**Preview URL:** https://inuksaiyan.github.io/Retro-Game-Clubs/preview/community-widget-v0.4/

## Test in iiSU

1. Open the preview URL in the regular browser on the AYN Thor, then open **Picks**, **Clubs**, and **My Plays** to check the layout.
2. On iiSU Home, enter Home customization / widget adding (exact menu labels depend on iiSU version) and add a **Web Widget** that points to the URL above. iiSU supports displaying a website or local HTML files as a Web Widget.
3. Resize the widget to a readable rectangle and try the three sections with touch and controller. WebView controller-focus behavior can vary; don't assume buttons work with a controller until tested.
4. Follow Joey's and Retro Handhelds in **Clubs**, return to **Picks → My clubs**, press **Surprise me**, then mark a game as **Playing** or **Finished**.
5. Exit/reopen iiSU and check whether follows, status and private notes remain. Data persists only if iiSU's own WebView storage is retained. It may be separate from Chrome/Firefox storage and from v0.3.
6. Turn off Wi-Fi after the first load, then try normal in-widget navigation. The HTML makes no runtime network requests, but offline reload still depends on iiSU's cache; it has **no PWA/service worker** to guarantee reload without a connection. Re-enable internet to open external discussions.

## What it does now

- Shows five club directory entries: Joey's Play Retro Games Club, Retro Handhelds GotX, TechDweeb's Dusty Game Society, The Retrogaming Discord (not organizer-verified), and InukSaiyan.
- Shows nine *publicly sourced* October 2026 event games for Joey's and Retro Handhelds. Links and attribution remain attached to the original communities.
- Lets you independently follow and unfollow clubs, filter monthly or followed club games, pick a random game, mark progress and save private notes in this specific WebView/browser.
- Shows TechDweeb's club for discovery **without** attempting to expose its Patreon-only Discord reviews, or claiming to know its current monthly game.

## Limits and safety

- **No live Discord sync, Discord authentication, automatic monthly updates, or partnership.** Dates and games are a verified **2026-10-31 snapshot**; later months will be labeled as archives until manually updated.
- **No ROMs, games, copyright-protected club media or emulator launches** are included; the user provides their own legitimate game copies. External links open official club/public discussion sites.
- Notes are **private, local and not posted to the club**. Clearing the widget/app's WebView data may erase them. No account syncing or backups.
- This is a lightweight first test: no images, third-party scripts, remote API polling, external fonts or background timers.
- If your iiSU Home screen becomes unresponsive, remove/disable the Web Widget and test again. Upstream Web Widget freezing has been reported in some iiSU versions: https://github.com/iisu-network/iiSU/issues/433 .
- The main public Game Picker v0.3 at https://inuksaiyan.github.io/Retro-Game-Clubs/ is unchanged.

**Technical notes:** Built as a single static HTML/CSS/JS page. Club data is a static inline JavaScript snapshot backed by the cited source pages. LocalStorage keys use prefix `inuksaiyan-community-widget-v04-`.
