import Container from '@/components/Container'
import HomePageBox from '@/components/HomePageBox'

export const metadata = {
  title: "Majid's Portfolio",
  description: "Majid's Portfolio",
}

export default function HomePage() {
  return (
    <Container column center>
      <HomePageBox
        title='Data Structure and Algorithm'
        img='/algorithm.svg'
        link='/algorithms'
        description='This section contians a collection of Data Structures and Algorithms that I have worked on recently.'
      />
      <HomePageBox
        title='Interview Questions'
        img='/interview.svg'
        link='/interviews'
        description='Here I have a collection of interview questions for frontend as well as backend.'
      />
    </Container>
  )
}