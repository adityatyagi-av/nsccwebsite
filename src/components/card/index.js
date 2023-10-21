import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import PlayerAnimation from "../player";

export default function CardBox({link}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none max-w-xs max-h-60"
    >
      <PlayerAnimation link={link}/>
      
    </Card>
  );
}
