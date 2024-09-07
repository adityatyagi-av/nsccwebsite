import React from "react";
import {Card} from "@nextui-org/react";
import Image from "next/image";


export default function CardImageBox({link}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none max-w-xs items-center justify-center h-56 max-h-60"
    >
      <img src={link} alt="DSA RESOURCES"/>
      
      
    </Card>
  );
}
