/* eslint-disable linebreak-style */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../store/actions/actions'
import { FilterOptions } from '../pure/FilterOptions'

const mapStateToProps = (state) => {
    return {
        todosCount: state.todosState.filter((todo) => todo.completed === false).length
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(FilterOptions)
export default FooterContainer
