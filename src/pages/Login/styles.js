import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: colors.darker,
  },
  imageHeader: {
    width: metrics.screenWidth,
    height: 196,
    flex: 1,
  },
  backButton: {
    marginTop: metrics.baseMargin,
  },
  content: {
    width: metrics.screenWidth,
    height: metrics.screenHeight - 162,
    borderTopLeftRadius: metrics.baseRadius * 12,
    borderTopRightRadius: metrics.baseRadius * 12,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
  },
  textInfo: {
    marginTop: metrics.baseMargin * 2,
    fontSize: 28,
    color: colors.secondary,
  },
  textInfoBold: {
    marginTop: metrics.baseMargin * 8,
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  form: {
    marginTop: metrics.baseMargin * 5,
  },
  emailInput: {
    height: 55,
    backgroundColor: colors.inputBackground,
    borderRadius: metrics.baseRadius * 4,
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin * 2,
  },
  passwordInput: {
    height: 55,
    backgroundColor: colors.inputBackground,
    borderRadius: metrics.baseRadius * 4,
    padding: metrics.basePadding,
  },
  forgotPassword: {
    fontSize: 15,
    color: colors.primary,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin * 3,
  },
  buttonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 136,
    height: 41,
    borderRadius: metrics.baseRadius * 9,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 15,
    color: colors.white,
  },
  socialLogos: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 4,
  },
  logos: {
    marginRight: metrics.baseMargin * 2,
  },
});

export default styles;
