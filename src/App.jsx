import {Fragment} from "react";
import Header from "./components/Header/Header";
import CoreComponents from "./components/CoreComponets";
import Examples from "./components/Examples";

function App() {
    // We must return a single element. When we need to return a list of elements, we can wrap them in a <div>. However, if a <div> is not necessary, you can use a <Fragment>.
    // <Fragment> won't be rendered. There is another, empty tag <></>
    return (
        /*<Fragment>*/
        <>
            <Header/>
            <main>
                <CoreComponents/>
                <Examples/>
            </main>
        </>
        /*</Fragment>*/
    );
}

export default App;
