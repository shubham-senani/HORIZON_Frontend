import styled from "styled-components";

export const Foot = styled.div`
  bottom: 0px;
`;
export const Box = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 124.68%),
    linear-gradient(90deg, #5b0037 37.74%, #0b0371 93.02%);
  position: absolute;
  width: 100%;
  left: 0px;
  height: 354px;
  margin-top: 0px;
  position: absolute;
`;
export const Box2 = styled.div`
  position: absolute;
  width: 100%;
  height: 52px;
  left: 0px;
  bottom: 0px;

  background: linear-gradient(
    90deg,
    #000000 0%,
    rgba(178, 1, 107, 0.39) 30%,
    rgba(30, 20, 157, 0.68) 50.31%,
    rgba(178, 1, 107, 0.39) 69.06%,
    #000000 100%
  );
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20%;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 180%;
  margin-left: 20%;
`;

export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: 90%;
  margin-top: 20%;
  width: 80%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Row2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  margin-top: 12%;

  font-family: "Bujji";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  color: #ff0089;
  margin-bottom: 40px;
`;

export const Heading2 = styled.p`
  position: absolute;
  height: 15px;
  margin-top: 12px;
  font-family: "Bujji";
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 15px;
  margin-left: 30%;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #916b82;
`;
