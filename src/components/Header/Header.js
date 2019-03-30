import React, { Component } from 'react';

import "./header.css";
import "rbx/index.css";
import { Navbar, Field, Control, Button, Icon, Tab, } from "rbx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import logo from '../../asset/images/logo-outline-w.png';
// import { TabGroup } from 'rbx/components/tab/tab-group';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar color="black" >
            <Navbar.Brand>
              <Navbar.Item href="https://bulma.io">
                <img
                  src={logo}
                  alt="Bulma: a modern CSS framework based on Flexbox"
                  height="70"
                />
              </Navbar.Item>
              <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Segment align="start">
                <Navbar.Item href="https://bulma.io/">ระบบคำขอครุภัณฑ์คอมพิวเตอร์<br/>Systrem for requesting computer system</Navbar.Item>
              </Navbar.Segment>
              <Navbar.Segment align="end">
                <Navbar.Item as="div">
                  <Field kind="group">
                    <Control>
                      <Button as="a" color="info" href="https://twitter.com">
                        <Icon>
                          <FontAwesomeIcon  icon={faCoffee} />
                        </Icon>
                        <span>Tweet</span>
                      </Button>
                    </Control>
                    <Control>
                      <Button
                        as="a"
                        color="primary"
                        href="https://github.com/dfee/rbx"
                      >
                        <Icon>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Icon>
                        <span>GitHub</span>
                      </Button>
                    </Control>
                  </Field>
                </Navbar.Item>
              </Navbar.Segment>
            </Navbar.Menu>
          </Navbar>
          <Tab.Group>
            <Tab as={Link} to="/"> หน้าแรก</Tab>
            <Tab as={Link} to="/requests" >รายการคำขอ&nbsp;<span className="Counter"> 3 </span></Tab>
            <Tab as={Link} to="/approves">อนมุัติ&nbsp;<span className="Counter"> 0 </span></Tab>
            <Tab as={Link} to="/document">คู่มือการใช้งาน</Tab>
          </Tab.Group> 

      </div>
    );
  }
}

export default Header;
