import { ContainerStyled } from "../../styled";

import { AddDiscount, HoroscopeComposition, TextField } from "../../components";
import { horoscopeCompositionAdditionalList, horoscopeCompositionMainList } from "../../data/index";

export const Horoscopes = () => {
  return (
    <ContainerStyled>
      <div style={{ margin: "0 auto", maxWidth: 750 }}>
        <TextField id="some-id" label="Почта" placeholder="Ваша почта" />
        <HoroscopeComposition array={horoscopeCompositionMainList} title="Состав гороскопа" />
        <HoroscopeComposition
          array={horoscopeCompositionAdditionalList}
          title="Дополнительно"
          style={{ marginTop: "60px" }}
        />
        <AddDiscount discount={25} currentPrice={563} oldPrice={750} />
      </div>
    </ContainerStyled>
  );
};
