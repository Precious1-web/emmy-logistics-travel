# Emmy Logistics & Travel Website

A responsive, minimalist static website for Emmy Logistics & Travel.

## Included services
- Domestic and international flight booking enquiries
- Hotel reservations
- Apartment bookings
- Car rentals
- Yacht, boat and speedboat rental enquiries
- Visa assistance
- Passport application assistance
- Ticket booking

## Business contact details
- Phone / WhatsApp: 09072994665 (+234 907 299 4665)
- Email: marcellinemmanuel40@gmail.com
- Location: Benin City, Edo State, Nigeria

## Run locally in VS Code
1. Extract the ZIP file.
2. Open the extracted `emmy-logistics-travel` folder in Visual Studio Code.
3. Install the VS Code extension **Live Server** (by Ritwick Dey), if you do not already have it.
4. In VS Code, right-click `index.html` and choose **Open with Live Server**.
5. Your browser should open the website. You can also open `index.html` directly in a browser, but Live Server is recommended while editing.

No Node.js, npm, database or build step is required for this static version.

## Publish with GitHub and Vercel

### A. Create a GitHub repository
1. Sign in at https://github.com.
2. Click **New repository**.
3. Name it `emmy-logistics-travel`.
4. Choose **Public** or **Private**.
5. Click **Create repository**.
6. On your computer, open the extracted project folder in VS Code.
7. In the VS Code terminal, run these commands one at a time:

```bash
git init
git add .
git commit -m "Initial Emmy Logistics and Travel website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/emmy-logistics-travel.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. If Git asks you to sign in, complete the browser sign-in flow.

If Git is not installed, install Git from https://git-scm.com/downloads and restart VS Code.

### B. Deploy on Vercel
1. Visit https://vercel.com and sign in.
2. Choose **Add New → Project**.
3. Import the `emmy-logistics-travel` repository from GitHub. Authorize GitHub if prompted.
4. In project configuration, use:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: leave empty
   - Output Directory: leave empty (or `.` if Vercel requires a value)
   - Install Command: leave empty
5. Click **Deploy**.
6. When deployment finishes, Vercel will provide a live website URL.
7. Open the URL on your phone and computer to test it.

### C. Update the live website later
After editing and saving files in VS Code, run:

```bash
git add .
git commit -m "Update website"
git push
```

Vercel will automatically deploy the latest GitHub changes.

## Important notes before launch
- The enquiry form opens WhatsApp with the customer's details. It does not create a confirmed booking, accept payment, or connect to airline/hotel inventory.
- WhatsApp enquiries require the customer to press **Send** in WhatsApp.
- The email address is displayed as a contact link. This version does not send form submissions by email.
- The photos are loaded from Unsplash over the internet. An internet connection is required to display them. Replace them with licensed business photography if you have your own images.
- Confirm that all services, operating arrangements, contact details and any required business/legal notices are accurate before publishing.
- Visa and passport wording is framed as assistance/guidance; do not imply that Emmy is a government agency or guarantees approvals.


## Developer credit
The website footer displays: Designed & Developed by Precious Marcellin — 09072994665.


Developer credit: Precious Marcellin — 09136253761.
