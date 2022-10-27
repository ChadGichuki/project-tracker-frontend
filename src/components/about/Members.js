import React from "react";
import { Col } from "reactstrap";

const MEMBERS = [


  {
    name: "Richard Gichuki",
    // Role: "Senior Dev",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "https://github.com/ChadGichuki",
    imgUrl: "https://avatars.githubusercontent.com/u/98685234?v=4",
  },

  {
    name: "Daniel Obare",
//  Role:  "Director",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "",
  },
  {
      name: "Chrispus Gichimu",
// Role:"Marketer",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl:"",
  },
  {
    name: "Mary Wairimu",
    Role: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "",
  },
  {
    name: "Clement Kimaru",
    // Role: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "",
  },
  {
    name: "Esther Njuguna",
    // Role: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://media-exp1.licdn.com/dms/image/C4D03AQGr6x_lEf-y_Q/profile-displayphoto-shrink_200_200/0/1653310853785?e=1672272000&v=beta&t=8ZJxyq3W_UCxtbxQQMjaaj-eQ_eHKb5eAIO-BpBX6ec",
  }
]


const OurMembers = () => {
  return (
    <>
      {MEMBERS.map((item, index) => (
        <Col  key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt={item.name} style={{height: '200px',width:'200px'}}  />

            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
            {item.Role}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;