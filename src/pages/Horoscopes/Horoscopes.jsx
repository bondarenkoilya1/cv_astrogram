import React from "react";

import { ContainerStyled } from "../../styled";

import { AddDiscount, HoroscopeComposition } from "../../components";
import { horoscopeCompositionAdditionalList, horoscopeCompositionMainList } from "../../data";

export const Horoscopes = () => {
  return (
    <ContainerStyled>
      <div style={{ margin: "0 auto", maxWidth: 750 }}>
        <HoroscopeComposition array={horoscopeCompositionMainList} title="Состав гороскопа" />
        <HoroscopeComposition
          array={horoscopeCompositionAdditionalList}
          title="Дополнительно"
          style={{ marginTop: "60px" }}
        />
        <AddDiscount
          discount={25}
          currentPrice={563}
          oldPrice={750}
          style={{ marginTop: "40px" }}
        />
      </div>
    </ContainerStyled>
  );
};
