import styled from '@emotion/styled';

export const Subtitle = styled.h2`
  display: block;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 3px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 30px;
  color: #19687e;
`;

export const GoodReviews = styled.p`
  font-size: 18px;
  line-height: 1.16;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 10px;
  color: #19687e;
`;

export const NeutralReviews = styled(GoodReviews)``;
export const BadReviews = styled(GoodReviews)``;
export const TotalReviews = styled(GoodReviews)``;
export const PositiveFeedback = styled(GoodReviews)`
  margin-bottom: 0;
`;

export const Notification = styled(PositiveFeedback)``;
