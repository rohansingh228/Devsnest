import "./style.css";
import Card from "./memeCard/Card";
import Chessboard from "./chessBoard/ChessBoard";
const App = () => {
    return (
        <div className="container">
            <section className="section1">
                <Card />
            </section>
            <section className="section2">
                <Chessboard />
            </section>
        </div>
    );
};

export default App;