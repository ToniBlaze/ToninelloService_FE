import { Zap, Wrench, Hammer, Settings, Paintbrush } from "lucide-react";
import elettricista from "../assets/images/elettricista.jpg";
import idraulico from "../assets/images/idraulico.jpg";
import muratore from "../assets/images/muratore.jpg";
import montatoreMobili from "../assets/images/montatore-mobili.jpg";
import meccanico from "../assets/images/meccanico.jpg";
import imbianchino from "../assets/images/imbianchino.jpg";

export const services = [
  {
    id: "elettricista",
    title: "Servizi Elettrici",
    icon: <Zap className="w-8 h-8" />,
    description:
      "Impianti elettrici, riparazioni, installazioni sicure e a norma",
    image: elettricista,
    features: ["Pronto intervento 24/7", "Certificazioni", "Installazione LED"],
  },
  {
    id: "idraulico",
    title: "Servizi Idraulici",
    icon: <Wrench className="w-8 h-8" />,
    description:
      "Riparazioni perdite, installazione sanitari, sblocco scarichi",
    image: idraulico,
    features: ["Intervento rapido", "Videoispezioni", "Riparazione caldaie"],
  },
  {
    id: "muratore",
    title: "Opere Murarie",
    icon: <Hammer className="w-8 h-8" />,
    description:
      "Ristrutturazioni, riparazioni, piccole e grandi opere murarie",
    image: muratore,
    features: [
      "Ristrutturazioni complete",
      "Cartongesso",
      "Isolamento termico",
    ],
  },
  {
    id: "montatore",
    title: "Montaggio Mobili",
    icon: <Settings className="w-8 h-8" />,
    description: "Montaggio professionale mobili IKEA e altri brand",
    image: montatoreMobili,
    features: ["Montaggio IKEA", "Cucine componibili", "Smontaggio traslochi"],
  },
  {
    id: "meccanico",
    title: "Riparazioni Meccaniche",
    icon: <Settings className="w-8 h-8" />,
    description: "Riparazioni generiche meccaniche per oggetti domestici",
    image: meccanico,
    features: ["Cambio pezzi", "Diagnosi guasti", "Manutenzione"],
  },
  {
    id: "imbianchino",
    title: "Imbianchino",
    icon: <Paintbrush className="w-8 h-8" />,
    description: "Pitture interne, esterne, decorazioni e rasature",
    image: imbianchino,
    features: [
      "Colori personalizzati",
      "Effetti decorativi",
      "Vernici lavabili",
    ],
  },
];
