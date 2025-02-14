
export default function FormButton({ key, school }) {
  return (
    <button
      key={key}
      className="btn btn-outline-secondary d-flex align-items-center py-3"
    >
      <div
        className={`check-square ms-4 ${
          selectedSchool === key + 1 ? "check-square-selected" : ""
        }`}
      ></div>
      <span className="form-option-text ms-lg-5 ms-3 fs-5">{school}</span>
    </button>
  );
}

