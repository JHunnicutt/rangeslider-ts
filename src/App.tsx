import RangeSlider from "./components/RangeSlider"

function App() {

  return (
    <div className="App">
      <main className="min-h-screen grid place-items-center bg-green-300">
        <RangeSlider
          initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceCap={1000}
        />
      </main>
    </div>
  )
}

export default App
