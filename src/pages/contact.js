import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Om mig — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/special.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Om David Holmlund</h1>
          <p>Mitt namn är David Holmlund, framtidsvisionär specialiserad på öppen källkod och med ett brinnande intresse för Linux, HTML5, Javascript och responsiv design. Till vardags är jag småbarnsfarsa, sci-fi nörd och grundare av byrån Vedervisp.

            Jag har byggt system och nätverk sedan 80-talets Bulletin Board Systems och har på senare år framför allt kommit att intressera sig för människa-dator-interaktion, artificiell intelligens och hur framtidens teknik kan komma att utformas. I och med detta har jag ett stort intresse för människa-dator-interaktion och forskningsområden så som kognitionsvetenskap, artificiell intelligens och neurala nätverk.

            Är född och uppvuxen i Skellefteå men bor numera i Uppsala tillsammans med min sambo Kirsten och våra underbara barn Ludwig, Emmy & Heidi.</p>
        </div>
        <div>
          <form className="form-container" name="dh-contact" data-netlify="true">
            <div>
              <label htmlFor="dhName">Namn</label>
              <input type="text" name="dhName" id="dhName"/>
            </div>
            <div>
              <label htmlFor="dhSender">Email</label>
              <input type="email" name="dhSender" id="dhSender"/>
            </div>
            <div>
              <label htmlFor="dhMessage">Meddelande</label>
              <textarea name="dhMessage" id="dhMessage"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`