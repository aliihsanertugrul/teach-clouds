"use client";
import { useFormState } from "react-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import { TfiEmail, TfiEnvelope, TfiTag, TfiUser } from "react-icons/tfi";
import "./contact-form.scss";
import { createMessageAction } from "@/actions/contact-actions";

const ContactForm = () => {
  const initialState = { success: true, message: "", errors: {} };
  const [state, dispatch] = useFormState(createMessageAction, initialState);

  return (
    <form className="contact-form" action={dispatch} noValidate>
      <h2>Send Me Message</h2>

      <div className="row">
        <div className="col-lg-6">
          <div
            className={`input-group mb-3 ${
              state.errors?.name ? "is-invalid" : ""
            }`}
          >
            <span className="input-group-text" id="basic-addon1">
              <TfiUser />
            </span>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your name"
              />
              <label htmlFor="name">Your name</label>
            </div>
          </div>
          <div class="invalid-feedback">{state.errors?.name}</div>
        </div>
        <div className="col-lg-6">
          <div
            className={`input-group mb-3 ${
              state.errors?.email ? "is-invalid" : ""
            }`}
          >
            <span className="input-group-text" id="basic-addon1">
              <TfiEmail />
            </span>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email address"
              />
              <label htmlFor="email">Email address</label>
            </div>
          </div>
          <div class="invalid-feedback">{state.errors?.email}</div>
        </div>
        <div className="col-12">
          <div
            className={`input-group mb-3 ${
              state.errors?.subject ? "is-invalid" : ""
            }`}
          >
            <span className="input-group-text" id="basic-addon1">
              <TfiTag />
            </span>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div class="invalid-feedback">{state.errors?.subject}</div>
        </div>
        <div className="col-12">
          <div
            className={`input-group mb-3 ${
              state.errors?.message ? "is-invalid" : ""
            }`}
          >
            <span className="input-group-text" id="basic-addon1">
              <TfiEnvelope />
            </span>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="message"
                name="message"
                style={{ height: "100px" }}
              ></textarea>

              <label htmlFor="message">Leave a message here</label>
            </div>
          </div>
          <div class="invalid-feedback">{state.errors?.message}</div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        <FaRegPaperPlane /> Send
      </button>
    </form>
  );
};

export default ContactForm;
