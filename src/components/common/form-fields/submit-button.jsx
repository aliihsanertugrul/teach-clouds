"use client"
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ title, icon = null }) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button type="submit" className="btn btn-primary mt-4" disabled={pending}>
        {pending ? (
          <div class="spinner-border spinner-border-sm text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            {icon} {title}
          </>
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
