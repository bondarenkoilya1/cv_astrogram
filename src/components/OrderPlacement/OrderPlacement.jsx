import {
  OrderCardRecipientContainerStyled,
  OrderCardRecipientHeaderStyled,
  OrderCardRecipientHeaderTitleStyled,
  OrderCardRecipientListStyled,
  OrderPlacementStyled,
  OrderPlacementTitleStyled,
  TextWithIconStyled
} from "./styled";

import { ReactComponent as CalendarIcon } from "../../assets/images/calendar.svg";
import { ReactComponent as ClockIcon } from "../../assets/images/clock.svg";
import { ReactComponent as MapIcon } from "../../assets/images/map.svg";
import { ReactComponent as UserIcon } from "../../assets/images/user.svg";
import { Button, OrderCard, TextWithIcon } from "../ui";

const OrderCardRecipientHeader = () => {
  return (
    <OrderCardRecipientHeaderStyled>
      <OrderCardRecipientHeaderTitleStyled>Екатерина</OrderCardRecipientHeaderTitleStyled>
      <TextWithIcon icon={<UserIcon />} fontWeight={700}>
        Жен.
      </TextWithIcon>
    </OrderCardRecipientHeaderStyled>
  );
};

const array = [
  { icon: <CalendarIcon />, text: "15 октября 1997" },
  { icon: <ClockIcon />, text: "Время не известно" },
  { icon: <MapIcon />, text: "Россия, Свердловская область, Екатеринбург" }
];

export const OrderPlacement = () => {
  return (
    <OrderPlacementStyled>
      <OrderPlacementTitleStyled>Оформление гороскопа</OrderPlacementTitleStyled>
      <OrderCard title="Получатель" headerContent={<OrderCardRecipientHeader />}>
        <OrderCardRecipientContainerStyled>
          <OrderCardRecipientListStyled>
            {array.map(({ icon, text }) => (
              <TextWithIconStyled icon={icon} key={crypto.randomUUID()}>
                {text}
              </TextWithIconStyled>
            ))}
          </OrderCardRecipientListStyled>
          <Button>Редактировать</Button>
        </OrderCardRecipientContainerStyled>
      </OrderCard>
    </OrderPlacementStyled>
  );
};
