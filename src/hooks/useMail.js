export default function useMail() {
  let handleMail = () => {
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    if (subject.value === "" || message.value === "") {
      if (subject.value === "") subject.classList.add("error");
      if (message.value === "") message.classList.add("error");
    } else {
      subject.classList.remove("error");
      message.classList.remove("error");
      window.location.href = `mailto:tomashojnadel@gmail.com?subject=${subject.value}&body=${message.value}`;
    }
  };

  let handleBlur = (e) => {
    if (e.target.value === "") e.target.classList.add("error");
    else e.target.classList.remove("error");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    handleMail();
  };

  let handleChange = (e) => {
    e.target.classList.remove("error");
  };

  return { handleMail, handleBlur, handleSubmit, handleChange };
}
