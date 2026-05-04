# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/32a35608-2f70-4ee4-bf21-9e017850cc09

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/32a35608-2f70-4ee4-bf21-9e017850cc09) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Mentora route

Mentora is kept as a separate project. The PDR site only exposes a route button that sends users to the Mentora app.

- Main entry route in PDR: `/mentora`
- Legacy aliases: `/mentora/giris`, `/mentora/admin`, `/mentora/ogrenci`
- Target URL is controlled by `VITE_MENTORA_URL`
- Default local target: `http://localhost:3000/login`

If you want the button to open a different host or path, set `VITE_MENTORA_URL` in your environment for the PDR project.

Environment variables are documented in [`.env.example`](./.env.example).

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/32a35608-2f70-4ee4-bf21-9e017850cc09) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
