import { combineReducers } from 'redux';
import CategoryStore from './category/category';
import CategoryDetailStore from './category/categoryDetail';
import QuestionStore from './question/question';
import MessageQuestion from './question/MessageQuestion';
import RedirectStore from './redirect/redirect';
import MessageStore from './message/message';
import ResultStore from './result/result';
import KetquaStore from './result/ketqua';
import CodeStore from './code/code';
import LoginStore from './Login/Login';
import LayoutStore from './Login/layout';
import LogouttStore from './Login/logout';
import UsersStore from './Login/user';
import UsersKetquaStore from './ketqua/ketqua';
import UsersAccountStore from './user';
import iDUserStore from './user/idUser';
import OnlineStore from './online/online';
import IntroduceStore from './introducer/introduce';




var myReducer=combineReducers({
    CategoryStore,
    CategoryDetailStore,
    QuestionStore,
    RedirectStore,
    MessageStore,
    ResultStore,
    KetquaStore,
    CodeStore,
    LoginStore,
    LayoutStore,
    LogouttStore,
    UsersStore,
    MessageQuestion,
    UsersKetquaStore,
    UsersAccountStore,
    iDUserStore,
    OnlineStore,
    IntroduceStore
});
export default myReducer;