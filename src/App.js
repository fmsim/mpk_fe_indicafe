import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

// components
import AppRoutes from "./components/AppRoutes/AppRoutes"

function App() {
  const renderApp = () => <AppRoutes />

  return <div className="App">{renderApp()}</div>
}

export default App
