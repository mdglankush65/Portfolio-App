import React from 'react';
import ProjectItem from '../components/ProjectItem';
import PopcornPeeksModal from '../components/PopcornPeeksModal';
import ResumeBuilderModal from '../components/ResumeBuilderModal.jsx';
import EcommerceProjectModal from '../components/EcommerceModal';

function Portfolio() {
    return (

        <section id="projects">
            <div className="container wow fadeInUp">
                <div className="row">
                    <div className="col-md-12">
                        <h3 data-aos="zoom-in" className="section-title">Projects</h3>
                        <div className="section-title-divider"></div>
                    </div>
                </div>

                <div className="row">
                    <ProjectItem
                        title="Shifterra"
                        liveLink="https://shifterra.vercel.app/"
                        githubLink="https://github.com/mdglankush65/Shifterra"
                        modalTarget="exampleModal3"
                        image='shifterra'
                        isMainProject={true}
                    />
                    <ProjectItem
                        title="Smart Reply"
                        liveLink="https://github.com/mdglankush65/LinkedIn-AI?tab=readme-ov-file#demo"
                        githubLink="https://github.com/mdglankush65/LinkedIn-AI"
                        modalTarget="ecommerce"
                        image='smart'
                        isMainProject={false}
                    />
                    <ProjectItem
                        title="Popcorn Peek"
                        liveLink="https://entertainment-app-1.onrender.com/"
                        githubLink="https://github.com/mdglankush65/Entertainment-App"
                        modalTarget="exampleModal3"
                        image='popcorn'
                        isMainProject={false}
                    />
                    <ProjectItem
                        title="E-Commerce"
                        liveLink="https://e-commerce-virid-two.vercel.app/"
                        githubLink="https://github.com/mdglankush65/e-commerce"
                        modalTarget="ecommerce"
                        image='ecommerce'
                        isMainProject={false}
                    />
                    <ProjectItem
                        title="Crypto Dashboard"
                        liveLink="https://crypto-dash-board-inky.vercel.app/"
                        githubLink="https://github.com/mdglankush65/CryptoDashBoard"
                        modalTarget="exampleModal"
                        image='crypto'
                        isMainProject={false}
                    />
                </div>
            </div>
            <PopcornPeeksModal />
            <EcommerceProjectModal />
            <ResumeBuilderModal />
        </section>
    );
}
export default Portfolio;