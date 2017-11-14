import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddNote from './components/addNote/AddNote';
import NoteList from './components/noteList/NoteList';
import actions from './actions/';

export const App = ({ submitNote, notes }) => (
  <div>
    <h1>Notes</h1>
    <AddNote submitNote={submitNote} />
    <NoteList notes={notes} />
  </div>
);

App.propTypes = {
  submitNote: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

const mapStateToProps = state => state.noteListApp;

const mapDispatchToProps = dispatch => ({
  submitNote: (text) => {
    if (text) {
      dispatch(actions.submitNote(text));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
