import React, { useState } from "react";
import AppLayout from "view/layout/MasterLayout";
import Datas from "component/datatables";

export default function App() {
  return (
    <AppLayout title="smartfren">
      <Datas />
    </AppLayout>
  );
}
