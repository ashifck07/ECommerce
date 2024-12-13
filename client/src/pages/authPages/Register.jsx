import Form from "@/components/common/Form";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/authSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast"


const initialState = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {toast} = useToast()

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    dispatch(registerUser(formData)).then((data)=>{
      if(data?.payload?.success) {
        toast({
          title: "Registration Successful",
        })
        navigate('/auth/login')
      }
      console.log(data,"cheked in register on sumite by using the api");
      
    })
    console.log(formData, "checked in register");
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            to="/auth/login"
            className="font-medium ml-2 text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      <Form
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
