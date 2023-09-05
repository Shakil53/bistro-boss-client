import { Helmet } from "react-helmet";
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <>
            <Helmet>
                <title>
                    Bistro Boss | Cover
                </title>
            </Helmet>
            <Parallax
                blur={{ min: -30, max: 30 }}
                bgImage={img}
                bgImageAlt="the Menu"
                strength={-500}
            >
                <div className="hero h-[700px] mb-10">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
};

export default Cover;