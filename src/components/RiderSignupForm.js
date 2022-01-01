import React from "react";
import Layout from "./layout/Layout";
import { useForm } from "react-hook-form";

export default function RiderSignupForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Layout>
            <h4 className="text-center">Please Fill up the form</h4>
            <div className="container mt-4">
                <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div class="col-md-6">
                        <label class="form-label">Full Name</label>
                        <input
                            type="name"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Your Full Name"
                            {...register("name")}
                        />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            {...register("email")}
                            placeholder="Your email address"
                        />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            {...register("address")}
                            class="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                        />
                    </div>

                    <div class="col-md-3">
                        <label for="inputCity" class="form-label">
                            age
                        </label>
                        <input
                            type="text"
                            {...register("age")}
                            className="form-control"
                            id="inputCity"
                        />
                    </div>
                    <div className="col-md-3">
                        <label for="inputState" className="form-label">
                            phone
                        </label>
                        <input
                            type="text"
                            {...register("phone")}
                            className="form-control"
                            id="inputCity"
                        />
                    </div>
                    <div className="col-md-3">
                        <label for="inputZip" className="form-label">
                            area
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("area")}
                        />
                    </div>
                    <div className="col-md-3">
                        <label for="inputZip" className="form-label">
                            Vehical Type
                        </label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("vehicaltype")}
                        >
                            <option>Open this select menu</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            className="form-control"
                            id="inputEmail4"
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">confirm password</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register("confirmPassword")}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Car name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("vehicalName")}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Model No</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("modelNo")}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Name Palate No</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("palateNo")}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="formFile" className="form-label">
                            select Driving licence
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            {...register("DlicencePic")}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="formFile" className="form-label">
                            Nid Picture
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            {...register("nidPic")}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="formFile" className="form-label">
                            Profile picture
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            {...register("profilePic")}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
