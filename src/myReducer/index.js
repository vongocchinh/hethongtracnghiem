import { combineReducers } from 'redux';
import CategoryStore from './category/category';
import CategoryDetailStore from './category/categoryDetail';
import MessageCategoryStore from './category/messageCategory';
import MessageCategoryDetailStore from './category/messageCategoryDetail';
import QuestionStore from './question/question';
import MessageQuestion from './question/MessageQuestion';
import RedirectStore from './redirect/redirect';
import MessageStore from './message/message';
import ResultStore from './result/result';
import KetquaStore from './result/ketqua';
import CodeStore from './code/code';
import LoginStore from './Login/Login';
import LoginUserStore from './Login/loginUser';
import LogouttStore from './Login/logout';
import UsersKetquaStore from './ketqua/ketqua';
import UsersAccountStore from './user/user';
import OnlineStore from './online/online';
import MessageOnlineStore from './online/message';
import IntroduceStore from './introducer/introduce';
import MessageIntroduceStore from './introducer/message';
import CourseStore from './course/course';
import CourseMessageStore from './course/message';
import MessageKetQuaStore from './ketqua/message';



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
    LoginUserStore,
    LogouttStore,
    MessageQuestion,
    UsersKetquaStore,
    UsersAccountStore,
    OnlineStore,
    IntroduceStore,
    CourseStore,
    CourseMessageStore,
    MessageIntroduceStore,
    MessageKetQuaStore,
    MessageOnlineStore,
    MessageCategoryStore,
    MessageCategoryDetailStore
});
export default myReducer;