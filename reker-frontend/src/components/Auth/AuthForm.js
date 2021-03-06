import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import palette from '../../styles/lib/palette';
import Button from '../common/Button';
import { withUserAgent } from 'react-useragent';
import { Form } from 'antd'
import queryString from 'query-string';


/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */


 

  /* 본인인증 후 콜백함수 */
  

  // function isReactNative() {
  //   /*
  //     리액트 네이티브 환경인지 여부를 판단해
  //     리액트 네이티브의 경우 IMP.certification()을 호출하는 대신
  //     iamport-react-native 모듈로 post message를 보낸다

  //     아래 예시는 모든 모바일 환경을 리액트 네이티브로 인식한 것으로
  //     실제로는 user agent에 값을 추가해 정확히 판단해야 한다
  //   */
  //   if (ua.mobile) return true;
  //   return false;
  // }

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const Privacy = styled.div`
  p {
    height: 60px;
    overflow: auto;
  }
`;
const Checkinput = styled.input`
  background: red;
  border: 0;
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;



const { Item } = Form;

const AuthForm = ({ history,  ua ,type, form, onChange, onSubmit, error }) => {




  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <div>
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        {/* <Item>
          {getFieldDecorator('phone')(
            <Input size="large" type="number" addonBefore="전화번호" />,
          )}
        </Item> */}
          <StyledInput
            autoComplete="phone"
            name="phone"
            placeholder="번호"
            type="phone"
            onChange={onChange}
            value={form.phone}
          />
      
          {/* <Button htmlType="submit"> 본인인증</Button> */}
          <StyledInput
            autoComplete="address"
            name="address"
            placeholder="주소를 입력해주세요."
            type="address"
            onChange={onChange}
            value={form.address}
          />          
          
          </div>
        )}
        {type === 'register' && (
          <div>
            <Privacy>
              <h2>서비스 이용약관</h2>

              <p>
                제 1 장 총칙 제 1 조 목적 본 약관은 주식회사 리커 인터내셔널이
                운영하는 웹 사이트 (http://reker.com)의 제반 서비스의 이용조건
                및 절차에 관한 사항 및 기타 필요한 사항을 규정함을 목적으로
                한다. 제 2 조 용어의 정의 본 약관에서 사용하는 용어는 다음과
                같이 정의한다. ①회원 : 기본 회원 정보를 입력하였고, 회사와
                서비스 이용계약을 체결하여 아이디를 부여받은 개인 ②아이디(ID) :
                회원식별과 회원의 서비스 이용을 위해 회원이 선정하고 회사가
                승인하는 문자와 숫자의 조합 ③비밀번호(Password) : 회원이
                통신상의 자신의 비밀을 보호하기 위해 선정한 문자와 숫자의 조합
                4.연락처: 회원의 숫자 핸드폰 번호 ④해지 : 회사 또는 회원에 의한
                이용계약의 종료 제 3 조 (약관의 공시 및 효력과 변경) ①본 약관은
                회원가입 화면에 게시하여 공시하며 회사는 사정변경 및 영업상
                중요한 사유가 있을 경우 약관을 변경할 수 있으며 변경된 약관은
                공지사항을 통해 공시한다 ②본 약관 및 차후 회사사정에 따라 변경된
                약관은 이용자에게 공시함으로써 효력을 발생한다. 제 4 조 (약관 외
                준칙) 본 약관에 명시되지 않은 사항이 전기통신기본법,
                전기통신사업법, 정보통신촉진법, ‘전자상거래등에서의 소비자
                보호에 관한 법률’, ‘약관의 규제에관한법률’, ‘전자거래기본법’,
                ‘전자서명법’, ‘정보통신망 이용촉진등에 관한 법률’,
                ‘소비자보호법’ 등 기타 관계 법령에 규정되어 있을 경우에는 그
                규정을 따르도록 한다. 제 2 장 이용계약 제 5 조 (이용신청)
                ①이용신청자가 회원가입 안내에서 본 약관과 개인정보보호정책에
                동의하고 등록절차(회사의 소정 양식의 가입 신청서 작성)를 거쳐
                '확인' 버튼을 누르면 이용신청을 할 수 있다. ②이용신청자는 반드시
                실명과 실제 정보를 사용해야 하며 1개의 생년월일에 대하여 1건의
                이용신청을 할 수 있다. ③실명이나 실제 정보를 입력하지 않은
                이용자는 법적인 보호를 받을 수 없으며, 서비스 이용에 제한을 받을
                수 있다. 제 6 조 (이용신청의 승낙) ①회사는 제5조에 따른
                이용신청자에 대하여 ㄴ제2항 및 제3항의 경우를 예외로 하여 서비스
                이용을 승낙한다. ②회사는 아래 사항에 해당하는 경우에 그
                제한사유가 해소될 때까지 승낙을 유보할 수 있다. 가. 서비스 관련
                설비에 여유가 없는 경우 나. 기술상 지장이 있는 경우 다. 기타
                회사 사정상 필요하다고 인정되는 경우 ③회사는 아래 사항에
                해당하는 경우에 승낙을 하지 않을 수 있다. 가. 다른 사람의 명의를
                사용하여 신청한 경우 나. 이용자 정보를 허위로 기재하여 신청한
                경우 다. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한
                경우 라. 기타 회사가 정한 이용신청 요건이 미비한 경우 제 3 장
                계약 당사자의 의무 제 7 조 (회사의 의무) ①회사는 사이트를
                안정적이고 지속적으로 운영할 의무가 있다. ②회사는 이용자로부터
                제기되는 의견이나 불만이 정당하다고 인정될 경우에는 즉시
                처리해야 한다. 단, 즉시 처리가 곤란한 경우에는 이용자에게 그
                사유와 처리일정을 공지사항 또는 전자우편을 통해 통보해야 한다.
                ③제1항의 경우 수사상의 목적으로 관계기관 및 정보통신윤리위원회의
                요청이 있거나 영장 제시가 있는 경우, 기타 관계 법령에 의한
                경우는 예외로 한다. 제 8 조 (이용자의 의무) ①이용자는 본 약관 및
                회사의 공지사항, 사이트 이용안내 등을 숙지하고 준수해야 하며
                기타 회사의 업무에 방해되는 행위를 해서는 안된다. ②이용자는
                회사의 사전 승인 없이 본 사이트를 이용해 어떠한 영리행위도 할 수
                없다. ③이용자는 본 사이트를 통해 얻는 정보를 회사의 사전 승낙
                없이 복사, 복제, 변경, 번역, 출판, 방송 및 기타의 방법으로
                사용하거나 이를 타인에게 제공할 수 없다. 제 4 장 서비스의 제공
                및 이용 제 9 조 (서비스 이용) ①이용자는 본 약관의 규정된 사항을
                준수해 사이트를 이용한다. ②본 약관에 명시되지 않은 서비스 이용에
                관한 사항은 회사가 정해 '공지사항'에 게시하거나 또는 별도로
                공지하는 내용에 따른다. 제 10 조 (정보의 제공) 회사는 회원이
                서비스 이용 중 필요하다고 인정되는 다양한 정보에 대하여
                전자메일이나 서신우편 등의 방법으로 회원에게 정보를 제공할 수
                있다. 제 11 조 (광고게재) ①회사는 서비스의 운용과 관련하여
                서비스 화면, 홈페이지, 전자우편 등에 광고 등을 게재할 수 있다.
                ②회사는 사이트에 게재되어 있는 광고주의 판촉활동에 회원이
                참여하거나 교신 또는 거래의 결과로서 발생하는 모든 손실 또는
                손해에 대해 책임을 지지 않는다. 제 12 조 (서비스 이용의 제한) 본
                사이트 이용 및 행위가 다음 각 항에 해당하는 경우 회사는 해당
                이용자의 이용을 제한할 수 있다. ①공공질서 및 미풍양속, 기타
                사회질서를 해하는 경우 ②범죄행위를 목적으로 하거나 기타
                범죄행위와 관련된다고 객관적으로 인정되는 경우 ③타인의 명예를
                손상시키거나 타인의 서비스 이용을 현저히 저해하는 경우 ④타인의
                의사에 반하는 내용이나 광고성 정보 등을 지속적으로 전송하는 경우
                ⑤해킹 및 컴퓨터 바이러스 유포 등으로 서비스의 건전한 운영을
                저해하는 경우 ⑥다른 이용자 또는 제3자의 지적재산권을 침해하거나
                지적재산권자가 지적 재산권의 침해를 주장할 수 있다고 판단되는
                경우 ⑦타인의 아이디 및 비밀번호를 도용한 경우 ⑧기타 관계 법령에
                위배되는 경우 및 회사가 이용자로서 부적당하다고 판단한 경우 제
                13 조 (서비스 제공의 중지) 회사는 다음 각 호에 해당하는 경우
                서비스의 전부 또는 일부의 제공을 중지할 수 있다. ①전기통신사업법
                상에 규정된 기간통신 사업자 또는 인터넷 망 사업자가 서비스를
                중지했을 경우 ②정전으로 서비스 제공이 불가능할 경우 ③설비의
                이전, 보수 또는 공사로 인해 부득이한 경우 ④서비스 설비의 장애
                또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 어려운
                경우 ⑤전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가
                발생하거나 발생할 우려가 있는 경우 제 14 조 (게시물 관리) 회사는
                건전한 통신문화 정착과 효율적인 사이트 운영을 위하여 이용자가
                게시하거나 제공하는 자료가 제12조에 해당한다고 판단되는 경우에
                임의로 삭제, 자료이동, 등록거부를 할 수 있다. 제 15 조 (서비스
                이용 책임) 이용자는 회사에서 권한 있는 사원이 서명한 명시적인
                서면에 구체적으로 허용한 경우를 제외하고는 서비스를 이용하여
                불법상품을 판매하는 영업활동을 할 수 없으며 특히 해킹, 돈벌기
                광고, 음란 사이트를 통한 상업행위, 상용 S/W 불법제공 등을 할 수
                없다. 이를 어기고 발생한 영업활동의 결과 및 손실, 관계기관에
                의한 구속 등 법적 조치 등에 관해서는 회사가 책임을 지지 않는다.
                준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는
                회사의 서비스 제공 책임이 면제된다. ②회사는 이용자간 또는
                이용자와 제3자간의 상호거래 관계에서 발생되는 결과에 대하여
                어떠한 책임도 부담하지 않는다. ③회사는 이용자가 게시판에 게재한
                정보, 자료, 내용 등에 관하여 사실의 정확성, 신뢰도 등에 어떠한
                책임도 부담하지 않으며 이용자는 본인의 책임 아래 본 사이트를
                이용해야 한다. ④이용자가 게시 또는 전송한 자료 등에 관하여
                손해가 발생하거나 자료의 취사선택, 기타 무료로 제공되는 서비스
                이용과 관련해 어떠한 불이익이 발생하더라도 이에 대한 모든 책임은
                이용자에게 있다. ⑤아이디와 비밀번호의 관리 및 이용자의 부주의로
                인하여 발생되는 손해 또는 제3자에 의한 부정사용 등에 대한 책임은
                이용자에게 있다. ⑥이용자가 본 약관의 규정을 위반함으로써 회사에
                손해가 발생하는 경우 이 약관을 위반한 이용자는 회사에 발생한
                모든 손해를 배상해야 하며 동 손해로부터 회사를 면책시켜야 한다.
                제 20 조 (개인신용정보 제공 및 활용에 대한 동의서) 회사가 회원
                가입과 관련해 취득한 개인 신용 정보는 신용정보의 이용 및 보호에
                관한 법률 제23조의 규정에 따라 타인에게 제공 및 활용 시 이용자의
                동의를 얻어야 한다. 이용자의 동의는 회사가 회원으로 가입한
                이용자의 신용정보를 신용정보기관, 신용정보업자 및 기타 이용자
                등에게 제공해 이용자의 신용을 판단하기 위한 자료로서 활용하거나
                공공기관에서 정책자료로 활용하는데 동의하는 것으로 간주한다. 제
                21 조 (분쟁의 해결) ①회사와 이용자는 본 사이트 이용과 관련해
                발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 해야
                한다. ②제1항의 규정에도 불구하고 동 분쟁으로 인하여 소송이
                제기될 경우 동 소송은 회사의 본사 소재지를 관할하는 법원의
                관할로 본다. 부칙 본 약관은 2017년 07월 1일부터 적용한다.
              </p>
            </Privacy>
            <Privacy>
              <h2>개인정보보호동의</h2>

              <p>
                리커 인터내셔널('www.reker.kr'이하 '리커')은(는)
                개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
                개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록
                다음과 같은 처리방침을 두고 있습니다. 리커 인터내셔널('리커')
                은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트
                공지사항(또는 개별공지)을 통하여 공지할 것입니다. ○ 본
                방침은부터 2020년 4월 1일부터 시행됩니다. 1. 개인정보의 처리
                목적 리커 인터내셔널('www.reker.kr'이하 '리커')은(는) 개인정보를
                다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의
                목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는
                사전동의를 구할 예정입니다. 가. 홈페이지 회원가입 및 관리 회원
                가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
                회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인,
                서비스 부정이용 방지 등을 목적으로 개인정보를 처리합니다. 나.
                재화 또는 서비스 제공 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공
                등을 목적으로 개인정보를 처리합니다. 다. 마케팅 및 광고에의 활용
                신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성
                정보 제공 및 참여기회 제공 , 접속빈도 파악 또는 회원의 서비스
                이용에 대한 통계 등을 목적으로 개인정보를 처리합니다. 2.
                개인정보 파일 현황 1. 개인정보 파일명 : 개인정보 - 개인정보 항목
                : 휴대전화번호, 비밀번호, 로그인ID - 수집방법 : 홈페이지 -
                보유근거 : 회원가입 - 보유기간 : 1년 - 관련법령 : 신용정보의
                수집/처리 및 이용 등에 관한 기록 : 3년 3. 개인정보의 처리 및
                보유 기간 ① 리커 인터내셔널('리커')은(는) 법령에 따른 개인정보
                보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은
                개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다. ②
                각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. 1.홈페이지
                회원관리 및 관리 홈페이지 회원관리 및 관리와 관련한 개인정보는
                수집.이용에 관한 동의일로부터1년까지 위 이용목적을 위하여
                보유.이용됩니다. -보유근거 : 회원가입 -관련법령 : 신용정보의
                수집/처리 및 이용 등에 관한 기록 : 3년 -예외사유 : 4. 개인정보의
                제3자 제공에 관한 사항 ① 리커 인터내셔널('www.reker.kr'이하
                '리커')은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보
                보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게
                제공합니다. ② 리커 인터내셔널('www.reker.kr')은(는) 다음과 같이
                개인정보를 제3자에게 제공하고 있습니다. 1. 리커 - 개인정보를
                제공받는 자 : 리커 - 제공받는 자의 개인정보 이용목적 :
                휴대전화번호, 비밀번호, 로그인ID - 제공받는 자의 보유.이용기간:
                1년 5. 개인정보처리 위탁 ① 리커 인터내셔널('리커')은(는) 원활한
                개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를
                위탁하고 있습니다. 1. - 위탁받는 자 (수탁자) : - 위탁하는 업무의
                내용 : - 위탁기간 : ② 리커 인터내셔널('www.reker.kr'이하
                '리커')은(는) 위탁계약 체결시 개인정보 보호법 제25조에 따라
                위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치,
                재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한
                사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게
                처리하는지를 감독하고 있습니다. ③ 위탁업무의 내용이나 수탁자가
                변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여
                공개하도록 하겠습니다. 6. 정보주체와 법정대리인의 권리·의무 및
                그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할
                수 있습니다. ① 정보주체는 리커 인터내셔널에 대해 언제든지
                개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수
                있습니다. ② 제1항에 따른 권리 행사는리커 인터내셔널에 대해
                개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편,
                모사전송(FAX) 등을 통하여 하실 수 있으며 리커 인터내셔널은(는)
                이에 대해 지체 없이 조치하겠습니다. ③ 제1항에 따른 권리 행사는
                정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실
                수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에
                따른 위임장을 제출하셔야 합니다. ④ 개인정보 열람 및 처리정지
                요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여
                정보주체의 권리가 제한 될 수 있습니다. ⑤ 개인정보의 정정 및 삭제
                요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는
                경우에는 그 삭제를 요구할 수 없습니다. ⑥ 리커 인터내셔널은(는)
                정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의
                요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를
                확인합니다. 7. 처리하는 개인정보의 항목 작성 ① 리커
                인터내셔널('www.reker.kr'이하 '리커')은(는) 다음의 개인정보
                항목을 처리하고 있습니다. 1홈페이지 회원관리 및 관리 - 필수항목
                : 휴대전화번호, 비밀번호, 로그인ID - 선택항목 : 8. 개인정보의
                파기리커 인터내셔널('리커')은(는) 원칙적으로 개인정보 처리목적이
                달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의
                절차, 기한 및 방법은 다음과 같습니다. -파기절차 이용자가 입력한
                정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류)
                내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시
                파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가
                아니고서는 다른 목적으로 이용되지 않습니다. -파기기한 이용자의
                개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의
                종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당
                서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을
                때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일
                이내에 그 개인정보를 파기합니다. -파기방법 전자적 파일 형태의
                정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 9.
                개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항 리커
                인터내셔널 은 정보주체의 이용정보를 저장하고 수시로 불러오는
                ‘쿠키’를 사용하지 않습니다. 10. 개인정보 보호책임자 작성 ① 리커
                인터내셔널(‘www.reker.kr’이하 ‘리커) 은(는) 개인정보 처리에 관한
                업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
                불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
                보호책임자를 지정하고 있습니다. ▶ 개인정보 보호책임자 성명
                :유동환 직책 :대표 직급 :대표이사 연락처 :01094534693,
                dhyu@aceones.kr, ※ 개인정보 보호 담당부서로 연결됩니다. ▶
                개인정보 보호 담당부서 부서명 : 담당자 : 연락처 :, , ②
                정보주체께서는 리커 인터내셔널(‘www.reker.kr’이하 ‘리커) 의
                서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
                문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
                담당부서로 문의하실 수 있습니다. 리커
                인터내셔널(‘www.reker.kr’이하 ‘리커) 은(는) 정보주체의 문의에
                대해 지체 없이 답변 및 처리해드릴 것입니다. 11. 개인정보
                처리방침 변경 ①이 개인정보처리방침은 시행일로부터 적용되며, 법령
                및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
                변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                12. 개인정보의 안전성 확보 조치 리커 인터내셔널('리커')은(는)
                개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한
                기술적/관리적 및 물리적 조치를 하고 있습니다. 1. 정기적인 자체
                감사 실시 개인정보 취급 관련 안정성 확보를 위해 정기적(분기
                1회)으로 자체 감사를 실시하고 있습니다. 2. 개인정보 취급 직원의
                최소화 및 교육 개인정보를 취급하는 직원을 지정하고 담당자에
                한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고
                있습니다.
              </p>
            </Privacy>
            <small>
              이용약관에 동의합니다.{' '}
              <Checkinput
                type="checkbox"
                name="termsCheck"
                onChange={onChange}
                value={form.termsCheck}
              />
            </small>
            <br />
            <small>
              개인정보보호에 동의합니다.{' '}
              <Checkinput
                type="checkbox"
                name="policyCheck"
                onChange={onChange}
                value={form.policyCheck}

                // checked={form.checked}
                //  value={this.state.check}
              />
            </small>
          </div>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
  // return (
  //   <Wrapper>
  //     <Header>아임포트 본인인1증 테스트</Header>
  //     <FormContainer onSubmit={onSubmit}>
  //       <Item>
  //         {getFieldDecorator('merchant_uid', {
  //           initialValue: `min_${new Date().getTime()}`,
  //           rules: [{ required: true, message: '주문번호는 필수입력입니다' }],
  //         })(
  //           <Input size="large" addonBefore="주문번호" />,
  //         )}
  //       </Item>
  //       <Item>
  //         {getFieldDecorator('name')(
  //           <Input size="large" addonBefore="이름" />,
  //         )}
  //       </Item>
  //       <Item>
  //         {getFieldDecorator('phone')(
  //           <Input size="large" type="number" addonBefore="전화번호" />,
  //         )}
  //       </Item>
  //       <Item>
  //         {getFieldDecorator('min_age')(
  //           <Input
  //             size="large"
  //             type="number"
  //             addonBefore="최소연령"
  //             placeholder="허용 최소 만 나이"
  //           />,
  //         )}
  //       </Item>
  //       <Button type="primary" htmlType="submit" size="large">
  //         본인인증하기
  //       </Button>
  //     </FormContainer>
  //   </Wrapper>
  // );
}

const Wrapper = styled.div`
  padding: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  padding-top: 0;
  font-size: 3rem;
`;

const FormContainer = styled(Form)`
  width: 350px;
  border-radius: 3px;

  .ant-row {
    margin-bottom: 1rem;
  }
  .ant-form-item {
    display: flex;
    align-items: center;
  }
  .ant-col.ant-form-item-label > label::after {
    display: none;
  }

  .ant-form-explain {
    margin-top: 0.5rem;
    margin-left: 9rem;
  }

  .ant-input-group-addon:first-child {
    width: 9rem;
    text-align: left;
    color: #888;
    font-size: 1.2rem;
    border: none;
    background-color: inherit;
  }
  .ant-input-group > .ant-input:last-child {
    border-radius: 4px;
  }

  .ant-col {
    width: 100%;
  }

  button[type='submit'] {
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
`;


const AuthTemplate = Form.create({ name: 'AuthForm' })(AuthForm);

export default withUserAgent(withRouter(AuthTemplate));
