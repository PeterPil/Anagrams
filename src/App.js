import React, { Component } from "react";
import "./App.css";
import AnagramInfo from "./AnagramInfo";

class App extends Component {
  state = {
    isAnagram: true,
    renderAnagramInfo: false,
    firstString: "",
    secondString: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  checkAnagram = (firstString, secondString) => {
    if (
      firstString
        .toString()
        .split("")
        .sort()
        .join() ===
      secondString
        .toString()
        .split("")
        .sort()
        .join()
    ) {
      this.setState({
        isAnagram: true
      });
    } else {
      this.setState({
        isAnagram: false
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      renderAnagramInfo: true
    });
    const { firstString, secondString } = this.state;
    this.checkAnagram(firstString, secondString);
  };

  render() {
    return (
      <div className="anagrams">
        <h1 className="anagrams__title">Anagram</h1>
        <form className="anagrams-form" onSubmit={this.onSubmit}>
          <div className="anagrams-form-fields">
            <input
              type="text"
              className="anagrams-form-fields__input"
              placeholder="First String"
              id="firstString"
              value={this.state.firstString}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="anagrams-form-fields__input"
              id="secondString"
              placeholder="Second String"
              value={this.state.secondString}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" value="Check" className="anagrams-form__submit">
            Check
          </button>
        </form>
        {this.state.renderAnagramInfo && (
          <AnagramInfo isAnagram={this.state.isAnagram} />
        )}
      </div>
    );
  }
}

export default App;
