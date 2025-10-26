import About from "@/components/about";
import InfiniteScrollAnimationPage from "@/components/InfiniteScrollAnimationPage";
import Intro from "@/components/intro";



export default function Home() {
  return (

    <main className="flex flex-col items-center ">
      <Intro /> <InfiniteScrollAnimationPage />
      <About />

    </main>


  );
}
