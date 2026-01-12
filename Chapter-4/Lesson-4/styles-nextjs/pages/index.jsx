import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  const Button = styled.button`
    background-color: orange;
    color: white;
    &:hover {
      background-color: purple;
    }
    ${(props) => {
      console.log(props);
      if (props.primary) {
        return `background-color: yellow`;
      }
    }}
  `;

  return (
    <>
      <p className={styles.sample}>Lorem ipsum dolor sit amet.</p>
      <Button primary>Click This!</Button>
      <Button primary={false}>Add to Cart</Button>
    </>
  );
}
