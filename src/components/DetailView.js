import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/Materialcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';
import { getTheme } from 'react-native-material-kit';
import { ToolbarAndroid } from 'react-native-gesture-handler';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        paddingBottom: 20,
        marginBottom: 20,
        borderColor: 'lightgrey',
        borderWidth: 0.5,
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24,
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18,
    },
    image: {
        flex: 0,
        height: 100,
        width: 390,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 325,
        color: 'red'
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
    },
    textIcons: {
        color: '#26a69a',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    editIcon: {
        color: "#26a6e4"
    }, 
    sections: {
        flexDirection: 'row', 
        paddingLeft: 10, 
        paddingTop: 10, 
        width: 100,
    },
    deleteIcon: {
        color: "#e9a69a"
    }, 
    editDeleteArea: {
        flexDirection: 'row', 
        paddingLeft: 20, 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        backgroundColor: 'rgba(211,211,211, 0.3)', 
        marginBottom: 10,
    }, 
    actionImage: {
        width: 100, 
        height: 100,
    }
});

class DetailView extends Component {
    updateTest() {
        this.props.updateContact(this.props.person);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image
                        source={require('../images/background.jpg')}
                        style={[theme.cardImageStyle, styles.image]}
                    />
                    <EvilIcon name={'user'} size={100} style={styles.icon} />
                    <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
                        onPress={() => this.props.noneSelected()} />
                    <Text style={[theme.cardTitleStyle, styles.title1]}>{this.props.person.firstName} {this.props.person.lastName}</Text>
                    <Text style={[theme.cardTitleStyle, styles.title2]}>from {this.props.person.company}</Text>

                    <View style={styles.textArea}>
                        <MaterialIcon name={'phone'} size={40} style={styles.textIcons} />
                        <Text style={theme.cardContentStyle}>{this.props.person.phone}</Text>
                    </View>

                    <View style={styles.textArea}>
                        <MaterialIcon name={'email'} size={40} style={styles.textIcons} />
                        <Text style={theme.cardContentStyle}>{this.props.person.email}</Text>
                    </View>

                    <View style={styles.textArea}>
                        <MaterialIcon name={'assignment'} size={40} style={styles.textIcons} />
                        <Text style={theme.cardContentStyle}>{this.props.person.project}</Text>
                    </View>
                    <View style={styles.editDeleteArea}>
                        <TouchableOpacity style={styles.sections}>
                            <MaterialIcon name={'autorenew'} size={40} style={styles.editIcon}/>
                            <Text style={theme.cardContentStyle}>EDIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sections}
                         onPress={() => {this.props.deleteContact(this.props.person._id)}} >
                            <MaterialIcon name={'delete-forever'} size={40} style={styles.editIcon}/>
                            <Text style={theme.cardContentStyle}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons} />
                        <Text style={theme.cardContentStyle}>{this.props.person.notes}</Text>
                    </View>
                    <View style={styles.actionArea}>
                        <TouchableOpacity
                         onPress={() => { this.updateTest(); }}>
                            <Image
                                source={require('../images/call@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/email@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/sms@2x.png.png')}
                                style={styles.actionImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.actionArea}>
                            <Text>Call</Text>
                            <Text>Email</Text>
                            <Text>SMS</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        person: state.personSelected, 
        toUpdate: state.toUpdate
    }
}

export default connect(mapStateToProps, actions)(DetailView);