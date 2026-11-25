# HANDOVER.md

## 1. What this app does
This app is a social media website for hairstylist and barbers to get a broader outreach and also helping grow their business.

## 2. How to run it
Use Node.js 24 or newer. Install dependencies separately with `npm install` in both `spotlamp` (frontend) and `server` (backend). Environment variables should be placed in `.env`.
Last tested from a fresh clone on Novmember 12, 2026, by Derrich Tawiah.

## 3. Current state
So far through milestone 2 what has been completed is the transition from using Semantic html to full on REACT. Fixing styling issues, correcting bugs from javascript to REACT. Also incorporating REACT components.

## 4. Important decisions
The first important decision we made was how we would store our information. We first wanted to use a database but realized that people may not be well versed in it so we decided to do something more local.

The second important decision we made was the amount of components we decided to create. We knew we wouldn't have too long with the project so we wanted to make it open ended and give the next holders of the project to do what ever they wanted to do with it.

## 5. Known problems and unfinished work
Some problems we have right now is when having the search function open you can switch pages and it will still be open. Another issue is mobile view can be buggy at times. Unfinished work would be the login/register function, service page, booking, and profiles.

## 6. Handover checks (receiving pod)
Version received: commit ______
The four checks: did each pass as received? After the handoff fixes?

## 7. Where things live

Stylist data, controllers, and API routes are in `server/src`. Front-end components and pages are in `spotlamp/src`.

## 8. Suggested first steps for Milestone 3 (authors)
I think you guys should finish the login/register function, profiles, and booking, and from their just let you imagination run wild, you can do anything with this really.

## 9. Takeover Notes (receiving pod): one sentence for each
- Do we understand what the app does and how the code is organized?
- Can we run it from a fresh clone?
- Do we know what is complete and what isn't?
- Do we know the important decisions and the known problems?
- Do we know what we would do first for Milestone 3?
