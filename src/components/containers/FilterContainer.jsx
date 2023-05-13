import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Filter from '../pure/Filter'
import * as TodoActions from '../../store/actions/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(TodoActions, dispatch),
        onClick: () => {
            dispatch(TodoActions.setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default FilterContainer
