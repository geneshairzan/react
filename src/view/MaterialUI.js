import React, { useState, useEffect } from "react";
import AppLayout from "view/layout/FullLayout";
import DemoMTUI from "component/materialUi";
import { Steps } from "component/react-step-flow";

export default function App() {
  return (
    <AppLayout title="home">
      <Steps setActive={1}>
        <div>
          <h1>this is title</h1>
          <p>
            this is shor paragraf. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sit dolorem accusamus nostrum est dolorum maiores
            similique, debitis qui quae facilis ex velit repudiandae tempore
            facere eaque? Tempore ab accusamus optio.
          </p>
        </div>
        <div>
          <h1>this is title</h1>
          <p>
            this is shor paragraf. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sit dolorem accusamus nostrum est dolorum maiores
            similique, debitis qui quae facilis ex velit repudiandae tempore
            facere eaque? Tempore ab accusamus optio.
          </p>
        </div>
        <div>
          <h1>this is title</h1>
          <p>
            this is shor paragraf. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sit dolorem accusamus nostrum est dolorum maiores
            similique, debitis qui quae facilis ex velit repudiandae tempore
            facere eaque? Tempore ab accusamus optio.
          </p>
        </div>
      </Steps>
    </AppLayout>
  );
}
