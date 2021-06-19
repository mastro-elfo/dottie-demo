// import { useSelector } from "react-redux";

import { DottieList } from "../components/";

export default function DottieContent({ user }) {
  const list = [
    {
      id: 10,
      datetime: +new Date(),
      title: "Avanzamento progetto",
      note: "Tutto procede a meraviglia",
      author: {
        name: "Francesco",
        surname: "Michienzi",
      },
    },
    {
      id: 1,
      datetime: +new Date() - 85000000,
      title: "Inizio progetto",
      note: "Nome in codice: Dottie",
      author: {
        name: "Francesco",
        surname: "Michienzi",
      },
    },
  ];
  return <DottieList list={list} />;
}
