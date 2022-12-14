import React from "react";
// import OurMembers from "./Members";
function AboutUs() {
  return (
    <div className="about1">
      <div className="about">
        <div className="vision">
          <h3 className="title">Our Vision</h3>
          <p className="vision">
            This is a project created by enthusaistic developers as a response to need
            especially in Moringa School where students work on numerous projects,
            many of which are forgotten over time since there’s no way to keep
            track of all of them.
          </p>
        </div>
        <div className="imageSection">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5d416c78e8c5750001775fe5/1576762918101-D8C8PZ9VAGIKRZ6E2D93/IMGL1127.jpg?format=2500w"
            className="image5"
          />
        </div>
      </div>
      <div id="aboutUsHeader">
        <h2 id="board">MEET THE DEVELOPMENT TEAM</h2>
      </div>
      <div id="cnnBackground">
      <div id="cnn">
        <div class="card" style={{width: "17rem"}}>
          <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4D03AQE-_4RdBh486Q/profile-displayphoto-shrink_400_400/0/1658725699948?e=1672876800&v=beta&t=8JkrrMktgwNdnOOGcNWCtKg05mh4LIA6ub8kWsY6J7s" alt="Clement" />
          <div class="card-body">
            <h5 class="card-title">Clement Njeru</h5>
            <p class="card-text">Software Engineer | Research & Technologies</p>
            <a href="https://github.com/ClementNjeru" class="btn btn-primary">Github</a>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <div class="card" style={{width: "17rem"}}>
          <img class="card-img-top" src="https://avatars.githubusercontent.com/u/106336784?v=4" alt="Chrispus" />
          <div class="card-body">
            <h5 class="card-title">Chrispus Maina</h5>
            <p class="card-text">Software Engineer | Graphics Designer</p>
            <a href="https://github.com/chrispus1000" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={{width: "17rem"}}>
          <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C5603AQEQp-jbIjuUHg/profile-displayphoto-shrink_200_200/0/1632559726437?e=1672272000&v=beta&t=L6UN6W942Vxajw8POa_kVZed5m9PVEK3hgOD2XZ-SPs" alt="Daniel" />
          <div class="card-body">
            <h5 class="card-title">Daniel Obare</h5>
            <p class="card-text">Software Engineer | UI/UX Designer</p>
            <a href="https://github.com/Thecodingobare" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={{width: "17rem"}}>
          <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4D03AQGr6x_lEf-y_Q/profile-displayphoto-shrink_200_200/0/1653310853785?e=1672272000&v=beta&t=8ZJxyq3W_UCxtbxQQMjaaj-eQ_eHKb5eAIO-BpBX6ec" alt="Esther" />
          <div class="card-body">
            <h5 class="card-title">Esther Njuguna</h5>
            <p class="card-text">Software Engineer | Product Testing</p>
            <a href="https://github.com/EstherNjuguna" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={{width: "17rem"}}>
          <img class="card-img-top" src="https://pbs.twimg.com/profile_images/1575915911885864982/2ucNOiL4_400x400.jpg" alt="Mary" />
          <div class="card-body">
            <h5 class="card-title">Mary Wairimu</h5>
            <p class="card-text">Software Engineer | Technical Writing/Documentation</p>
            <a href="https://github.com/Wairimu2018" class="btn btn-primary">Github</a>
          </div>
        </div>

        <div class="card" style={{width: "17rem"}}>
          <img class="card-img-top" src="https://avatars.githubusercontent.com/u/98685234?v=4" alt="Richard" />
          <div class="card-body">
            <h5 class="card-title">Richard Gichuki</h5>
            <p class="card-text">Software Engineer | Project Team Lead</p>
            <a href="https://github.com/ChadGichuki" class="btn btn-primary">Github</a>
          </div>
        </div>

        {/* <div className="row justify-content-md-center">{<OurMembers />}</div> */}
        {/* <div className="developers" >
            <div className="developers">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE-_4RdBh486Q/profile-displayphoto-shrink_400_400/0/1658725699948?e=1672876800&v=beta&t=8JkrrMktgwNdnOOGcNWCtKg05mh4LIA6ub8kWsY6J7s" alt="Clement" className="dev"/>
            <h5 className="text7">Clement Njeru</h5>
            <p className="text8">Software Developer</p>
            </div>
            <div className="developers">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGr6x_lEf-y_Q/profile-displayphoto-shrink_200_200/0/1653310853785?e=1672272000&v=beta&t=8ZJxyq3W_UCxtbxQQMjaaj-eQ_eHKb5eAIO-BpBX6ec" alt="Esther Njuguna"className="dev"/>
            <h5 className="text7">Esther Njuguna</h5>
            <p className="text8">Software Developer</p>
            </div>
            <div className="developers">
            <img src="https://avatars.githubusercontent.com/u/98685234?v=4" alt="Richard Gichuki" className="dev"/>
            <h5 className="text7">Richard Gichuki</h5>
            <p className="text8">Software Developer</p>
            <div className="developers">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEQp-jbIjuUHg/profile-displayphoto-shrink_200_200/0/1632559726437?e=1672272000&v=beta&t=L6UN6W942Vxajw8POa_kVZed5m9PVEK3hgOD2XZ-SPs" alt="Daniel Obare" className="dev"/>
            <h5 className="text7">Daniel Obare</h5>
            <p className="text8">Software Developer</p>
            </div>
            <div className="developers">
            <img src="https://pbs.twimg.com/profile_images/1575915911885864982/2ucNOiL4_400x400.jpg" alt="Mary Wairimu" className="dev"/>
            <h5 className="text7">Mary Wairimu</h5>
            <p className="text8">Software Developer</p>
            </div>
            <div className="developers">
            <img src="https://avatars.githubusercontent.com/u/106336784?v=4" alt="Chrispus Maina" className="dev"/>
            <h5 className="text7">Chrispus Maina</h5>
            <p className="text8">Software Developer</p>
            </div>
            </div> */}
        {/* <img src="" alt="" className="dev"/>
            <h3 className="text7"></h3>
            <img src="" alt="" className="dev"/>
            <h3 className="text7"></h3> */}
        {/* </div> */}
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
