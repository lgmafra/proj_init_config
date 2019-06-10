import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: metrics.basePadding,
  },
  textInfo: {
    height: 135,
  },
  info: {
    paddingLeft: metrics.basePadding,
    fontSize: 36,
    color: colors.white,
  },
  infoBold: {
    paddingLeft: metrics.basePadding,
    fontSize: 36,
    color: colors.white,
    fontWeight: 'bold',
  },
  infoLogin: {
    paddingLeft: metrics.basePadding,
    fontSize: 21,
    color: colors.white,
    fontWeight: '300',
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin * 2,
  },
  buttonsPlace: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 138,
    height: 55,
    borderRadius: metrics.baseRadius * 9,
    backgroundColor: colors.primary,
  },
  buttonNew: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 138,
    height: 55,
    borderRadius: metrics.baseRadius * 9,
    borderWidth: 2,
    borderColor: colors.white,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
  },
  logo: {
    paddingLeft: metrics.basePadding,
    width: 153,
    height: 22,
    marginTop: metrics.baseMargin * 17,
  },
});

export default styles;
