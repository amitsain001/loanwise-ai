import {
  useEffect,
  useState,
} from "react";

import HistoryCard from "./HistoryCard";

const SavedComparisons = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const saved =
        JSON.parse(
            localStorage.getItem(
            "loanComparisons"
            )
        ) || [];

        setHistory(saved);
    }, []);

    const deleteItem = ( index ) => {
        
        const updated =
        history.filter(
            (_, i) =>
            i !== index
        );

        localStorage.setItem(
            "loanComparisons",
            JSON.stringify(
                updated
            )
        );

        setHistory(updated);
    };

    return (
        <div className="grid gap-6">

        {history.length === 0 ? (
            <div
            className="
            glass
            rounded-3xl
            p-10
            text-center
            "
            >
            No Saved
            Comparisons
            </div>
        ) : (
            history.map(
            (
                item,
                index
            ) => (
                <HistoryCard
                key={index}
                comparison={
                    item
                }
                onDelete={() =>
                    deleteItem(
                    index
                    )
                }
                />
            )
            )
        )}
        </div>
    );
};

export default SavedComparisons;