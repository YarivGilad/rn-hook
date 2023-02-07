import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from './src/constants';
import Logo from './src/assets/icons/logo.svg';

import {useTogglePasswordVisibility} from './src/hooks/useTogglePasswordVisibility';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login: FC = () => {
  const {passwordVisibility, currentIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility('eye', 'eye-off');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Logo width={90} height={90} style={styles.logo} />
            <Text style={styles.brandName}>Nosotros</Text>
          </View>
          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          {/******************** EMAIL INPUT *********************/}
          <TextInput style={styles.input} placeholder="Email" />
          {/******************** PASSWORD INPUT *********************/}
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={passwordVisibility}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <Ionicons
                name={currentIcon}
                size={22}
                color={COLORS.primaryDark}
              />
            </Pressable>
          </View>
          {/******************** LOGIN BUTTON *********************/}
          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.secondaryLight, COLORS.secondaryDark]}
              style={styles.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              <Pressable
                // onPress={() => navigation.navigate(ROUTES.HOME)}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </Pressable>
            </LinearGradient>
          </View>
          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <Pressable
            // onPress={() =>
            // navigation.navigate(ROUTES.FORGOT_PASSWORD, {
            //   userId: Math.round(Math.random() * 9999).toString(),
            // })
            // }
            style={styles.forgotPassText}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <Pressable
          // onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Text style={styles.signupBtn}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.lightest,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primaryDark,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.greyDark,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.greyLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
    backgroundColor: COLORS.white,
    fontSize: 18,
  },
  passwordInput: {
    // borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 0,
    fontSize: 18,
    flex: 1,
  },
  passwordInputContainer: {
    borderColor: COLORS.greyLight,
    borderWidth: 1,
    backgroundColor: 'white',
    height: 55,
    paddingRight: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 8,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.greyLight,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    marginRight: 7,
    fill: COLORS.secondaryLight,
    // transform: [{rotate: '30deg'}],
  },
});
