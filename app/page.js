import Home from "@/CustomComponents/Home/Home";
import Navbar from "@/CustomComponents/Layouts/Navbar";

// metadata.js
export const metadata = {
  title: "Home Page",
  description: "This is Home Page for Website. Here are many products rendering.",
  keywords: "home, products, website, homepage", // Add your keywords here
  openGraph: {
    title: "Home Page",
    description: "This is Home Page for Website. Here are many products rendering.",
    image: "/images/home-page-image.jpg",
    url: "http://localhost:3000",
    logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Page",
    description: "This is Home Page for Website. Here are many products rendering.",
    image: "/images/home-page-image.jpg",
    logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home Page",
    description: "This is Home Page for Website. Here are many products rendering.",
    url: "http://localhost:3000",
    image: "http://localhost:3000/images/home-page-image.jpg",
    logo: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
  },
};

export default function Page() {
  return (
    <>
     <main>

   <Home />
  </main>
    </>
   
  );
}



