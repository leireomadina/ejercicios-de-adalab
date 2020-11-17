import React from "react";

const Club = (props) => {
  console.log(props.club.member);
  const items = props.club.members.map((member) => {
    return <li key={props.club.id}>{member}</li>;
  });

  return (
    <article>
      <h2>{props.club.name}</h2>
      <i className={props.club.fa} />
      <h3>Members:</h3>
      <ul>{items}</ul>
    </article>
  );
};

export default Club;
