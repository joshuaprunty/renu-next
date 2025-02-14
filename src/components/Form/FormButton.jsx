
export default function FormButton({ key, school }) {
  return (
    <button
      key={key}
      className="btn btn-outline-secondary d-flex align-items-center py-3"
    >
      <div
        className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] inline-block ms-4 ${
          selectedSchool === key + 1 ? "border-4 border-[#443161]" : ""
        }`}
      ></div>
      <span className="form-option-text ms-lg-5 ms-3 fs-5">{school}</span>
    </button>
  );
}