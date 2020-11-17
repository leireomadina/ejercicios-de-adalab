import React from "react";
import FilterGender from "./FilterGender";
import FilterLocation from "./FilterLocation";
import FilterName from "./FilterName";

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <form>
          <FilterName />
          <FilterGender />
          <FilterLocation />
        </form>
      </section>
    );
  }
}

export default Filters;
