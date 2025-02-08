import { useState } from "react";
import "./App.css";
import Header from "./components/page/header/Header";
import Main from "./components/page/main/Main";
import Footer from "./components/page/footer/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
