import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  flowWrapper: {
    margin: 20,
    flex: 1
  },
  gridCell: {
      height: 165,
      width: 165,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 15,
      marginBottom: 15,
      borderRadius: Metrics.buttonRadius,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  matrixInner: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  iconCellIcon: {
    fontSize: 120,
    textAlign: 'right',
    marginBottom: 5,
    marginRight: 15,
    color: Colors.background,
    justifyContent: 'flex-end'
  },
  iconCellText: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 5,
    color: Colors.background
  },
  row: {
      padding: 5,
  },
  checklistContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  item: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
      
  },
  line: {
      flex: 1,
      height: 0.3,
      backgroundColor: 'darkgray',
  },
  ListIcons: {
    fontSize: 25
  }
}
