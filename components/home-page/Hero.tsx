import { HeroContent, Subtitle, H1, Title, Graphic } from "./Elements"

const Hero = () => {
  return (
    <HeroContent>
      <Title>
        <H1>
          {`Blogs & Articles`}
          <Subtitle>
            {`keep up with whats going on. keep reading. there's always something
            new to learn.`}
          </Subtitle>
        </H1>
      </Title>
      <Graphic />
    </HeroContent>
  )
}

export default Hero
