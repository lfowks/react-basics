import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Menu = ({data}) => {

  const [displayChildren, setDisplayChildren] = useState({});

  const toggleVisible = (item) =>{    
    setDisplayChildren({
      ...displayChildren,
      [item.Title]: !displayChildren[item.Title],
    });
  };

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.Id}>
            {item.Title}{' '}
            {item.Child.length > 0 && (
              <button
                onClick={() => toggleVisible(item)}
              >
                {displayChildren[item.Title] ? '-' : '+'}
              </button>
            )}
            {displayChildren[item.Title] && item.Child && <Menu data={item.Child} />}
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;