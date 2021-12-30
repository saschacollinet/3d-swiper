import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore, { EffectCoverflow } from "swiper";

SwiperCore.use([EffectCoverflow]);

export default function Swiper3D() {
  return (
    <Section>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <Front>
            <HeadingFree>Free</HeadingFree>
            <Price>€0</Price>
            <ListFree>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✘ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✘ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✘ </i>
                <span>Pricing Card Item</span>
              </li>
            </ListFree>
            <FreeBtn>Choose Plan</FreeBtn>
          </Front>
          <Back>
            <a href="">Order Now</a>
          </Back>
        </SwiperSlide>
        <SwiperSlide>
          <Front>
            <HeadingBasic>Basic</HeadingBasic>
            <Price>€199</Price>
            <ListBasic>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✘ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✘ </i>
                <span>Pricing Card Item</span>
              </li>
            </ListBasic>
            <BasicBtn>Choose Plan</BasicBtn>
          </Front>
          <Back>
            <a href="">Order Now</a>
          </Back>
        </SwiperSlide>
        <SwiperSlide>
          <Front>
            <HeadingStandard>Standard</HeadingStandard>
            <Price>€330</Price>
            <ListStandard>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✘ </i>
                <span>Pricing Card Item</span>
              </li>
            </ListStandard>
            <StandardBtn>Choose Plan</StandardBtn>
          </Front>
          <Back>
            <a href="">Order Now</a>
          </Back>
        </SwiperSlide>
        <SwiperSlide>
          <Front>
            <HeadingPremium>Premium</HeadingPremium>
            <Price>€440</Price>
            <ListPremium>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
              <li>
                <i>✔ </i>
                <span>Pricing Card Item</span>
              </li>
            </ListPremium>
            <PremiumBtn>Choose Plan</PremiumBtn>
          </Front>
          <Back>
            <a href="">Order Now</a>
          </Back>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #03070e;
  display: flex;
  align-items: center;
  padding-left: 10rem;
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  backface-visibility: hidden;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: white;
  width: 26rem;
  display: flex;
  height: 5rem;
  align-items: center;
  padding-left: 2rem;
  border-radius: 1rem 1rem 0 0;
`;

const HeadingFree = styled(Heading)`
  background-color: #0da5d3;
`;

const HeadingBasic = styled(Heading)`
  background-color: #bdba0e;
`;

const HeadingStandard = styled(Heading)`
  background-color: #e23b3b;
`;

const HeadingPremium = styled(Heading)`
  background-color: #3be286;
`;

const Price = styled.h3`
  font-size: 7rem;
  font-weight: 300;
  color: white;
`;

const List = styled.ul`
  & li {
    margin-bottom: 0.5em;
  }
  & i {
    font-size: 1.8rem;
    width: 3rem;
  }
  & span {
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }
`;

const ListFree = styled(List)`
  color: #0da5d3;
`;

const ListBasic = styled(List)`
  color: #bdba0e;
`;

const ListStandard = styled(List)`
  color: #e23b3b;
`;

const ListPremium = styled(List)`
  color: #3be286;
`;

const CardBtn = styled.button`
  width: 18rem;
  height: 5rem;
  margin-bottom: 3rem;
  border-radius: 3rem;
  border: none;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: white;
  text-shadow: 0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const FreeBtn = styled(CardBtn)`
  background-color: #0da5d3;
`;

const BasicBtn = styled(CardBtn)`
  background-color: #bdba0e;
`;

const StandardBtn = styled(CardBtn)`
  background-color: #e23b3b;
`;

const PremiumBtn = styled(CardBtn)`
  background-color: #3be286;
`;

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  border-radius: 1rem;
  backface-visibility: hidden;

  & a {
    font-size: 2.5rem;
    color: white;
  }
`;
