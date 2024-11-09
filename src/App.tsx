import { Home } from "@/pages/home/home";
import GlobalLayout from "@/layouts/global-layout/global-layout";
import store from "@/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <GlobalLayout>
        <main>
          <Home />
        </main>
      </GlobalLayout>
    </Provider>
  );
}

export default App;
