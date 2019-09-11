/* eslint-disable no-unused-vars */
import React from 'react';
import Ratings from 'react-ratings-declarative';
import styles from './CategoryReviews.css';

class CategoryReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accuracyRating: '',
      commRating: '',
      cleanRating: '',
      locationRating: '',
      checkinRating: '',
      valueRating: '',
    };

    this.getAccData = this.getAccData.bind(this);
    this.getCommData = this.getCommData.bind(this);
    this.getCleanData = this.getCleanData.bind(this);
    this.getLocationData = this.getLocationData.bind(this);
    this.getCheckinData = this.getCheckinData.bind(this);
    this.getValueData = this.getValueData.bind(this);
  }

  getAccData() {
    const { data } = this.props;
    let rating = 0;
    for (let i = 0; i < data.length; i += 1) {
      rating += data[i].accuracyRating;
    }
    const average = rating / data.length;

    this.setState({
      accuracyRating: Number(`${Math.round(parseFloat(`${average}e${2}`))}e-${2}`).toFixed(2),
    });
  }

  getCommData() {
    const { data } = this.props;
    let rating = 0;
    for (let i = 0; i < data.length; i += 1) {
      rating += data[i].commRating;
    }
    const average = rating / data.length;

    this.setState({
      commRating: Number(`${Math.round(parseFloat(`${average}e${2}`))}e-${2}`).toFixed(2),
    });
  }

  getCleanData() {
    const { data } = this.props;
    let rating = 0;
    for (let i = 0; i < data.length; i += 1) {
      rating += data[i].cleanRating;
    }
    const average = rating / data.length;

    this.setState({
      cleanRating: Number(`${Math.round(parseFloat(`${average}e${2}`))}e-${2}`).toFixed(2),
    });
  }

  getLocationData() {
    const { data } = this.props;
    let rating = 0;
    for (let i = 0; i < data.length; i += 1) {
      rating += data[i].locationRating;
    }
    const average = rating / data.length;

    this.setState({
      locationRating: Number(`${Math.round(parseFloat(`${average}e${2}`))}e-${2}`).toFixed(2),
    });
  }

  getCheckinData() {
    const { data } = this.props;
    let rating = 0;
    for (let i = 0; i < data.length; i += 1) {
      rating += data[i].checkinRating;
    }
    const average = rating / data.length;

    this.setState({
      checkinRating: Number(`${Math.round(parseFloat(`${average}e${2}`))}e-${2}`).toFixed(2),
    });
  }

  getValueData() {
    const { data } = this.props;
    let rating = 0;
    for (let i = 0; i < data.length; i += 1) {
      rating += data[i].valueRating;
    }
    const average = rating / data.length;

    this.setState({
      valueRating: Number(`${Math.round(parseFloat(`${average}e${2}`))}e-${2}`).toFixed(2),
    });
  }

  componentDidUpdate(props) {
    if (props !== this.props) {
      this.getAccData();
      this.getCommData();
      this.getCleanData();
      this.getLocationData();
      this.getCheckinData();
      this.getValueData();
    }
  }

  render() {
    return (
      <div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.category}>Accuracy</td>
              <td className={styles.rating}>
                <span>
                  <Ratings rating={Number(this.state.accuracyRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
              <td className={styles.category}>Location</td>
              <td className={styles.rating}>
                <span>
                  <Ratings rating={Number(this.state.locationRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
            </tr>
            <tr>
              <td className={styles.category}>Communication</td>
              <td className={styles.rating}>
                <span>
                  <Ratings rating={Number(this.state.commRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
              <td className={styles.category}>Check-in</td>
              <td className={styles.rating}>
                <span>
                  <Ratings rating={Number(this.state.checkinRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
            </tr>
            <tr>
              <td className={styles.category}>Cleanliness</td>
              <td className={styles.rating}>
                <span>
                  <Ratings rating={Number(this.state.cleanRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
              <td className={styles.category}>Value</td>
              <td className={styles.rating}>
                <span>
                  <Ratings rating={Number(this.state.valueRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    );
  }
}


export default CategoryReviews;
