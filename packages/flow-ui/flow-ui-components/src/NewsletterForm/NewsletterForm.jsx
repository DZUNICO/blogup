import React from 'react'
import PropTypes from 'prop-types'
import { Box, Input, Button, Message, Spinner } from 'theme-ui'

const styles = {
  msg: {
    mb: 0
  },
  button: {
    display: `block`,
    mx: `auto`
  }
}

const NewsletterForm = ({
  handleSubmit,
  canSubmit,
  submitting,
  message,
  success
}) => (
  <form onSubmit={handleSubmit}>
    {message && (
      <Message
        variant={success ? 'success' : 'error'}
        sx={styles.msg}
        dangerouslySetInnerHTML={{ __html: message }}
      />
    )}
    {canSubmit && (
      <>
        <Box variant='forms.row'>
          <Input
            name='fname'
            type='text'
            placeholder='Nombre'
            aria-label='Nombre'
            required
          />
        </Box>
        <Box variant='forms.row'>
          <Input
            name='phone'
            type='phone'
            placeholder='Teléfono'
            aria-label='Teléfono'
            required
            //pattern='/^([+]\d{2})?\d{9}$/'
          />
        </Box>
        <Box variant='forms.row'>
          <Input
            name='email'
            type='email'
            placeholder='Correo Electrónico'
            aria-label='Correo Electrónico'
            required
          />
        </Box>
        <Button
          type='submit'
          variant={success || submitting ? 'disabled' : 'primary'}
          disabled={success || submitting}
          sx={styles.button}
        >
          Suscríbete {submitting && <Spinner size='20' />}
        </Button>
      </>
    )}
  </form>
)

export default NewsletterForm

NewsletterForm.propTypes = {
  handleSubmit: PropTypes.func,
  canSubmit: PropTypes.bool,
  submitting: PropTypes.bool,
  message: PropTypes.string,
  success: PropTypes.bool
}

