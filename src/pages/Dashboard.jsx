import SavedComparisons from "../components/Dashboard/SavedComparisons";
import PageWrapper from "../components/UI/PageWrapper";

const Dashboard = () => {
  return (

    <PageWrapper>

        <section
        className="
        py-20
        px-6
        "
        >
        <div
            className="
            max-w-7xl
            mx-auto
            "
        >
            <h1
            className="
            text-5xl
            font-bold
            mb-10
            text-center
            "
            >
            Dashboard
            </h1>

            <SavedComparisons />
        </div>
        </section>

    </PageWrapper>
  );
};

export default Dashboard;