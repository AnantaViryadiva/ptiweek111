import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
document.body.style.background = "rgb(67, 89, 104)";
root.render(<App />);
