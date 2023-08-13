import React, { FC } from "react";

const Facts: FC = () => {
  return (
    <section className="main__facts facts">
      <h3 className="facts__header">Bonus facts about me:</h3>

      <ul className="facts__list">
        <li className="facts__item">
          I’ve been a head of media & marketing in one of the best handball clubs in the world and won a prize for the
          best project for fans in all sports at that year.
        </li>
        <li className="facts__item">
          I collect mosaic bus stops around the ex-soviet countries and creating a web site to store them. Text me
          ahywhere if you like them or saw some to add it on map!
        </li>
      </ul>
    </section>
  );
};

export default Facts;
