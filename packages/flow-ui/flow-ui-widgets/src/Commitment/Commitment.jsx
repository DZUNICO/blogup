import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='Nuestro Compromiso' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
        Nos tomamos muy enserio nuestro compromiso con nuestros usuarios. Si necesita nuestra ayuda con
        su proyecto, tiene preguntas sobre cómo usar el sitio o si experimenta alguna dificultad técnica, no dude en
        Contactarnos.
      </Text>
    </Card>
  </Section>
)

export default Commitment
