import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#e0f7fa", height: "87vh" }}>
        <div className="row">
          <div className="col-md-3">
            <h2 className="text-center" style={{ marginTop: "100px" }}>
              Find The Job That Fits Your Life
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ex doloribus, facere vel sed incidunt a, corporis enim minima est,
              odit cum corrupti nemo dolorum facilis quae ipsam culpa
              necessitatibus.
            </p>
          </div>
          <div className="col-md-9 ">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
              alt=""
              className="home-image"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h5 className="text-center" style={{ fontStyle: "italic" }}>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur adipisci in repellendus, ad accusantium molestiae
              reprehenderit porro deserunt! Id quas doloribus omnis deserunt
              deleniti repellendus ipsum pariatur obcaecati architecto.
              Architecto"
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
