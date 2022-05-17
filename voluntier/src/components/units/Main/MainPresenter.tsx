import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../../commons/layout/header/HeaderContainer";
import * as S from "./MainStyles";

export default function MainUI(props) {
  return (
    <S.Wrapper>
      <S.MySlider
        {...props.settings}
      >
        <S.SliderItem1 style={{ paddingTop: "5%", paddingLeft: "1%" }}>
          <Header />
          <S.SliderDisplay>
            <S.SliderText>
              <S.Text>보호소 동물친구들과 </S.Text>
              <S.Text>당신을 이어줄 특별한 공간</S.Text>
            </S.SliderText>
            <S.SliderBean></S.SliderBean>
          </S.SliderDisplay>
        </S.SliderItem1>

        <S.SliderItem2 style={{ paddingTop: "16%", paddingLeft: "60%" }}>
          <Header />
          <S.SliderDisplay>

          <S.SliderText>
            <S.Text style={{ paddingTop: "10%", marginLeft: "15%" }}>
              여러분의 소중한 후원 젤리는{" "}
            </S.Text>
            <S.Text style={{ marginLeft: "15%" }}>
              보호소 동물친구들을 위한{" "}
            </S.Text>
            <S.Text style={{ marginLeft: "15%" }}>활동에 사용됩니다</S.Text>
          </S.SliderText>
          <S.SliderBean></S.SliderBean>
          </S.SliderDisplay>
        </S.SliderItem2>

        <S.SliderItem3
          style={{
            paddingTop: "16%",
            paddingLeft: "35%",
            paddingRight: "35%",
          }}
        >
          <Header />
          <S.SliderText>
            <S.Text style={{ paddingTop: "6%", marginLeft: "65%" }}>
              {" "}
              후원하고 받은 적립금으로{" "}
            </S.Text>
            <S.Text style={{ marginLeft: "65%" }}>
              {" "}
              귀여운 굿즈를 받아가세요!
            </S.Text>
          </S.SliderText>
        </S.SliderItem3>
      </S.MySlider>

      <S.DogBiscuit>Category</S.DogBiscuit>
      <S.CategoryWrapper>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_2.png")`,
          }}
          onClick={props.moveToPage("/boards")}
        >
          <S.CategoryText>봉사조회&신청</S.CategoryText>
        </S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_1.png")`,
          }}
          onClick={props.moveToPage("/boards/new")}
        >
          <S.CategoryText>봉사모집</S.CategoryText>
        </S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_3.png")`,
          }}
          onClick={props.moveToPage("/donation")}
        >
          <S.CategoryText>후원하기</S.CategoryText>
        </S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_4.png")`,
          }}
          onClick={props.moveToPage("/products")}
        >
          <S.CategoryText>젤리샵</S.CategoryText>
        </S.Category>
      </S.CategoryWrapper>
    </S.Wrapper>
  );
}
