import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="flex overflow-x-scroll">
      <SideBar />
      <section className="flex flex-col w-full @container">
        <Navbar />
        <Dashboard />
      </section>
    </main>
  );
}

export default App;
