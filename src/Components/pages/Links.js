import React, { Component } from "react";
import LinkItem from "./LinkItem";


class Links extends Component {
  state = {
    links: [
      {
        id: "1",
        name: "Isuru Bandaranayake",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/38803419?s=400&u=524619c0cc4c7915fc487b8d67fd579e6f460979&v=4",
        fb_url: "https://www.facebook.com/isuruakalanka.bandaranayake",
        lnkd_url: "https://lk.linkedin.com/in/isuru-bandaranayake-57463217b",
        info:['Studied at Maliyadeva College','3rd Year Undergraduate at UCSC','bandaranayake11@gmail.com'],
      },
      {
        id: "2",
        name: "Pasan Jayawickrama",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/15853418?s=400&v=4",
        fb_url: "https://www.facebook.com/pasangbj",
        lnkd_url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwiB_unRu_rkAhWIF3IKHVIABY4QFjAAegQIABAB&url=https%3A%2F%2Flk.linkedin.com%2Fin%2Fpasanjayawickrama&usg=AOvVaw1GlbfmKOfSR-zfGo9jUXqR",
        info:['Studied at Mayurapada College','3rd Year Undergraduate at UCSC','bhadrajeepjaya@gmail.com'],
      },
      {
        id: "3",
        name: "Hasitha Amarathunga",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/25411156?s=400&v=4",
        fb_url: "https://www.facebook.com/hasee.hasee.73",
        lnkd_url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwiF_tHRuvrkAhWLTX0KHdKwBvAQFjABegQIAhAB&url=https%3A%2F%2Flk.linkedin.com%2Fin%2Fhasee-amarathunga&usg=AOvVaw39w_ksH-rKnAodAkjskl42",
        info:['Studied at Ambilipitiya College','3rd Year Undergraduate at UCSC','haseeamarathunga@gmail.com'],
      }
    ]
  };
  render() {
    return (
      <div style={linkStyle}>
        {this.state.links.map(link => (
          <LinkItem  key={link.id} link={link} />
        ))}
      </div>
    );
  }
}

const linkStyle= {
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'1rem'
}

export default Links;
