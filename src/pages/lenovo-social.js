import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dan Diaczun | Chicago UX Developer" />
        <header id="header">
            <h1>Lenovo</h1>
            <p>Social Platform</p>
        </header>
        <div id="main">
          <section id="content" className="main">
            <p>While at Blast Radius we were tasked with designing and building a social platform to coincide with the launch of the next generation of Lenovo YOGA devices. The brand wanted to generate excitement with its exisiting users and potential new customers across the globe and needed a solution that encouraged participation and was easy to use. The #YOGAMYWAY was a global social platform launched on Tumblr that was driven by visual content. Users were able to participate via Instagram, Twitter & Facebook for the chance to win the new YOGA products along with a grand prize trip to London for the worldwide product launch.</p>
            <span className="image main"><img src={pic04} alt="" /></span>
            <p>The platform was launched in 38 countries and 21 laungauges and received over 2,000 submissions. The end of the campaign saw 70,000 hits on the Tumblr platform, with 14,000 shares and 75,000 mentions and served as communication hub for exclusive behind the scenes content post-launch.</p>
            <h2>Role & Technologies Used</h2>
            <p>I served as the front-end developer on this project, which was built using HTML5, CSS3, jQuery and hosted on Tumblr, a first for Lenovo. The site's hashtag was listed with Chirpify on Instagram, Twitter and Facebook with entry listening, aggregation and moderation done via BazaarVoice. Once a submission was approved by a local moderator it was integrated into the custom Tumblr theme, which could be browesed in 21 different languages and filtered by country, challenge, popularity and Lenovo favorites. </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
