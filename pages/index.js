import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground'


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`


export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
          <Widget.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>{db.title}</h1>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl= "https://github.com/jonny4lves/quiz-nfe"/>
    </QuizBackground>
  )
}
