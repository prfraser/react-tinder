import React, { Component } from 'react';
import { Button, Image, Title } from 'reactbulma'

class Profile extends Component {
	state = {
		users: null,
		currentUser: 1
	}

	getUsers = () => {
		
		this.setState({
			user: null
		})

		fetch('https://randomuser.me/api/?results=50')
			.then(response => {
				return response.json()
			})
			.then(users => {
				this.setState({
					users: users.results
				})
			})
	}

	getNextUser = () => {
		this.setState(prevState => ({
			currentUser: prevState.currentUser + 1
		}))
		this.props.incrementViewed()
	}

  render() {
  	const { users, currentUser } = this.state
    return (
      <div>
      	{ !users ? (<p>Loading...</p>) : (
      		<div>
	      		<Image 
	      			className="profile-img" 
	      			is="128x128" 
	      			src={users[currentUser].picture.medium}/>
	      		<Title className='profile-name' is='4'>{users[currentUser].name.first} {users[currentUser].name.last}</Title>
	      		<hr/>
	      		{ (this.props.viewed < this.props.maxViewed) && <Button onClick={this.getNextUser} warning>NEXT</Button>}
	      	</div>
      	)}
      </div>
    );
  }

  componentDidMount() {
  	this.getUsers()
  }
}

export default Profile;