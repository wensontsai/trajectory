import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToBuyBook, addToSellBook } from "../../modules/trade";


const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.addToBuyBook('$3.00')}>Add to Buy Book</button>
    </p>

    <p>
      <button onClick={props.addToSellBook('$3.00')}>Add to Sell Book</button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  count: state.trade.count,
  bidBook: state.trade.bidBook,
  sellBook: state.trade.sellBook
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToBuyBook,
      addToSellBook,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);