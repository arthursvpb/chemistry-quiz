import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';

// Styled Components
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// React
// function Title(props) { // propcidades / propriedades
//   return <h1>{props.children}</h1>;
// }

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  console.log('Retorno do useState: ', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head><title>Hello</title></Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Harry Potter</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();

              router.push(`/quiz?name=${name}`);

              // Router manda para a próxima paǵina
            }}
            >
              <input
                onChange={(event) => {
                  console.log(event.target.value);
                  // State
                  // name = event.target.value;
                  setName(event.target.value);
                }}
                placeholder="Seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                {/* eslint-disable-next-line no-trailing-spaces */}
                Jogar  
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Draco dormiens nunquam titillandus</h1>
            <p>Draco dormiens nunquam titillandus</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/arthursvpb/next-quiz" />
    </QuizBackground>
  );
}
