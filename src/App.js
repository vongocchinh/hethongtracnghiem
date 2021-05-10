import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router/router";
import Header from "./container/Header";
import Footer from "./container/Footer";
// import Login from "./container/Login";
import { ToastContainer } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
function App(props) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        style={{ zIndex: 9999, fontSize: 12 }}
      />
      <Router>
        <>
          <Header />
          <Routers />
          <Footer />
        </>
      </Router>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    LayoutStore: state.LayoutStore,
    LogouttStore:state.LogouttStore
  };
};

const dispatchToProps = (dispatch, props) => {
  return {};
};
export default connect(mapStateToProps, dispatchToProps)(App);
