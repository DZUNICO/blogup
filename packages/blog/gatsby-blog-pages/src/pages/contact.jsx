import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'
import NewsletterExpanded from '@widgets/NewsletterExpanded'

const PageContact = props => (
  <Layout {...props}>
    <Seo title='Contacto' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Contáctanos"
          subheader='Si deseas contactarnos directamente para cualquier consulta, puedes escribirnos al correo 
          zunicomperu@gmail.com, además te invitamos a suscribirte sin ningún costo y acceder a los beneficios 
          de nuestra comunidad'
        />
        
        <Divider space={5} />
        <NewsletterExpanded />
        
        {/* <ContactForm /> */}

      </Main>
      <Sidebar>
        <Commitment />
        <Divider />
        <ContactInfo />
      </Sidebar>
    </Stack>
  </Layout>
)

export default PageContact
