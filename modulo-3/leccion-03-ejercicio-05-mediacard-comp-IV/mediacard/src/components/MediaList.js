import React from "react";
import Mediacard from "./Mediacard";
import sophie from "../images/sophie-hatter.jpg";
import howl from "../images/howl.png";
import calcifer from "../images/calcifer.png";

const MediaList = () => {
  return (
    <section>
      <h3 className="list-title">Howl's Moving Castle Cards</h3>
      <ul>
        <li className="list-item">
          <Mediacard
            name="Sophie Hatter"
            date="November 02, 2020"
            image={sophie}
            text1="Sophie Hatter is the female protagonist and heroine of the first book in the Castle Series, Howl's Moving Castle, and of the movie Howl's Moving Castle, directed by Hayao Miyazaki."
            text2="Sophie is a young woman living in the small town of Market
            Chipping in the kingdom of Ingary, and she is the eldest of three
            sisters. In the land of Ingary, this, of course, means that Sophie
            is destined to never find her fortune and live a dull life at
            home. She works in her late father's hat shop as her stepmother,
            Fanny Hatter's, apprentice."
            likes="37"
            heart="❤️"
          />
        </li>
        <li className="list-item">
          <Mediacard 
            name="Howl Jenkins Pendragon"
            date="November 02, 2020"
            image={howl}
            text1="Howl Jenkins Pendragon is a powerful wizard living in the land of Ingary. Originally Howell Jenkins of Wales, he was part of a loose fraternity of wizards on Earth. He is the male protagonist of the movie Howl's Moving Castle, directed by Hayao Miyazaki."
            text2="He made his way through a magical portal to Ingary, where he became known and respected as one of the most powerful wizards there was. He owns a moving castle, and spreads rumors about himself to retain his privacy, opting to be alone and hiding from all conflict."
            likes="31"
            heart="❤️"
          />
        </li>
        <li className="list-item">
          <Mediacard 
            name="Calcifer"
            date="November 03, 2020"
            image={calcifer}
            text1="Calcifer is a Fire Demon in a magical contract with Wizard Howl. He was originally a falling star, whom Howl was able to catch before he fell to earth and extinguished. He is a very powerful creature himself, with a great deal of magical ability, though cannot move beyond the confines of the hearth in which Howl keeps him without the wizard's help"
            text2="He appears as a teardrop-shaped flame, blue in the books and orange-red in the movie, colored differently in different places in such a way as to make a face. He has tiny licks of flame that serve as arms."
            likes="45"
            heart="❤️"
          />
        </li>
      </ul>
    </section>
  );
};

export default MediaList;
