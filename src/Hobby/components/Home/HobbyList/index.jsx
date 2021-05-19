import React from "react";
import PropTypes from "prop-types";
import "./hobby_list.css";
HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};
HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  return (
    <>
      <h1>Hello</h1>
      <ul className="hobby_list">
        {hobbyList.map((hobby) => (
          <li
            key={hobby.id}
            className={hobby.id === activeId ? "active" : ""}
            onClick={() => handleClick(hobby)}
          >
            {hobby.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(HobbyList);
