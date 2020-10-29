import React from 'react';
import styles from './introStyle';
// import Modal from 'react-native-modal';
// import VideoPlayer from 'react-native-video-controls';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';

export default class Screen2 extends React.Component {
  state = {play: false};

  toggleModal = () => this.setState({play: !this.state.play});

  render() {
    return (
      <View style={styles.slide}>
        <Text style={styles.homeDetail}>
          O OsmaAnd Maps e um aplicativo de acesso livre, qure permite ao
          usuario navegar ate o imovel rural mesmo sem internet. baixe o
          aplicativo osmaAnd Maps antes de comecar a usar o Endereco Rural e
          baixe a base rodaviaria de Mato Grosso conforme video.
        </Text>
        <Text style={styles.subHead}>Baixe o OsmaAnd:</Text>
        {Platform.OS === 'android' ? (
          <TouchableOpacity style={styles.playStoreBut}>
            <Image
              style={styles.play}
              source={require('../assets/googleplay.png')}
            />
            <Text style={styles.whiteTxt}>Baixe na </Text>
            <Text style={styles.boldTxt}>Google Play</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.appStoreBut}>
            <Image
              style={styles.apple}
              source={require('../assets/apple.png')}
            />
            <Text style={styles.whiteTxt}>Baixe na </Text>
            <Text style={styles.boldTxt}>App Store</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.subHead}>
          Baixe a base rodoviaria de Mato Grosso{'\n'}no OmAnd conforme o video
          a seguir:
        </Text>
        <TouchableOpacity
          onPress={this.toggleModal}
          style={styles.playVideoBut}>
          <Image
            style={styles.videoIcon}
            source={require('../assets/play.png')}
          />
          <Text style={styles.whiteTxt}>veja o </Text>
          <Text style={styles.boldTxt}>Video</Text>
        </TouchableOpacity>
        {/* <Modal
          isVisible={this.state.play}
          onBackdropPress={this.toggleModal}
          onBackButtonPress={this.toggleModal}>
          <View style={{height: 400}}>
            <VideoPlayer
              navigator={this.toggleModal}
              source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
            />
          </View>
        </Modal> */}
      </View>
    );
  }
}