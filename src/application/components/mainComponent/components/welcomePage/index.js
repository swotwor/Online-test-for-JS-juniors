import Component from './WelcomePage';
import {connect, useSelector} from "react-redux";
import { cashReducer } from "../../../../../store/cashReducer";

export const mapStateToProps = state => ({
    questionnaireState: state => state,
});

export const mapDispatchToProps = dispatch => ({
    cashReducer: payload => dispatch(cashReducer(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);