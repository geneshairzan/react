import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "view/layout/MasterLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import LanguageSelect from "component/langSelect/index";

export default function Login() {
  const { t } = useTranslation();

  const [token, setToken] = useState(localStorage.getItem("AppToken"));
  const [feedback, setFeedback] = useState();

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("http://localhost/lv_master_dev/api/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        if (res.status == "200") {
        }
        localStorage.setItem("AppToken", res.data.token);
        console.log(localStorage.getItem("AppToken"));
      })
      .catch((error) => {
        setFeedback(error.response.data.message);
      });
  };

  return (
    <AppLayout title="login">
      <div className="language-select">
        <LanguageSelect />
      </div>
      <div className="pt-3"></div>
      <h1>{t("helloeeeeeeee")}</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-120 border_grey p-36"
      >
        <h2>Login</h2>
        <div className="pt-3">
          <p className="caption">Username</p>
          <input type="text" name="email" className="w-100" ref={register} />
        </div>
        <div className="pt-3">
          <p className="caption">Password</p>
          <input
            type="password"
            name="password"
            className="w-100"
            ref={register({ required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <p className="error">{feedback}</p>
        </div>
        <div className="pt-3">
          <button type="submit" className="w-100">
            Login
          </button>
          {localStorage.getItem("AppToken")}
        </div>
      </form>
    </AppLayout>
  );
}
