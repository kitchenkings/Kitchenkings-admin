# Kitchen Kings Admin Panel

This is the full backend + admin panel for Kitchen Kings with:

✅ Live menu editor  
✅ Order dashboard  
✅ Customer cart + WhatsApp checkout  
✅ MongoDB support

---

## 🚀 Hosting Guide (Render + MongoDB Atlas)

1. Clone this repo
2. Add your MongoDB URI in `.env`:
   ```
   MONGODB_URI=your-mongo-uri
   PORT=3000
   ```
3. Deploy on [https://render.com](https://render.com)

## 🛠 Local Run
```bash
npm install
node server.js
```

Access:
- `/menu.html` – Customer menu
- `/checkout.html` – Customer checkout
- `/admin` – Admin login
- `/admin/dashboard.html` – Admin orders
- `/admin/menu.html` – Menu editor
