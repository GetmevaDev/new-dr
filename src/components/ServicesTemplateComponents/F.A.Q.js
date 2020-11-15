import React, { useState } from "react"

import AccordionCard from "./AccordionCard"
import {graphql, useStaticQuery} from "gatsby"




const FAQ = () => {

  const data = useStaticQuery(graphql`
  query QuestionQuery{
        allStrapiFaQs {
        edges {
            node {
            id
              Question
              Answer
          }
      }
    }
  }
`)

  const [active, setActive] = useState("")

  return(

    <section className="section-accordion">
      <h2 className="section-title">Frequently Asked<strong> Questions</strong></h2>

      <div className="container-wrapper">
        <div className="accordion-container">

          {
            data.allStrapiFaQs.edges.map(item => (


              <AccordionCard
                key={item.node.id}
                title={item.node.Question}
                answer={item.node.Answer}
                active={active}
                setActive={setActive}
              />
            ))
          }




          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">How do I schedule my next checkup?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>Simply click the book an appointment button on your screen to schedule an appointment at your*/}
          {/*      convenience! Our front desk staff will be happy to hear from you. Please let us know if you are a new*/}
          {/*      patient and we will work with you to make sure that your first appointment goes smoothly and*/}
          {/*      comfortably!</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">Do I still Need Regular Dental Checkups if I have Braces?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>Absolutely! Although you may be seeing your orthodontist regularly, it is still very important that you*/}
          {/*      see your dentist regularly. In fact, it is especially important that you receive regular cleaning, as*/}
          {/*      braces can trap food and particles in a manner that is difficult for regular brushing to remove. This can*/}
          {/*      increase your risk of many oral conditions. Dental checkups will allow your dentist to work closely with*/}
          {/*      your orthodontist to make sure that your mouth stays clean and healthy while wearing braces.</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">What is gum disease?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>Gum disease, also known as periodontal disease, is one of the most common dental problems—and also one of*/}
          {/*      the most easily treated and avoided. Caused by plaque and bacteria buildup, gum disease can be further*/}
          {/*      aggravated by tobacco use, teeth grinding, and certain medications. Gingivitis is the beginning stage of*/}
          {/*      gum disease, and, if detected, is treatable. Left untreated, however, gum disease can lead to tooth and*/}
          {/*      bone loss. Here are a few common symptoms of gum disease:*/}
          {/*    </p>*/}
          {/*    <ul>*/}
          {/*      <li> Red, irritated, bleeding, or swollen gums</li>*/}
          {/*      <li> Chronic bad breath</li>*/}
          {/*      <li>Loose teeth, or loss of teeth</li>*/}
          {/*      <li> Extreme tooth sensitivity</li>*/}
          {/*      <li>Receding gum line</li>*/}
          {/*      <li>Abscessed teeth</li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">What is a filling?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>As the name suggests, fillings are used to fill cavities after they have been treated. Here are a few*/}
          {/*      important facts about fillings that all patients should know:*/}
          {/*    </p>*/}
          {/*    <ul>*/}
          {/*      <li>Receiving a filling is generally painless due to anesthetics.</li>*/}
          {/*      <li>Fillings are made from specially chosen materials designed to be safe and comfortable.</li>*/}
          {/*      <li>If you think you might need a filling, contact your dentist as soon as possible.</li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">What is a cavity?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>A cavity is a small hole inside of a tooth caused by tooth decay. Tooth decay is generally caused when*/}
          {/*      plaque builds up outside the tooth and combines with sugar and starches in food ad drinks. This produces*/}
          {/*      an acid that destroys tooth enamel and makes tooth decay possible. Left untreated, cavities can cause*/}
          {/*      serious oral health problems—not to mention quite a deal of pain! The best way to prevent cavities is by*/}
          {/*      regular brushing, flossing, and dental checkups.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">What are the Secrets to Good Oral Health?</h2>*/}
          {/*  <div className="ac-a">*/}

          {/*    <ul>*/}
          {/*      <li>Brush your teeth a minimum of two times per day.</li>*/}
          {/*      <li> Just as importantly, floss at least once!</li>*/}
          {/*      <li>Use toothpaste that contains fluoride in order to help prevent cavities.</li>*/}
          {/*      <li> Avoid foods with a lot of sugar, as sugar increases the amount bacteria in your mouth.</li>*/}
          {/*      <li> Avoid tobacco, as it stains your teeth and greatly increases your risk for oral cancer.</li>*/}
          {/*      <li> Brush your tongue in order to remove food particles, reduce bacteria, and keep your breath smelling*/}
          {/*        fresh.*/}
          {/*        <li>Change your toothbrush every three months.</li>*/}
          {/*        <li>Schedule a routine checkup with your dentist every six months, even if your teeth feel fine!</li>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">How Can I Find the Right Dentist for Me and My Family?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>Choosing a dentist is a personal decision that should be made based upon your dental needs, as well as*/}
          {/*      your personal values. Here are a few of the reasons we believe that Digital Dental Arts is the best choice*/}
          {/*      for our patients.*/}
          {/*    </p>*/}
          {/*    <ul>*/}
          {/*      <li> Convenient scheduling options.</li>*/}
          {/*      <li> Central location right off the Union Turnpike in Queens.</li>*/}
          {/*      <li>State-of- the-Art facility.</li>*/}
          {/*      <li>Special attention to making our patients feel comfortable.</li>*/}
          {/*      <li>Attention to preventative care and the development of good dental habits.</li>*/}
          {/*      <li>Straightforward payment process and willingness to work with insurance companies.</li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">What is the Right Age to Start Visit the Dentist?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>According to The American Academy of Pediatric Dentistry (AAPD), children should receive their first*/}
          {/*      dental checkup between six months and one year of age. This will allow your dentist to confirm the healthy*/}
          {/*      development of your child’s baby teeth. From this point on, regular checkups once every six months should*/}
          {/*      be the norm unless your dentist recommends otherwise.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">How often should I see the dentist?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>As mentioned above, the general consensus (which is also promoted by the American Dental Association)*/}
          {/*      states that most adults and children should visit the dentist twice per year—roughly once every six*/}
          {/*      months. However, it is important to remember that patients who are at a greater risk for oral cancer or*/}
          {/*      gum disease may need to visit the dentist more often. The only way to be certain about your individual*/}
          {/*      needs is to speak with a dentist.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="ac card-accardion">*/}
          {/*  <h2 className="ac-q " id="tab" tabIndex="0">Why visit the dentist?</h2>*/}
          {/*  <div className="ac-a">*/}
          {/*    <p>The general medical consensus affirms that the average patient should see the dentist roughly once every*/}
          {/*      six months. Unfortunately, many people do not take this seriously because they do not understand the*/}
          {/*      importance of dental checkups. Here are a few reasons why visiting the dentist is important.*/}
          {/*    </p>*/}
          {/*    <ul>*/}
          {/*      <li>Defends against tooth decay</li>*/}
          {/*      <li>Lowers your risk of chronic bad breath.</li>*/}
          {/*      <li> Protects against gum disease, (known professionally as Periodontal Disease.)</li>*/}
          {/*      <li> Lowers your risk of tooth and bone loss</li>*/}
          {/*      <li>Eliminate the stains that develop inevitably due to food, drinks, and tobacco</li>*/}
          {/*      <li> Strengthens your teeth, which can improve the quality of your life for years to come.</li>*/}
          {/*      <li> Helps you look and feel your best, knowing that you have a healthier and more attractive smile!</li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  )

}

export default FAQ