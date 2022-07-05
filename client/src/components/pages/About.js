const About = () => {
    return(
      <div>
        <h1 className="text-center display-1">About Us</h1>
        <div className="container">
          <hr />
          <h2 className="text-center">Our Mission:</h2>
          <hr />
          {/* row 1 of information about website */}
          <div className="row text-primary">
            <div className="col-md">
              We are here to provide personal trainers and athletes with an outlet to discover new ways to workout and train.
            </div>
            <div className="col-md">
              Using our website, you can browse workouts posted by various certified and uncertified trainers with workouts tailored to fit your needs.
            </div>
            <div className="col-md">
              Eventually, you will be able to follow trainers to see any updates to their training methods as they change.
            </div>
          </div>
          <button className="mt-4 btn btn-danger">Learn More</button>

          </div>
        </div>
    );
  }
  
  export default About;