import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Logo from '../component/logo';
import Input from '../component/Input';
import Button from '../component/Button';
import UserApiService from "../service/UserApiService"

const JoinSection = styled.div`
  border:1px solid black;
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Join=()=> {
  const[userData,setUserData]= useState({
    /* 회원가입에서 받을 컬럼 */
    id:"",
    name :"",
    password:"",
  });
  
  const onChange = (e) => {
   setUserData({
     ...userData,
     [e.target.name] : e.target.value
   });
  }


  /* -------------------------------------------- */
  const joinTry = (e) => {

   // 의미없는 이벤트 방지
   alert("입력해라");
   e.preventDefault();

   let user = {
     id : userData.id,
     name : userData.name,
     password : userData.password,
   }

   UserApiService.addUser(user)
   .then( res => {
      alert(user.id + '님이 성공적으로 등록되었습니다.');
   })
   .catch(err => {
    console.log('addUser() 에러',err);
   })


  }



  return (
    <JoinSection>
      회원가입 페이지(추후 삭제)
     <Logo/>  {/*  E4. 로고 */}
      회원가입
      <form>
        <Input placeholder="Id" name="id" value={userData.id} onChange={onChange}/*  onKeyPress={keyPress} */ />
        <Input placeholder="Name" name="name" value={userData.name} onChange={onChange}/*  onKeyPress={keyPress} */ />
        <Input placeholder="PassWord" name="password" value={userData.password} onChange={onChange}/*  onKeyPress={keyPress} */ />
        
        <Button value="회원가입" onClick={() => joinTry()} />
      </form>
      <Link to="/">로그인 페이지로 이동</Link>
    </JoinSection>
    
  )
}

export default Join
