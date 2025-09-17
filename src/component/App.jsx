import WithUseState from "./WithUseState";
import WithoutUseState from "./withoutUseState";
import Showcode from "./Showcode";
import Popup from "./Popup";

const App = () => {
  return (
    <>
      <section className="section">
        <WithoutUseState />
        <WithUseState />
      </section>
      <Showcode />
      <Popup />
    </>
  );
};

export default App;
