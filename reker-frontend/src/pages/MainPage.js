import React from 'react';
import styles from './MainPage.scss';
import classNames from "classnames/bind";
import Footer from '../components/common/Footer/Footer';
import MainTab from '../components/common/Tab/MainTab';
import Comment from '../components/Comment/Comment';
import AuthForm from '../components/Auth/AuthForm';
import HeaderContainer from '../containers/common/HeaderContainer';

const cx = classNames.bind(styles);

const MainPage = () => {
  return (
    <div className={cx('wrap')}>
      <HeaderContainer/>
      <div className={cx('container')}>
        <div className={cx('content-wrap')}>
          <div className={cx('header')}>
            <h1 className="brand-logo">Reker<small>- 실시간 1:1 채용 구직 프로세스</small></h1>
          </div>
          <MainTab/>                    
          <Comment/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MainPage;