# Blog Post Spec: 🏴‍☠️ Ship O'Hoi: How I Left Spotify After 13 Years

**Date:** 2026-04-07  
**File:** `content/posts/ship-o-hoi.mdx`  
**Tags:** `[music, projects]`

## Summary

A personal journey post about leaving Spotify Premium after 13 years and building a practical self-hosted music setup. The primary audience is people who want to leave Spotify but think it's too difficult or impractical. The post leads with the destination (it works, and it's yours), then tells the story of how it happened.

Tone: direct, honest, unapologetic. Not a manifesto — a personal account. Piracy is named plainly throughout.

---

## Structure

### Section 1 — Hook

Opens at the destination. Cancelled Spotify Premium after 13 years. What was gained: full ownership of listening data, a working visual built on personal terms, and knowing exactly where money goes. No claim the setup is superior — just that it's practical and it's yours.

Two to three sentences. No preamble.

---

### Section 2 — The data rabbit hole

How it started: built Spotify Pulse (link to project) to visualize 13 years of listening history. Spotify's GDPR export is the legal minimum — duplicates, inconsistent track IDs, messy JSON. Cleaned it up and ended up with something complete.

Introduce the frustration: Spotify Wrapped is the one moment a year they give you a glimpse of your own data, because that data is one of their most valuable assets.

---

### Section 3 — The math didn't add up

Short and punchy. 139 kr/month breakdown — Spotify's cut, major labels dominating the payout pool, indie artists receiving almost nothing. Bon Iver as a concrete example. Link to Spotify CEO / artist pay controversies.

Purpose: establishes why piracy felt ethically defensible. Not a full manifesto — the numbers do the work.

---

### Section 4 — Owning your listening history

ListenBrainz enters. Migrated Spotify history to an open platform — listening data is now permanent and fully owned, not locked behind an annual Wrapped reveal. Realized the Spotify Pulse data could be merged with a self-hosted library, preserving continuity across the switch.

Key point: leaving Spotify doesn't mean losing 13 years of listening history.

---

### Section 5 — Ship O'Hoi

The main event. Soulseek explained plainly — what it is, how it works. Unapologetic, not defensive.

The ethical frame is already built by section 3: money wasn't reaching artists anyway; now you control where it goes.

The cold start problem: the biggest reason people don't leave Spotify is that they have no library. Ripping old CDs is tedious and unrealistic. Solution: used Spotify Pulse data to generate a complete list of everything ever listened to across 13 years, then used Soulseek to download it all. Rebuilt a library from data that was already yours — music you had already paid for, repeatedly.

Practical setup: small web wrapper around the Soulseek binary, hosted on NAS, accessible via VPN. New music downloaded directly to the server and available within minutes.

---

### Section 6 — The server

Navidrome on NAS. Music stored locally, streamed to any device. The stack: Navidrome + beets + MusicBrainz for metadata + Soulseek wrapper for new downloads.

Contrast with the pre-streaming piracy era: bad metadata was a genuine friction point — wrong album art, chaotic filenames. beets + MusicBrainz have largely solved this. The tooling has caught up.

---

### Section 7 — Where I landed

Current state: 99% off Spotify. Free tier only, for checking out a new single occasionally. What was gained: complete ownership of listening data, a visual that merges Spotify history with Navidrome library, money going to artists directly when choosing to buy.

Short, settled close. Not triumphant. "It works, and it's mine."

---

## Frontmatter

```yaml
title: "🏴‍☠️ Ship O'Hoi: How I Left Spotify After 13 Years"
date: 2026-04-07
tags: [music, projects]
summary: "🏴‍☠️ How I left Spotify Premium after 13 years, built a self-hosted music server on my NAS, and used my own listening data to solve the cold start problem."
```

---

## Key links to source / reference

- Spotify Pulse app: link to repo or deployed app
- ListenBrainz: listenbrainz.org
- Navidrome: navidrome.org
- beets: beets.io
- MusicBrainz: musicbrainz.org
- Soulseek: slsknet.org
- Spotify artist pay controversy: to be sourced (Daniel Ek / royalty rate coverage)
- Spotify Wrapped popularity: to be sourced (stat on engagement / MAUs)
