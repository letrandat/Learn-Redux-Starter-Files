import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions/actionCreators'
import Main from '.Main'

function mapStateToProps(state) {
	return {
		posts: state.post,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const app = connect(mapStateToProps, mapDispatchToProps)

export default app