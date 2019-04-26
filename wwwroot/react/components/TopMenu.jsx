import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class TopMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item name={this.props.testItem} active={activeItem === this.props.testItem} onClick={this.handleItemClick}>
          {this.props.testItem}
        </Menu.Item>

        <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick}>
          Submit
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>

          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

TopMenu.propTypes = {
  testItem: PropTypes.string
};

TopMenu.defaultProps = {
  testItem: 'Browse'
};