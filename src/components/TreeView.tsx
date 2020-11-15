import '../../static/css/treeview.css'
import React, { useState } from 'react'

interface IObject {
  [props: string]: string | Array<string>
}

interface PropsType {
  isLast?: boolean
  toggled?: boolean
  data: IObject | string | Array<string>
  label?: string | number
  isChildElement: boolean
  isParentToggled: boolean
}

/**
 * 树形图像显示文件列表组件
 */
export default function TreeView(props: PropsType) {
  const { data, label = '', toggled = false, isLast = true, isChildElement = false, isParentToggled = true } = props

  const [isToggled, setIsToggled] = useState(toggled)

  return (
    <div
      style={{ marginLeft: isChildElement ? 16 : 4 + 'px' }}
      className={isParentToggled ? 'tree-element' : 'tree-element collapsed'}>
      <span className={isToggled ? 'toggler' : 'toggler closed'} onClick={() => setIsToggled(!isToggled)} />
      {label ? <strong>&nbsp;&nbsp;{label}: </strong> : <span>&nbsp;&nbsp;</span>}
      {Array.isArray(data) ? '[' : '{'}
      {!isToggled && (
        <a className="stretched-link" onClick={() => setIsToggled(!isToggled)}>
          {'...'}
        </a>
      )}
      {Object.keys(data).map((v, i, a) =>
        typeof data[v] == 'object' ? (
          <TreeView
            data={data[v]}
            isChildElement
            key={`${i}_${v}`}
            isLast={i === a.length - 1}
            label={Array.isArray(data) ? '' : v}
            isParentToggled={isParentToggled && isToggled}
          />
        ) : (
          <p
            key={`${i}_${v}`}
            style={{ marginLeft: 16 + 'px' }}
            className={isToggled ? 'tree-element' : 'tree-element collapsed'}>
            {Array.isArray(data) ? '' : <strong>{v}: </strong>}
            {data[v]}
            {i === a.length - 1 ? '' : ','}
          </p>
        ),
      )}
      {Array.isArray(data) ? ']' : '}'}
      {!isLast ? ',' : ''}
    </div>
  )
}

/**
 * How to use?
 *
 *
  const data = {
    lorem: {
      ipsum: 'dolor sit',
      amet: {
        consectetur: 'adipiscing',
        elit: [
          'duis',
          'vitae',
          {
            semper: 'orci'
          },
          {
            est: 'sed ornare'
          },
          'etiam',
          ['laoreet', 'tincidunt'],
          ['vestibulum', 'ante']
        ]
      },
      ipsu2xm: 'primis'
    }
  };
  <TreeView data={data} label="data" />
 */
