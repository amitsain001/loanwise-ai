import { generatePDF } from "../../utils/pdfGenerator";

const HistoryCard = ({
  comparison,
  onDelete,
}) => {

    return (
        <div className="glass rounded-3xl p-6">
            <h3
                className="
                text-xl
                font-bold
                mb-3
                "
            >
                Saved Comparison
            </h3>

            <p className="mb-4">
                {comparison.date}
            </p>

            <div
                className="
                flex
                gap-4
                "
            >
                <button
                    onClick={() => generatePDF( comparison ) }
                    className="px-4 py-2 bg-cyan-500 rounded-xl "
                >
                    Export PDF
                </button>

                <button
                    onClick={onDelete}
                    className="px-4 py-2 bg-red-500 rounded-xl"
                >
                    Delete
                </button>

            </div>
            
        </div>
    );
};

export default HistoryCard;