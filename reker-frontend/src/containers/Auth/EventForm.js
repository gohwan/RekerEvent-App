import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm,  eventregister } from '../../modules/auth';
import EventAuthForm from '../../components/Event/EventAuthForm';
// import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';


// const toggleChange = () => {
//   this.setState(prevState => ({
//     isJB: !prevState.isJB,
//   }));
// }

const EventForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, event, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.eventregister,
    auth: auth.auth,
    event:Event.event,
    authError: auth.authError,
    user: user.user,
  }));
  
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'eventregister',
        key: name,
        value,
      }),
      // this.setState({ checked: !this.state.checked })
    );
  };
  

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { name, birthday, phone, username, termsCheck, policyCheck   } = form;
    // 하나라도 비어있다면
    if ([name, birthday, phone ].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    } else if ([username].includes('')){      
    }

    if(!termsCheck ) {
      setError('약관에 동의해주세요.');
      return;
    }
    if(!policyCheck) {
      setError('약관에 동의해주세요.');
      return;
    }

    dispatch(eventregister({ name, birthday, phone, username }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('eventregister'));
    if (auth) {	
      alert('이미 사전등록되어있습니다.')	
    }
  }, [dispatch, auth]);


  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    
    if (authError) {
      //  추천인 ID가 공백일댸 
      
      if (authError.response.status === 406) {
          console.log('sc공2백');
          // console.log(auth);
          alert('사전등록 되었습니다.')
          history.push('/'); // 홈 화면으로 이동
          // console.log('a')
          console.log(auth);
          console.log(event + 'a');
          
      }else if (authError.response.status === 408) {
        setError('추천인 아이디가 존재하지 않습니다.');
        return;
      } 
      // 기타 이유
      setError('양식을 정확히 입력해주세요.');
      return;
    }
    // event 인수를 받았을떄 실행되지 않음 .. 
    if (auth) {
      alert('사전등록 되었습니다.')	      
      history.push('/'); // 홈 화면으로 이동	
      console.log(auth);
    }
    if (user) {
      alert('로그아웃 후 사전등록이 가능 합니다.')	      
    }    
    
    

  }, [auth, authError,  history, event, user]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      history.push('/'); // 홈 화면으로 이동
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <EventAuthForm
      type="event"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(EventForm);
