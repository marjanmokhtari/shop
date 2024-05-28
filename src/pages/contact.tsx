import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

const Form = styled.form`
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  flex-direction: column;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 54px;
  border: 1px solid #e5e6f2;
  background-color: #fcfcff;
  border-radius: 8px;
  margin-bottom: 0;
  padding: 12px;
  font-size: 18px;
  transition: border-color 0.2s;
`;

const Textarea = styled.textarea`
  height: 232px;
  border: 1px solid #e5e6f2;
  background-color: #fcfcff;
  border-radius: 8px;
  margin-bottom: 0;
  padding: 12px;
  font-size: 18px;
  transition: border-color 0.2s;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const ButtonMedium = styled.a`
  background-color: #406bd0;
  color: #f7f8ff;
  text-align: center;
  border-radius: 8px;
  padding: 18px;
  font-weight: 600;
  line-height: 100%;
  transition: background-color 0.2s, transform 0.2s, color 0.2s;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  width: 166px;
  margin-top: 15px;
`;

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  description: string;
  subject: string;
}

const Contact: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    description: "",
    subject: "",
  });

  const postUserInfo = () => {
    axios.post(
      "https://66533415813d78e6d6d78b84.mockapi.io/user-details",
      userInfo
    );
  };

  return (
    <Wrapper>
      <h1>Contact page</h1>
      <Form>
        <Wrapper2>
          <Label htmlFor="name">name:</Label>
          <Input
            id="name"
            type="text"
            value={userInfo.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({ ...userInfo, name: e.target.value })
            }
          />
        </Wrapper2>
        <Wrapper2>
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            value={userInfo.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
        </Wrapper2>
        <Wrapper2>
          <Label htmlFor="phone">Phone Number:</Label>
          <Input
            id="phone"
            type="text"
            value={userInfo.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
          />
        </Wrapper2>
        <Wrapper2>
          <Label htmlFor="subject">Subject:</Label>
          <Input
            id="subject"
            type="text"
            value={userInfo.subject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({ ...userInfo, subject: e.target.value })
            }
          />
        </Wrapper2>
        <Wrapper2>
          <Label htmlFor="message">Message:</Label>
          <Textarea
            id="message"
            name="Message"
            data-name="field"
            placeholder="Your Message"
            value={userInfo.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setUserInfo({ ...userInfo, description: e.target.value })
            }
          />
        </Wrapper2>
      </Form>
      <ButtonMedium type="submit" onClick={postUserInfo}>
        Send Message
      </ButtonMedium>
    </Wrapper>
  );
};

export default Contact;
