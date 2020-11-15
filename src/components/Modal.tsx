import type { ReactNode } from 'react'
import React, { useEffect } from 'react'

interface PropsType {
  title: string
  visible: boolean
  footer?: ReactNode
  content: ReactNode
  onClose: () => void
}

/**
 * https://getbootstrap.com/docs/4.5/components/modal/
 *
 * Modal 蒙层弹窗组件
 */
export default function Modal(props: PropsType) {
  const { visible = false, title, content, footer, onClose } = props

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => document.removeEventListener('keydown', keydownHandler)
  })

  const keydownHandler = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      default:
    }
  }

  if (!visible) {
    return null
  }

  return (
    <div className="modal" tabIndex={-1} role="dialog" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{content}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </div>
  )
}

/**
 * How to use?
 *
  const [isModal, setModal] = React.useState(false);
  return (
    <React.Fragment>
      <button onClick={() => setModal(true)}>Click Here</button>
      <Modal
        visible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </React.Fragment>
  );
 */
