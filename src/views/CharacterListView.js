import React from "react";
import { connect } from "react-redux";

import { getCharacter } from "../actions";
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      if (this.props.isLoading) {
        <h1>Stand by. We are fetching star wars characters</h1>
      }
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isLoading: state.charsReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getCharacter }
 )(CharacterListView);
