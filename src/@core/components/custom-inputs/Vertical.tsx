'use client'

// MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputVerticalProps } from './types'

const Root = styled('div', {
  name: 'MuiCustomInputVertical',
  slot: 'root'
})(({ theme }) => ({
  display: 'flex',
  blockSize: '100%',
  cursor: 'pointer',
  position: 'relative',
  alignItems: 'center',
  gap: theme.spacing(2),
  flexDirection: 'column',
  padding: theme.spacing(4),
  borderRadius: 'var(--mui-shape-borderRadius)',
  border: '1px solid var(--mui-palette-customColors-inputBorder)',
  transition: theme.transitions.create(['border-color'], { duration: theme.transitions.duration.shorter }),

  '&:hover': {
    borderColor: 'var(--mui-palette-action-active)'
  },
  '& > svg, & > i': {
    color: 'var(--mui-palette-text-primary)'
  },
  '&.active': {
    borderColor: 'var(--mui-palette-primary-main)',
    '& > svg, & > i': {
      color: 'var(--mui-palette-primary-main)'
    }
  },
  '&.radio-only .MuiRadio-root': {
    marginTop: theme.spacing(-2)
  },
  '&.checkbox-only .MuiCheckbox-root': {
    marginTop: theme.spacing(-2)
  }
}))

const Title = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'title'
})(({ theme }) => ({
  letterSpacing: '0.15px',
  fontWeight: theme.typography.fontWeightMedium
}))

const Content = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'content'
})({
  textAlign: 'center'
})

const RadioInput = styled(Radio, {
  name: 'MuiCustomInputVertical',
  slot: 'input'
})(({ theme }) => ({
  marginBottom: theme.spacing(-2)
}))

const CheckboxInput = styled(Checkbox, {
  name: 'MuiCustomInputVertical',
  slot: 'input'
})(({ theme }) => ({
  marginBottom: theme.spacing(-2)
}))

const CustomInputVertical = (props: CustomInputVerticalProps) => {
  // Props
  const { type, data, name, selected, gridProps, handleChange, color = 'primary' } = props

  // Vars
  const { title, value, content, asset } = data

  const renderComponent = () => {
    return (
      <Grid item {...gridProps}>
        <Root
          onClick={() => handleChange(value)}
          className={classnames({
            'radio-only': type === 'radio' && !asset && !title && !content,
            'checkbox-only': type === 'checkbox' && !asset && !title && !content,
            active: type === 'radio' ? selected === value : selected.includes(value)
          })}
        >
          {asset || null}
          {title ? typeof title === 'string' ? <Title color='text.primary'>{title}</Title> : title : null}
          {content ? typeof content === 'string' ? <Content variant='body2'>{content}</Content> : content : null}
          {type === 'radio' ? (
            <RadioInput name={name} color={color} value={value} onChange={handleChange} checked={selected === value} />
          ) : (
            <CheckboxInput
              color={color}
              name={`${name}-${value}`}
              checked={selected.includes(value)}
              onChange={() => handleChange(value)}
            />
          )}
        </Root>
      </Grid>
    )
  }

  return data ? renderComponent() : null
}

export default CustomInputVertical
