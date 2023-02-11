export default function List ({ children }) {
    const list = [{
      img: "https://media.istockphoto.com/id/1128925057/fr/photo/taille-du-corps-pleine-longueur-découvre-delle-elle-assez-attrayante-joyeuse-joyeuse.jpg?s=612x612&w=0&k=20&c=bHzjqWnBWitx_hb9mZAm8Cui0k3ep5O0L8PYQ_JiCNg=",
      title: "Card title",
      descr: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      linkText: "Go somewhere",
      link: "https://getbootstrap.com/docs/4.3/components/card/"
    },
    {
      title: "Card title",
      descr: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      linkText: "Go somewhere",
      link: "https://getbootstrap.com/docs/4.3/components/card/"
    }
    ];
  
    return <div>{list.map((item) => children(item))}</div>
  }