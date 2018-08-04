// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Package from 'erb-package';
import Package2 from '@erb/package-2';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <Package />
          <Package2 />
        </div>
      </div>
    );
  }
}
