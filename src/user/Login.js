import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../component/logo';
import TextLogo from '../component/textLogo';
import Input from '../component/Input';
import Button from '../component/Button';

const LoginSection = styled.div`
  border:1px solid black;
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Login=()=> {
   
   const[userData,setUserData]= useState({
     id:"",
     password:"",
   });
   
   const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    });
   }


   /* -------------------------------------------- */
   const loginTry = (e) => {

    // 의미없는 이벤트 방지
    e.preventDefault();
    alert("입력해라");

    let user = {
      id : userData.id,
      password : userData.password,
    }

    console.log(user);
    // JSON 객체 확인

    // UserApiService.Button

   }
   /* -------------------------------------------- */
   /*     // Enter Key
    const keyPress = () => {
     enterKeyPress() && loginTry();
   };
   
   // Enter Key detect
   const enterKeyPress = () => {
     return window.event.keyCode === 13;
   }; */


  return (
    <LoginSection>

      <Logo/>  {/*  E4. 로고 */}
      <TextLogo/>

      <form>
        <Input placeholder="Id" name="id" value={userData.id} onChange={onChange}/*  onKeyPress={keyPress} */ />
        <Input placeholder="PassWord" name="password" value={userData.password} onChange={onChange}/*  onKeyPress={keyPress} */ />
        
        <Button value="로그인" onClick={() => loginTry()} />
      </form>
      
        <Link to="/moneyHistory" > 로그인</Link>
        <Link to="/join" > 회원가입</Link>

    </LoginSection>
  )
}

export default Login
