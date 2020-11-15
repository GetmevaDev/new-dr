import React from "react"
import $ from "jquery"
import StarOffSvg from "../images/off.svg"
import Rating from "./rating"



class Form extends React.Component{

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
        url: 'https://happy-denta-smile.herokuapp.com/comments',
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

    <section className="section-form_comment">
      <h2 className="section-title">Leave your own <strong>review</strong></h2>
      <form className="container">
        <div className="container_input">
          <input type="text" name="Name"  className="name" placeholder="Your Name"/>
        </div>
        <fieldset className="rating_form">
          <legend>Your rating</legend>
          <Rating />

        </fieldset>
        <div className="container_input">
          <textarea placeholder="Your review"  name="Comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <div className="btn-container">
          <button className="btn-submit">Submit</button>
        </div>
      </form>
    </section>

  )
}


}
export  default Form

