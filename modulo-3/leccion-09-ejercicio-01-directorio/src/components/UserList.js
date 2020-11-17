import React from "react";
import User from "./User";

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <ul>
          <li>
            User :D
            <User />
          </li>
        </ul>
      </section>
    );
  }
}

export default UserList;
