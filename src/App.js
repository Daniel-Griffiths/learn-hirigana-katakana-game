import React, { Component } from 'react'
import Title from './components/Title.js'
import Alert from './components/Alert.js'
import Button from './components/Button.js'
import Answer from './components/Answer.js'
import Hiragana from './syllabary/Hiragana.js'
import Character from './components/Character.js'
import StartButton from './components/StartButton.js'
import TimerContainer from './containers/TimerContainer.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameStart: false,
      characters: Hiragana,
      currentCharacter: '',
    }
  }

  randomCharacter(characters) {
    let result;
    let count = 0;
    Object.keys(characters).map(character => {
        if (Math.random() < 1/++count)
           result = character;
    })
    return result;
  }

  checkAnswer = (answer) => {
    console.log(this.state.characters);
    if(answer == this.state.characters[this.state.currentCharacter]){
      alert('You got it right!')
    } else {
      alert(`Woops! ${this.state.currentCharacter} is "${this.state.characters[this.state.currentCharacter]}"`)
    }
    this.setState({
        currentCharacter: this.randomCharacter(this.state.characters),
    })
  }

  start = () => {
    this.setState({
        gameStart: true,
        currentCharacter: this.randomCharacter(this.state.characters),
    })
  }

  render() {
    return (
      <div>
        { !this.state.gameStart 
          ? 
            <div>
              <Title>Learn Hiragana</Title> 
              <StartButton handler={this.start}/>
            </div>
          : 
            <div>
              <Alert active="false">Test</Alert>
              <Title>Guess The Character</Title> 
              <Character>{this.state.currentCharacter}</Character>
              <Answer handler={this.checkAnswer}/>
            </div>          
        }
      </div>
    );
  }
}
