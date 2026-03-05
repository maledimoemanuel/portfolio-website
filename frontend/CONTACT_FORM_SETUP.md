# Contact form setup (Formspree)

The contact form sends messages to your inbox using [Formspree](https://formspree.io). Visitors stay on your site-no email client required.

## 1. Create a Formspree account and form

1. Go to **[formspree.io](https://formspree.io)** and sign up (free).
2. Click **“New form”**.
3. Name it (e.g. “Portfolio contact”) and set the **email address** where you want to receive messages (e.g. `maledimoemanuel@gmail.com`).
4. After saving, you’ll see your **form ID** in the form URL, e.g.  
   `https://formspree.io/f/abcxyz` → the ID is `abcxyz`.

## 2. Add the form ID to your project

In the **`frontend`** folder, create or edit `.env`:

```env
REACT_APP_FORMSPREE_ID=your_form_id_here
```

Replace `your_form_id_here` with the form ID from Formspree (e.g. `abcxyz`).

## 3. Restart the dev server

If the app is running, stop it and start again so the new env variable is picked up:

```bash
cd frontend
npm run dev
```

## 4. Test the form

Submit a test message from your portfolio. You should get an email at the address you set in Formspree, and the visitor should see a success message on the page.

---

**Formspree free tier:** 50 submissions per month. For more, upgrade on their site.  
**Privacy:** Formspree’s [privacy policy](https://formspree.io/legal/privacy-policy) applies to submitted data.
