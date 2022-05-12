import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

const Wrapper = styled.div`
  width: 100%;
  height: 203px;
`;

const Title = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  height: 40px;
  display: flex;
  border-bottom: 1px solid #e3e3e3;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Column = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2.5px;
  padding-right: 2.5px;
`;

const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CompleteButton = styled.button`
  width: 99px;
  height: 31px;
  color: #ffffff;
  font-size: 13px;
  background: #000000;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

export default function VolunteerList() {
  return (
    <Wrapper>
      <Row>
        <Title>신청자 명단</Title>
      </Row>
      <ListWrapper>
        <InfiniteScroll>
          <Row>
            <Column style={{ width: "50%" }}></Column>
            <Column style={{ width: "15%", color: "#FF3800" }}></Column>
            <Column style={{ width: "10%" }}>
              <DeleteIcon src="/images/boardWrite/delete.png" />
            </Column>
            <Column style={{ width: "25%" }}>
              <CompleteButton>봉사완료</CompleteButton>
            </Column>
          </Row>
        </InfiniteScroll>
      </ListWrapper>
    </Wrapper>
  );
}