import React, { useState } from 'react'

interface OptionItemType {
  label: string
  checked?: boolean
}

interface PropsType {
  options: OptionItemType[]
  onChange: (v: OptionItemType[]) => void
}

/**
 * https://getbootstrap.com/docs/4.5/components/input-group/#checkboxes-and-radios
 *
 * 多选框组件
 */
export default function BaseCheckbox(props: PropsType) {
  const { options, onChange } = props
  const [data, setData] = useState(options)

  const toggle = (item: OptionItemType) => {
    data.forEach((_, key) => {
      if (data[key].label === item.label) data[key].checked = !item.checked
    })
    setData([...data])
    onChange(data)
  }

  return (
    <ul style={style.listContainer}>
      {data.map(item => (
        <li key={item.label} style={style.itemStyle} onClick={() => toggle(item)}>
          <input readOnly type="checkbox" checked={item.checked || false} />
          {item.label}
        </li>
      ))}
    </ul>
  )
}

const style = {
  listContainer: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  itemStyle: {
    cursor: 'pointer',
    padding: 5,
  },
}

/**
 * How to use?
 *
  const options = [{ label: 'Item One' }, { label: 'Item Two' }];
  <BaseCheckbox
    options={options}
    onChange={console.log}
  />
 */
