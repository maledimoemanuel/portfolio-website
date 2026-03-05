# Adding projects to your portfolio

Projects are stored in **Firebase Firestore** in the `projects` collection. You add or edit documents there; the site reads them automatically.

---

## Image fields (one or many)

Each project can have **one** or **multiple** images:

- **Single image (legacy):** set `image` (string) to one URL. The card shows that image.
- **Multiple images:** set `images` (array of strings) to a list of image URLs. The card shows a gallery with:
  - Previous/next arrows to change image
  - A counter like `2 / 5` so users see there are more images

If you set both `image` and `images`, **`images` is used** (multiple). If you only set `image`, that single image is used.

---

## Firestore document fields

| Field         | Type    | Required | Description |
|--------------|---------|----------|-------------|
| `name`       | string  | Yes      | Project title |
| `description`| string  | Yes      | Short description (supports "Read more" on the site) |
| `image`      | string  | No*      | Single cover image URL (use if you only have one image) |
| `images`     | array   | No*      | List of image URLs for a gallery (*use `image` or `images`, or both; `images` takes precedence) |
| `type`       | string  | No       | Badge: e.g. `"Portal"`, `"Website"`, `"Mobile"`, `"API"` |
| `role`       | string  | No       | Your role (e.g. "Lead Frontend Developer") |
| `stack`      | array   | No       | Tech list, e.g. `["React", "ASP.NET"]` |
| `featured`   | boolean | No       | `true` to pin at the top |
| `demoLink`   | string  | No       | Live demo or Google Play URL |
| `appStoreLink` | string | No       | App Store URL (for mobile apps; shows "App Store" button) |
| `githubRepo` | string  | No       | GitHub repo URL |

---

## Steps in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com) → your project → **Firestore Database**.
2. Open (or create) the **`projects`** collection.
3. **Add document** (or edit one).
4. Add fields. For **array** fields (e.g. `images`, `stack`), add each URL or item as its own array element in the console.

### Example: project with multiple images

- `name`: `"TMA Hackathon Website"`
- `description`: `"I was tasked with designing and building the official website for TMA Hackathon 2025..."`
- `images`: `["https://example.com/img1.jpg", "https://example.com/img2.jpg", "https://example.com/img3.jpg"]` (array of 3 strings)
- `type`: `"Website"`
- `role`: `"Lead Frontend Developer"`
- `stack`: `["Vite", "React", "TailwindCSS", "Express", "Node", "MongoDB"]`
- `featured`: `true`
- `demoLink`: `https://...`
- `githubRepo`: `https://github.com/...`

Visitors will see the first image and can use the arrows and the `1 / 3` counter to see all images.

---

## Where to host images

Use **public URLs** for `image` or each entry in `images` (e.g. Firebase Storage, Imgur, Cloudinary). Upload the file, get the URL, and paste it into Firestore.
