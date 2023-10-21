import React from "react";
import {Card} from "@nextui-org/react";
import PlayerAnimation from "../player";

export default function CardBox({link}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none max-w-xs items-center justify-center h-56 max-h-60"
    >
      <PlayerAnimation link={link}/>
      
    </Card>
  );
}
