import React, { useState, useEffect } from "react";
import { Steps } from "component/react-step-flow";
import { Box } from "@material-ui/core";

export default function App() {
  return (
    <Box px={2} pt={5}>
      <h2 className="text-center"> ALPHA.CNC</h2>
      <p className="subtitle">
        Perpaduan mesin CNC yang dioperasikan dengan team berkualitas serta
        material yang terbaik merupakan pilihan yang sangat tepat untuk
        menyempurnakan intererior design yang anda inginkan Dengan mesin router
        CNC terbaik , material berkualitas dan tenaga ahli, kami siap membantu
        anda mewujudkan design terbaik untuk hasil yang
      </p>
      <Box height={48}></Box>
      <Steps setActive={1}>
        <>
          <h1>Design</h1>
          <p>
            Gambar design yang bisa anda pilih untuk masuk ke dalam mesin router
            CNC, dengan referensi kami maupun dengan design yang anda inginkan
          </p>
        </>
        <>
          <h1>Production</h1>
          <p>
            Didukung oleh tenaga ahli yang berpengalaman dan mesin router CNC
            terbaik, merupakan pilihan anda yang tepat untuk membantu mewujudkan
            design terbaik pilihan anda
          </p>
        </>
        <>
          <h1>Installation</h1>
          <p>
            Ketelitian dari tenaga ahli untuk melakukan pengerjaan installasi
            untuk hasil yang terbaik.
          </p>
        </>
      </Steps>
    </Box>
  );
}
