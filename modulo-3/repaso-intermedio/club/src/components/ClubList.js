import React from "react";
import Club from "./Club";

class ClubList extends React.Component {
  render() {
    console.log(this.props.clubs);
    const items = this.props.clubs.map((club) => {
      console.log(club);
      return (
        <li key={club.id}>
          <Club club={club} />
        </li>
      );
    });
    return (
      <div>
        Club list
        <ul>{items}</ul>
      </div>
    );
  }
}

export default ClubList;
