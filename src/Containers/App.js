import ErrorBoundary from "Components/ErrorBoundary";
import Home from "Containers/Home";
import { AppContextProvider } from "context/AppContext";

function App() {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
