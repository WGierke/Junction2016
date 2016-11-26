import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 15
  },
  selectedItem: {
    paddingTop: 20,
    paddingBottom: 20
  },
  selectedContent: {
    fontSize: Metrics.text.medium,
    fontWeight: "200"
  },
  subcontent: {
    fontSize: Metrics.text.extratiny,
    fontWeight: "100",
    color: Colors.charcoal
  },
  subcontentSelected: {
    fontSize: Metrics.text.tiny
  },
  content: {
    fontSize: Metrics.text.tiny,
    fontWeight: "100"
  },
  status: {
    justifyContent: 'center',
    marginRight: Metrics.baseMargin,
  },
  statusIndicator: {
    borderRadius: 100,
    borderWidth: 1,
    height: 8,
    width: 8
  },
  success: {
    backgroundColor: Colors.googleGreen,
    borderWidth: 0
  },
  fail: {
    backgroundColor: Colors.googleRed,
    borderWidth: 0
  },
  inWork: {
    backgroundColor: Colors.googleBlue,
    borderWidth: 0
  },
  selected: {
    fontSize: Metrics.text.medium
  }
}
