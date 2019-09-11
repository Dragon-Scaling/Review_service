import React from 'react';
import ReviewlistEntry from './ReviewlistEntry.jsx';

class Reviewlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {Array.from(this.props.data).map((datum, i) => {
          return (
            <ReviewlistEntry data={datum} key={i} />
          )
          ;
        }
        )}
      </div>
    );
  }


}
export default Reviewlist;