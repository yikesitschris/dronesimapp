import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "./App.css";

import UserInterface from "./UserInterface";

const App = () => {
  return (
    <MantineProvider>
      <div className="App">
        <UserInterface />
      </div>
    </MantineProvider>
  );
};

export default App;
