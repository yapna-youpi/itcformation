import { Link } from "react-router-dom";
import Title from "../../../components/title/Title";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero" ></section>
      <div className=" hero-content">
          <div className="rows">
            <Title
              subtitle1=" ITC FORMATION  "
              subtitle2=" – FORMEZ-VOUS POUR L’AVENIR"
              title="lE SAVOIR FAIRE PAR L'INNOVATION"
            />
            <p className="hero-content-para">
              Dans un monde en perpétuelle évolution, où l’innovation et
              l’adaptabilité sont les clés du succès, ITC Formation se
              positionne comme un centre d’excellence dédié à la formation des
              talents de demain. Ici, nous ne nous contentons pas d’enseigner :
              nous fa çonnons des professionnels compétents, visionnaires et
              préparés aux réalités du marché.
            </p>
          </div>
          <div className="btn_group">
            <a href="#parcourir">
            <button  className="primary_btn btn cursor-pointer">
              Parcourir <i className="fa fa-long-arrow-alt-right"></i>
            </button></a> 
            <Link to="/formation">
            <button className="btn text-white bg-limer cursor-pointer">
              Nos Formations{" "}
              <span>
                <i className="fa fa-long-arrow-alt-right "></i>
              </span>
            </button>
            </Link>
          </div>
        </div>
      
    </>
  );
};

export default Hero;
