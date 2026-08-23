# 54Ruum — Launching Soon

A "coming soon" waitlist landing page for an African image-makers community.
Built with Next.js (Pages Router, plain JavaScript) and MongoDB Atlas.

## What's inside

- `pages/index.js` — the landing page (film-strip hero, live username claim
  form, scrolling ticker of claimed handles)
- `pages/api/claim.js` — POST endpoint that validates and saves a username
  claim to MongoDB
- `pages/api/claims.js` — GET endpoint that returns the most recent claims
  and total count, used to populate the ticker
- `models/Claim.js` — Mongoose schema (`username`, `location`, timestamps)
- `lib/dbConnect.js` — cached MongoDB connection helper (safe for serverless)
- `styles/globals.css` — font imports, reset, and the marquee/ticker
  keyframes (everything else is inline style objects, matching your usual
  setup)

## 1. Local setup

```bash
npm install
```

Copy the env example and add your MongoDB Atlas connection string:

```bash
cp .env.local.example .env.local
```

In `.env.local`:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/54ruum?retryWrites=true&w=majority
```

If you don't have an Atlas cluster yet: create a free cluster at
https://www.mongodb.com/atlas, add a database user, and allow network access
from anywhere (0.0.0.0/0) for now — you can lock it down later.

Run it:

```bash
npm run dev
```

Visit http://localhost:3000. Without `MONGODB_URI` set, the page still
renders fine — the ticker just falls back to placeholder names, and claiming
a username will show an error until the database is connected.

## 2. Swap in real photos

The hero film strip currently uses placeholder photos from picsum.photos.
Replace the `PHOTO_SEEDS` array logic in `pages/index.js` with real image
URLs (e.g. Cloudinary URLs) once the client has assets:

```js
backgroundImage: `url(${realImageUrl})`,
```

## 3. Deploy to Vercel

1. Push this project to a new GitHub repo.
2. Go to https://vercel.com, import the repo.
3. In the Vercel project's Environment Variables, add `MONGODB_URI` with
   your Atlas connection string.
4. Deploy. Vercel will run `npm run build` automatically.

## Notes

- The username claim form only requires a username; location is optional
  and just makes the ticker feel more alive.
- `Claim.username` has a unique index, so duplicate claims are rejected at
  the database level as a second line of defense (in addition to the
  application check).
- The "names claimed so far" counter adds a fixed base number (2,481) to
  the real database count — remove that offset in `pages/index.js` once you
  have real signups you want to show honestly.
