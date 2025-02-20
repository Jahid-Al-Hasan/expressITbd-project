import CreateStore from "./pages/CreateStore";

function App() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <header>
        <nav>
          <div>Nav</div>
        </nav>
      </header>
      <main className="container mx-auto ">
        <div>
          <CreateStore />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
