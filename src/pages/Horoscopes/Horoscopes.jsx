import { ContainerStyled } from "../../styled";

import { AddDiscount, ProductCard } from "../../components";

export const Horoscopes = () => {
  return (
    <ContainerStyled>
      <div style={{ margin: "0 auto", maxWidth: 750 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          <ProductCard type="main" subtitle="Блок с разбором" title="Любовный темперамент" />
          <ProductCard
            type="additional"
            subtitle="Раздел гороскопа"
            title="Баланс мужского и женского начала"
          />
          <ProductCard
            type="gift"
            subtitle="Раздел гороскопа"
            title="Как встретить достойную пару"
          />
        </div>
        <AddDiscount discount={25} currentPrice={563} oldPrice={750} />
      </div>
    </ContainerStyled>
  );
};
