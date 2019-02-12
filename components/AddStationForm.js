import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native'

import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form'

class AddStationForm extends Component {
  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
    this.submit = this.submit.bind(this);
  }
  renderInput({ input: { onChange, ...restInput }}) {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
  } 
  submit( values , dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({ 
        type: 'ADD_MARKER',
        values,
        resolve,
        reject 
      });
    }).catch((error) => {
      throw new SubmissionError(error);
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text>Name:</Text>
        <Field name="name" component={this.renderInput} />
        <Text>Latitude:</Text>
        <Field name="latitude" component={this.renderInput} />
        <Text>Longitude:</Text>
        <Field name="longitude" component={this.renderInput} />
        <Button title="Submit" onPress={handleSubmit(this.submit)} />
        {console.log('form', this.props.center)}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  center: state.map.center
});

AddStationForm = connect(
  mapStateToProps
)(AddStationForm)

export default reduxForm({
  form: 'addstation',
  // initialValues: { 
    // latitude: state.center.latitude,
    // longitude: state.center.longitude
  // }
})(AddStationForm)

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37
  }
})