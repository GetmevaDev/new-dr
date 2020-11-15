import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import $ from "jquery"




class PatientSurveyForm extends React.Component {


  componentDidMount() {
    $(()=>{
      const $form = $('form');
      $form.on('submit', function(e){
        e.preventDefault();

        const $form = $(this);
        const data = $form.serializeArray();

        const formData = data.reduce((acc, current) => {
          acc[current.name] = current.value;
          return acc;
        }, {})

        $.ajax({
          type: 'POST',
          url: 'https://happy-denta-smile.herokuapp.com/information-patients',
          data: formData
        }).done(function(){
          $form[0].reset();

        }).fail(function(){
          console.log('error');
        })

      })
    });
  }



render(){
  return(
    <section className="section-form">
      <div className="container mw900">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="Name"/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="Email"/>

          <label htmlFor="question1">1. What dental problems cause you the most trouble? <span>*</span></label>
          <input type="text" id="question1"  name="What_dental_problems_cause_you_the_most_trouble"/>

          <label htmlFor="question2">2. What would you most want to achieve from dental
            care? <span>*</span></label>
          <input type="text" id="question2"  name="What_would_you_most_want_to_achieve_from_dental_care"/>

          <label htmlFor="question3">3. How would you describe the perfect Dentist? <span>*</span></label>
          <input type="text" id="question3" defaultValue={`Be specific.`} name="How_would_you_describe_the_perfect_Dentist"/>

          <label htmlFor="question4">4. What key factors most influence you when choosing a
            Dentist? <span>*</span></label>
          <input type="text" id="question4" name="What_key_factors_most_influence_you_when_choosing_a_Dentist" />

          <label htmlFor="question5">5. What would be the most convenient days for you to visit a Dentist?
            What would be the most convenient hours? <span>*</span></label>
          <input type="text" id="question5" name="What_would_be_the_most_convenient_days_for_you_to_visit_a_Dentist__What_would_be_the_most_convenient_hours" />
          <button className={`frm_button_submit`} type={`submit`}>Submit</button>
        </form>
      </div>
    </section>
  )
}

}


export default PatientSurveyForm