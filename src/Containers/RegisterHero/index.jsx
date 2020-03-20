import React, { Component } from 'react'

export default class RegisterHero extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            contact: '',
            email: ''
        }
    }

    async componentDidMount(){
        alert(' We need your location to serve you better, Please help us with your location')
        await navigator.geolocation.getCurrentPosition(
            position => {
                const {latitude, longitude} = position.coords
                this.setState({
                    latitude,
                    longitude
                }, ()=>{console.log('location', this.state.latitude)})
            },
            error => {
                if(error.code === 1){
                    alert('You have blocked location access. Please fix the settings to allow location access.')
                }
            }
        )
    }

    handleChange = (key, event) => {
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        const {name, contact, email} = this.state;
        return (
            <div style={{width: 400, marginTop: 20}}>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <input style={{marginBottom: 10}} type='email' onChange={(event) => {this.handleChange('email', event)}} value={email} placeholder='Enter your email id'/>
                    <input style={{marginBottom: 10}}onChange={(event) => {this.handleChange('name', event)}} value={name} placeholder='Enter your name'/>
                    <input style={{marginBottom: 10}} onChange={(event) => {this.handleChange('contact', event)}} value={contact} placeholder='Enter your contact details'/>
                    <input type="submit" style={{marginBottom: 10}} onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}
