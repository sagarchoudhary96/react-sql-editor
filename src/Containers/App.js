import ErrorBoundary from "Components/ErrorBoundary";
import Home from "Containers/Home";

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
