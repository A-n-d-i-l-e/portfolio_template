// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>UnityGameDemo</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>This is clasic game called bomberman this is game is just a 
                        demo was playing around.
                    </p>

                    <a href="https://abstractminds.itch.io/bomberman-demo" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>PsyChicks</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>PsyChicks Mint-Site this is a production build 
                        i can't share the source code.
                    </p>

                    <a href="https://psychicksmint.io/" target="_blank" className="button">Site</a>
                    {/* <a href="#" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>MarketplaceDemo</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>This is a bare bones project with the backend
                        being the main focus of the project.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;