import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddNote from './components/addNote/AddNote';
import actions from './actions/';

export const App = ({ submitNote }) => (
  <div>
    <h1>Notes</h1>
    <AddNote submitNote={submitNote} />
  </div>
);

App.propTypes = {
  submitNote: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.notesApp;

const mapDispatchToProps = dispatch => ({
  submitNote: (text) => {
    if (text) {
      dispatch(actions.submitNote(text));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
