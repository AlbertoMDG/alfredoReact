import Counter from "./components/Counter/Counter";
import NavBar from "./components/NavBar/NavBar";
import People from "./components/People/People";


export default function Home() {
  return (
    <main>
      <NavBar title="Home" />
      <Counter />

      <div className="flex justify-center">
        <People />
      </div>
    </main>
  )
}
