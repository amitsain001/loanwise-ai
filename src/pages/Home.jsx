import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Stats from "../components/Stats/Stats";
import PageWrapper from "../components/UI/PageWrapper";

import LoanForm from "../components/Calculator/LoanForm";

const Home = () => {
    return (
        <>

            <PageWrapper>

                <Hero />
                <Stats />

                <LoanForm />

                <Features />

            </PageWrapper>
        
        </>
    );
};

export default Home;