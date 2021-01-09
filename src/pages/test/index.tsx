import React from 'react'
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import { updateTest } from '@stores/test'
import { bindActionCreators } from 'redux'
import type { RootStateType } from '@stores'
import { NavLink, Link } from 'react-router-dom'
import { LoadingStatusEnum } from '@type/LoadingStatusEnum'

interface PropsType {
  pageLoading: LoadingStatusEnum
  testState?: RootStateType['testState']
}

function Test(props: PropsType) {
  const { testState } = props

  return (
    <>
      <br />
      <br />
      Redux Test: {testState?.hello}
      <br />
      <br />
      <NavLink to="/demo" activeClassName="hurray">
        go to demo page
      </NavLink>
      <br />
      <Link to="/">go to Home</Link>
    </>
  )
}

function mapStateToProps(state: RootStateType) {
  return state.testState
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ updateTest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
