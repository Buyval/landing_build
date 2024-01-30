import Carousel from "./Carousel";

const images = [
  "/L-page_assets/group_83.png",
  "/L-page_assets/grp_84.png",
  "/L-page_assets/grp_85.png",
  
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Carousel images={images} />
      </main>
    </div>
  );
}
export default App;
