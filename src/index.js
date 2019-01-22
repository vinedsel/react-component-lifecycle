import React from 'react';
import { render } from 'react-dom';

class List extends React.Component {
    render() {
        console.log("List's render function"); // this should not be logged multiple times if the exact same props are provided a second time
      const list = this.props.items.map(item => (<li key={item}>{item}</li>));

      return (
        <ul>
            {list}
        </ul>
      );
    }
  }

  const list1Items = ['Eggs', 'Bread', 'Artisinal cheese'];
  const list2Items = ['Trains', 'Planes', 'Automobiles'];

  const renderItems = (items) => {
    render(
      <List items={items} />,
      document.getElementById('root')
    );
  }

  document.addEventListener('keydown', event => {
    // this checks if the 1 key is pressed
    if (event.code === 'Digit1') {
        renderItems(list1Items);
    }
    // this checks if the 2 key is pressed
    else if (event.code === 'Digit2') {
        renderItems(list2Items);
    }
  });

  // My solution

  shouldComponentUpdate(Digit1, Digit2){
      if (event.code !== Digit1) {
        return true;
      }
      if (event.code !== Digit2) {
        return true;
      } else {
        return false;
      }
  }

  renderItems(list1Items);
