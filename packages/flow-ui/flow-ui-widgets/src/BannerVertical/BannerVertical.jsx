import React from 'react'
import { Link } from 'gatsby'
import { Flex, Button, Heading, Text } from 'theme-ui'
import { FaRegHandshake } from 'react-icons/fa'

const styles = {
  wrapper: {
    alignItems: `center`,
    flexDirection: `column`,
    bg: `omegaLighter`,
    borderRadius: `lg`,
    size: `full`,
    p: 4,
  },
  heading: {
    color: `omegaDark`,
    wordSpacing: 500, //force line breaks
    svg: {
      color: `beta`,
      size: `icon.lg`,
      display: `block`,
      mb: 3,
    },
  },
  subheading: {
    color: `omegaDark`,
    fontWeight: `normal`,
  },
  list: {
    color: `omegaDark`,
    listStyle: `none`,
    m: 0,
    p: 0,
    li: {
      p: 0,
      my: 2,
    },
    'li:before': {
      content: `""`,
      display: `inline-block`,
      width: `icon.xs`,
      bg: `success`,
      borderRadius: `full`,
      size: `7px`,
      mr: `7px`,
    },
  },
  button: {
    display: `block`,
    mt: `auto`,
  },
}

const BannerVertical = () => (
  <Flex sx={styles.wrapper}>
    <Heading variant='h2' sx={styles.heading}>
      <FaRegHandshake />
      Convenios con Empresas
    </Heading>
    <Heading variant='h4' sx={styles.subheading}>
      Nos encontramos gestionando convenios con empresas relacionadas al sector de construcción, para ofrecer mas beneficios a nuestros suscriptores
    </Heading>
    <Text as='ul' variant='small' sx={styles.list}>
      <li>Constructoras</li>
      <li>Proveedores de materiales y servicios</li>
      <li>Instituciones</li>
      <li>Profesionales del sector</li>
    </Text>
    <Button
      variant='primary'
      as={Link}
      to='#news'
      sx={styles.button}
      aria-label='Learn More'
    >
      Suscríbete
    </Button>
  </Flex>
)

export default BannerVertical
