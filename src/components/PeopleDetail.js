import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DetailView from './DetailView';
import UpdatePerson from './UpdatePerson';

class PeopleDetail extends Component {
    renderDetails() {
        if (this.props.toUpdate) {
            return <UpdatePerson />
        } else {
            return <DetailView />
        }
    }

    render() {
        return (
            <View>
                {this.renderDetails()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        toUpdate: state.toUpdate,
    }
}

export default connect(mapStateToProps, actions)(PeopleDetail);