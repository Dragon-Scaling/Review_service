import React from 'react';
import styles from './ReviewlistEntry.css';


class ReviewlistEntry extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={styles.oneReview}>
        <div className={styles.profile}>
          <div>
            <img className={styles.profilePic} src={this.props.data.picture}/>
          </div>
          <div className={styles.nameAndDate}>
            <div className={styles.custName}>
              {this.props.data.name}
            </div>
            <div className={styles.custDate}>
              {this.props.data.reviewdate}
            </div>
          </div>
        </div>
        <div className={styles.custReview}>
          {this.props.data.reviewtext}
        </div>
      </div>
    );
  }
}

export default ReviewlistEntry;