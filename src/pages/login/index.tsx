import Modal from '@component/Modal'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { LoadingStatusEnum } from '@type/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

enum LoginStatusEnum {
  FAILED,
  SUCCESS,
  CANCELLED,
  NOT_LOGIN,
}

export default function Login(props: PropsType) {
  const [isModal, setModal] = useState(true)
  const [isLogin, setLogin] = useState(LoginStatusEnum.NOT_LOGIN)

  const onClose = (status: LoginStatusEnum) => () => {
    setModal(false)
    setLogin(status)
  }

  const footerCompoent = (
    <>
      <button
        type="button"
        data-dismiss="modal"
        className="btn btn-secondary"
        onClick={onClose(LoginStatusEnum.CANCELLED)}>
        Close
      </button>
      <button type="button" className="btn btn-primary" onClick={onClose(LoginStatusEnum.SUCCESS)}>
        Confirm
      </button>
    </>
  )

  if (isLogin == LoginStatusEnum.CANCELLED) {
    return <Redirect to="/" />
  } else if (isLogin == LoginStatusEnum.SUCCESS) {
    return <Redirect to="/demo" />
  }
  return (
    <Modal
      title="Login"
      visible={isModal}
      footer={footerCompoent}
      onClose={onClose(LoginStatusEnum.CANCELLED)}
      content={<p>Are you sure to login now?</p>}
    />
  )
}
