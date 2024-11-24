# LinkZy 🌐

**LinkZy** is a fast and user-friendly URL shortening service that helps you share links effortlessly. With a sleek design powered by **Next.js** and **React**, LinkZy lets you quickly shorten long URLs using the **Bit.ly API** — no sign-up required. Whether you're a blogger, developer, influencer, or just a general user, LinkZy makes link sharing cleaner and more convenient!

## 🚀 Features

- **Instant URL Shortening**: Simply paste your long URL, and get a shortened link within seconds.
- **No Signup Required**: Start shortening links right away without the need to create an account.
- **Powered by Bit.ly API**: Trusted, fast, and reliable URL shortening from Bit.ly.
- **Sleek UI**: A beautiful, responsive design built with **Next.js**, **Tailwind CSS**, and **Shadcn UI** components.
- **Perfect for Anyone**: Whether you’re a blogger, developer, influencer, or just sharing links for fun, LinkZy is your go-to tool.

## 🛠️ Technologies Used

- **Frontend**:
  - **Next.js**: A fast React framework for server-side rendering and static site generation.
  - **TypeScript**: For better type safety and development efficiency.
  - **Shadcn UI**: Beautiful, reusable UI components that make development faster and easier.
  - **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Backend**:
  - **Bit.ly API**: For fast and reliable URL shortening.
- **Deployment**:
  - **Vercel**: Fast and scalable hosting for seamless performance.

## 💻 How to Use

1. Visit the [LinkZy web app](https://linkzy.vercel.app).
2. Paste your long URL into the input box.
3. Click the **"Shorten"** button.
4. Copy your shortened URL and share it wherever you like!

It’s that simple — no account, no hassle.

## 🌍 Why Choose LinkZy?

- **Instant and Simple**: Shorten links in just a few clicks.
- **Fast and Reliable**: Powered by the Bit.ly API for seamless performance.
- **No Signup**: Skip the sign-up process and start shortening right away.
- **Sleek, Modern Design**: With a focus on simplicity and speed, LinkZy’s UI is designed to give you a smooth user experience.

## 📦 Development Setup

Want to run LinkZy locally or contribute? Follow these steps:

1. Clone the repository:
   `git clone https://github.com/aqsaaQaazi/LinkZy.git`

2. Install dependencies:
   `cd LinkZy`
   `npm install`

3. Set up your **Bit.ly API Key**:
   - Create an `.env.local` file and add your **Bit.ly API Key**:
   `const BITLY_API_URL = "https://api-ssl.bitly.com/v4/shorten"`;
    `const BITLY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_BITLY_ACCESS_TOKEN;`

4. Run the project locally:
   `npm run dev`

5. Visit the app at `http://localhost:3000` to start shortening URLs.

## 🛠️ Roadmap

- **Custom Links**: In the future, we’re planning to allow users to customize their shortened links (e.g., `linkzy.com/my-link`).

## 🌟 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

<!--## 📸 Screenshots

Here’s a preview of how LinkZy looks in action:

![LinkZy Screenshot 1](https://github.com/aqsaaQaazi/LinkZy/blob/main/assets/screenshots/screenshot1.png)
![LinkZy Screenshot 2](https://github.com/aqsaaQaazi/LinkZy/blob/main/assets/screenshots/screenshot2.png) -->

## 💬 Contributing

We welcome contributions! If you'd like to improve LinkZy, feel free to:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-xyz`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add feature xyz'`)
5. Push to your branch (`git push origin feature-xyz`)
6. Open a pull request

