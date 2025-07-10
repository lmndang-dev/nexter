import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import StoryPicture from "./components/StoryPicture";
import StoryContent from "./components/StoryContent";
import Homes from "./components/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPicture />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
