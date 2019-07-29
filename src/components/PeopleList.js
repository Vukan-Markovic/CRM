import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleDetail from './PeopleDetail';
import { loadInitialContacts } from '../actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 390,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
});

class PeopleList extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            <Icon name={'user'} size={50} color={tintColor} />
        }
    }

    componentWillMount() {
        this.props.loadInitialContacts();
    }

    renderInitialView() {
        if (this.props.detailView === true) {
            return (
                <PeopleDetail />
            )
        } else {
            return (
                <FlatList
                    data={this.props.people}
                    renderItem={({ item }) => <PeopleItem people={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderInitialView()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        people: state.people,
        detailView: state.detailView,
    }
}

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);