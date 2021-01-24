/**
 * @author BriceChou
 *
 * 此组件直接使用亦可，推荐对其进行再次封装使用
 */

import React, { useState, useEffect } from 'react'
import type { InputHTMLAttributes, ChangeEvent } from 'react'

interface InputPropsType {
  boxId?: string
  label?: string
  error?: string
  boxWidth?: number
  disabled?: boolean
  required?: boolean
  onBlur?: () => void
  onFocus?: () => void
  defaultValue?: string
  onInputAreaClick?: () => void
  onInput?: (inputValue: string) => void
}

interface CSSPropertyType {
  boxClassName: string
  labelClassName: string
  inputClassName: string
  errorClassName: string
  inputWarpperClassName: string
}

type BaseInputPropsType = InputPropsType & CSSPropertyType & InputHTMLAttributes<HTMLInputElement>

/**
 * 基础输入组件，被二次打包封装使用最佳
 */
export default function BaseInput(props: BaseInputPropsType) {
  const {
    boxId,
    label,
    error,
    onBlur,
    onInput,
    boxWidth,
    disabled,
    required,
    defaultValue,
    boxClassName,
    labelClassName,
    inputClassName,
    errorClassName,
    onInputAreaClick,
    inputWarpperClassName,
    type = 'text',
    ...rest
  } = props

  const [inputValue, setInputValue] = useState(defaultValue || '')

  useEffect(() => {
    if (defaultValue || defaultValue === '') {
      setInputValue(defaultValue)
    }
  }, [defaultValue])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setInputValue(e.target.value)
      if (onInput) {
        onInput(e.target.value)
      }
    }
  }

  const handleFocus = () => {
    if (onBlur && !disabled) {
      onBlur()
    }
  }

  const handleBlur = () => {
    if (onBlur && !disabled) {
      onBlur()
    }
  }

  return (
    <div className={boxClassName} style={{ width: `${boxWidth}px` }} id={boxId}>
      <div className={labelClassName} style={{ display: label ? 'block' : 'none' }}>
        {label}
        <span className="required" style={{ display: required ? 'block' : 'none' }}>
          *
        </span>
      </div>
      <div onClick={onInputAreaClick} className={`${inputWarpperClassName} ${error ? 'error' : ''}`}>
        <input
          {...rest}
          type={type}
          value={inputValue}
          readOnly={disabled}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleInput}
          className={inputClassName}
        />
      </div>
      <div className={errorClassName} style={{ display: error ? 'block' : 'none' }}>
        {error}
      </div>
    </div>
  )
}
