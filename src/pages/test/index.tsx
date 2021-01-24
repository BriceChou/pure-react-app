import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import type { RootStateType } from '@stores'
import { NavLink, Link } from 'react-router-dom'
import React, { useEffect, useMemo } from 'react'
import { LoadingStatusEnum } from '@type/LoadingStatusEnum'
import { updateTest, removeTest, addTest } from '@stores/test'

interface PropsType {
  addTest: typeof addTest
  updateTest: typeof updateTest
  pageLoading: LoadingStatusEnum
  removeTest: typeof removeTest
  testState: RootStateType['testState']
}

function Test(props: PropsType) {
  const { testState, updateTest, addTest, removeTest } = props

  useEffect(() => {
    console.log(testState.count, ' >>> bricechou useEffect count <<< ')
  }, [testState.count])

  useMemo(() => {
    console.log(testState.count, ' >>> bricechou useMemo count <<< ')
  }, [testState.count])

  return (
    <>
      <br />
      <br />
      Redux Test: {testState?.hello}
      <br />
      <button
        onClick={() => {
          updateTest && updateTest('bricechou')
        }}>
        {' '}
        更新 state
      </button>
      <br />
      Redux Test: Count = {testState?.count}
      <button onClick={addTest}> Count add</button>
      <br />
      <button onClick={removeTest}> Count remove</button>
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
  return {
    testState: state.testState,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ updateTest, addTest, removeTest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
