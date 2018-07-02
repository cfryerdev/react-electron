import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default class Navigation extends React.Component {

  constructor() {
    super();
    this.state = {
      isNavOpen: true
    }
  }

  toggleNavigation = (e) => {
    e.preventDefault();
    this.setState({isNavOpen: !this.state.isNavOpen});
  }

  getExpandedClass = () => {
    return this.state.isNavOpen ? 'navigation-wrapper' : 'navigation-wrapper hidden';
  }
  
  render() {
    return (
      <div className={this.getExpandedClass()}>
          <Topbar navClick={this.toggleNavigation}/>
          <Sidebar />
      </div>
    )}
  }