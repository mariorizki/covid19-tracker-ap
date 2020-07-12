import React from 'react';

import Cards from '../components/Cards/Cards';
import Chart from '../components/Chart/Chart';
import CountryPicker from '../components/CountryPicker/CountryPicker';
import styles from './Main.module.css';
import { fetchData } from '../api';
import Nav from '../components/Navigation';
import coronaImage from '../images/covid-19.png';

class Main extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <React.Fragment>
        <Nav />
        <div className={styles.container}>
          <img className={styles.image} src={coronaImage} alt="Covid-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
