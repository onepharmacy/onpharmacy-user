import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#E5E5E5'
  },
  headerContainer: {
    height: 85,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#70CDAC',
  },
  header: {
    //position: 'absolute',
    height: 29,
    width: 343,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    position: 'absolute',
    left: 3,
    //right: 3,
    //top: '16.67%',
    //bottom: '19.11%',
  },
  headerText: {
    //position: 'absolute',
    //height: 29,
    //top: 20,
    
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  input: {
    //position: 'absolute',
    //left: 10,
    //right: '10%',
    //top: 23,
    //bottom: 10,
    width: 304,
    height: 42,
    paddingLeft: 15,
    marginTop: 5,
    //background: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D1D1D1',
    borderRadius: 12,
    color: '#151515'
  },
  form: {
    flex: 1,
    padding: 20,
    //position: 'absolute',
    width: 354,
    height: 877,
    marginTop: 35,
    marginBottom: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 16.5,
  },
  formtextContainer: {
    width: 319,
    height: 18,
    marginTop: 23,
  },
  formtext: {
    position: 'absolute',
    height: 18,
    left: 0,
    right: 0,
    top: 0,

    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 18,
    color: '#151515',
  },
  delivercheck: {
    //position: 'absolute',
    //left: 10,
    //right: '10%',
    //top: 23,
    //bottom: 10,
    width: 244,
    height: 32,
    paddingLeft: 15,
    flexDirection: 'row',
    //background: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D1D1D1',
    borderRadius: 12,
    color: '#151515',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  deliverchecktext: {
    marginLeft: 10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 18,
    color: '#151515',
  },
  squareCheck: {
    width: 20,
    height: 20,
    backgroundColor: '#F9F9F9',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#D1D1D1',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    color: '#9E9E9E',
  },
  filterText: {
    color: 'white',
    paddingLeft: 3,
    fontSize: 17,
  },
  button: {
    borderColor: 'white',
    paddingVertical: 5,
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
  },
  textContainer: {
    height: 50,
    marginTop: 10,
    width: 370,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerContainer: {
    position: 'absolute',
    height: 85,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
  },
  footer: {
    //position: 'absolute',
    height: 48,
    width: 311,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#70CDAC',
    borderRadius: 24,
  },
  footerText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default styles;
