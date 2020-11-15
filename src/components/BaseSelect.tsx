import React from 'react'

interface PropsType {
  values: string[][]
  disabled?: boolean
  readonly?: boolean
  defaultValue?: string
  onChange: (value: string) => void
}

/**
 * 基础选择组件
 */
export default function BaseSelect(props: PropsType) {
  const { values, onChange, disabled = false, readonly = false, defaultValue } = props

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!disabled) {
      if (typeof onChange === 'function') {
        onChange(e.target.value)
      }
    }
  }
  return (
    <select disabled={disabled} readOnly={readonly} defaultValue={defaultValue} onChange={handleSelect}>
      {values.map(([value, text]) => (
        <option value={value} key={`${value}_${text}`}>
          {text}
        </option>
      ))}
    </select>
  )
}

/**
 * How to use?
 *
  const choices = [
    ["grapefruit", "Grapefruit"],
    ["lime", "Lime"],
    ["coconut", "Coconut"],
    ["mango", "Mango"]
  ];
  <BaseSelect
    values={choices}
    selected={'lime'}
    onChange={console.log}
  />,
 */
