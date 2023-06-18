import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Section from '@components/Section'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const Page404 = props => (
  <Layout {...props}>
    <Seo title='Page Not Found' />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header="Disculpe, esta página no esta disponible."
            subheader='Es posible que haya escrito mal la dirección o que la página se haya movido.'
          />
        </Section>
        <Section>
          <Button variant='primary' as={Link} to='/'>
            Ir a Home
          </Button>
        </Section>
      </Main>
    </Stack>
  </Layout>
)

export default Page404
