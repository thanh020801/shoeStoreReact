// import '../../styleSheet/CSS/contact.css'
function ContactPage(){
	return(
		<div className="container py-4 contactFrame">
			<h2>Contact </h2>
			<div className="row contact">
				<div className="map col-md-7">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963.3388871381703!2d105.43637171845715!3d10.206800986430556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a09f802f8995c7%3A0xae4e30ea37599adf!2zS2h1IER1IEzhu4tjaCBMw6BuZyBTZW4gSMawbmcgUGjDoXQ!5e0!3m2!1svi!2s!4v1643438273409!5m2!1svi!2s" width="100%" height="100%" loading="lazy"></iframe>
				</div>
			    <div className=" col-md-5">

				    <div className="mb-3">
				      <label className="form-label" forhtml="name">Name</label>
				      <input className="form-control" id="name" type="text" placeholder="Name"  />
				    </div>

				    <div className="mb-3">
				      <label className="form-label" forhtml="emailAddress">Email Address</label>
				      <input className="form-control" id="emailAddress" type="email" placeholder="Email Address"  />
				    </div>

				    <div className="mb-3">
				      <label className="form-label" forhtml="message">Message</label>
				      <textarea className="form-control" id="message" type="text" placeholder="Message" ></textarea>
				    </div>

				    <div className="d-grid">
				      <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
				    </div>
				</div>
		    </div>

		</div>
	)
}

export default ContactPage
