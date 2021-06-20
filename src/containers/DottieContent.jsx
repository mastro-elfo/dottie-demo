// import { useSelector } from "react-redux";

import { DottieList } from "../components/";

export default function DottieContent({ user }) {
  const list = [
    {
      id: 15,
      datetime: +new Date(),
      title: "Drawer",
      note: "Tutte le pagine sono apribili",
      author: {
        name: "Francesco",
        surname: "Michienzi",
      },
    },
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
      datetime: +new Date(),
      title: "Inizio progetto",
      note: "Nome in codice: Dottie",
      author: {
        name: "Francesco",
        surname: "Michienzi",
      },
    },
  ].map((item, i) => ({ ...item, datetime: item.datetime - 76543210 * i }));
  return <DottieList list={list} />;
}
