function CvBtn() {
  const download = () => {
    const sharedLink =
      "https://drive.google.com/file/d/1BM0t1tXlVuxc-yeFBzG0EWjAQ5vB4XKC/view?usp=drive_link";
    window.open(sharedLink, "_blank");
  };
  return (
    <>
      <button onClick={download} className="bg-jade-600 p-5 rounded-3xl flex gap-1 font-semibold items-center opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
          />
        </svg>
        Currículo
      </button>
    </>
  );
}

export { CvBtn };
