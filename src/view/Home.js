import React, { Component, useRef } from "react";
import AppLayout from "view/layout/MasterLayout";
import Modal from "element/modal";
import E1 from "element/element1";
import Lang from "component/langSelect";

// USING CLASS
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: true,
    };
  }

  inputchangehandler = (event) => {
    this.setState({ showing: !this.state.showing });
  };

  render() {
    return (
      <AppLayout title="home">
        <h2>Home page</h2>
        <Lang />
        <div>
          <button
            onClick={() => this.setState({ showing: !this.state.showing })}
          >
            toggle
          </button>
          {this.state.showing ? <div>This is visible</div> : null}
        </div>
      </AppLayout>
    );
  }
}

// USING CLASS
export function Home2(props) {
  const ref = useRef(null);
  // const [show, toggleShow] = useState();

  function handleClick() {
    ref.current.showToast();
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Toggle Button
      </button>

      <Modal ref={ref}>
        <E1 />
      </Modal>
    </>
  );
}
