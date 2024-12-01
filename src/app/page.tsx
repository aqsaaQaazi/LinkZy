import RunTime from "@/components/app";
import Head from "next/head";

export default function Home() {
  return (
<>

 {/* SEO Head Component */}
 <Head>
        <title>LinkZy - Free and Fast URL Shortener</title>
        <meta
          name="description"
          content="LinkZy lets you instantly shorten links with a hassle-free, fast, and shareable interface. No sign-up required, Simplify Link Management today.!"
        />
        <meta
          name="keywords"
          content="best free URL shortener for marketers ,URL shortener, link shortener, free short links, link trimmer, new link generator, new url generator tool, linkzy"
        />

        {/* favicon doesnt work anyways :/ */}
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

    <RunTime/>
   
</>
  );
}
