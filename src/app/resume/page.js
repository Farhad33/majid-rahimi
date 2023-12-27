import Container from '@/components/Container'
import Typography from '@/components/Typography'

export const metadata = {
  title: "Majid's Resume",
  description: "Majid's Resume",
}

export default function Resume() {
  return (
    <Container column center>
      <Typography variant="h4">Majid's Resume</Typography>
    </Container>
  )
}