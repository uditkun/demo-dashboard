import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import Topbar from "./components/Navbar";

function App() {
  return (
    <main className="flex overflow-x-scroll">
      <SideBar />
      <section className="flex flex-col w-full @container">
        <Topbar />
        <Dashboard />
      </section>
    </main>
  );
}

export default App;
