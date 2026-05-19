# Hossam DevOps Portfolio

React + Vite + Tailwind portfolio for DevOps / Cloud / Platform Engineering.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## Change profile image

Replace this file:

```text
public/1000352153.png
```

Keep the same filename, or update this line in `src/Portfolio.tsx`:

```ts
image: '/1000352153.png'
```

Example:

```ts
image: '/my-new-photo.png'
```

Then put the new image inside:

```text
public/my-new-photo.png
```

## Change CV

Replace this file:

```text
public/assets/Hossam-Saber-CV.pdf
```

Or update this line in `src/Portfolio.tsx`:

```ts
cv: '/assets/Hossam-Saber-CV.pdf'
```
