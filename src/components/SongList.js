import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// by convention it's called mapStateToProps
const mapStateToProps = state => {
  return { songs: state.songs };
};

// the second parentheses are to invoke the
// function that is returned by connect  and we
// pass SongList and it's parameter
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
